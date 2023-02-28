<?php


namespace App\Keywords;


class AuthKeywords
{
    public static function get_keywords(){
        return [
            'email'=>trans('keywords.email'),
            'password'=>trans('keywords.password'),
            'username'=>trans('keywords.username'),
            'vat'=>trans('keywords.vat'),
            'phone'=>trans('keywords.phone'),
            'address'=>trans('keywords.address'),
            'country'=>trans('keywords.country'),
            'sign_up'=>trans('keywords.sign_up'),
            'sign_in'=>trans('keywords.sign_in'),
            'buyer'=>trans('keywords.buyer'),
            'seller'=>trans('keywords.seller'),
            'seller_buyer'=>trans('keywords.buyer_seller'),
            'personal_info'=>trans('keywords.personal_info'),
            'bank_info'=>trans('keywords.bank_info'),
            'brands_dealing'=>trans('keywords.brands_dealing'),
            'buyer_seller'=>trans('keywords.buyer_seller'),
            'account_number'=>trans('keywords.account_number'),
            'trade_licence'=>trans('keywords.trade_licence'),
            'bank_info_document'=>trans('keywords.bank_info_document'),
            'repeat_password'=>trans('keywords.repeat_password'),
            'user_type'=>trans('keywords.user_type'),
            'have_already_account'=>trans('keywords.have_already_account'),
            'forget_password'=>trans('keywords.forget_password'),
            'dont_have_account'=>trans('keywords.dont_have_account'),
        ];
    }
}
