<?php


namespace App\Keywords\dashboard;


use Inertia\Inertia;

class CategoriesKeywords
{
    public static function get_keywords(){
        return [
            'image'=>trans('keywords.image'),
            'ar_name'=>trans('keywords.ar_name'),
            'en_name'=>trans('keywords.en_name'),
            'tu_name'=>trans('keywords.tu_name'),
            'ar_description'=>trans('keywords.ar_description'),
            'en_description'=>trans('keywords.en_description'),
            'tu_description'=>trans('keywords.tu_description'),
            'sub_categories'=>trans('keywords.sub_categories'),
            'actions'=>trans('keywords.actions'),
        ];
    }
}
