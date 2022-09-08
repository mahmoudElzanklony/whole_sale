<?php


namespace App\Keywords\Profile;


class ProfileListingsKeywords
{
    public static function get_keywords(){
        return [
          'search_your_listings'=>trans('keywords.search_your_listings'),
          'id_or_keyword'=>trans('keywords.id_or_keyword'),
          'live_listings'=>trans('keywords.live_listings'),
          'live_listings_txt_info'=>trans('keywords.live_listings_txt_info'),
          'rejected_listings'=>trans('keywords.rejected_listings'),
          'rejected_listings_txt_info'=>trans('keywords.rejected_listings_txt_info'),
          'expired_listings'=>trans('keywords.expired_listings'),
          'expired_listings_txt_info'=>trans('keywords.expired_listings_txt_info'),
          'pending_listings'=>trans('keywords.pending_listings'),
          'pending_listings_txt_info'=>trans('keywords.pending_listings_txt_info'),
          'deleted_listings'=>trans('keywords.deleted_listings'),
          'deleted_listings_txt_info'=>trans('keywords.deleted_listings_txt_info'),
          'draft_listings'=>trans('keywords.draft_listings'),
          'draft_listings_txt_info'=>trans('keywords.draft_listings_txt_info'),
          'pending_listings_txt_info_first'=>trans('keywords.pending_listings_txt_info_first'),
          'pending_listings_txt_info_second'=>trans('keywords.pending_listings_txt_info_second'),
          'pending_listings_txt_info_third'=>trans('keywords.pending_listings_txt_info_third'),
          'listing_id'=>trans('keywords.listing_id'),
          'listing_details_info'=>trans('keywords.listing_details_info'),
          'listing_rejected_reasons'=>trans('keywords.listing_rejected_reasons'),
          'actions'=>trans('keywords.actions'),
          'update'=>trans('keywords.update'),
          'update_info'=>trans('keywords.update_info'),
          'update_photos'=>trans('keywords.update_photos'),
          'delete'=>trans('keywords.delete'),
          'clear'=>trans('keywords.clear'),
          'complete_payment'=>trans('keywords.complete_payment'),
          'payment_status'=>trans('keywords.payment_status'),
        ];
    }
}
