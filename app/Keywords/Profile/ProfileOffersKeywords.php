<?php


namespace App\Keywords\Profile;


class ProfileOffersKeywords
{
    public static function get_keywords(){
        return [
            'there_is_no_offers_yet'=>trans('keywords.no_offers'),
            'seller_related_offer'=>trans('keywords.seller_related_offer'),
            'file'=>trans('keywords.file'),
            'start_date'=>trans('keywords.start_date'),
            'end_date'=>trans('keywords.end_date'),
            'brand'=>trans('keywords.brand'),
        ];
    }

}
