<?php


namespace App\Keywords\dashboard;


class StatisticsKeywords
{
    public static function get_keywords(){
        return [
            'main_title'=>trans('keywords.wholesale_statistics'),
            'users'=>trans('keywords.users'),
            'brands'=>trans('keywords.brands'),
            'products'=>trans('keywords.products'),
            'sales'=>trans('keywords.sales'),
            'see_more'=>trans('keywords.see_more'),
        ];
    }
}
