<?php


namespace App\Services\auth;


use App\Models\roles;
use App\Models\User;
use App\Http\traits\messages;
use App\Models\user_company_info;
use App\Models\user_info;
use App\Models\users_bank;
use App\Models\users_brands;

class register_service
{
    use messages;
    public static function register_process($req,$validated){
        $user_info_brands_info = $validated;
        // check session exists
        if(session()->has('personal_data') && session()->has('bank_data')){

            // personal info
            $personal_info = session()->get('personal_data');
            $personal_info['serial'] = rand(0,9999999999999999);
            $personal_info['password'] = bcrypt($personal_info['password']);
            $personal_info['image'] = 'default.png';
            $personal_info['approved'] = 0;
            $personal_info['wallet'] = 0;
            $user = User::query()->create($personal_info);

            // bank data
            $bank_data = session()->get('bank_data');
            $bank_data['user_id'] = $user->id;
            users_bank::query()->create($bank_data);

            // brands data
            $brands = $user_info_brands_info['brands'];
            foreach($brands as $brand){
                users_brands::query()->create([
                   'user_id'=>$user->id,
                   'brand_id'=>$brand
                ]);
            }

            // delete sessions
            session()->forget('personal_data');
            session()->forget('bank_data');

        }

    }
}
