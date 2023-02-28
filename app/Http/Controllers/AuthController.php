<?php

namespace App\Http\Controllers;

use App\Http\Controllers\classes\auth\AuthServicesClass;
use App\Http\Requests\usersFormRequest;
use App\Keywords\AuthKeywords;
use App\Models\brands;
use App\Models\countries;
use App\Models\roles;
use App\Models\User;
use App\Services\auth\register_service;
use Illuminate\Http\Request;
use Inertia\Inertia;


class AuthController extends AuthServicesClass
{
    // get
    public function register(){
        if(request()->has('type') && request('type') == 'bank-info'){
            return Inertia::render('auth/sign_up_bank',[
                'keywords'=>AuthKeywords::get_keywords(),
                'data'=>session()->get('bank_data') ?? null,
            ]);
        }else if(request()->has('type') && request('type') == 'brands'){
            return Inertia::render('auth/sign_up_brands',[
                'keywords'=>AuthKeywords::get_keywords(),
                'brands'=>brands::selection()->get()
            ]);
        }else{
            $roles = roles::query()->where('name','!=','admin')->get();
            return Inertia::render('auth/sign_up',[
                'keywords'=>AuthKeywords::get_keywords(),
                'data'=>$roles,
                'countries'=>countries::selection()->get(),
                'stored_info'=>session()->get('personal_data') ?? null,
                'user_type_id'=>(request()->has('user_type') && request('user_type') == 'seller') ? 'yes' :null,
            ]);
        }
    }



    public function login(){
        return Inertia::render('auth/sign_in',[
            'keywords'=>AuthKeywords::get_keywords(),
        ]);
    }

    public function forget_password(){
        return Inertia::render('auth/forget_password',[
            'keywords'=>[
                'email'=>trans('keywords.email'),
                'save'=>trans('keywords.save'),
                'have_already_account'=>trans('keywords.have_already_account'),
                'sign_in'=>trans('keywords.sign_in'),
                'forget_password'=>trans('keywords.forget_password'),
                'send'=>trans('keywords.send'),
            ]
        ]);
    }

    public function new_password(){
        if(request()->has('id') && request()->has('serial')){
            $user = User::query()
                ->where('id','=',request('id'))
                ->where('serial_number','=',request('serial'))
                ->first();
            if($user != null){
                return Inertia::render('auth/new_password',[
                    'keywords'=>[
                        'password'=>trans('keywords.password'),
                        'password_confirmed'=>trans('keywords.password_confirmed'),
                        'save'=>trans('keywords.save'),
                        'have_already_account'=>trans('keywords.have_already_account'),
                        'send'=>trans('keywords.send'),
                        'make_new_password'=>trans('keywords.make_new_password'),
                    ],
                    'email'=>$user->email,
                ]);
            }else{
                return redirect('/');
            }
        }else{
            return redirect('/');
        }
    }

}
