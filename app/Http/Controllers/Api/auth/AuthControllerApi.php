<?php

namespace App\Http\Controllers\api\auth;

use App\Http\Controllers\classes\auth\AuthServicesClass;
use App\Http\Controllers\Controller;
use App\Http\Requests\usersFormRequest;
use App\Http\traits\messages;
use App\Services\auth\register_service;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AuthControllerApi extends AuthServicesClass
{
    use messages;
    public function login_api(){
        $data = Validator::make(request()->all(),[
            'email'=>'required',
            'password'=>'required',
        ]);

        if(sizeof($data->errors()) == 0) {

            $credential = request()->only(['email', 'password']);
            $token = auth('api')->attempt($credential);
            if(!$token){
                return messages::error_output(trans('errors.unauthenticated'));
            }else {
                $user = auth('api')->user();
                $user['token'] =  $token;
                return messages::success_output('',$user);
            }
        }else{
            return messages::error_output($data->errors());
        }
    }
}
