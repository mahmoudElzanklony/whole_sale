<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class Myemail extends Mailable
{
    use Queueable, SerializesModels;

    public $deatils;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($details)
    {
        $this->details = $details;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $title = '';
        if(is_array($this->details['title'])){
            foreach($this->details['title']['ar'] as $t){
                $title = $title . $t;
            }
            $title = $title . ' ( ';
            foreach($this->details['title']['en'] as $t){
                $title = $title . $t;
            }
            $title = $title . ' ) ';
        }else{
            $title = $this->details['title'];
        }
        return $this->subject($title)
            ->view('emails.email')->with('details',$this->details);
    }
}
