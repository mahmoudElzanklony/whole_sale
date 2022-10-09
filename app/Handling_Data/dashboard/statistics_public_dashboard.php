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
                'users'=>10,
                'brands'=>20,
                'products'=>40,
                'sales'=>100,
            ],
        ];
    }
}
