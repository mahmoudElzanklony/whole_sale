<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LangController extends Controller
{
    //
    public function index($lang){
        if($lang == "ar"){
            app()->setLocale('ar');
        }else if($lang == "en"){
            app()->setLocale('en');
        }else if($lang == "tu"){
            app()->setLocale('tu');
        }else{
            app()->setLocale('ar');
        }
        session()->put('lang',app()->getLocale());
        return back();
    }
}
