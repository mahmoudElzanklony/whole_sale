<?php


namespace App\Keywords;


class CheckoutKeywords
{
    public static function get_keywords(){
        return [
            'total_items'=>trans('keywords.total_items'),
            'total_qty'=>trans('keywords.total_qty'),
            'total_goods_value'=>trans('keywords.total_goods_value'),
            'other_charge'=>trans('keywords.other_charge'),
            'total_price'=>trans('keywords.total_price'),
            'proceed_payment_with'=>trans('keywords.proceed_payment_with'),
            'electric_payment'=>trans('keywords.electric_payment'),
            'request_info'=>trans('keywords.request_info'),
            'save_two_and_pay_with_bank'=>trans('keywords.save_two_and_pay_with_bank'),
            'upload_bank_transfer_photo'=>trans('keywords.upload_bank_transfer_photo'),
            'card_no'=>trans('keywords.card_no'),
            'name_on_card'=>trans('keywords.name_on_card'),
            'expire_date'=>trans('keywords.expire_date'),
            'cvv'=>trans('keywords.cvv'),

            'you_will_have_discount_bank'=>trans('keywords.you_will_have_discount_bank'),
            'total_price_become'=>trans('keywords.total_price_become'),
            'bank_account_number_you_should_transfer'=>trans('keywords.bank_account_number_you_should_transfer'),
            'pay'=>trans('keywords.pay'),
        ];
    }
}
