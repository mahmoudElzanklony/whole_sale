<?php


namespace App\Handling_Data\listings;


use App\Models\categories_questions;
use App\Models\listings_info;
use App\Services\listings\detect_payment_client_ways;

class info_listing
{
    public static function handel_data($id){
        if($id == 0){
            // there is no id ===> get cookie
            if(request()->cookie('inilalize')) {
                $listing_info = json_decode(request()->cookie('inilalize'), true);
                $payment_client_option = detect_payment_client_ways::get_client_payment($listing_info['rent_or_sale']);
                if(request()->cookie('listing_info_data')){
                    $second_data_listing = json_decode(request()->cookie('listing_info_data'),true);
                    $listing_info = array_merge($listing_info,$second_data_listing);
                }else{
                    $listing_info['questions'] = categories_questions::query()
                        ->where('category_id','=',$listing_info['category_id'])->get();
                }
            }
        }else{
            $data =  listings_info::query()->find($id);
            $data['questions'] = categories_questions::query()->where('category_id','=',$data->category_id)->get();
            $listing_info = $data;
            $listing_info_cookie = json_decode(request()->cookie('inilalize'), true);
            $payment_client_option = detect_payment_client_ways::get_client_payment($listing_info_cookie['rent_or_sale']);
        }
        return [
            'listing_info'=>$listing_info,
            'payment_client_option'=>$payment_client_option
        ];
    }
}
