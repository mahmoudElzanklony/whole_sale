<?php


namespace App\Keywords;


class MonthsKeywords
{
    public static function get_keywords(){
        return [
            'january'=>trans('keywords.january'),
            'february'=>trans('keywords.february'),
            'march'=>trans('keywords.march'),
            'april'=>trans('keywords.april'),
            'may'=>trans('keywords.may'),
            'june'=>trans('keywords.june'),
            'august'=>trans('keywords.august'),
            'september'=>trans('keywords.september'),
            'october'=>trans('keywords.october'),
            'november'=>trans('keywords.november'),
            'december'=>trans('keywords.december'),
        ];
    }
}
