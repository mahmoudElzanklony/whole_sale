<?php


namespace App\Handling_Data\dashboard;


use App\Models\brands;
use App\Models\offers;
use App\Models\User;

class offers_dashboard
{
    public static function handle_data(){

        return [
            'data'=>offers::query()->with(['offer_items','user','brand'=>function($e){
                        return $e->select('id',app()->getLocale().'_name as name');
                    }])->get(),
            'users'=>User::query()->whereHas('role',function ($e){
                $e->where('name','=','seller');
            })->get(),
            'brands'=>brands::selection()->get(),
            'table_head_keys'=>[
                'user_id'=>trans('keywords.seller_related_offer'),
                'brand_id'=>trans('keywords.brand'),
                'file'=>trans('keywords.file'),
                'start_date'=>trans('keywords.start_date'),
                'end_date'=>trans('keywords.end_date'),
                'actions'=>trans('keywords.actions'),
            ],
            'data_model'=>[
                'user_id'=>trans('keywords.seller_related_offer'),
                'brand_id'=>trans('keywords.brand'),
                'start_date'=>trans('keywords.start_date'),
                'end_date'=>trans('keywords.end_date'),
            ]
        ];
    }
}
