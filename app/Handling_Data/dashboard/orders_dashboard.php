<?php


namespace App\Handling_Data\dashboard;


class orders_dashboard
{
    public static function handle_data(){

        return [
            'data'=>[],
            'table_head_keys'=>[
                'image'=>trans('keywords.image'),
                'bill_number'=>trans('keywords.bill_number'),
                'part_no'=>trans('keywords.part_no'),
                'seller_name'=>trans('keywords.seller_name'),
                'buyer_name'=>trans('keywords.buyer_name'),
                'brand'=>trans('keywords.brand'),
                'quantity'=>trans('keywords.quantity'),
                'unit_price'=>trans('keywords.unit_price'),
                'total_value'=>trans('keywords.total_value'),
                'remarks'=>trans('keywords.remarks'),
                'estimated_required_days_for_delivery'=>trans('keywords.estimated_required_days_for_delivery'),
                'total'=>trans('keywords.total'),
                'reaming_time'=>trans('keywords.reaming_time'),
                'status'=>trans('keywords.status'),
                'actions'=>trans('keywords.actions'),
            ],
            'data_model'=>[
                'serial'=>trans('keywords.serial'),
                'part_no'=>trans('keywords.part_no'),
                'brand_id'=>trans('keywords.brand'),
                'quantity'=>trans('keywords.quantity'),
                'reaming_time'=>trans('keywords.reaming_time'),
                'status'=>trans('keywords.status'),
            ]
        ];
    }
}
