<?php

namespace App\Http\Controllers;

use App\Keywords\NotificationsKeywords;
use App\Models\notifications;
use App\Services\notifications\pagiante_notifications;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NotificationsController extends Controller
{
    //
    public function index(){
        if(session()->get('type') == 'admin') {
            $data = pagiante_notifications::get_notifications(0, 'admin');
        }else{
            $data = pagiante_notifications::get_notifications(auth()->id());
        }
        return Inertia::render('notifications',[
            'keywords'=>NotificationsKeywords::get_keywords(),
            'data'=>$data
        ]);
    }
}
