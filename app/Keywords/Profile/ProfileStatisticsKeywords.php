<?php


namespace App\Keywords\Profile;


class ProfileStatisticsKeywords
{
    public static function get_keywords(){
        return [
           'statistics'=>trans('keywords.statistics_year'),
           'select_process_type'=>trans('keywords.select_process_type'),
           'sale'=>trans('keywords.sale'),
           'buying'=>trans('keywords.buying'),
           'select_year'=>trans('keywords.select_year')
        ];
    }
}
