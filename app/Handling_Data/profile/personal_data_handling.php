<?php


namespace App\Handling_Data\profile;


use App\Models\brands;
use App\Models\User;
use App\Models\user_company_info;
use App\Models\user_info;
use App\Models\users_bank;
use App\Models\users_brands;

class personal_data_handling
{
    public static function handle_data(){
        return [
            /*'bank_info'=>(session('type') == 'seller' || session('type') == 'buyer_seller') ?
                        users_bank::query()->where('user_id','=',auth()->id())->first():null,
            'brands_info'=>(session('type') == 'seller' || session('type') == 'buyer_seller') ?
                users_brands::query()->where('user_id','=',auth()->id())->get():null,*/
            'all_brands'=>brands::selection()->get(),
        ];

    }
}
