<?php

namespace App\Http\Controllers;

use App\Exports\items_info_export;
use App\Exports\items_offers_export;
use App\Exports\quotations_orders_export;
use App\Http\Requests\QuotationFormRequest;
use App\Http\traits\messages;
use App\Http\traits\upload_image;
use App\Imports\AdminQuotationReplyCSV;
use App\Imports\QuotationImportCSV;
use App\Models\cancelled_quotations;
use App\Models\items_info;
use App\Models\offers_items_info;
use App\Models\quotation_orders;
use App\Models\quotations;
use App\Models\quotations_draft;
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
        quotation_orders::query()->find(request('id'))->update([
            'is_completed'=>-1
        ]);

        cancelled_quotations::query()->create([
            'quotation_id'=>request('id'),
            'cancelled_id'=>request('reason'),
        ]);

        return messages::success_output([trans('messages.cancelled_successfully')]);

    }

    public function save_quotation_at_draft(QuotationFormRequest $request){
        $quotation = quotations::query()->find(request('quotation_id'));
        $validated = $request->validated();
        $validated['quotation_id'] = request('quotation_id');
        if($quotation->brand_id != $validated['brand_id'] ||
            $quotation->part_number != $validated['part_number'] ||
            $quotation->quantity != $validated['quantity']){
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
            }
            Excel::import(new AdminQuotationReplyCSV(request('quotation_order_id')),
                request()->file('excel_file')
            );


        } catch (\Maatwebsite\Excel\Validators\ValidationException $e) {
            $failures = $e->failures();
            return messages::error_output($failures[0]->errors());

        }
        $quotation_order = quotation_orders::query()->with('user')->find(request('quotation_order_id'));
        $quotation_order->is_completed = session()->get('type') == 'seller'?11:1;
        $quotation_order->save();

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
        }else{
            create_notification::new_notification([
                'sender_id'=>auth()->id(),
                'receiver_id'=>session()->get('type') == 'seller'? get_first_admin::get_admin()->id: $quotation_order->user_id,
                'ar_info'=>'تم الرد علي الطلب الذي رقمه '.$quotation_order->id,
                'en_info'=>'request number '.$quotation_order->id.' has been replied please check this ',
                'tu_info'=>'',
                'seen'=>0,
            ]);

            if(session()->get('lang') == 'ar') {
                send_email::send('رد الاداره بخصوص طلبك',
                    'تم رد الاداره بخصوص الطلب الذي قمت بارساله رقم '.$quotation_order->id,
                    request()->root() .'/profile/last-quotations',
                    'الرجاء الضغط هنا', User::query()->find($quotation_order->user_id)->email
                );
            }else{
                send_email::send(' quotation request has been replied',
                    'request number '.$quotation_order->id.' has been replied please check your profile to see more',
                    request()->root() .'/profile/last-quotations',
                    'Press here', User::query()->find($quotation_order->user_id)->email
                );
            }
        }


        // send notification
        // ['sender_id','receiver_id','ar_info','en_info','tu_info','seen']




        return messages::success_output(trans('messages.saved_successfully'),$quotation_order);
    }

    public function send_agreement_to_admin(){
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
            // send notification to admin
            $notification_data = [
                'sender_id'=>auth()->id(),
                'receiver_id'=>get_first_admin::get_admin()->id,
                'ar_info'=> 'تم تأكيد الطلب رقم '.request('id').'من قبل العميل مع رفع صورة الايصال ',
                'en_info'=> 'order number '.request('id').' has been confirmed from client with uploading bill photo',
                'seen'=>0,
            ];

        }else{
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
        if(session()->get('lang') == 'ar') {
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
        }

    }

    public function change_status_of_request(){
        $quotation_order = quotation_orders::query()->find(request('id'));
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
        return vendors_requests::query()
            ->with(['user:id,username'])
            /*->whereHas('items',function (){

            })*/
            ->withCount('check_user_from_vendor_at_items')
            ->where('quotation_order_id','=',request('id'))->get();
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

        // send email
        if(session()->get('lang') == 'ar') {
            send_email::send('طلب جديد من الاداره',
                'تم ارسال لك طلب من الاداره برجاء قرائته وارفاق ملف الاكسل الذي يحتوي علي التسعيرات الخاصه بك رقم '.$data->id,
                request()->root() .'/profile/pricing',
                'الرجاء الضغط هنا', $data['user']->email
            );
        }else{
            send_email::send('new request from admin',
                'A request has been sent to you from the administration. Please read it and attach the excel file that contains your pricing . number of request : '.$data->id,
                request()->root() .'/profile/pricing',
                'Press here', $data['user']->email
            );
        }

        return messages::success_output(trans('messages.saved_successfully'),$data);

    }

    public function export_file(){
        $ids = explode(',',request('ids'));
        $user_id = request('user_id') ?? null;
        $data = quotation_orders::query()
            ->whereIn('id',$ids)
            ->with(['quotations'=>function($e) {
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
