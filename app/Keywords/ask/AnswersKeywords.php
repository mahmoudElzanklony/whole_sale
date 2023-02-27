<?php


namespace App\Keywords\ask;


class AnswersKeywords
{
    public static function get_keywords(){
        return [
            'egypt_properties'=>trans('keywords.egypt_properties'),
            'ask_your_neighbors'=>trans('keywords.ask_your_neighbors'),
            'location'=>trans('keywords.location'),
            'answer'=>trans('keywords.answer'),
            'follow'=>trans('keywords.follow'),
            'unfollow'=>trans('keywords.unfollow'),
            'share'=>trans('keywords.share'),
            'reply'=>trans('keywords.reply'),
            'answers'=>trans('keywords.answers'),
            'send'=>trans('keywords.send'),
            'properties_you_may_be_interested_in'=>trans('keywords.properties_you_may_be_interested_in'),
        ];
    }
}
