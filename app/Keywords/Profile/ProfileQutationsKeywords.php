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
            'seq'=>trans('keywords.seq'),
            'item_no'=>trans('keywords.item_no'),
            'req_qty'=>trans('keywords.req_qty'),
            'supplied_qty'=>trans('keywords.supplied_qty'),
            'unit_price'=>trans('keywords.unit_price'),
            'total_value'=>trans('keywords.total_value'),
            'remarks'=>trans('keywords.remarks'),
            'check_better_price_for_minimum_qty'=>trans('keywords.check_better_price_for_minimum_qty'),
            'estimated_unit_loaded_cost'=>trans('keywords.estimated_unit_loaded_cost'),
            'estimated_required_days_for_delivery'=>trans('keywords.estimated_required_days_for_delivery'),
            'total'=>trans('keywords.total'),
            'charge'=>trans('keywords.charge'),
            'confirm_order_and_processed_to_checkout'=>trans('keywords.confirm_order_and_processed_to_checkout'),
            'close'=>trans('keywords.close'),

            // in case seller
            'you_can_upload_file_of_prices'=>trans('keywords.you_can_upload_file_of_prices'),
            'start_discount_date'=>trans('keywords.start_discount_date'),
            'end_discount_date'=>trans('keywords.end_discount_date'),
        ];
    }
}
