<?php


namespace App\Keywords\products;


class SaveProductKeywords
{
    public static function get_keywords(){
        return [
            'enter_data'=>trans('keywords.enter_data'),
            'upload_file'=>trans('keywords.upload_file'),
            'you_can_press_here_to_download_file'=>trans('keywords.you_can_press_here_to_download_file_to_know_correct_format_you_should_upload'),
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
            'image'=>trans('keywords.image'),
            'save'=>trans('keywords.save'),
            'close'=>trans('keywords.close'),
            'add_specific_slab'=>trans('keywords.add_specific_slab'),
        ];
    }
}
