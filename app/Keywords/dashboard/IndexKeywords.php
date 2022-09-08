<?php


namespace App\Keywords\dashboard;


class IndexKeywords
{
    public static function get_keywords(){
        return [
            'show_details'=>trans('keywords.show_details'),
            'last_listings'=>trans('keywords.last_listings'),
            'ewaa_word'=>trans('keywords.ewaa_word'),
            'ewaa_listings'=>trans('keywords.ewaa_listings'),
            'last_packages_sales'=>trans('keywords.last_packages_sales'),
            'allow_for_you_number_of_points'=>trans('keywords.allow_for_you_number_of_points'),
            'ewaa_statistics_word'=>trans('keywords.ewaa_statistics_word'),
            'ewaa_statistics_info'=>trans('keywords.ewaa_statistics_info'),
            'explore_statistics'=>trans('keywords.explore_statistics'),
            'last_listings_statistics'=>trans('keywords.last_listings_statistics'),
            'pending_listings'=>trans('keywords.pending_listings'),
            'last_categories'=>trans('keywords.last_categories'),
            'approve'=>trans('keywords.approve'),
        ];
    }
}
