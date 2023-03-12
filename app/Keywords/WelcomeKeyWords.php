<?php


namespace App\Keywords;


class WelcomeKeyWords
{
    public static function get_key_words()
    {
        return [
          'for'=>trans('keywords.for'),
          'login'=>trans('keywords.sign_in'),
          'logout'=>trans('keywords.logout'),
          'register'=>trans('keywords.sign_up'),
          'and'=>trans('keywords.and'),
          'search'=>trans('keywords.search'),
          'know_more'=>trans('keywords.know_more'),
          'website_name'=>trans('keywords.website_name'),
          'website_word'=>trans('keywords.website_word'),
          'active_brands'=>trans('keywords.active_brands'),
          'mobile_experience'=>trans('keywords.mobile_experience'),
          'mobile_experience_info'=>trans('keywords.mobile_experience_info'),
          'wholesale_features'=>trans('keywords.wholesale_features'),
          'fast_transfer'=>trans('keywords.fast_transfer'),
          'fast_transfer_info'=>trans('keywords.fast_transfer_info'),
          'wrap_goods'=>trans('keywords.wrap_goods'),
          'wrap_goods_info'=>trans('keywords.wrap_goods_info'),
          'best_prices'=>trans('keywords.best_price'),
          'best_prices_info'=>trans('keywords.best_price_info'),
          'special_account'=>trans('keywords.special_account'),
          'special_account_info'=>trans('keywords.special_account_info'),
          'easy_to_use'=>trans('keywords.easy_to_use'),
          'easy_to_use_info'=>trans('keywords.easy_to_use_info'),
          'do_you_face_problem'=>trans('keywords.do_you_face_problem'),
          'do_you_face_problem_info'=>trans('keywords.do_you_face_problem_info'),
          'send_message'=>trans('keywords.send_message'),
          'call_us_by_phone'=>trans('keywords.call_us_by_phone'),
          'customer_support'=>trans('keywords.customer_support'),
        ];
    }
}
