<?php

namespace App\Http\Controllers;

use App\Keywords\WelcomeKeyWords;
use App\Models\brands;
use App\Models\categories;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Maatwebsite\Excel\Facades\Excel;
use App\Imports\countriesImportCSV;

class WelcomeController extends Controller
{
    //
    public function index(){
        //return request()->cookie('inilalize');
        if(request()->has('id') && request()->has('serial')){
            $user = User::query()->where('id','=',request('id'))
                ->where('password','=',request('serial'))->first();
            if($user != null){
                $user->approved = 1;
                $user->save();
                $approved_status = ['success',trans('keywords.email_activation_successfully')];
            }else{
                $approved_status = ['error',trans('keywords.email_not_activated_yet')];
            }
        }else{
            $approved_status = '';
        }
        return Inertia::render('home',[
            'keywords'=> WelcomeKeyWords::get_key_words(),
            'brands'=>brands::selection()->get(),
            'approved_status'=>$approved_status,
        ]);
    }

    public function import_countries(){
        $data =  Excel::import(new countriesImportCSV, request()->file('file'));
        return response()->json($data);
    }
}
