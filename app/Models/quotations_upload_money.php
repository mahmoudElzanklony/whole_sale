<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class quotations_upload_money extends Model
{
    use HasFactory;

    protected $fillable = ['quotation_id','file'];
}
