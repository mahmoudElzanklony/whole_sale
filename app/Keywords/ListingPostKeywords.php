<?php


namespace App\Keywords;


class ListingPostKeywords
{
    public static function get_keywords(){
        return [
          'list_property'=>trans('keywords.list_property'),
          'listing_type'=>trans('keywords.listing_type'),
          'listing_section'=>trans('keywords.listing_section'),
          'location'=>trans('keywords.location'),
          'choose_property_type'=>trans('keywords.choose_property_type'),
          'select_location'=>trans('keywords.select_location'),
          'sale'=>trans('keywords.sale'),
          'rent'=>trans('keywords.rent'),
          'listing_data'=>trans('keywords.listing_data'),
          'listing_info'=>trans('keywords.listing_info'),
          'listing_images'=>trans('keywords.listing_images'),
          'sub_category'=>trans('keywords.sub_category'),
          'choose_sub_category'=>trans('keywords.choose_sub_category'),
          'next'=>trans('keywords.next'),
        ];
    }
}
