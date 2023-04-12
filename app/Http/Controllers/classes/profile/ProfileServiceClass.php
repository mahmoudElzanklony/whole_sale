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
use App\Models\listings_notes;
use App\Models\quotation_orders;
use App\Models\quotations;
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
                    'اضغط هنا', $user->email
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
                'اضغط هنا', $user->email
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

        // create new quotation bill
        $qutation_bill = quotation_orders::query()->create([
           'user_id'=>auth()->id() ,
           'is_completed'=>0,
           'tax'=>tax_money::query()->first() != null ? tax_money::query()->first()->tax:0,
        ]);

        for($i = 0; $i < sizeof($request->validated()['brand_id']); $i++){
            $inserted_data = [];
            $inserted_data['quotation_order_id'] = $qutation_bill->id;
            $inserted_data['brand_id'] = $request->validated()['brand_id'][$i];
            $inserted_data['quantity'] = $request->validated()['quantity'][$i];
            $inserted_data['part_number'] = $request->validated()['part_number'][$i];

            quotations::query()->create($inserted_data);
        }
        $email = get_first_admin::get_admin()->email;
        if(session()->get('lang') == 'ar') {
            send_email::send('طلب تسعير جديد',
                'تم ارسال طلب تسعيرات جديد من عميل رقم '.auth()->id().' ورقم الطلب هو  '.$qutation_bill->id,
                request()->root() .'/dashboard/pricing-requests',
                'Press here', $email
            );
        }else{
            send_email::send('new request quotation',
                'there is new quotation request from user id '.auth()->id().' and request number is  '.$qutation_bill->id,
                request()->root() .'/dashboard/pricing-requests',
                'Press here', $email
            );
        }

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
            Excel::import(new QuotationImportCSV($qutation_bill),
                request()->file('file')
            );
        } catch (\Maatwebsite\Excel\Validators\ValidationException $e) {
            $failures = $e->failures();
            $qutation_bill->delete();
            return messages::error_output($failures[0]->errors());

        }
        DB::commit();
        $email = get_first_admin::get_admin()->email;
        if(session()->get('lang') == 'ar') {
            send_email::send('طلب تسعير جديد',
                'تم ارسال طلب تسعيرات جديد من عميل رقم '.auth()->id().' ورقم الطلب هو  '.$qutation_bill->id,
                request()->root() .'/dashboard/pricing-requests',
                'Press here', $email
            );
        }else{
            send_email::send('new request quotation',
                'there is new quotation request from user id '.auth()->id().' and request number is  '.$qutation_bill->id,
                request()->root() .'/dashboard/pricing-requests',
                'Press here', $email
            );
        }

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
