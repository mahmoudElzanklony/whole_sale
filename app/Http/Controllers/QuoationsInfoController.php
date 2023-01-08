<?php

namespace App\Http\Controllers;

use App\Http\Requests\QuotationFormRequest;
use App\Http\traits\messages;
use App\Http\traits\upload_image;
use App\Imports\AdminQuotationReplyCSV;
use App\Imports\QuotationImportCSV;
use App\Models\items_info;
use App\Models\quotation_orders;
use App\Models\quotations;
use App\Models\quotations_draft;
use App\Models\quotations_upload_money;
use App\Models\receipt_quotations;
use App\Models\tax_money;
use App\Models\User;
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
            $data_to_delete = items_info::query()->where('quotation_order_id',request('quotation_order_id'))->delete();
            Excel::import(new AdminQuotationReplyCSV(request('quotation_order_id')),
                request()->file('excel_file')
            );
        } catch (\Maatwebsite\Excel\Validators\ValidationException $e) {
            $failures = $e->failures();
            return messages::error_output($failures[0]->errors());

        }
        $quotation_order = quotation_orders::query()->with('user')->find(request('quotation_order_id'));
        $quotation_order->is_completed = 1;
        $quotation_order->save();

        // send notification
        // ['sender_id','receiver_id','ar_info','en_info','tu_info','seen']
        create_notification::new_notification([
            'sender_id'=>auth()->id(),
            'receiver_id'=>$quotation_order->user_id,
            'ar_info'=>'تم الرد علي الطلب الذي رقمه '.$quotation_order->id.' من قبل الادارة ',
            'en_info'=>'Admin reply to request number '.$quotation_order->id.' please check this ',
            'tu_info'=>'',
            'seen'=>0,
        ]);

        return messages::success_output(trans('messages.saved_successfully'),$quotation_order);
    }

    public function send_agreement_to_admin(){
        if(request()->hasFile('receipt')){
            $name = $this->upload(request()->file('receipt'),'receipts');
            receipt_quotations::query()->updateOrCreate([
                'quotation_id'=>request('id'),
            ],[
                'image'=>$name
            ]);
        }
        $quotation_order = quotation_orders::query()->find(request('id'));
        if($quotation_order->is_completed < 2){
            $quotation_order->is_completed = 2;
            $quotation_order->save();
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
}
