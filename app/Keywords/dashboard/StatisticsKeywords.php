<?php


namespace App\Keywords\dashboard;


class StatisticsKeywords
{
    public static function get_keywords(){
        return [
            'main_title'=>trans('keywords.ewaa_statistics'),
            'users'=>trans('keywords.users'),
            'packages'=>trans('keywords.company_packages'),
            'subscriptions'=>trans('keywords.packages_orders'),
            'listings'=>trans('keywords.listings'),
            'listings_pending'=>trans('keywords.listings_orders'),
            'see_more'=>trans('keywords.see_more'),
        ];
    }
}
