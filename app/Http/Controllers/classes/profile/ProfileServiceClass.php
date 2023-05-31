<?php


namespace App\Http\Controllers\classes\profile;


use App\Http\Controllers\Controller;
use App\Http\Requests\noteFormRequest;
use App\Http\Requests\QuotationFormRequest;
use App\Http\Requests\usersFormRequest;
use App\Http\traits\messages;
use App\Http\traits\upload_image;
use App\Imports\countriesImportCSV;
use App\Imports\QuotationImportCSV;
use App\Models\brands;
use App\Models\listings_notes;
use App\Models\quotation_orders;
use App\Models\quotations;
use App\Models\quotations_orders_offers;
use App\Models\tax_money;
use App\Models\User;
use App\Models\user_company_info;
use App\Models\user_info;
use App\Services\get_first_admin;
use App\Services\mail\send_email;
use App\Services\notifications\create_notification;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Maatwebsite\Excel\Facades\Excel;

class ProfileServiceClass extends Controller
{
    use upload_image;
    public function update_email_image(usersFormRequest $request){
        // check if i had a persoanl image
        $email = request('email');
        // check email if changed or not
        $user = User::query()->find(auth()->id());
        if($user->email != $email){
            $user->approved = 0;
            $user->save();
            // changed
            if(session()->get('lang') == 'ar') {
                send_email::send('تأكيد الايمل الالكتروني الخاص بك',
                    'هذه رساله لتأكيد الايمل الالكتروني الخاص بك من فضلك اضغط علي الرابط بالاسفل ',
                    request()->root() . '/home?id=' . $user->id . '&serial=' . $user->password,
                    'الرجاء الضغط هنا', $user->email
                );
            }else{
                send_email::send('Email confirmation',
                    'Please click on the link below to activate email',
                    request()->root() . '/activation?id=' . $user->id . '&serial=' . $user->password,
                    'Press here', $user->email
                );
            }
            $changed_mail = trans('keywords.confirm_mail');
        }else{
            $changed_mail = '';
        }
        $phone = request('phone');
        $username = request('username');
        $data = [
            'email'=>$email,
            'phone'=>$phone,
            'vat'=>request('vat'),
            'username'=>$username,
            'country_id'=>request('country_id')
        ];
        if(request()->hasFile('profile_picture')){
            $image_name = $this->upload(request()->file('profile_picture'),'users');
            if($image_name == false){
                return messages::error_output(['profile_picture'=>[trans('errors.error_upload_image')]],response()->status(),response()->getStatusCode());
            }
            $data['image'] = $image_name;
        }
        User::query()->find(auth()->id())->update($data);

        return messages::success_output([trans('messages.updated_successfully')],['changed_mail'=>$changed_mail]);
    }

    public function send_activation(){
        $user = auth()->user();
        if(session()->get('lang') == 'ar') {
            send_email::send('تأكيد الايمل الالكتروني الخاص بك',
                'هذه رساله لتأكيد الايمل الالكتروني الخاص بك من فضلك اضغط علي الرابط بالاسفل ',
                request()->root() . '/home?id=' . $user->id . '&serial=' . $user->password,
                'الرجاء الضغط هنا', $user->email
            );
        }else{
            send_email::send('Email confirmation',
                'Please click on the link below to activate email',
                request()->root() . '/activation?id=' . $user->id . '&serial=' . $user->password,
                'Press here', $user->email
            );
        }
        return messages::success_output([trans('keywords.confirm_mail')]);

    }

    public function update_password(usersFormRequest $request){
        User::query()->find(auth()->id())->update([
           'password'=>bcrypt($request->validated()['password'])
        ]);
        return messages::success_output([trans('messages.updated_successfully')]);
    }

    public function update_personal_data(usersFormRequest $request){
        $personal = request()->except(['username','phone']);
        $user_data = request()->only(['username','phone']);
        // check if whatapp status has value
        if(request()->has('whatapp_status') && request('whatapp_status') != 'undefined'){
            $personal['whatapp_status'] = 1;
        }else{
            $personal['whatapp_status'] = 0;
        }
        // update
        User::query()->find(auth()->id())->update($user_data);
        user_info::query()->where('user_id','=',auth()->id())->first()->update($personal);
        return messages::success_output([trans('messages.updated_successfully')]);
    }

    public function update_secondary_data(usersFormRequest $request){
        $data = $request->validated();
        user_info::query()->where('user_id','=',auth()->id())->update($data);
        return messages::success_output([trans('messages.updated_successfully')]);
    }

    public function send_quotation(QuotationFormRequest $request){
        DB::beginTransaction();
        // create new quotation bill
        $qutation_bill = quotation_orders::query()->create([
           'user_id'=>auth()->id() ,
           'is_completed'=>0,
           'tax'=>tax_money::query()->first() != null ? tax_money::query()->first()->tax:0,
        ]);

        if(request()->has('request_type') && request('request_type') == 'offer'){
            // make this quotation to offer table
            quotations_orders_offers::query()->create([
                'quotation_order_id'=>$qutation_bill->id,
                'offer_id'=>request('offer_id')[0],
            ]);
        }else{
            $assoc_array = array();
            $data_to_array = $request->validated()['brand_id'];
            foreach ($data_to_array as $key => $value) {
                $new_key = $request->validated()['part_number'][$key] . $request->validated()['brand_id'][$key];
                // Presence of combination of company_code and clerk_code in the assoc_array indicates that
                // there is duplicate entry in the Excel being imported. So, abort the process and report this to user.
                if (array_key_exists($new_key, $assoc_array)) {
                    return messages::
                    error_output(["error"=>trans('errors.repeated_part_number') .
                        $request->validated()['part_number'][$key] ." ".
                        trans('errors.repeated_brand') .
                        $request->validated()['brand_id'][$key] ." ".
                        trans('errors.preview_file_and_upload_again')], 422);
                }

                $assoc_array[$new_key] = $value;
            }
        }




        for($i = 0; $i < sizeof($request->validated()['brand_id']); $i++){
            $inserted_data = [];
            $inserted_data['quotation_order_id'] = $qutation_bill->id;
            $inserted_data['brand_id'] = $request->validated()['brand_id'][$i];
            $inserted_data['quantity'] = $request->validated()['quantity'][$i];
            $inserted_data['part_number'] = $request->validated()['part_number'][$i];

            quotations::query()->create($inserted_data);
        }
        $email = get_first_admin::get_admin()->email;
            // send email to admin
            $title_admin = [
                'ar'=>['طلب تسعير جديد من مكينة جملة رقم ',$qutation_bill->id],
                'en'=>['new request quotation from Mkena wholesale ',$qutation_bill->id],
            ];
            $body_admin = [
              'ar'=>[' تم استلام طلب تسعير جديد رقم ### من   (',auth()->user()->username,'  )، للاطلاع على التفاصيل، يمكنك الدخول على حسابك عن طريق النقر على الرابط أدناه ',auth()->id(),' ورقم الطلب هو  ',$qutation_bill->id],
              'en'=>['there is new quotation request from user id ',auth()->id(),' and request number is  ',$qutation_bill->id],
            ];
            send_email::send($title_admin,
                $body_admin,
                request()->root() .'/dashboard/pricing-requests',
                'Press here', $email
            );


            // send email to customer
            $title_customer = [
                'ar'=>['طلب تسعير جديد من مكينة جملة رقم ',$qutation_bill->id],
                'en'=>['New Mkena Wholesale Query no ',$qutation_bill->id],
            ];
            $body_customer = [
                'ar'=>['نشكركم على تقديم طلب  التسعير رقم  ',$qutation_bill->id,' ، للاطلاع على التفاصيل او المتابعة او التعديل يمكنكم الدخول لحسابكم من خلال النقر علي الرابط ادناه'],
                'en'=>['Thank you for Your query no. ',$qutation_bill->id,' , to review the details, follow up, or amend, you can sign in into your Mkena Wholesale account by clicking on the below link '],
            ];
            send_email::send($title_customer,
                $body_customer,
                request()->root() .'/profile/last-quotations',
                'Press here', auth()->user()->email
            );


        // send notification to admin
        $notification_data = [
            'sender_id'=>auth()->id(),
            'receiver_id'=>get_first_admin::get_admin()->id,
            'ar_info'=> 'تم ارسال طلب تسعيرات جديد من عميل رقم '.auth()->id().' ورقم الطلب هو  '.$qutation_bill->id,
            'en_info'=>'there is new quotation request from user id '.auth()->id().' and request number is  '.$qutation_bill->id,
            'seen'=>0,
        ];
        DB::commit();
        create_notification::new_notification($notification_data);
        return messages::success_output([trans('messages.saved_successfully')]);
    }

    public function preview_request(){
        $file = request()->file('file');
        $import = new QuotationImportCSV;
        Excel::import($import, $file);
        /*$data = file($file);
        $headers = explode(',',Str::lower(trim(preg_replace('/\s\s+/', ' ', $data[0]))));
        unset($data[0]);
      //  dd($headers);
        $result = [];
        foreach($data as $item){
            $item = explode(',',trim(preg_replace('/\s\s+/', ' ', $item)));
            dd($headers,$item);
            array_push($result,array_combine($headers,$item));

        }*/
        return messages::success_output('',$import->data);
    }

    public function send_quotation_excel(){
        $file = request()->file('file');
        $exten = $file->getClientOriginalExtension();
        $file_name = time().rand(0,9999999999999). '_excel.' .$exten;
        DB::beginTransaction();
        try {
            // create new quotation bill
            $qutation_bill = quotation_orders::query()->create([
                'user_id'=>auth()->id() ,
                'is_completed'=>0,
                'tax'=>tax_money::query()->first() != null ? tax_money::query()->first()->tax:0,

            ]);
            $data = Excel::import(new QuotationImportCSV($qutation_bill),
                request()->file('file')
            );
            $data_to_array = Excel::toArray([], request()->file('file'))[0];
            unset($data_to_array[0]);
            //dd($data_to_array);
            $assoc_array = array();
            foreach ($data_to_array as $key => $value) {
                $new_key = $value[0] . $value[1];

                // Presence of combination of company_code and clerk_code in the assoc_array indicates that
                // there is duplicate entry in the Excel being imported. So, abort the process and report this to user.
                if (array_key_exists($new_key, $assoc_array)) {
                    return messages::
                    error_output(["error"=>trans('errors.repeated_part_number') .
                        $value[0] ." ".
                        trans('errors.repeated_brand') .
                        $value[1] ." ".
                        trans('errors.preview_file_and_upload_again')], 422);
                }

                $assoc_array[$new_key] = $value;
            }

            // process code now and insert
            foreach ($data_to_array as $key => $value) {
                quotations::query()->create([
                    'quotation_order_id' => $qutation_bill->id,
                    'brand_id' => brands::query()->where('ar_name', '=', $value[1])
                            ->orWhere('en_name', '=', $value[1])->first()->id ?? $value[1],
                    'part_number' => $value[0],
                    'quantity' => $value[2],
                ]);
            }


        } catch (\Maatwebsite\Excel\Validators\ValidationException $e) {
            $failures = $e->failures();
            $qutation_bill->delete();
            return messages::error_output($failures[0]->errors());

        }
        DB::commit();
        $email = get_first_admin::get_admin()->email;
        // send email to admin
        $title_admin = [
            'ar'=>['طلب تسعير جديد من مكينة جملة رقم ',$qutation_bill->id],
            'en'=>['new request quotation from Mkena wholesale ',$qutation_bill->id],
        ];
        $body_admin = [
            'ar'=>[' تم استلام طلب تسعير جديد رقم ### من   (',auth()->user()->username,'  )، للاطلاع على التفاصيل، يمكنك الدخول على حسابك عن طريق النقر على الرابط أدناه ',auth()->id(),' ورقم الطلب هو  ',$qutation_bill->id],
            'en'=>['there is new quotation request from user id ',auth()->id(),' and request number is  ',$qutation_bill->id],
        ];
        send_email::send($title_admin,
            $body_admin,
            request()->root() .'/dashboard/pricing-requests',
            'Press here', $email
        );


        // send email to customer
        $title_customer = [
            'ar'=>['طلب تسعير جديد من مكينة جملة رقم ',$qutation_bill->id],
            'en'=>['New Mkena Wholesale Query no ',$qutation_bill->id],
        ];
        $body_customer = [
            'ar'=>['نشكركم على تقديم طلب  التسعير رقم  ',$qutation_bill->id,' ، للاطلاع على التفاصيل او المتابعة او التعديل يمكنكم الدخول لحسابكم من خلال النقر علي الرابط ادناه'],
            'en'=>['Thank you for Your query no. ',$qutation_bill->id,' , to review the details, follow up, or amend, you can sign in into your Mkena Wholesale account by clicking on the below link '],
        ];
        send_email::send($title_customer,
            $body_customer,
            request()->root() .'/profile/last-quotations',
            'Press here', auth()->user()->email
        );


        // send notification to admin
        $notification_data = [
            'sender_id'=>auth()->id(),
            'receiver_id'=>get_first_admin::get_admin()->id,
            'ar_info'=> 'تم ارسال طلب تسعيرات جديد من عميل رقم '.auth()->id().' ورقم الطلب هو  '.$qutation_bill->id,
            'en_info'=>'there is new quotation request from user id '.auth()->id().' and request number is  '.$qutation_bill->id,
            'seen'=>0,
        ];

        create_notification::new_notification($notification_data);

        return messages::success_output([trans('messages.saved_successfully')]);
    }
}
