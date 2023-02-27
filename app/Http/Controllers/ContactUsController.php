<?php

namespace App\Http\Controllers;

use App\Keywords\ContactUsKeywords;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ContactUsController extends Controller
{
    //
    public function index(){
        return Inertia::render('contactus',[
           'keywords'=>ContactUsKeywords::get_keywords(),
        ]);
    }
}
