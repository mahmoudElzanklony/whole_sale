<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class quotations_orders_terms extends Model
{
    use HasFactory;

    protected $fillable = ['quotation_order_id','terms'];
}
