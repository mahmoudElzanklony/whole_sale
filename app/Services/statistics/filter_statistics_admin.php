<?php


namespace App\Services\statistics;


use App\Models\listings_info;
use Illuminate\Support\Facades\DB;

class filter_statistics_admin
{
    public static function filter_data($type , $year = 0){
        $data = [];
        for($i = 0; $i < 12; $i++){
            $data[$i] = $i;
        }
        return $data;
    }
}
