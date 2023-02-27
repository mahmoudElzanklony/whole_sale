<?php


namespace App\Handling_Data\dashboard;


use App\Models\brands;
use App\Models\countries;

class countries_dashboard
{
    public static function handle_data(){

        return [
            'data'=>countries::query()->get(),
            'table_head_keys'=>[
                'ar_name'=>trans('keywords.ar_name'),
                'en_name'=>trans('keywords.en_name'),
                'ar_info'=>trans('keywords.ar_additional_note'),
                'en_info'=>trans('keywords.en_additional_note'),
                'actions'=>trans('keywords.actions'),
            ],
            'data_model'=>[
                'ar_name'=>trans('keywords.ar_name'),
                'en_name'=>trans('keywords.en_name'),
                'ar_info'=>trans('keywords.ar_additional_note'),
                'en_info'=>trans('keywords.en_additional_note'),
            ]
        ];
    }
}
