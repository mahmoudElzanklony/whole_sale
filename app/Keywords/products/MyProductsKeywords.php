<?php


namespace App\Keywords\products;


class MyProductsKeywords
{
    public static function get_keywords(){
        return [
            'main_title'=>trans('keywords.my_products'),
            'seq'=>trans('keywords.seq'),
            'item_no'=>trans('keywords.item_no'),
            'part_no'=>trans('keywords.part_no'),
            'brand'=>trans('keywords.brand'),
            'ar_part_name'=>trans('keywords.ar_part_name'),
            'en_part_name'=>trans('keywords.en_part_name'),
            'ar_description'=>trans('keywords.ar_description'),
            'en_description'=>trans('keywords.en_description'),
            'offered_stock'=>trans('keywords.offered_stock'),
            'min_quantity'=>trans('keywords.min_quantity'),
            'price'=>trans('keywords.price'),
            'min_quantity_per_transaction'=>trans('keywords.min_quantity_per_transaction'),
            'max_quantity_per_transaction'=>trans('keywords.max_quantity_per_transaction'),
            'unit_of_packing'=>trans('keywords.unit_of_packing'),
            'width'=>trans('keywords.width'),
            'thickness'=>trans('keywords.thickness'),
            'length'=>trans('keywords.length'),
            'quantity_per_pallet_load'=>trans('keywords.quantity_per_pallet_load'),
            'prices'=>trans('keywords.prices'),
            'add_specific_slab'=>trans('keywords.add_specific_slab'),
            'actions'=>trans('keywords.actions'),
            'data_model'=>[
                'part_no'=>trans('keywords.part_no'),
                'brand'=>trans('keywords.brand'),
                'ar_part_name'=>trans('keywords.ar_part_name'),
                'en_part_name'=>trans('keywords.en_part_name'),
                'ar_description'=>trans('keywords.ar_description'),
                'en_description'=>trans('keywords.en_description'),
                'offered_stock'=>trans('keywords.offered_stock'),
                'min_quantity'=>trans('keywords.min_quantity'),
                'price'=>trans('keywords.price'),
                'min_quantity_per_transaction'=>trans('keywords.min_quantity_per_transaction'),
                'max_quantity_per_transaction'=>trans('keywords.max_quantity_per_transaction'),
                'unit_of_packing'=>trans('keywords.unit_of_packing'),
                'width'=>trans('keywords.width'),
                'thickness'=>trans('keywords.thickness'),
                'length'=>trans('keywords.length'),
                'quantity_per_pallet_load'=>trans('keywords.quantity_per_pallet_load'),
         ]
        ];
    }
}
