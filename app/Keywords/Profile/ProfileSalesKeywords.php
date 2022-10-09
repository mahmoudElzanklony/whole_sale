<?php


namespace App\Keywords\Profile;


class ProfileSalesKeywords
{
    public static function get_keywords(){
        return [
            'main_title_sales'=>trans('keywords.my_current_sales'),
            'main_title_orders'=>trans('keywords.my_current_orders'),
            'part_no'=>trans('keywords.part_no'),
            'username'=>trans('keywords.username'),
            'brand'=>trans('keywords.brand'),
            'quantity'=>trans('keywords.quantity'),
            'wholesale_is_trying_to_get_the_best_deal_for_you_from_the_registered_vendors_this_process_may_take_few_moments'=>trans('keywords.wholesale-is-trying-to-get-the-best-deal-for-you-from-the-registered-vendors-this-process-may-take-few-moments'),
            'seq'=>trans('keywords.seq'),
            'unit_price'=>trans('keywords.unit_price'),
            'total_value'=>trans('keywords.total_value'),
            'remarks'=>trans('keywords.remarks'),
            'estimated_required_days_for_delivery'=>trans('keywords.estimated_required_days_for_delivery'),
            'total'=>trans('keywords.total'),
            'status'=>trans('keywords.status'),
            'actions'=>trans('keywords.actions'),
            'print_data_info'=>trans('keywords.print_data_info'),
            'wholesale_bill_info'=>trans('keywords.wholesale_bill_info'),
            'bill_export_date'=>trans('keywords.bill_export_date'),
        ];
    }
}
