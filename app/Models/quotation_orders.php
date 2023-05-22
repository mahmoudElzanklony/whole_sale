<?php

namespace App\Models;

use App\Services\get_first_admin;
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
     is_completed = -1 ==> when admin cancel order
     * */
    protected $fillable = ['user_id','is_completed','tax'];

    public function user(){
        return $this->belongsTo(User::class,'user_id');
    }

    public function quotations(){
        return $this->hasMany(quotations::class,'quotation_order_id');
    }

    public function prices(){
        return $this->hasManyThrough(items_infos_prices::class,items_info::class,
            'quotation_order_id','item_id');
    }

    public function items(){
        return $this->hasMany(items_info::class,'quotation_order_id');
    }
    public function one_item(){
        return $this->hasOne(items_info::class,'quotation_order_id')->where('user_id',auth()->id());
    }

    public function one_item_admin(){
        return $this->hasOne(items_info::class,'quotation_order_id')
            ->with('user',function($q){
                $q->whereHas('role',function($r){
                    $r->where('name','=','admin');
                });
            })->orderBy('id','DESC');
    }

    public function cancelled_quotations(){
        return $this->hasOne(cancelled_quotations::class,'quotation_id');
    }

    public function my_receipt(){
        return $this->hasOne(receipt_quotations::class,'quotation_id');
    }

    public function vendors_requests(){
        return $this->hasOne(vendors_requests::class,'quotation_order_id')
            ->when(session('type') == 'seller',function ($e){
                $e->where('user_id',auth()->id());
            });
    }

    public function offer(){
        return $this->hasOne(quotations_orders_offers::class,'quotation_order_id');
    }

}
