<?php

namespace App\Http\Controllers;

use App\Handling_Data\dashboard\brands_dashboard;
use App\Handling_Data\dashboard\common_questions_dashboard;
use App\Handling_Data\dashboard\countries_dashboard;
use App\Handling_Data\dashboard\offers_dashboard;
use App\Handling_Data\dashboard\orders_dashboard;
use App\Handling_Data\dashboard\products_dashboard;
use App\Handling_Data\dashboard\quotations_dashboard;
use App\Handling_Data\dashboard\reports_dashboard;
use App\Handling_Data\dashboard\statistics_dashboard;
use App\Handling_Data\dashboard\statistics_public_dashboard;
use App\Handling_Data\dashboard\supervisors_dashboard;
use App\Handling_Data\dashboard\support_dashboard;
use App\Http\Controllers\classes\DashboardServiceClass;
use App\Http\Requests\usersFormRequest;
use App\Keywords\dashboard\BrandsKeywords;
use App\Keywords\dashboard\IndexKeywords;
use App\Keywords\dashboard\ProductsKeywords;
use App\Keywords\dashboard\StatisticsKeywords;
use App\Keywords\DaysKeywords;
use App\Keywords\MonthsKeywords;
use App\Keywords\Profile\ProfileLasttQuotations;
use App\Models\categories;
use App\Models\countries;
use App\Models\notifications;
use App\Models\offers;
use App\Models\tax_money;
use App\Models\User;
use App\Services\notifications\pagiante_notifications;
use App\Services\statistics\filter_statistics_admin;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Date;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class DashboardController extends DashboardServiceClass
{
    //

    public function __construct()
    {
        if(session()->get('type') != 'admin'){
           // return redirect('/')->send();
        }
        // note
        // change-map make this route public for any one not only admin
    }

    public function index(){
        return Inertia::render('dashboard/index',[
            'keywords'=>IndexKeywords::get_keywords(),
            'data'=>[
               'last_listings'=>0,
               'pending_listings'=>0,
               'subscriptions'=>0,
               'categories'=>0,
                'statistics'=>filter_statistics_admin::filter_data('listings_infos',intval(date("Y"))),
                'months'=>MonthsKeywords::get_keywords(),
            ],
        ]);
    }

    public function notifications(){

        return Inertia::render('dashboard/notifications',[
            'keywords'=>[
                'notifications'=>trans('keywords.notifications'),
            ],
            'data'=>['data'=>0],
        ]);
    }

    public function users(){
        return Inertia::render('dashboard/users',[
            'keywords'=>[
                'main_title'=>trans('keywords.users_statics'),
                'update_user'=>trans('keywords.update_user'),
                'upload_image'=>trans('keywords.upload_image'),
            ],
            'handling_data'=>statistics_dashboard::handle_data(),
        ]);
    }

    public function brands(){
        return Inertia::render('dashboard/brands',[
            'main_title'=>trans('keywords.brands'),
            'handling_data'=>brands_dashboard::handle_data(),
        ]);
    }

    public function upload_files(){
        return Inertia::render('dashboard/upload_files',[
            'main_title'=>trans('keywords.upload_files'),
            'handling_data'=>[
                'keywords'=>[
                    'download_current_version'=>trans('keywords.download_current_version'),
                ]
            ],
        ]);
    }


    public function paginate_products(){
        $draw = request('draw');
        $start = request('start');
        $length = request('length');


        $members = DB::table('quotations')->orderBy('id','DESC');
            if(strlen(request('search')['value']) > 0){
                $members->where('id','LIKE','%'.request('search')['value'].'%')
                         ->orWhere('brand','LIKE','%'.request('search')['value'].'%');
            }
            $members = $members->paginate($length,['*'],'page',$start/$length + 1);
            $total_members = $members->total(); // get your total no of data;
        $data = array(
            'draw' => $draw,
            'recordsTotal' => $total_members,
            'recordsFiltered' => $total_members,
            'data' => $members->items(),
        );

        echo json_encode($data);
    }

    public function products(){
        return Inertia::render('dashboard/products',[
            'keywords'=>ProductsKeywords::get_keywords(),
            'handling_data'=>products_dashboard::handle_data(),
        ]);
    }

    public function sales(){
        return Inertia::render('dashboard/sales',[
            'main_title'=>trans('keywords.sales'),
            'handling_data'=>orders_dashboard::handle_data(),
        ]);
    }

    public function orders(){
        return Inertia::render('dashboard/orders',[
            'main_title'=>trans('keywords.orders'),
            'handling_data'=>orders_dashboard::handle_data(),
        ]);
    }



    public function statistics(){
        if(request()->has('type')) {
            $data = filter_statistics_admin::filter_data(request('type'));

            return Inertia::render('dashboard/specific_statistics', [
                'keywords' => [
                    'main_title'=>trans('keywords.statistics').' '.trans('keywords.'.request('type')),
                    'months'=>MonthsKeywords::get_keywords(),
                ],
                'handling_data' => $data,
            ]);
        }else{
            return Inertia::render('dashboard/statistics', [
                'keywords' => StatisticsKeywords::get_keywords(),
                'handling_data' => statistics_public_dashboard::handle_data(),
            ]);
        }
    }


    public function reports(){
        return Inertia::render('dashboard/reports',[
            'main_title'=>trans('keywords.reports'),
            'handling_data' => reports_dashboard::handle_data(),
        ]);
    }

    public function support(){
        return Inertia::render('dashboard/support',[
            'main_title'=>trans('keywords.support'),
            'handling_data' => support_dashboard::handle_data(),
        ]);
    }

    public function subscriptions(){
        return Inertia::render('dashboard/subscriptions',[
            'main_title'=>trans('keywords.subscriptions'),
            'handling_data' => subscriptions_dashboard::handle_data(),
        ]);
    }

    public function pointad(){
        return Inertia::render('dashboard/pointad',[
            'main_title'=>trans('keywords.pointad'),
            'handling_data' => pointad_dashboard::handle_data(),
        ]);
    }

    public function settings(){
        return Inertia::render('dashboard/settings',[
            'tax_val'=>tax_money::query()->first() != null ? tax_money::query()->first()->tax : null,
            'main_title'=>trans('keywords.tax_title'),

        ]);
    }

    public function personal_info(){
        return Inertia::render('dashboard/personal_info',[
            'main_title'=>trans('keywords.update_main_info'),
            'countries'=>countries::selection()->get(),
            'keywords'=>[
                'username'=>trans('keywords.username'),
                'email'=>trans('keywords.email'),
                'password'=>trans('keywords.password'),
                'country_id'=>trans('keywords.country'),
                'phone'=>trans('keywords.phone'),
            ]
        ]);
    }

    public function timer(){
        return Inertia::render('dashboard/timer',[
            'main_title'=>trans('keywords.timer_settings'),
            'keywords'=>[
                'time_allowed_per_order'=>trans('keywords.time_allowed_per_order'),
            ]
        ]);
    }


    public function quotations(){
        return Inertia::render('dashboard/quotations',[
            'main_title'=>trans('keywords.last_quotations_out'),
            'handling_data' => quotations_dashboard::handle_data(),
            'keywords'=>ProfileLasttQuotations::get_keywords(),
        ]);
    }

    public function supervisors(){
        return Inertia::render('dashboard/supervisors',[
            'main_title'=>trans('keywords.supervisors'),
            'handling_data' => supervisors_dashboard::handle_data(),
            'keywords'=>[
                'update_user'=>trans('keywords.update_info'),
                'upload_image'=>trans('keywords.upload_image'),
            ],
        ]);
    }

    public function countries(){
        return Inertia::render('dashboard/countries',[
            'main_title'=>trans('keywords.countries'),
            'handling_data' => countries_dashboard::handle_data(),
        ]);
    }

    public function common_questions(){
        return Inertia::render('dashboard/common_questions',[
            'main_title'=>trans('keywords.common_questions'),
            'handling_data' => common_questions_dashboard::handle_data(),
            'keywords'=>[
                'update_user'=>trans('keywords.update_info'),
                'upload_image'=>trans('keywords.upload_image'),
            ],
        ]);
    }

    public function offers(){
        return Inertia::render('dashboard/offers',[
            'main_title'=>trans('keywords.offers'),
            'handling_data' => offers_dashboard::handle_data(),
            'keywords'=>[
                'seller_related_offer'=>trans('keywords.seller_related_offer'),
                'file'=>trans('keywords.file'),
                'start_date'=>trans('keywords.start_date'),
                'end_date'=>trans('keywords.end_date'),
                'brand'=>trans('keywords.brand'),
            ],
        ]);
    }
}
