<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class receipt_quotations extends Model
{
    use HasFactory;

    protected $fillable = ['quotation_id','image'];
}
