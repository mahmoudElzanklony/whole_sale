<?php


use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\LangController;
use App\Http\Controllers\WelcomeController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\FeedbackController;

use App\Http\Controllers\NotificationsController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\CheckoutController;

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

Route::group(['middleware'=>'changeLang'],function (){
    Route::get('/',[WelcomeController::class,'index']);
    Route::get('/home',[WelcomeController::class,'index']);
    Route::get('/lang/{lang}',[LangController::class,'index']);
    // auth pages
    Route::get('/login',[AuthController::class,'login'])->name('login')->middleware('guest');
    Route::get('/register',[AuthController::class,'register'])->middleware('guest');;
    Route::get('/forget-password',[AuthController::class,'forget_password']);
    Route::get('/new-password',[AuthController::class,'new_password']);
    // profile
    Route::group(['prefix'=>'/profile'],function(){
        // edit
        Route::get('/edit',[ProfileController::class,'edit']);
        Route::get('/quotations',[ProfileController::class,'qutation_reuqest']);
        Route::get('/dashboard',[ProfileController::class,'dashboard_listings']);
        Route::get('/statistics',[ProfileController::class,'statistics']);
        Route::get('/favourites',[ProfileController::class,'favourites']);
    });
    // feedback
    Route::get('/feedback',[FeedbackController::class,'index']);
    Route::post('/import',[WelcomeController::class,'import_countries']);

    // checkout
    Route::get('/checkout',[CheckoutController::class,'index']);
    Route::get('/notifications',[NotificationsController::class,'index']);
});
