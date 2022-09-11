<?php

namespace App\Http\Controllers;

use App\Handling_Data\profile\listing_dashboard;
use App\Handling_Data\profile\personal_data_handling;
use App\Handling_Data\profile\statistics_profile_handling;
use App\Http\Controllers\classes\profile\ProfileServiceClass;
use App\Keywords\Profile\ProfileFavouritesKeywords;
use App\Keywords\Profile\ProfileKeywords;
use App\Keywords\Profile\ProfileListingsKeywords;
use App\Keywords\Profile\ProfileNotesKeywords;
use App\Keywords\Profile\ProfileQutationsKeywords;
use App\Keywords\Profile\ProfileStatisticsKeywords;
use App\Models\listings_info;
use App\Models\User;
use App\Services\listings\favourites;
use App\Services\users\all_listings_notes;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class ProfileController extends ProfileServiceClass
{
    //
    public function edit(){
        return Inertia::render('profile/main_info',[
           'keywords'=>ProfileKeywords::get_keywords(),
           'data'=>personal_data_handling::handle_data(),
           'role'=>'seller'
        ]);
    }

    public function qutation_reuqest(){
        return Inertia::render('profile/qutoation_request',[
            'keywords'=>ProfileQutationsKeywords::get_keywords(),
        ]);
    }

    public function dashboard_listings(){
        return Inertia::render('profile/listings_dashboard',[
            'keywords'=>ProfileListingsKeywords::get_keywords(),
            'data'=> listing_dashboard::handle_data(request()->has('tab') ? request('tab') : 'live_listings'),
        ]);
    }

    public function statistics(){
        return Inertia::render('profile/statistics',[
            'keywords'=>ProfileStatisticsKeywords::get_keywords(),
            'data_statistics'=>[0,0,0,0,10,20,30,4,15,50,20,60],
        ]);
    }

    public function favourites(){
        $data = favourites::fav();
        return Inertia::render('profile/favourites',[
            'keywords'=>ProfileFavouritesKeywords::get_keywords(),
            'data'=>$data,
        ]);
    }


    public function notes(){

        return Inertia::render('profile/notes',[
            'data'=>all_listings_notes::get_notes(),
            'keywords'=>ProfileNotesKeywords::get_keywords(),
        ]);
    }
}
