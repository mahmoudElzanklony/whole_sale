<?php


namespace App\Keywords\dashboard;


class BrandsKeywords
{
    public static function get_keywords(){
        return [
          'ar_name'=>trans('keywords.ar_name'),
          'en_name'=>trans('keywords.en_name'),
          'image'=>trans('keywords.image'),
          'actions'=>trans('keywords.actions'),
          'update'=>trans('keywords.update'),
          'delete'=>trans('keywords.delete'),
        ];
    }
}
