<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class cancelled_quotations extends Model
{
    use HasFactory;

    protected $fillable = ['quotation_id','cancelled_id'];
}
