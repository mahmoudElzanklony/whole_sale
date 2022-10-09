<?php


namespace App\Keywords\dashboard;


class ProductsKeywords
{
    public static function get_keywords(){
        return[
            'main_title'=>trans('keywords.products'),
            'min_quantity'=>trans('keywords.min_quantity'),
            'price'=>trans('keywords.price'),
            'add_specific_slab'=>trans('keywords.add_specific_slab')
        ];
    }
}
