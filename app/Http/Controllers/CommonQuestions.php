<?php

namespace App\Http\Controllers;

use App\Models\common_questions;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CommonQuestions extends Controller
{
    //
    public function index(){
        return Inertia::render('common_questions',[
           'most_questions'=>common_questions::selection()->get()
        ]);
    }
}
