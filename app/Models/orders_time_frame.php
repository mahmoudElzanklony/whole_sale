<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class orders_time_frame extends Model
{
    use HasFactory;

    protected $fillable = ['max_time'];
}
