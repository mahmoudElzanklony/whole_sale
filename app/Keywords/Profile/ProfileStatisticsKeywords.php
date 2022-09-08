<?php


namespace App\Keywords\Profile;


class ProfileStatisticsKeywords
{
    public static function get_keywords(){
        return [
           'interactions_rate'=>trans('keywords.interactions_rate'),
           'rating'=>trans('keywords.rating'),
           'show_rate'=>trans('keywords.show_rate'),
           'users_feedbacks'=>trans('keywords.users_feedbacks'),
           'other_comments'=>trans('keywords.other_comments'),
           'time_period'=>trans('keywords.time_period'),
           'all_time'=>trans('keywords.all_time'),
           'last_thirty_days'=>trans('keywords.last_thirty_days'),
           'last_sixty_days'=>trans('keywords.last_sixty_days'),
           'last_ninety_days'=>trans('keywords.last_ninety_days'),
           'last_seven_days'=>trans('keywords.last_seven_days'),
           'total_search_impressions'=>trans('keywords.total_search_impressions'),
           'total_page_views'=>trans('keywords.total_page_views'),
           'total_leads'=>trans('keywords.total_leads'),
           'average_seen_rate'=>trans('keywords.average_seen_rate'),
           'average_contact_rate'=>trans('keywords.average_contact_rate'),
        ];
    }
}
