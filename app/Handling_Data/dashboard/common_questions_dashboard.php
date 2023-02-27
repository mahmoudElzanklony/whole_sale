<?php


namespace App\Handling_Data\dashboard;


use App\Models\common_questions;
use App\Models\privillages;
use App\Models\User;

class common_questions_dashboard
{
    public static function handle_data(){

        return [
            'data'=>common_questions::query()->get(),
            'table_head_keys'=>[
                'ar_question'=>trans('keywords.ar_question'),
                'en_question'=>trans('keywords.en_question'),
                'ar_answer'=>trans('keywords.ar_answer'),
                'en_answer'=>trans('keywords.en_answer'),
                'actions'=>trans('keywords.actions'),
            ],
            'data_model'=>[
                'ar_question'=>trans('keywords.ar_question'),
                'en_question'=>trans('keywords.en_question'),
                'ar_answer'=>trans('keywords.ar_answer'),
                'en_answer'=>trans('keywords.en_answer'),
            ]
        ];
    }
}
