<?php


use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UsersController;
use App\Http\Controllers\CategoriesController;
use App\Http\Controllers\ListingPostController;
use App\Http\Controllers\QuestionsController;
use App\Http\Controllers\AreasController;
use App\Http\Controllers\PaymentWaysController;
use App\Http\Controllers\AskNeighborsController;
use App\Http\Controllers\classes\general\GeneralServiceController;
use App\Http\Controllers\classes\listings\ListingsServiceClass;

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
    Route::post('/register',[AuthController::class,'register_post']);
    Route::post('/login',[AuthController::class,'login_post']);
    // profile
    Route::group(['prefix'=>'/profile','middleware'=>['auth']],function(){
        Route::post('/update-email-image',[ProfileController::class,'update_email_image']);
        Route::post('/update-password',[ProfileController::class,'update_password']);
        Route::post('/update-personal-data',[ProfileController::class,'update_personal_data']);
        Route::post('/update-company-data',[ProfileController::class,'update_company_data']);
        Route::post('/update-secondary-data',[ProfileController::class,'update_secondary_data']);
        Route::post('/save-note',[ProfileController::class,'save_note']);
    });
    // user
    Route::group(['prefix'=>'/user'],function(){
        Route::post('/toggle-fav',[UsersController::class,'toggle_fav'])->middleware('auth');
        Route::post('/show-seller-phone',[UsersController::class,'show_seller_phone']);
    });
    // general
    Route::post('/deleteitem',[GeneralServiceController::class,'delete_item']);
    Route::post('/paginate-notifications',[GeneralServiceController::class,'paginate_notification_data']);
    // map
    Route::post('/map/get-map-type-data',[GeneralServiceController::class,'get_map_data_type']);
    Route::post('/map/get_next_map_type_from_previous_value',[GeneralServiceController::class,'get_next_map_type']);
    // categories
    Route::group(['prefix'=>'/categories'],function(){
       Route::post('/get-subcategories-where',[CategoriesController::class,'get_sub_where']);
       Route::post('/get-parent',[CategoriesController::class,'get_parent']);
    });
    // listings
    Route::group(['prefix'=>'/listings'],function(){
       Route::post('/save-inilaize',[ListingPostController::class,'save_inilaize']);
       Route::post('/save-listing-info',[ListingPostController::class,'save_listing_info']);
       Route::post('/save-photos',[ListingPostController::class,'save_photos']);
       Route::post('/payment',[ListingPostController::class,'payment_points']);
    });
    // listings statics
    Route::group(['prefix'=>'/listings-statistics'],function(){
        Route::post('/seen',[ListingsServiceClass::class,'seen']);
        Route::post('/search',[ListingsServiceClass::class,'search']);
        Route::post('/call',[ListingsServiceClass::class,'call']);
    });
    // questions
    Route::group(['prefix'=>'/questions'],function(){
       Route::post('/get-questions',[QuestionsController::class,'get_questions']);
    });
    // areas
    Route::group(['prefix'=>'/areas'],function(){
        Route::post('/search',[AreasController::class,'search']);
    });
    // payment ways
    Route::group(['prefix'=>'/payment-ways'],function(){
        Route::post('/find',[PaymentWaysController::class,'get_payment_methods']);
    });
    // discussions
    Route::group(['prefix'=>'/discussions','middleware'=>['auth']],function(){
        Route::post('/addquestion',[AskNeighborsController::class,'addquestion']);
        Route::post('/answer-react',[AskNeighborsController::class,'answer_react']);
        Route::post('/add-answer',[AskNeighborsController::class,'add_answer']);
    });

});
