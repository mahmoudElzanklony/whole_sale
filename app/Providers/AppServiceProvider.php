<?php

namespace App\Providers;

use App\Models\favourites;
use App\Models\notifications;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
        Inertia::share('user', function () {
            if (Auth::user()) {
                return auth()->user();
            }
        });
        Inertia::share('lang', function () {
            if(!(session()->has('lang'))){
                 session()->put('lang','ar');
            }
            return session()->get('lang');

        });
        Inertia::share('checkout', function () {
            if (Auth::user()) {
                return session()->has('products') ?  sizeof(session()->get('products')): 0;
            }
        });
        Inertia::share('numberofnotifications', function () {

            if (Auth::user()) {
                if(auth()->user()->type == 'admin'){
                    $admins_ids = User::query()->where('type','=','admin')->select('id')->get()->map(function($e){
                        return $e['id'];
                    });
                    return notifications::whereIn('receiver_id',$admins_ids)
                        ->where('seen', '=', 0)->count();
                }else {
                    return notifications::where('receiver_id', '=', auth()->user()->id)->where('seen', '=', 0)->count();
                }
            }
        });
        Inertia::share('fav', function () {
            if (Auth::user()) {
                return favourites::where('user_id','=',auth()->user()->id)->count();
            }
        });
        Inertia::share('sessions_data', function () {

            return session()->get('message');
        });

    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
        Schema::defaultStringLength(191);
    }
}
