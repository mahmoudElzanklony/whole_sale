<?php


namespace App\Keywords\dashboard;


class MapKeywords
{
    public static function get_keywords($type){
        return [
           'main_title'=>trans('keywords.'.$type),
           'name'=>trans('keywords.name'),
        ];
    }
}
