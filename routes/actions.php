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
use App\Http\Controllers\QuoationsInfoController;
use App\Http\Controllers\BrandsController;

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
    Route::group(['prefix'=>'/register','middleware'=>['guest']],function(){
        Route::post('/store-user-from-register',[AuthController::class,'register_post']);
        Route::post('/store-personal-data',[AuthController::class,'store_personal_info']);
        Route::post('/store-bank-data',[AuthController::class,'store_bank_info']);

    });
    Route::post('/login',[AuthController::class,'login_post']);
    Route::post('/login/selectrole',[AuthController::class,'selectrole']);
    Route::post('/newpass',[AuthController::class,'newpass']);

    Route::post('/sendmail',[AuthController::class,'sendmail']);

    // profile
    Route::group(['prefix'=>'/profile','middleware'=>['auth']],function(){
        Route::post('/send-activation',[ProfileController::class,'send_activation']);
        Route::post('/update-email-image',[ProfileController::class,'update_email_image']);
        Route::post('/update-password',[ProfileController::class,'update_password']);
        Route::post('/update-personal-data',[ProfileController::class,'update_personal_data']);
        Route::post('/update-secondary-data',[ProfileController::class,'update_secondary_data']);
        Route::post('/send-quotation',[ProfileController::class,'send_quotation']);
        Route::post('/preview-request',[ProfileController::class,'preview_request']);
        Route::post('/send-quotation-excel',[ProfileController::class,'send_quotation_excel']);
    });
    // user
    Route::group(['prefix'=>'/user'],function(){
        Route::post('/toggle-fav',[UsersController::class,'toggle_fav'])->middleware('auth');
        Route::post('/show-seller-phone',[UsersController::class,'show_seller_phone']);
    });
    // general
    Route::post('/deleteitem',[GeneralServiceController::class,'delete_item']);
    Route::post('/paginate-notifications',[GeneralServiceController::class,'paginate_notification_data']);
    Route::post('/paginate-data',[GeneralServiceController::class,'paginate_data_definisons']);

    // quotations
    Route::group(['prefix'=>'/quotations'],function(){
        Route::get('/export-file',[QuoationsInfoController::class,'export_file']);
        Route::get('/export-offer',[QuoationsInfoController::class,'export_offer']);
        Route::get('/export-vendor-file',[QuoationsInfoController::class,'export_vendor_file']);
        Route::post('/get-quotations-info',[QuoationsInfoController::class,'get_info']);
        Route::post('/get-quotations-info-admin',[QuoationsInfoController::class,'quotations_info_admin']);
        Route::post('/upload-excel-admin',[QuoationsInfoController::class,'upload_excel_admin']);
        Route::post('/send-agreement-to-admin',[QuoationsInfoController::class,'send_agreement_to_admin']);
        Route::post('/change-status-of-request',[QuoationsInfoController::class,'change_status_of_request']);
        Route::post('/save-tax',[QuoationsInfoController::class,'save_tax']);
        Route::post('/get-receipt',[QuoationsInfoController::class,'get_receipt']);
        Route::post('/get-money-file',[QuoationsInfoController::class,'get_money']);
        Route::post('/send-file-money-to-admin',[QuoationsInfoController::class,'send_file_money_to_admin']);
        Route::post('/get-vendors-per-request',[QuoationsInfoController::class,'get_vendors_per_request']);
        Route::post('/add-vendors-per-request',[QuoationsInfoController::class,'add_vendors_per_request']);
        Route::post('/cancel-request',[QuoationsInfoController::class,'cancel_request']);
        Route::post('/get-offer-info',[QuoationsInfoController::class,'get_offer_info']);
        Route::post('/get-offers-data-for-offers-page',[QuoationsInfoController::class,'get_offers_data']);
        // statistics
        Route::post('/search-statics',[QuoationsInfoController::class,'search_statistics']);
    });
   // categories
    Route::group(['prefix'=>'/categories'],function(){
       Route::post('/get-subcategories-where',[CategoriesController::class,'get_sub_where']);
       Route::post('/get-parent',[CategoriesController::class,'get_parent']);
    });

    // brands
    Route::group(['prefix'=>'/brands'],function(){
        Route::get('/getall',[BrandsController::class,'get_data']);
    });

    // quotations
    Route::group(['prefix'=>'/quotations'],function (){
       Route::post('/save-quotation-at-draft',[QuoationsInfoController::class,'save_quotation_at_draft']);
    });



    Route::any('/dashboard/paginate-orders',[\App\Http\Controllers\DashboardController::class,'paginate_products']);

});
