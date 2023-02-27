<?php


namespace App\Handling_Data\dashboard;



use App\Models\privillages;
use App\Models\User;

class supervisors_dashboard
{
    public static function handle_data(){

        return [
            'data'=>[
                'supervisors'=>User::query()->with('privileges')
                    ->whereHas('role',function ($e){
                    $e->where('name','=','supervisor');
                })->get(),
                'privileges'=>privillages::selection()->get()
            ],
            'table_head_keys'=>[
                'image'=>trans('keywords.image'),
                'username'=>trans('keywords.username'),
                'email'=>trans('keywords.email'),
                'phone'=>trans('keywords.phone'),
                'privileges'=>trans('keywords.privileges'),
                'actions'=>trans('keywords.actions'),
            ],
            'data_model'=>[
                'username'=>trans('keywords.username'),
                'email'=>trans('keywords.email'),
                'password'=>trans('keywords.password'),
                'phone'=>trans('keywords.phone'),
                'privileges'=>trans('keywords.privileges'),
            ]
        ];
    }
}
