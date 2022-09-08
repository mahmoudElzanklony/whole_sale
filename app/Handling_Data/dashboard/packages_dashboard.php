<?php


namespace App\Handling_Data\dashboard;


use App\Models\countries;
use App\Models\currencies;
use App\Models\packages;

class packages_dashboard
{
    public static function handle_data(){

        return [
            'table_head_keys'=>[
                'image'=>trans('keywords.image'),
                'ar_name'=>trans('keywords.ar_name'),
                'en_name'=>trans('keywords.en_name'),
                'currency_id'=>trans('keywords.currency'),
                'min_value'=>trans('keywords.min_value'),
                'max_value'=>trans('keywords.max_value'),
                'point_price'=>trans('keywords.point_price'),
                'is_visible'=>trans('keywords.is_visible'),
                'expiration_date'=>trans('keywords.expiration_date'),
                'specific_price_for_specific_areas'=>trans('keywords.specific_price_for_specific_areas'),
                'actions'=>trans('keywords.actions'),
            ],
            'data_model'=>[
                'currency_id'=>trans('keywords.currency'),
                'ar_name'=>trans('keywords.ar_name'),
                'en_name'=>trans('keywords.en_name'),
                'min_value'=>trans('keywords.min_value'),
                'max_value'=>trans('keywords.max_value'),
                'price'=>trans('keywords.point_price'),
                'is_visible'=>trans('keywords.is_visible'),
                'expiration_date'=>trans('keywords.expiration_date'),
              //  'specific_price_for_specific_areas'=>trans('keywords.specific_price_for_specific_areas'),
                'image'=>trans('keywords.image'),
            ],
            'data'=>[
                'packages'=>packages::query()->with(['currency','countries'=>function($e){
                    $e->with('country_info');
                }])->get(),
                'currencies'=>currencies::selection()->get(),
                'countries'=>countries::selection()->get(),
            ]
        ];
    }
}
