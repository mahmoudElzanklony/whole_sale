<?php


namespace App\Keywords\Profile;


class ProfileStatisticsKeywords
{
    public static function get_keywords(){
        return [
           'statistics'=>trans('keywords.statistics'),
           'select_process_type'=>trans('keywords.select_process_type'),
           'sale'=>trans('keywords.sale'),
           'buying'=>trans('keywords.buying'),
           'select_year'=>trans('keywords.select_year'),
           'select_brand'=>trans('keywords.select_brand'),
           'part_no'=>trans('keywords.part_no'),
           'search'=>trans('keywords.search'),
        ];
    }
}
