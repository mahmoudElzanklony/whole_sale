<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class supplier_data extends Model
{
    use HasFactory;

    protected $fillable = ['user_id','currency','delivery_terms'];
}
