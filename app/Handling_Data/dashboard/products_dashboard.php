<?php


namespace App\Handling_Data\dashboard;


use App\Models\categories;
use App\Models\questions;
use Illuminate\Support\Facades\DB;

class products_dashboard
{
    public static function handle_data(){
        $data_output = DB::table('quotations')->paginate(8);
        return [
            'table_head_keys'=>[
                'image'=>trans('keywords.image'),
                'part_no'=>trans('keywords.part_no'),
                'brand'=>trans('keywords.brand'),
                'ar_part_name'=>trans('keywords.ar_part_name'),
                'en_part_name'=>trans('keywords.en_part_name'),
                'ar_description'=>trans('keywords.ar_description'),
               /* 'en_description'=>trans('keywords.en_description'),
                'offered_stock'=>trans('keywords.offered_stock'),
                'min_quantity'=>trans('keywords.min_quantity'),
                'price'=>trans('keywords.price'),
                'min_quantity_per_transaction'=>trans('keywords.min_quantity_per_transaction'),
                'max_quantity_per_transaction'=>trans('keywords.max_quantity_per_transaction'),
                'unit_of_packing'=>trans('keywords.unit_of_packing'),
                'width'=>trans('keywords.width'),
                'thickness'=>trans('keywords.thickness'),
                'length'=>trans('keywords.length'),
                'quantity_per_pallet_load'=>trans('keywords.quantity_per_pallet_load'),*/
                'actions'=>trans('keywords.actions'),
            ],
            'data'=>
                $data_output,
            'data_model'=>[
                'image'=>trans('keywords.image'),
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
