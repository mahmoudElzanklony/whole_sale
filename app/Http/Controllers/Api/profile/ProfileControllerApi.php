<?php

namespace App\Http\Controllers\Api\profile;

use App\Handling_Data\profile\statistics_profile_handling;
use App\Http\Controllers\classes\profile\ProfileServiceClass;
use App\Http\traits\messages;
use App\Models\listings_info;
use App\Services\listings\favourites;
use App\Services\users\all_listings_notes;
use Illuminate\Http\Request;

class ProfileControllerApi extends ProfileServiceClass
{
    //
    public function get_favs(){
        $favourites = favourites::fav();
        return messages::success_output('',$favourites);
    }

    public function get_listings(){
        $data = listings_info::selection()->where('user_id','=',auth()->id())->with('images');
        if(request()->has('type')) {
            if (request('type') == 'deleted') {
                $data = $data->onlyTrashed()->paginate(8);
            } else {
                $data = $data->where('type', '=', request('type'))->paginate(8);
            }

        }else{
            $data = $data->withTrashed()->paginate(8);
        }
        return messages::success_output('', $data);
    }

    public function listings_statistics(){
        return messages::success_output('',statistics_profile_handling::handle_data());
    }

    public function notes(){
        return messages::success_output('',all_listings_notes::get_notes());
    }
}
