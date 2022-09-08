<?php


namespace App\Handling_Data\dashboard;


use App\Models\support;

class support_dashboard
{
    public static function handle_data(){

        return [
            'table_head_keys'=>[
                'username'=>trans('keywords.name'),
                'email'=>trans('keywords.email'),
                'message'=>trans('keywords.message'),
                'reply'=>trans('keywords.reply'),
                'actions'=>trans('keywords.actions'),
            ],
            'data_model'=>[
                'username'=>trans('keywords.name'),
                'email'=>trans('keywords.email'),
                'message'=>trans('keywords.message'),
                'reply'=>trans('keywords.reply'),
            ],
            'data'=>support::query()->get(),
        ];
    }
}
