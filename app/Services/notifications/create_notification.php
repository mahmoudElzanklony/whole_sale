<?php


namespace App\Services\notifications;


use App\Models\notifications;

class create_notification
{
    public static function new_notification($data){
        notifications::query()->create($data);
    }
}
