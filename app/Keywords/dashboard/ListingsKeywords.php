<?php


namespace App\Keywords\dashboard;


class ListingsKeywords
{
    public static function get_keywords(){
        return [
           // 'main_title' => trans('keywords.listings'),
            'user_image' => trans('keywords.user_image'),
            'username' => trans('keywords.username'),
            'phone' => trans('keywords.phone'),
            'listing_name' => trans('keywords.listing_name'),
            'category' => trans('keywords.category'),
            'area' => trans('keywords.area'),
            'price' => trans('keywords.price'),
            'meters_number' => trans('keywords.meters_number'),
            'payment_status' => trans('keywords.payment_status'),
            'type' => trans('keywords.approval_status'),
            'change_approval_status' => trans('keywords.change_approval_status'),
            'actions' => trans('keywords.actions'),
        ];
    }
}
