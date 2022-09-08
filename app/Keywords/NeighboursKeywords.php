<?php


namespace App\Keywords;


class NeighboursKeywords
{
    public static function get_keywords(){
        return [
            'egypt_properties'=>trans('keywords.egypt_properties'),
            'neighborhood_prices'=>trans('keywords.neighborhood_prices'),
            'real_estate_prices_in_egypt'=>trans('keywords.real_estate_prices_in_egypt'),
            'search_inside_the_cities_of_egypt'=>trans('keywords.search_inside_the_cities_of_egypt'),
            'rent'=>trans('keywords.rent'),
            'sale'=>trans('keywords.sale'),
        ];
    }
}
