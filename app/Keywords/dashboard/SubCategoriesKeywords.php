<?php


namespace App\Keywords\dashboard;


class SubCategoriesKeywords
{
    public static function get_keywords(){
        return [
            'main_title'=>trans('keywords.inner_sub_categories_at'),
            'select_from_questions'=>trans('keywords.select_from_questions'),
            'add_new_question'=>trans('keywords.add_new_question'),
            'add_another_question'=>trans('keywords.add_another_question'),
            'select_question'=>trans('keywords.select_question'),
        ];
    }
}
