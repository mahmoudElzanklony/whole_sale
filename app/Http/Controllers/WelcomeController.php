<?php

namespace App\Http\Controllers;

use App\Keywords\WelcomeKeyWords;
use App\Models\categories;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Maatwebsite\Excel\Facades\Excel;
use App\Imports\countriesImportCSV;

class WelcomeController extends Controller
{
    //
    public function index(){
        //return request()->cookie('inilalize');
        return Inertia::render('home',[
            'keywords'=> WelcomeKeyWords::get_key_words()
        ]);
    }

    public function import_countries(){
        $data =  Excel::import(new countriesImportCSV, request()->file('file'));
        return response()->json($data);
    }
}
