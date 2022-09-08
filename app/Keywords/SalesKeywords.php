<?php


namespace App\Keywords;


use Inertia\Inertia;

class SalesKeywords
{
    public static function get_keywords(){
        return [
            'city_or_neighbour_streetname'=>trans('keywords.city_or_neighbour_streetname'),
            'properties_for_rent'=>trans('keywords.properties_for_rent'),
            'show_more'=>trans('keywords.show_more'),
            'do_you_need_help'=>trans('keywords.do_you_need_help'),
            'to_get_best_results'=>trans('keywords.to_get_best_results'),
            'registered_at_date'=>trans('keywords.registered_at_date'),
            'rent'=>trans('keywords.rent'),
            'sale'=>trans('keywords.sale'),
            'properties'=>trans('keywords.properties'),
            'price_range'=>trans('keywords.price_range'),
            'more_filters'=>trans('keywords.more_filters'),
            'search'=>trans('keywords.search'),
            'close'=>trans('keywords.close'),
            'pound'=>trans('keywords.pound'),
            'meter'=>trans('keywords.meter'),
            'verified'=>trans('keywords.verified'),
            'sponsored'=>trans('keywords.sponsored'),
            'request_contact'=>trans('keywords.request_contact'),
        ];
    }
}
