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
            'part_no'=>trans('keywords.part_no'),
            'quantity'=>trans('keywords.quantity'),
            'wholesale_is_trying_to_get_the_best_deal_for_you_from_the_registered_vendors_this_process_may_take_few_moments'=>trans('keywords.wholesale-is-trying-to-get-the-best-deal-for-you-from-the-registered-vendors-this-process-may-take-few-moments'),
            'seq'=>trans('keywords.seq'),
            'item_no'=>trans('keywords.item_no'),
            'en_part_name'=>trans('keywords.en_part_name'),
            'offered_stock'=>trans('keywords.offered_stock'),
            'min_quantity'=>trans('keywords.min_quantity'),
            'price'=>trans('keywords.price'),
            'min_quantity_per_transaction'=>trans('keywords.min_quantity_per_transaction'),
            'max_quantity_per_transaction'=>trans('keywords.max_quantity_per_transaction'),
            'search_by_part_no'=>trans('keywords.search_by_part_no'),
            'search_by_brand'=>trans('keywords.search_by_brand'),
            'see_prices'=>trans('keywords.see_prices'),
            'actions'=>trans('keywords.actions'),
            'upload_new_offer'=>trans('keywords.upload_new_offer'),
            'new_offer'=>trans('keywords.new_offer'),
            'download_offer_template'=>trans('keywords.download_offer_template'),
        ];
    }

}
