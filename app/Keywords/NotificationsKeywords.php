<?php


namespace App\Keywords;


class NotificationsKeywords
{
    public static function get_keywords(){
        return [
          'notifications'=>trans('keywords.notifications'),
          'your_notifications'=>trans('keywords.your_notifications'),
        ];
    }
}
