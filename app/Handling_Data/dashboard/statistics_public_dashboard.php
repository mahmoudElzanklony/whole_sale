<?php


namespace App\Handling_Data\dashboard;


use App\Models\listings_info;
use App\Models\packages;
use App\Models\subscriptions;
use App\Models\User;

class statistics_public_dashboard
{
    public static function handle_data(){

        return [
            'data'=>[
                'users'=>User::query()->count(),
                'packages'=>packages::query()->count(),
                'subscriptions'=>subscriptions::query()->count(),
                'listings'=>listings_info::query()->where('payment_status','=',1)->count(),
                'listings_pending'=>listings_info::query()->where('type','=','pending')->count(),
            ],
        ];
    }
}
