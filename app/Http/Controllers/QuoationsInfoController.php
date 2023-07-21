<?php

namespace App\Http\Controllers;

use App\Exports\items_info_export;
use App\Exports\items_info_offer_export;
use App\Exports\items_offers_export;
use App\Exports\quotations_orders_export;
use App\Http\Requests\QuotationFormRequest;
use App\Http\traits\messages;
use App\Http\traits\upload_image;
use App\Imports\AdminQuotationReplyCSV;
use App\Imports\QuotationImportCSV;
use App\Models\cancelled_quotations;
use App\Models\items_info;
use App\Models\offers;
use App\Models\offers_items_info;
use App\Models\quotation_orders;
use App\Models\quotations;
use App\Models\quotations_draft;
use App\Models\quotations_orders_terms;
use App\Models\quotations_upload_money;
use App\Models\receipt_quotations;
use App\Models\tax_money;
use App\Models\User;
use App\Models\vendors_requests;
use App\Services\get_first_admin;
use App\Services\mail\send_email;
use App\Services\notifications\create_notification;
use App\Services\quoations\quoations_services;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;

class QuoationsInfoController extends Controller
{
    //
    use messages , upload_image;
    public function get_info(){
        $data = quoations_services::get_info_data(request('quotation_id'));
        return messages::success_output('',$data);
    }

    public function quotations_info_admin(){
        $data = quoations_services::get_info_admin_data(request('quotation_id'));
        return messages::success_output('',$data);
    }

    public function cancel_request(){
        $quotation_order = quotation_orders::query()->with('user')->find(request('id'));
        if($quotation_order != null) {
            $quotation_order->update([
                'is_completed' => -1
            ]);
        }

        cancelled_quotations::query()->create([
            'quotation_id'=>request('id'),
            'cancelled_id'=>request('reason'),
        ]);

        // send email to admin
        $title_admin = [
            'ar'=>['الغاء (',$quotation_order->user->username,') الطلب رقم ', request('id')],
            'en'=>['(',$quotation_order->user->username,') query no',request('id'),'Has been cancelled'],
        ];
        $body_admin = [
            'ar'=>[' لقد تم الغاء الطلب رقم ',request('id'),' من قبل (',$quotation_order->user->username,'). للاطلاع على التفاصيل، يمكنك الدخول لحسابك عن طريق النقر على الرابط أدناه ' ],
            'en'=>['(',$quotation_order->user->username,')  canceled query no. ',request('id'),'. For further information you can sign in into your account by clicking on the below link']
        ];
        // send email to admin
        send_email::send($title_admin,
            $body_admin,
            request()->root() . '/dashboard/pricing-requests',
            'الرجاء الضغط هنا', get_first_admin::get_admin()->email
        );


        // send email to customer
        $title_customer = [
            'ar'=>['تأكيد الغاء طلبكم من مكينة جملة رقم ',request('id')],
            'en'=>['Mkena Wholesale query cancelation no',request('id')],
        ];
        $body_customer = [
            'ar'=>['هذه الرسالة لتأكيد الغائكم للطلب رقم ',request('id'),' من مكينة جملة، للتفاصيل، يمكنكم الدخول لحسابكم عن طريق النقر على الرابط أدناه '],
            'en'=>['This is a confirmation of canceling your query no. ',request('id'),' with Mkena Wholesale. For further information, you can sign in into your account by clicking on the below link']
        ];
        send_email::send($title_customer,
            $body_customer,
            request()->root() . '/profile/last-quotations',
            'الرجاء الضغط هنا', $quotation_order->user->email
        );

        return messages::success_output([trans('messages.cancelled_successfully')]);

    }

    public function save_quotation_at_draft(QuotationFormRequest $request){
        $quotation = quotations::query()->with('last_draft')->find(request('quotation_id'));
        if($quotation->last_draft != null){
            $qan_check = $quotation->last_draft->quantity;
        }else{
            $qan_check = $quotation->quantity;
        }
        $validated = $request->validated();
        $validated['quotation_id'] = request('quotation_id');
        if($quotation->brand_id != $validated['brand_id'] ||
            $quotation->part_number != $validated['part_number'] ||
            $qan_check != $validated['quantity']){
            // check if this item exists
            /*$quotation_check = quotations_draft::query()
                ->whereRaw('quotation_id = '.request('quotation_id').' AND brand_id = '.$quotation->brand_id.' AND part_number = ');
            */// make a new draft
            quotations_draft::query()->create($validated);
            $admin = User::query()->with('role',function($e){
                $e->where('name','=','admin');
            })->first();
            // send new notification to admin
            create_notification::new_notification([
                'sender_id'=>auth()->id(),
                'receiver_id'=>$admin->id,
                'ar_info'=>'تم تعديل الطلب الذي رقمه '.$quotation->quotation_order_id.' تعديل رقم القطعه : '.$quotation->part_number,
                'en_info'=>'order request has been updated '.$quotation->quotation_order_id.' with part number : '.$quotation->part_number,
                'tu_info'=>'',
                'seen'=>0
            ]);
        }
        $data = quoations_services::get_quotation_draft(request('quotation_id'));
        return messages::success_output(trans('messages.saved_successfully'),$data);
    }

    public function upload_excel_admin(){
        if(request()->has('terms')){
            quotations_orders_terms::query()->updateOrCreate([
                'quotation_order_id'=>request('quotation_order_id'),
                'user_id'=>auth()->id(),
                'status'=>session()->get('type') == 'seller' ? 'seller':'admin',
            ],[
                'terms'=>request('terms'),
            ]);
        }
        if(request()->has('excel_file')){
            $file = request()->file('excel_file');
            $exten = $file->getClientOriginalExtension();
            $file_name = time().rand(0,9999999999999). '_excel.' .$exten;

            try {
                if(session()->get('type') == 'seller') {
                    items_info::query()
                        ->where('user_id','=',auth()->id())
                        ->where('quotation_order_id', request('quotation_order_id'))->delete();
                }else{
                    // admin or supervisor
                    items_info::query()
                        ->whereHas('user',function ($e){
                            $e->whereHas('role',function ($q){
                                $q->where('name','!=','seller');
                            });
                        })
                        ->where('quotation_order_id', request('quotation_order_id'))->delete();

                    $quotations_delete = quotations::query()
                        ->where('quotation_order_id', request('quotation_order_id'))
                        ->withTrashed()
                        ->get();

                }
                try {
                    Excel::import(new AdminQuotationReplyCSV(request('quotation_order_id') ,
                        request('offer') ?? null,null,request('action') ?? null),
                        request()->file('excel_file')
                    );
                }catch (\Throwable $e){
                    return messages::error_output([$e->getMessage()]);
                }
                //dd(AdminQuotationReplyCSV::$create_status,$quotations_delete);
                if (isset($quotations_delete) && AdminQuotationReplyCSV::$create_status == true) {
                    if($quotations_delete != null) {
                        foreach ($quotations_delete as $q) {
                            $q->forceDelete();
                        }
                    }
                }




            } catch (\Maatwebsite\Excel\Validators\ValidationException $e) {
                $failures = $e->failures();
                return messages::error_output($failures[0]->errors());

            }
            $quotation_order = quotation_orders::query()->with('user')->find(request('quotation_order_id'));
            $quotation_order->is_completed = session()->get('type') == 'seller'?11:1;
            $quotation_order->save();

            $admin = get_first_admin::get_admin();
            // check type
            if(session()->get('type') == 'seller'){
                // send notification to admin
                $notification_data = [
                    'sender_id'=>auth()->id(),
                    'receiver_id'=>get_first_admin::get_admin()->id,
                    'ar_info'=>'تم الرد عليك من  قبل  المورد  في طلب رقم '.request('quotation_order_id'),
                    'en_info'=>'there is a new reply from vendor in request number '.request('quotation_order_id'),
                    'seen'=>0,
                ];
                create_notification::new_notification($notification_data);
                     // send emails
                    $title_admin = [
                        'ar'=>['رد (' , auth()->user()->username , ') على طلب تسعير رقم ' , request('quotation_order_id')],
                        'en'=>['(',auth()->user()->username,') reply on query no ',request('quotation_order_id')],
                    ];
                    $body_admin = [
                        'ar'=>['لقد قام (' . auth()->user()->username . ') بالرد على طلب التسعير رقم  ' . request('quotation_order_id') . ' ، للاطلاع على التفاصيل والعمل على العرض، يمكنك الدخول على حسابك من خلال النقر على الرابط أدناه    ',],
                        'en'=>['(',auth()->user()->username,') just replied on query no. ',request('quotation_order_id'),' . To review and take further actions, you can sign in by clicking on the below link',]
                    ];
                    // send email to admin
                    send_email::send($title_admin,
                        $body_admin,
                        request()->root() . '/dashboard/pricing-requests',
                        'الرجاء الضغط هنا', get_first_admin::get_admin()->email
                    );

                    $title_vendor = [
                        'ar'=>['تأكيد تقديم عرضكم لطلب السعر من مكينة جملة رقم ' , request('quotation_order_id')],
                        'en'=>['Mkena Wholesale  Reply confirmation for query no ' . request('quotation_order_id')],
                    ];
                    $body_vendor = [
                        'ar'=>['نشكركم للرد على طلب التسعير رقم' , request('quotation_order_id') , ' ، للاطلاع على التفاصيل والمتابعة، يمكنكم الدخول على حسابكم من خلال النقر على الرابط أدناه '],
                        'en'=>['Thank you for your reply on  query no. ',request('quotation_order_id'),' . To review and follow up, you can sign in into your account by clicking on the below link']
                    ];
                    // send email to vendor in arabic
                    send_email::send($title_vendor,
                        $body_vendor,
                        request()->root() . '/profile/pricing',
                        'الرجاء الضغط هنا', auth()->user()->email
                    );
            }else{
                create_notification::new_notification([
                    'sender_id'=>auth()->id(),
                    'receiver_id'=>session()->get('type') == 'seller'? get_first_admin::get_admin()->id: $quotation_order->user_id,
                    'ar_info'=>'تم الرد علي الطلب الذي رقمه '.$quotation_order->id,
                    'en_info'=>'request number '.$quotation_order->id.' has been replied please check this ',
                    'tu_info'=>'',
                    'seen'=>0,
                ]);

                if(session()->get('type') == 'seller'){
                    // this is seller make file
                    $title_admin = [
                        'ar'=>['رد (',auth()->user()->username,') على طلب تسعير رقم ',request('quotation_order_id')],
                        'en'=>['(',auth()->user()->username,') reply on query no',request('quotation_order_id')],
                    ];
                    $body_admin = [
                        'ar'=>[' لقد قام (',auth()->user()->username,') بالرد على طلب التسعير رقم',request('quotation_order_id'),' ، للاطلاع على التفاصيل والعمل على العرض، يمكنك الدخول على حسابك من خلال النقر على الرابط أدناه   '],
                        'en'=>['('.auth()->user()->username.') just replied on query no.'.request('quotation_order_id').'. To review and take further actions, you can click on the below link'],
                    ];

                    // send email to admin

                    send_email::send(
                        $title_admin,$body_admin,
                        request()->root() . '/dashboard/pricing-requests',
                        'اضغط هنا', $admin->email);

                    // send mail to seller
                    $title_vendor = [
                        'ar'=>['تأكيد تقديم عرضكم لطلب السعر من مكينة جملة رقم ',request('quotation_order_id')],
                        'en'=>['Mkena Wholesale  Reply confirmation for query no',request('quotation_order_id')],
                    ];
                    $body_vendor = [
                        'ar'=>['.نشكركم للرد على طلب التسعير رقم',request('quotation_order_id'),' ، للاطلاع على التفاصيل والمتابعة، يمكنكم الدخول على حسابكم من خلال النقر على الرابط أدناه'],
                        'en'=>['Thank you for your reply on  query no. ',request('quotation_order_id'),'. To review and follow up, click on the below link'],
                    ];

                    send_email::send(
                        $title_vendor,$body_vendor,
                        request()->root() . '/profile/last-quotations',
                        'اضغط هنا', auth()->user()->email);

                }else{
                    // admin upload this file
                    $title_admin = [
                        'ar'=>['رد مكينة جملة على طلب رقم ',request('quotation_order_id')],
                        'en'=>['Mkena\'s reply on query no.',request('quotation_order_id')],
                    ];
                    $body_admin = [
                        'ar'=>['  لقد تم الرد من قبل الادارة على طلب التسعير رقم '.request('quotation_order_id').'، للاطلاع على التفاصيل يمكنك الدخول على حسابك من خلال النقر على الرابط أدناه'],
                        'en'=>['Management reply on query no. '.request('quotation_order_id').' just been submitted. To review and further details you can sign in into your account by clicking on the below link'],
                    ];

                    // send email to admin

                    send_email::send(
                        $title_admin,$body_admin,
                        request()->root() . '/dashboard/pricing-requests',
                        'اضغط هنا', $admin->email);

                    // send email to cutomer
                    $title_customer = [
                        'ar'=>['رد مكينة جملة على طلب التسعير الخاص بكم رقم',request('quotation_order_id')],
                        'en'=>['Mkena Wholesale reply on your query no.',request('quotation_order_id')],
                    ];
                    $body_customer = [
                        'ar'=>['  لقد تم الرد على طلب التسعير الخاص بكم، رقم ',request('quotation_order_id'),'، من مكينة جملة ، للاطلاع على التفاصيل، طباعة الفاتورة المبدئية ، والموافقة على العرض، يمكنكم الدخول على حسابكم الخاص بمكينة جملة عن طريق الضغط على الرابط أدناه'],
                        'en'=>['Mkena Wholesale management just replied on your query no. ',request('quotation_order_id'),'. To review the offer, print a proforma invoice and approve the order, you can sig in into your account by clicking on the below link'],
                    ];
                    send_email::send(
                        $title_customer,$body_customer,
                        request()->root() . '/profile/last-quotations',
                        'اضغط هنا', User::query()->find($quotation_order->user_id)->email);

                }

            }


            // send notification
            // ['sender_id','receiver_id','ar_info','en_info','tu_info','seen']
            return messages::success_output(trans('messages.saved_successfully'),$quotation_order);

        }else{
            $quotation_order = quotation_orders::query()->with('user')
                ->with('terms_data')
                ->find(request('quotation_order_id'));
            return messages::success_output(trans('messages.saved_successfully'),$quotation_order);
        }



    }

    public function send_agreement_to_admin(){
        $admin = get_first_admin::get_admin();
        if(request()->hasFile('receipt')){
            if(request()->file('receipt')->getClientOriginalExtension() == 'pdf'){
                $name = $this->uploadPdf(request()->file('receipt'),'receipts');
            }else{
                $name = $this->upload(request()->file('receipt'),'receipts');
            }

            if($name == false){
                return messages::error_output([
                    'file_upload'=>trans('errors.file_invalid_image_pdf')
                ]);
            }
            receipt_quotations::query()->updateOrCreate([
                'quotation_id'=>request('id'),
            ],[
                'image'=>$name
            ]);

            $quotation_order = quotation_orders::query()->with('user')->find(request('id'));

            // send email to admin

            $title_admin = [
                'ar'=>['(',auth()->user()->username,') أرفقوا  وصل الدفع لطلبهم رقم',request('id')],
                'en'=>['(',auth()->user()->username,') uploaded payment receipt for order no',request('id')],
            ];
            $body_admin = [
                'ar'=>[' لقد أرفق (',auth()->user()->username,') نسخة ايصال الدفع لطلبهم رقم ',request('id'),'، للاطلاع و متابعة الاجراءات، يمكنك الدخول لحسابك عن طريق النقر على الرابط أدناه '],
                'en'=>['(',auth()->user()->username,') just uploaded payment receipt covering order no. ',request('id'),'. To review and take further action, you can sign in into your account by clicking on the below link'],
            ];
            send_email::send($title_admin,
                $body_admin,
                request()->root() .'/dashboard/pricing-requests',
                'Press here', $admin->email
            );

            // send email to customer

            $title_customer = [
                'ar'=>['تأكيد ارفاق ايصال الدفع لطلبكم من مكينة جملة رقم ',request('id')],
                'en'=>['Mkena Wholesale payment receipt confirmation for order no',request('id')],
            ];
            $body_customer = [
                'ar'=>['  شكرا على ارفاقكم لوصل الدفع الخاص بطلبكم رقم ',request('id'),' من مكينة جملة، للاطلاع على التفاصيل والمتابعة، يمكنكم الدخول لحسابكم عن طريق النقر على الرابط أدناه '],
                'en'=>['Thank you for uploading payment receipt to your Mkena Wholesale order no.',request('id'),' . To review and follow up, you can sign in into your account by clicking on the below link '],
            ];
            send_email::send($title_customer,
                $body_customer,
                request()->root() .'/profile/last-quotations',
                'Press here', $quotation_order->user->email
            );




            // send notification to admin
            $notification_data = [
                'sender_id'=>auth()->id(),
                'receiver_id'=>get_first_admin::get_admin()->id,
                'ar_info'=> 'تم تأكيد الطلب رقم '.request('id').'من قبل العميل مع رفع صورة الايصال ',
                'en_info'=> 'order number '.request('id').' has been confirmed from client with uploading bill photo',
                'seen'=>0,
            ];

        }else{

            // send email to admin
            $title_admin = [
                'ar'=>['تأكيد (',auth()->user()->username,') لطلبهم رقم ',request('id')],
                'en'=>['(',auth()->user()->username,') confirms order no. ',request('id')],
            ];
            $body_admin = [
                'ar'=>[' لقد قام (',auth()->user()->username,') بتأكيد طلبه رقم ',request('id'),'، للاطلاع على التفاصيل، يمكنك الدخول لحسابك عن طريق النقر على الرابط أدناه'],
                'en'=>['(',auth()->user()->username,')  just confirmed order no. ',request('id'),'. To review and take further actions , you can sign in into your account by clicking on the below link'],
            ];
            send_email::send($title_admin,
                $body_admin,
                request()->root() .'/dashboard/pricing-requests',
                'Press here', $admin->email
            );


            // send email to customer
            $title_customer = [
                'ar'=>['تأكيد طلبكم مع مكينة جملة رقم ',request('id')],
                'en'=>['Mkena Wholesale order confirmation no ',request('id')],
            ];
            $body_customer = [
                'ar'=>['  نشكركم على تأكيد طلبكم رقم ',request('id'),'، للاطلاع على التفاصيل، المتابعة، أو تحميل صورة عن سند الدفع، يمكنكم الدخول لحسابكم عن طريق النقر على الرابط أدناه. ملاحظة: لا يعتبر أي طلب مؤكدا مالم يتم رفع صورة عن سند الدفع المتفق عليه مع ادارة مكينة جملة'],
                'en'=>['Thank you for confirming your order no. '.request('id').' . To review,  follow up, and upload your payment receipt, you can sign in into your account by clicking on the below link.  P.S. order cannot be confirmed unless agreed-on payment receipt copy is provided to Mkena Wholesale management '],
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
                'ar_info'=> 'تم تأكيد الطلب رقم '.request('id').' من قبل العميل ',
                'en_info'=> 'order number '.request('id').' has been confirmed from client',
                'seen'=>0,
            ];

        }
        create_notification::new_notification($notification_data);
        $quotation_order = quotation_orders::query()->find(request('id'));
        if($quotation_order->is_completed < 2){
            $quotation_order->is_completed = 2;
            $quotation_order->save();
        }

        $email = get_first_admin::get_admin()->email;
        /*if(session()->get('lang') == 'ar') {
            send_email::send('تم الموافقة علي الطلب',
                'تم الموافقه علي الطلب رقم '.request('id').' يمكنك رؤيه التفاصيل من خلال لوحه التحكم ',
                request()->root() .'/dashboard/pricing-requests',
                'الرجاء الضغط هنا', $email
            );
        }else{
            send_email::send('order accepted from client',
                'order number '.request('id').' has been confirmed from client you can check from admin panel',
                request()->root() .'/dashboard/pricing-requests',
                'Press here', $email
            );
        }*/

    }

    public function change_status_of_request(){
        $quotation_order = quotation_orders::query()->with('user')->find(request('id'));
        $quotation_order->is_completed = request('is_completed');
        $quotation_order->save();
        if(session()->get('type') == 'admin'){
            create_notification::new_notification([
                'sender_id'=>auth()->id(),
                'receiver_id'=>$quotation_order->user_id,
                'ar_info'=>'تم تغيير حاله طلب رقم '.$quotation_order->id.' بنجاح ',
                'en_info'=>'request number '.$quotation_order->id.' status has been updated successfully',
                'tu_info'=>'',
                'seen'=>0

            ]);
            if($quotation_order->is_completed == 3) {
                // send email to admin
                $title_admin = [
                    'ar' => ['تم انهاء الطلب رقم ', $quotation_order->id, 'بنجاح'],
                    'en' => [$quotation_order->id, 'Has been ended successfully'],
                ];
                $body_admin = [
                    'ar' => [' لقد تم انهاء الطلب رقم ', $quotation_order->id, 'بنجاح للعميل  ', $quotation_order->user->username, '. للاطلاع على التفاصيل، يمكنك الدخول لحسابك عن طريق النقر على الرابط أدناه '],
                    'en' => ['(', $quotation_order->id, ' has been  ended successfully for client (', $quotation_order->user->username, ' ) . For further information you can sign in into your account by clicking on the below link']
                ];
                // send email to admin
                send_email::send($title_admin,
                    $body_admin,
                    request()->root() . '/dashboard/pricing-requests',
                    'الرجاء الضغط هنا', get_first_admin::get_admin()->email
                );


                // send email to customer
                $title_customer = [
                    'ar' => ['تم انهاء طلبكم بنجاح من مكينة جملة رقم ', request('id')],
                    'en' => ['Mkena Wholesale query no', request('id') . ' has been ended successfully'],
                ];
                $body_customer = [
                    'ar' => [' لقد تم انهاء الطلب رقم ', $quotation_order->id, 'بنجاح  ', '. للاطلاع على التفاصيل، يمكنك الدخول لحسابك عن طريق النقر على الرابط أدناه '],
                    'en' => ['your query no. ', $quotation_order->id, ' has been ended successfully with Mkena Wholesale. For further information, you can sign in into your account by clicking on the below link']
                ];
                send_email::send($title_customer,
                    $body_customer,
                    request()->root() . '/profile/last-quotations',
                    'الرجاء الضغط هنا', $quotation_order->user->email
                );
            }


        }
        return messages::success_output(trans('messages.saved_successfully'),$quotation_order);

    }
    public function search_statistics(){
        $data =  quoations_services::get_statics(request()->all());
        return messages::success_output('',array_values($data));
    }

    public function save_tax(){
        tax_money::query()->updateOrCreate([
            'id'=>tax_money::query()->first() != null ? tax_money::query()->first()->id:null,
        ],[
            'tax'=>request('tax')
        ]);
        return messages::success_output(trans('messages.saved_successfully'));

    }

    public function get_receipt(){
        return  receipt_quotations::query()->where('quotation_id',request('id'))->first();
    }

    public function get_money(){
        return  quotations_upload_money::query()->where('quotation_id',request('id'))->first();
    }

    public function send_file_money_to_admin(){
        if(request()->hasFile('file')){
            $file = request()->file('file');
            $name = time().rand(0,9999999999999). '_image.' . $file->getClientOriginalExtension();
            $file->move(public_path('images/' . 'money_files'), $name);
            quotations_upload_money::query()->updateOrCreate([
                'quotation_id'=>request('id'),
            ],[
                'file'=>$name
            ]);
        }

        return messages::success_output(trans('messages.saved_successfully'));
    }

    public function get_vendors_per_request(){
        $data = vendors_requests::query()
            ->with(['user:id,username'])
            /*->whereHas('items',function (){

            })*/
            ->withCount('check_user_from_vendor_at_items')
            ->where('quotation_order_id','=',request('id'))->get();

            foreach($data as $d){
                $d['terms'] = quotations_orders_terms::query()
                    ->where('user_id','=',$d->user_id)
                    ->where('quotation_order_id','=',$d->quotation_order_id)->first();
            }
            return $data;
    }

    public function add_vendors_per_request(){
        $data = vendors_requests::query()->updateOrCreate([
           'id'=>request()->has('id') ? request('id'):null,
        ],[
            'user_id'=>request('user_id'),
            'quotation_order_id'=>request('quotation_order_id'),
        ]);

        $data['user'] = User::query()->find(request('user_id'));
        $data['check_user_from_vendor_at_items_count'] = 0;

        // send notification
        create_notification::new_notification([
            'sender_id'=>auth()->id(),
            'receiver_id'=>$data['user']->id,
            'ar_info'=>'تم ارسال لك طلب من الاداره برجاء قرائته وارفاق ملف الاكسل الذي يحتوي علي التسعيرات الخاصه بك',
            'en_info'=>'A request has been sent to you from the administration. Please read it and attach the excel file that contains your pricing.',
            'seen'=>0,
        ]);
        $admin = get_first_admin::get_admin();
        // send email

        // send email to admin
        $title_admin = [
            'ar'=>[' تحويل طلب تسعير لموردين رقم ',request('quotation_order_id')],
            'en'=>['Query forwarded to vendor. No ',request('quotation_order_id')],
        ];
        $body_admin = [
            'ar'=>['تم تحويل طلب التسعير ',request('quotation_order_id'),'للمورد',$data['user']->username,'للمتابعة يمكنك الدخول لحسابك عن طريق النقر على الرابط أدناه'],
            'en'=>['Query no. ',request('quotation_order_id'),'  just been forwarded  to ',$data['user']->username,' . To review and follow up you can sign in by clicking on the below link'],
        ];
        send_email::send(
            $title_admin,$body_admin,
            request()->root() .'/dashboard/pricing-requests',
            'الرجاء الضغط هنا', $admin->email
        );

        // send email to vendor
        $title_vendor = [
            'ar'=>[' طلب تسعير جديد من مكينة جملة  رقم ',request('quotation_order_id')],
            'en'=>['Mkena Wholesale new query no ',request('quotation_order_id')],
        ];
        $body_vendor = [
            'ar'=>[' لقد  تم ارسال طلب تسعير جديد رقم ',request('quotation_order_id'),' من مكينة جملة، للاطلاع على التفاصيل وتقديم عرضكم، يمكنكم الدخول على حسابكم من خلال النقر على الرابط أدناه'],
            'en'=>['Mkena Wholesale management just sent you a new query no. ',request('quotation_order_id'),'. To review and reply, you can sign in into your account by clicking on the below link'],
        ];

        send_email::send(
            $title_vendor,$body_vendor,
            request()->root() .'/profile/pricing',
            'الرجاء الضغط هنا', $data['user']->email
        );


        return messages::success_output(trans('messages.saved_successfully'),$data);

    }

    public function export_file(){
        if(request()->has('template')){
            return Excel::download(new items_offers_export(collect([])), 'offer_template.xlsx');
        }
        $ids = explode(',',request('ids'));
        $user_id = request('user_id') ?? null;
        if(request()->has('offer')){
            $data = quotation_orders::query()
                ->whereIn('id',$ids)
                ->with(['offer'=>function($q){
                    $q->with('items_infos_ids',function ($query){
                        $query->with('item_info',function ($p){
                            $p->with('prices');
                        });
                    });
                },'quotations'=>function($e) {
                    $e->with('brand:id,en_name as name');
                },'items'=>function($e) use ($user_id){
                    $e->when($user_id != null,function($q) use ($user_id){
                        $q->where('user_id','=',$user_id);
                    })->when($user_id == null,function($query){
                        $query->whereHas('user',function ($u){
                            $u->whereHas('role',function($r){
                                $r->where('name','!=','seller');
                            });
                        });
                    })->with('prices');
                }])->get();
            foreach($data as $d){
                foreach ($d['offer']['items_infos_ids'] as $item){
                    $d['items'][] =  $item['item_info'];
                }
            }
        }else{
            $data = quotation_orders::query()
                ->whereIn('id',$ids)
                ->with(['quotations'=>function($e) {
                $e->with('brand:id,en_name as name')->with('last_draft');
            },'items'=>function($e) use ($user_id){
                    $e->when($user_id != null,function($q) use ($user_id){
                        $q->where('user_id','=',$user_id);
                    })->when($user_id == null,function($query){
                        $query->whereHas('user',function ($u){
                           $u->whereHas('role',function($r){
                               $r->where('name','!=','seller');
                           });
                        });
                    })->with('prices');
                }])->get();
        }
        return Excel::download(new items_info_export($data), request('ids').'.xlsx');

    }

    public function export_offer(){
        $ids = explode(',',request('ids'));

        $data = items_info::query()
            ->whereIn('id',$ids)
            ->with(['brand:id,' . app()->getLocale() . '_name as name','prices'])->get();
        return Excel::download(new items_offers_export($data), 'offers.xlsx');
    }

    public function get_offer_info(){
        $ids = explode(',',request('ids'));
        $data = items_info::query()
            ->whereIn('id',$ids)
            ->with(['brand:id,' . app()->getLocale() . '_name as name','prices','offer'])->get();
        return messages::success_output('',$data);
    }


    // for search at offers page
    public function get_offers_data(){

        $data = items_info::query()->has('offer')
            ->with('offer',function($e){
                $e->with('offer',function($query){
                    $query->with('brand:id,'.app()->getLocale().'_name as name');
                });
            })
            ->where('part_number','LIKE','%'.request('search').'%')

            ->get();
        return messages::success_output('',$data);


    }

    public function export_vendor_file(){
        $data = quotation_orders::query()
            ->has('vendors_requests')
            ->where('id',request('id'))
            ->with(['quotations'=>function($e) {
                $e->with('brand:id,' . app()->getLocale() . '_name as name');
            },'items'=>function($e){
                $e->with('prices');
            }])->get();
        return Excel::download(new quotations_orders_export($data), 'quotations.xlsx');
    }
}
