<?php


namespace App\Keywords\compounds;


class FilterKeywords
{
    public static function get_keywords(){
        return [
            'compounds_guide'=>trans('keywords.compounds_guide'),
            'projects_with_prices_of_all_units'=>trans('keywords.projects_with_prices_of_all_units'),
            'show_more'=>trans('keywords.see_more'),
            'locations'=>trans('keywords.locations'),
            'property_types'=>trans('keywords.property_types'),
            'price_level'=>trans('keywords.price_level'),
            'economic'=>trans('keywords.economic'),
            'mid_range'=>trans('keywords.mid_range'),
            'luxury'=>trans('keywords.luxury'),
            'compound_status'=>trans('keywords.compound_status'),
            'under_construction'=>trans('keywords.under_construction'),
            'delivered'=>trans('keywords.delivered'),
            'launch'=>trans('keywords.launch'),
            'finishing_type'=>trans('keywords.finishing_type'),
            'super_lux'=>trans('keywords.super_lux'),
            'extra_super_lux'=>trans('keywords.extra_super_lux'),
            'lux'=>trans('keywords.lux'),
            'semi_finished'=>trans('keywords.semi_finished'),
            'without_finish'=>trans('keywords.without_finish'),
            'payment_methods'=>trans('keywords.payment_methods'),
            'cash'=>trans('keywords.cash'),
            'installments'=>trans('keywords.installments'),
            'cash_or_installments'=>trans('keywords.cash_or_installments'),
            'developer_experience'=>trans('keywords.developer_experience'),
            'has_delivered_projects'=>trans('keywords.has_delivered_projects'),
            'has_inhabited_projects'=>trans('keywords.has_inhabited_projects'),
            'compound_name'=>trans('keywords.compound_name'),
            'search'=>trans('keywords.search'),
            'meter'=>trans('keywords.meter'),
            'pound'=>trans('keywords.pound'),
            'prices_start_from'=>trans('keywords.prices_start_from'),
            'since'=>trans('keywords.since'),
            'projects'=>trans('keywords.projects'),
            'inhabited'=>trans('keywords.inhabited'),
            'in_progress'=>trans('keywords.in_progress'),
        ];
    }
}
