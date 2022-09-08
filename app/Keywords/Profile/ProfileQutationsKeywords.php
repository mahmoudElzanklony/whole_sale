<?php


namespace App\Keywords\Profile;


class ProfileQutationsKeywords
{
    public static function get_keywords(){
        return [
            'main_title'=>trans('keywords.you_can_choose_whether_to_file_your_query_from_both_options_below'),
            'enter_data'=>trans('keywords.enter_data'),
            'upload_file'=>trans('keywords.upload_file'),
            'you_can_press_here_to_download_file'=>trans('keywords.you_can_press_here_to_download_file_to_know_correct_format_you_should_upload'),
            'serial'=>trans('keywords.serial'),
            'part_no'=>trans('keywords.part_no'),
            'brand'=>trans('keywords.brand'),
            'quantity'=>trans('keywords.quantity'),
            'wholesale_is_trying_to_get_the_best_deal_for_you_from_the_registered_vendors_this_process_may_take_few_moments'=>trans('keywords.wholesale-is-trying-to-get-the-best-deal-for-you-from-the-registered-vendors-this-process-may-take-few-moments'),
        ];
    }
}
