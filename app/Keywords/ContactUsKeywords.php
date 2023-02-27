<?php


namespace App\Keywords;


class ContactUsKeywords
{
    public static function get_keywords(){
        return [
            'contact_us'=>trans('keywords.contact_us'),
            'inquiring_about_specific_property'=>trans('keywords.inquiring_about_specific_property'),
            'property_answer_questions'=>trans('keywords.property_answer_questions'),
            'contact_us_data'=>trans('keywords.contact_us_data'),
            'phone_whatapp'=>trans('keywords.phone_whatapp'),
            'email'=>trans('keywords.email'),
            'address'=>trans('keywords.address'),
            'address_title'=>trans('keywords.address_title'),
        ];
    }
}
