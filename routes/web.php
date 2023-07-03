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
use App\Http\Controllers\ProductsController;
use App\Http\Controllers\DashboardController;

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
    Route::get('/logout',[AuthController::class,'logout'])->middleware('auth');
    // profile
    Route::get('/bill',[ProfileController::class,'bill']);

    Route::group(['prefix'=>'/profile','middleware'=>'auth'],function(){
        // edit
        Route::get('/edit',[ProfileController::class,'edit']);
        Route::get('/quotations',[ProfileController::class,'qutation_reuqest']);
        Route::get('/pricing',[ProfileController::class,'last_quotations']);
        Route::get('/last-quotations',[ProfileController::class,'last_quotations']);
        Route::get('/statistics',[ProfileController::class,'statistics']);
        Route::get('/sales',[ProfileController::class,'sales']);
        Route::get('/orders',[ProfileController::class,'orders']);
        Route::get('/offers',[ProfileController::class,'offers']);
        Route::get('/addresses',[ProfileController::class,'addresses']);
    });
    // products
    Route::group(['prefix'=>'/products'],function(){
        Route::get('/',[ProductsController::class,'index']);
        Route::get('/saveproduct',[ProductsController::class,'save_product']);
    });
    // feedback
    Route::get('/feedback',[FeedbackController::class,'index']);
    Route::post('/import',[WelcomeController::class,'import_countries']);
    Route::get('/common-questions',[\App\Http\Controllers\CommonQuestions::class,'index']);

    // checkout
    Route::get('/checkout',[CheckoutController::class,'index']);
    Route::get('/notifications',[NotificationsController::class,'index'])->middleware('auth');


    Route::group(['prefix'=>'/dashboard','middleware'=>['auth','checkAdmin']],function(){
        Route::get('/',[DashboardController::class,'index']);
        Route::get('/home',[DashboardController::class,'index']);
        Route::get('/notifications',[DashboardController::class,'notifications']);
        Route::get('/users',[DashboardController::class,'users']);
        Route::get('/brands',[DashboardController::class,'brands']);
        Route::get('/upload',[DashboardController::class,'upload_files']);

        Route::get('/products',[DashboardController::class,'products']);
        Route::get('/statistics',[DashboardController::class,'statistics']);
        Route::get('/sales',[DashboardController::class,'sales']);
        Route::get('/orders',[DashboardController::class,'orders']);
        Route::get('/reports',[DashboardController::class,'reports']);
        Route::get('/support',[DashboardController::class,'support']);
        Route::get('/settings',[DashboardController::class,'settings']);
        Route::get('/personal-info',[DashboardController::class,'personal_info']);
        Route::get('/timer',[DashboardController::class,'timer']);
        Route::get('/pricing-requests',[DashboardController::class,'quotations']);
        Route::get('/supervisors',[DashboardController::class,'supervisors']);
        Route::get('/countries',[DashboardController::class,'countries']);
        Route::get('/common-questions',[DashboardController::class,'common_questions']);
        Route::get('/offers',[DashboardController::class,'offers']);
    });

    Route::get('/sendmail',[\App\Http\Controllers\MailController::class,'basic_email']);

    // export file at actions
    Route::get('/template-excel',[ProfileController::class,'client_template']);

});
