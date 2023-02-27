<?php


namespace App\Handling_Data\dashboard;


use App\Models\countries;

class reports_dashboard
{
    public static function handle_data(){

        return [
            'search_form'=>[
              'part_no'=>trans('keywords.part_no'),
              'seller_name'=>trans('keywords.seller_name'),
              'year'=>trans('keywords.year'),
            ],
            'table_head_keys'=>[
                'part_no'=>trans('keywords.part_no'),
                'seller_name'=>trans('keywords.seller_name'),
                'year'=>trans('keywords.year'),
                'no_of_orders'=>trans('keywords.no_of_orders'),
            ],
            'data'=>[

            ],
        ];
    }
}
