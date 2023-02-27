<?php

namespace App\Http\Controllers;

use App\Keywords\FeedbackKeywords;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FeedbackController extends Controller
{
    //
    public function index(){
        return Inertia::render('feedback',[
            'keywords'=>FeedbackKeywords::get_keywords()
        ]);
    }
}
