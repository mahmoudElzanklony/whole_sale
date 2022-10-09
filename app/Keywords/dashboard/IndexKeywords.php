<?php


namespace App\Keywords\dashboard;


class IndexKeywords
{
    public static function get_keywords(){
        return [
            'show_details'=>trans('keywords.show_details'),
            'wholesale_word'=>trans('keywords.wholesale_word'),
            'wholesale_header_info'=>trans('keywords.wholesale_header_info'),
            'last_products'=>trans('keywords.last_products'),
            'last_quotations_out'=>trans('keywords.last_quotations_out'), // you send qutation i mean you are a buyer
            'last_sales'=>trans('keywords.last_sales'),
            'last_brands'=>trans('keywords.last_brands'),
            'wholesale_statistics_word'=>trans('keywords.wholesale_statistics_word'),
            'wholesale_statistics_info'=>trans('keywords.wholesale_statistics_info'),
            'explore_statistics'=>trans('keywords.explore_statistics'),
            'explore_sales'=>trans('keywords.explore_sales'),
            'update'=>trans('keywords.update'),
            'delete'=>trans('keywords.delete'),
        ];
    }
}
