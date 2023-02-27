<?php


namespace App\Services;


use App\Models\User;

class get_first_admin
{
    public static function get_admin(){
        return User::query()->whereHas('role',function ($e){
            $e->where('name','=','admin');
        })->first();
    }
}
