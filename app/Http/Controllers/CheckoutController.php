<?php

namespace App\Http\Controllers;

use App\Keywords\CheckoutKeywords;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CheckoutController extends Controller
{
    //
    public function index(){
        return Inertia::render('checkout',[
            'keywords'=>CheckoutKeywords::get_keywords()
        ]);
    }
}
