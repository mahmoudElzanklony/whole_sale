<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class orders_address extends Model
{
    use HasFactory;

    protected $fillable = ['quotation_order_id','address_id'];

    public function address(){
        return $this->belongsTo(addresses::class,'address_id')->withTrashed();
    }
}
