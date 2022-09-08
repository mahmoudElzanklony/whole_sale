<?php


namespace App\Handling_Data\dashboard;


use App\Models\currencies;
use App\Models\listings_info;

class listings_dashboard
{
    public static function handle_data(){
        return [
            'data'=> listings_info::selection()->get()
        ];
    }
}
