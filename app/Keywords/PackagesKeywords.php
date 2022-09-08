<?php


namespace App\Keywords;


class PackagesKeywords
{
    public static function get_keywords(){
        return [
            'min_value'=>trans('keywords.min_value'),
            'max_value'=>trans('keywords.max_value'),
            'point_price'=>trans('point_price'),
            'specific_price_for_specific_areas'=>trans('keywords.specific_price_for_specific_areas'),
        ];
    }
}
