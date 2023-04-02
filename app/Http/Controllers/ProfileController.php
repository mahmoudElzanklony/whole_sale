<?php

namespace App\Http\Controllers;

use App\Exports\intial_template_client_export;
use App\Exports\items_info_export;
use App\Handling_Data\profile\listing_dashboard;
use App\Handling_Data\profile\personal_data_handling;
use App\Handling_Data\profile\statistics_profile_handling;
use App\Http\Controllers\classes\profile\ProfileServiceClass;
use App\Keywords\MonthsKeywords;
use App\Keywords\Profile\ProfileFavouritesKeywords;
use App\Keywords\Profile\ProfileKeywords;
use App\Keywords\Profile\ProfileLasttQuotations;
use App\Keywords\Profile\ProfileListingsKeywords;
use App\Keywords\Profile\ProfileNotesKeywords;
use App\Keywords\Profile\ProfileOffersKeywords;
use App\Keywords\Profile\ProfileQutationsKeywords;
use App\Keywords\Profile\ProfileSalesKeywords;
use App\Keywords\Profile\ProfileStatisticsKeywords;
use App\Models\brands;
use App\Models\listings_info;
use App\Models\offers;
use App\Models\quotation_orders;
use App\Models\quotations;
use App\Models\reasons_cancellation_orders;
use App\Models\User;
use App\Services\listings\favourites;
use App\Services\quoations\quoations_services;
use App\Services\users\all_listings_notes;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use Maatwebsite\Excel\Facades\Excel;


class ProfileController extends ProfileServiceClass
{
    //
    public function edit(){
        return Inertia::render('profile/main_info',[
           'keywords'=>ProfileKeywords::get_keywords(),
           'data'=>personal_data_handling::handle_data(),
           'role'=>session('type')
        ]);
    }

    public function qutation_reuqest(){
        $brands = brands::selection()->get();
        return Inertia::render('profile/qutoation_request',[
            'keywords'=>ProfileQutationsKeywords::get_keywords(),
            'brands'=>brands::selection()->get(),
            'quotations'=>quotation_orders::query()
                ->where('user_id','=',auth()->id())->get(),
        ]);
    }



    public function last_quotations(){
        return Inertia::render('profile/last_quotations',[
            'keywords'=>ProfileLasttQuotations::get_keywords(),
            'quotations'=>quotation_orders::query()->where('user_id','=',auth()->id())->get(),
            'reasons'=>reasons_cancellation_orders::selection()->get()
        ]);
    }




    public function statistics(){

        return Inertia::render('profile/statistics',[
            'keywords'=>ProfileStatisticsKeywords::get_keywords(),
            'data_statistics'=>array_values(quoations_services::get_statics()),
            'brands'=>brands::selection()->get(),
            'months'=>array_values(MonthsKeywords::get_keywords()),
        ]);
    }

    public function sales(){
        return Inertia::render('profile/sales',[
            'keywords'=>ProfileSalesKeywords::get_keywords(),
        ]);
    }

    public function orders(){
        return Inertia::render('profile/orders',[
            'keywords'=>ProfileSalesKeywords::get_keywords(),
        ]);
    }

    public function offers(){
        $data = offers::query()->with(['offer_items','user','brand'=>function($e){
            return $e->select('id',app()->getLocale().'_name as name');
        }])
            ->where('start_date','<=',date('Y-m-d'))
            ->where('end_date','>=',date('Y-m-d'))
            ->get();
        return Inertia::render('profile/offers',[
            'data'=>$data,
            'keywords'=>ProfileOffersKeywords::get_keywords(),
        ]);
    }

    public function client_template(){
        return Excel::download(new intial_template_client_export, 'template.xlsx');

    }


}
