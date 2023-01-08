<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class quotation_orders extends Model
{
    use HasFactory;
    /*
     is_completed = 0 ==> at make quotation order
     is_completed = 1 ==> when admin reply with seller quotations
     is_completed = 2 ==> when user is agreement and make to finish request
     is_completed = 3 ==> when admin finish order
     * */
    protected $fillable = ['user_id','is_completed','tax'];

    public function user(){
        return $this->belongsTo(User::class,'user_id');
    }

    public function quotations(){
        return $this->hasMany(quotations::class,'quotation_order_id');
    }
}
