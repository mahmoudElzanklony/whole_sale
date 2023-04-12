<?php


namespace App\Handling_Data\dashboard;


use App\Models\countries;
use App\Models\User;

class statistics_dashboard
{
    public static function handle_data(){

        return [
           'table_head_keys'=>[
             //  trans('keywords.image'),
               trans('keywords.username'),
               trans('keywords.email'),
               trans('keywords.phone'),
               trans('keywords.country'),
               trans('keywords.user_type'),
               trans('keywords.another_info'),
           //    trans('keywords.address'),
            //   trans('keywords.block'),
            //   trans('keywords.user_products'),
               trans('keywords.actions'),
           ],
           'serial_number'=>trans('keywords.referral_code'),

            'data_model'=>[
               'username'=>trans('keywords.username'),
               'email'=>trans('keywords.email'),
               'password'=>trans('keywords.password'),
               'phone'=>trans('keywords.phone'),
               'country_id'=>trans('keywords.country'),
             //  'address'=>trans('keywords.address'),
             //  'block'=>trans('keywords.block'),
               'image'=>trans('keywords.image'),
           ],
           'seller_data_keywords'=>[
               'currency'=>trans('keywords.currency'),
               'delivery_terms'=>trans('keywords.delivery_terms'),
           ],
           'data'=>User::query()->with('country',function($e){
               $e->select('id',app()->getLocale().'_name as name');
           })->with('role')->whereHas('role',function($e){
                    $e->where('name','!=','admin');
                })->with('seller_data')->orderByDesc('id')->get(),
           'countries'=>countries::selection()->get(),
        ];
    }
}
