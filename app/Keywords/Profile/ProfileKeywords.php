<?php


namespace App\Keywords\Profile;


class ProfileKeywords
{
    public static function get_keywords(){
        return [
            'my_favourite'=>trans('keywords.my_favourite'),
            'my_notes'=>trans('keywords.my_notes'),
            'statistics'=>trans('keywords.statistics'),
            'my_listings'=>trans('keywords.my_listings'),
            'personal_info'=>trans('keywords.personal_info'),
            'edit_personal_info'=>trans('keywords.edit_personal_info'),
            'edit_main_info'=>trans('keywords.edit_main_info'),
            'current_balance'=>trans('keywords.current_balance'),

            'my_profile'=>trans('keywords.my_profile'),
            'change_your_info'=>trans('keywords.change_your_info'),
            'profile_picture'=>trans('keywords.profile_picture'),
            'email'=>trans('keywords.email'),
            'current_password'=>trans('keywords.current_password'),
            'change_password'=>trans('keywords.change_password'),
            'password'=>trans('keywords.password'),
            'make_new_password'=>trans('keywords.make_new_password'),
            'password_confirmed'=>trans('keywords.password_confirmed'),
            'full_name'=>trans('keywords.full_name'),
            'username'=>trans('keywords.username'),
            'phone'=>trans('keywords.phone'),

            // new word
            'change_bank_info'=>trans('keywords.change_bank_info'),
            'account_number'=>trans('keywords.account_number'),
            'bank_info_document'=>trans('keywords.bank_info_document'),
            'trade_licence'=>trans('keywords.trade_licence'),
            'change_brands_info'=>trans('keywords.change_brands_info'),
            'brands_dealing'=>trans('keywords.brands_dealing'),

            'save'=>trans('keywords.save'),


        ];
    }

}
