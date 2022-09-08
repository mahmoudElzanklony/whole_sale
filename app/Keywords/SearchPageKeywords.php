<?php


namespace App\Keywords;


class SearchPageKeywords
{
    public static function get_keywords(){
        return [
          'search'=>trans('keywords.search'),
          'area'=>trans('keywords.area'),
          'category'=>trans('keywords.category'),
          'sale'=>trans('keywords.sale'),
          'rent'=>trans('keywords.rent'),
          'type'=>trans('keywords.type'),
          'price_range'=>trans('keywords.price_range'),
          'min_price'=>trans('keywords.min_price'),
          'max_price'=>trans('keywords.max_price'),
          'more_filters'=>trans('keywords.more_filters'),
          'less_filters'=>trans('keywords.less_filters'),
          'area_range'=>trans('keywords.area_range'),
          'min_area'=>trans('keywords.min_area'),
          'max_area'=>trans('keywords.max_area'),
          'payment_methods'=>trans('keywords.payment_methods'),
          'all_options'=>trans('keywords.all_options'),
          'cash'=>trans('keywords.cash'),
          'installments'=>trans('keywords.installments'),
          'listings_available_for_mortgage'=>trans('keywords.listings_available_for_mortgage'),
          'all_financing_options'=>trans('keywords.all_financing_options'),
          'cbe_initiative'=>trans('keywords.cbe_initiative'),
          'cbe_another_initiative'=>trans('keywords.cbe_another_initiative'),
          'commercial_financing'=>trans('keywords.commercial_financing'),
          'view'=>trans('keywords.view'),
          'keywords'=>trans('keywords.keywords'),
          'result_filtering'=>trans('keywords.result_filtering'),
          'listings_with_photos_only'=>trans('keywords.listings_with_photos_only'),
          'listings_inside_compounds_only'=>trans('keywords.listings_inside_compounds_only'),
          'direct_from_the_owner_listings'=>trans('keywords.direct_from_the_owner_listings'),
          'sort_by'=>trans('keywords.sort_by'),
          'newest_first'=>trans('keywords.newest_first'),
          'lowest_price'=>trans('keywords.lowest_price'),
          'height_price'=>trans('keywords.height_price'),
          'smallest_area'=>trans('keywords.smallest_area'),
          'largest_area'=>trans('keywords.largest_area'),
          'search'=>trans('keywords.search'),
          'listings_at_egypt'=>trans('keywords.listings_at_egypt'),
          'properties_for_sale'=>trans('keywords.properties_for_sale'),
        ];
    }
}
