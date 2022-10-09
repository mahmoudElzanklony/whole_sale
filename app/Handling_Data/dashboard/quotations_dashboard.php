<?php


namespace App\Handling_Data\dashboard;


use App\Models\quotations;

class quotations_dashboard
{
    public static function handle_data(){

        return [
            'data'=>quotations::query()->with(['user','brand'=>function($brand){
                $brand->select('id',app()->getLocale().'_name as name');
            }])->get(),
            'table_head_keys'=>[
                'username'=>trans('keywords.username'),
                'brand'=>trans('keywords.brand'),
                'part_number'=>trans('keywords.part_no'),
                'quantity'=>trans('keywords.quantity'),
                'serial'=>trans('keywords.serial'),
                'actions'=>trans('keywords.actions'),
            ],
        ];
    }
}
