<?php


use Illuminate\Support\Facades\Route;
use App\Http\Controllers\classes\DashboardServiceClass;

use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Facades\DB;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::group(['middleware'=>'changeLang','prefix'=>'/dashboard'],function (){
    Route::post('/save-brand',[DashboardServiceClass::class,'save_brand']);
    Route::post('/save-user',[DashboardServiceClass::class,'save_user']);
    Route::post('/save-files',[DashboardServiceClass::class,'save_files']);
    Route::post('/filter-statistics',[DashboardServiceClass::class,'filter_statistics']);
    Route::post('/save-support',[DashboardServiceClass::class,'save_support']);
    Route::post('/save-settings',[DashboardServiceClass::class,'save_settings']);
    Route::post('/save-question',[DashboardServiceClass::class,'save_question']);
    Route::post('/save-country',[DashboardServiceClass::class,'save_country']);
    Route::post('/save-offer',[DashboardServiceClass::class,'save_offers']);
    Route::post('/get-pages',[DashboardServiceClass::class,'get_pages']);
});
