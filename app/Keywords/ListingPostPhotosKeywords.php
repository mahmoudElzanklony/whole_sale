<?php


namespace App\Keywords;


class ListingPostPhotosKeywords
{
    public static function get_keywords(){
        return [
            'add_your_photos'=>trans('keywords.add_your_photos'),
            'please_make_sure_each_photo_is_smaller_than'=>trans('keywords.please_make_sure_each_photo_is_smaller_than'),
            'drop_your_images_here'=>trans('keywords.drop_your_images_here'),
            'add_files'=>trans('keywords.add_files'),
            'next'=>trans('keywords.next'),
            'listing_data'=>trans('keywords.listing_data'),
            'listing_info'=>trans('keywords.listing_info'),
            'listing_images'=>trans('keywords.listing_images'),
            'previous'=>trans('keywords.previous'),
        ];
    }
}
