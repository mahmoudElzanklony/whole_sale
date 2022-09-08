<?php


namespace App\Handling_Data\dashboard;


use App\Models\currencies;
use App\Models\subscriptions;

class subscriptions_dashboard
{
    public static function handle_data(){
        return [
            'table_head_keys'=>[
                'username'=>trans('keywords.username'),
                'package'=>trans('keywords.package'),
                'points_ordered'=>trans('keywords.points_ordered'),
                'package_min_points'=>trans('keywords.package_min_points'),
                'package_max_points'=>trans('keywords.package_max_points'),
                'point_price'=>trans('keywords.point_price'),
                'actions'=>trans('keywords.actions'),
            ],
            'data'=> subscriptions::query()->with(['user','package'])->get(),
        ];
    }
}
