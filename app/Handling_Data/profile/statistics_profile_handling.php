<?php


namespace App\Handling_Data\profile;


use App\Models\listings_info;
use App\Services\users\listings_statistics_data;

class statistics_profile_handling
{
    public static function handle_data(){
        $data = listings_statistics_data::get_data();
        // get data of listings at this year
        $total_count_data = [];
        for($i = 1; $i<=12; $i++){
            $number = listings_info::query()
                ->where('user_id','=',auth()->id())
                ->whereMonth('created_at','=',$i)
                ->count();
            array_push($total_count_data,$number);
        }

        return [
            'statistics'=>[
                'total_search_impressions'=>$data->total_search ?? 0,
                'total_page_views'=>$data->total_no_seen ?? 0,
                'total_leads'=>$data->total_no_contact_tried ?? 0,
                'average_seen_rate'=>$data->no_listings > 0 ? intval(intval($data->total_no_seen) / intval($data->no_listings)):0,
                'average_contact_rate'=>$data->no_listings > 0 ? intval(intval($data->total_no_contact_tried) / intval($data->no_listings)):0,

            ],
            'total_count_data'=>$total_count_data,
        ];
    }
}
