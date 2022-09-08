<?php

namespace App\Http\Controllers;

use App\Keywords\NotificationsKeywords;
use App\Services\notifications\pagiante_notifications;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NotificationsController extends Controller
{
    //
    public function index(){
        $data = pagiante_notifications::get_notifications(auth()->id());
        return Inertia::render('notifications',[
            'keywords'=>NotificationsKeywords::get_keywords(),
            'data'=>$data
        ]);
    }
}
