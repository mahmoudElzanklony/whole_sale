<?php


namespace App\Handling_Data\dashboard;


use App\Models\quotation_orders;
use App\Models\reasons_cancellation_orders;
use App\Models\User;

class quotations_dashboard
{
    public static function handle_data(){

        return [
            'table_head_keys'=>[
                'id'=>trans('keywords.seq'),
                'username'=>trans('keywords.username'),
                'phone'=>trans('keywords.phone'),
                'details'=>trans('keywords.show_details'),
                'is_completed'=>trans('keywords.is_completed_status'),
                'created_at'=>trans('keywords.date'),
                'admin_reply'=>trans('keywords.admin_reply'),
                'actions'=>trans('keywords.actions'),
            ],
            'table_head_keys_model'=>[
                'brand'=>trans('keywords.brand'),
                'part_number'=>trans('keywords.part_no'),
                'quantity'=>trans('keywords.quantity'),
                'date'=>trans('keywords.date'),
                'operation_type'=>trans('keywords.operation_type'),
            ],
            'sellers'=>User::query()->whereHas('role',function ($e){
                $e->where('name','=','seller');
            })->get(),
            'reasons'=>reasons_cancellation_orders::selection()->get()
        ];
    }
}
