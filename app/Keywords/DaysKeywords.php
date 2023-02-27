<?php


namespace App\Keywords;


class DaysKeywords
{
    public static function get_keywords(){
        return [
            'saturday'=>trans('keywords.saturday'),
            'sunday'=>trans('keywords.sunday'),
            'monday'=>trans('keywords.monday'),
            'tuesday'=>trans('keywords.tuesday'),
            'wednesday'=>trans('keywords.wednesday'),
            'thursday'=>trans('keywords.thursday'),
            'friday'=>trans('keywords.friday'),
        ];
    }
}
