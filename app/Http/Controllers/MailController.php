<?php

namespace App\Http\Controllers;

use App\Mail\Myemail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class MailController extends Controller
{
    //
    public function basic_email() {
        $details = [
            'title' => 'Mail from ItSolutionStuff.com',
            'body' => 'This is for testing email using smtp',
            'link'=>'1234',
        ];

        \Mail::to('hoda19972016@gmail.com')->send(new Myemail($details));

        dd("Email is Sent.");
    }
}
