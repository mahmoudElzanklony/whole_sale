<?php

namespace App\Http\Controllers\classes\auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\usersFormRequest;
use App\Http\traits\messages;
use App\Models\roles;
use App\Services\auth\register_service;
use Illuminate\Http\Request;

class AuthServicesClass extends Controller
{
    use messages;
    //
    // post
    public function register_post(usersFormRequest $request){
        return register_service::register_process(request(),$request->validated());
    }

    // post
    public function login_post(usersFormRequest $request){
        if(auth()->attempt($request->validated())){
            session()->push('type',roles::query()->find(auth()->user()->role_id)->name);
            return messages::success_output(['message'=>'','user'=>auth()->user()]);
        }
        return messages::error_output(['message'=>trans('messages.unauthenticated_err_form')]);
    }
}
