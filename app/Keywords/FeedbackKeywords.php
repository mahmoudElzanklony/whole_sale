<?php


namespace App\Keywords;


class FeedbackKeywords
{
    public static function get_keywords(){
        return [
            'do_you_have_problem_using_our_website'=>trans('keywords.do_you_have_problem_using_our_website'),
            'describe_the_problem_that_you_are_facing'=>trans('keywords.describe_the_problem_that_you_are_facing'),
            'your_name'=>trans('keywords.your_name'),
            'your_email'=>trans('keywords.your_email'),
            'send'=>trans('keywords.send'),
        ];
    }
}
