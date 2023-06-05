<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class vendors_requests extends Model
{
    use HasFactory;
    use \Awobaz\Compoships\Compoships;

    protected $fillable = ['user_id','quotation_order_id'];

    public function items(){
        return $this->hasMany(items_info::class,'quotation_order_id','quotation_order_id');
    }

    public function user(){
        return $this->belongsTo(User::class,'user_id');
    }

    public function role(){
        return $this->hasOneThrough(roles::class,User::class,'id','id');
    }

    public function check_user_from_vendor_at_items(){
        return $this->hasMany(items_info::class,['user_id','quotation_order_id'],['user_id','quotation_order_id']);
    }

    public function quotation_order(){
        return $this->belongsTo(quotation_orders::class,'quotation_order_id');
    }
}
