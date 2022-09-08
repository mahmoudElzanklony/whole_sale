<?php


namespace App\Keywords\merchant;


use Inertia\Inertia;

class BalanceKeywords
{
    public static function get_keywords(){
        return [
            'my_credit'=>trans('keywords.my_credit'),
            'account_number'=>trans('keywords.account_number'),
            'current_balance'=>trans('keywords.current_balance'),
            'charge_credit'=>trans('keywords.charge_credit'),
            'point'=>trans('keywords.point'),
            'point_price'=>trans('keywords.point_price'),
            'price'=>trans('keywords.price'),
            'points'=>trans('keywords.points'),
            'package'=>trans('keywords.package'),
            'total'=>trans('keywords.total'),
            'amount'=>trans('keywords.amount'),
            'balance'=>trans('keywords.balance'),
            'description'=>trans('keywords.description'),
            'date'=>trans('keywords.date'),
        ];
    }
}
