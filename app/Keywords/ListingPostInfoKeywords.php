<?php


namespace App\Keywords;


class ListingPostInfoKeywords
{
    public static function get_keywords(){
        return [
          'list_property'=>trans('keywords.list_property'),
          'listing_data'=>trans('keywords.listing_data'),
          'listing_info'=>trans('keywords.listing_info'),
          'listing_images'=>trans('keywords.listing_images'),

          'title_in_english'=>trans('keywords.title_in_english'),
          'description_in_english'=>trans('keywords.description_in_english'),
          'title_in_arabic'=>trans('keywords.title_in_arabic'),
          'description_in_arabic'=>trans('keywords.description_in_arabic'),
          'youtube_video_url'=>trans('keywords.youtube_video_url'),
          'advertiser_details'=>trans('keywords.advertiser_details'),
          'phone_number'=>trans('keywords.phone_number'),
          'if_you_want_to_update_the_current_phone_number_please_go_to'=>trans('keywords.if_you_want_to_update_the_current_phone_number_please_go_to'),
          'my_account'=>trans('keywords.my_account'),
          'this_number_has_whatsapp'=>trans('keywords.this_number_has_whatsapp'),
          'contact_me_by_email'=>trans('keywords.contact_me_by_email'),
          'property_details'=>trans('keywords.property_details'),
          'size_in_meters'=>trans('keywords.size_in_meters'),
          'price'=>trans('keywords.price'),
          'payment_types'=>trans('keywords.payment_types'),
          'select_payment_type'=>trans('keywords.select_payment_type'),
          'view'=>trans('keywords.view'),
          'select_view'=>trans('keywords.select_view'),
          'price_egp'=>trans('keywords.price_egp'),
          'payment_method'=>trans('keywords.payment_method'),
          'cash'=>trans('keywords.cash'),
          'installments'=>trans('keywords.installments'),
          'cash_or_installments'=>trans('keywords.cash_or_installments'),
          'rooms'=>trans('keywords.rooms'),
          'floor'=>trans('keywords.floor'),
          'bathrooms'=>trans('keywords.bathrooms'),
          'building_year'=>trans('keywords.building_year'),
          'finishing_type'=>trans('keywords.finishing_type'),
          'super_lux'=>trans('keywords.super_lux'),
          'extra_super_lux'=>trans('keywords.extra_super_lux'),
          'lux'=>trans('keywords.lux'),
          'semi_finished'=>trans('keywords.semi_finished'),
          'without_finish'=>trans('keywords.without_finish'),
          'address'=>trans('keywords.address'),
          'property_address'=>trans('keywords.property_address'),
          'property_address_arabic'=>trans('keywords.property_address_arabic'),
          'property_address_english'=>trans('keywords.property_address_english'),
          'mark_your_listing_location'=>trans('keywords.mark_your_listing_location'),
          'next'=>trans('keywords.next'),
          'previous'=>trans('keywords.previous'),
          'kindly_read_terms_and_instructions_of_adding_listings_on_ewaa'=>trans('keywords.kindly_read_terms_and_instructions_of_adding_listings_on_ewaa'),
          'here'=>trans('keywords.here'),
          'coordinates'=>trans('keywords.coordinates'),
        ];
    }
}
