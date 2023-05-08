<?php


namespace App\Handling_Data\dashboard;


use App\Models\brands;
use App\Models\categories;

class brands_dashboard
{
    public static function handle_data(){

        return [
            'data'=>brands::query()->get(),
            'table_head_keys'=>[
               'image'=>trans('keywords.image'),
               'ar_name'=>trans('keywords.ar_name'),
               'en_name'=>trans('keywords.en_name'),
               'actions'=>trans('keywords.actions'),
            ],
            'data_model'=>[
                'ar_name'=>trans('keywords.ar_name'),
                'en_name'=>trans('keywords.en_name'),
            ]
        ];
    }
}
