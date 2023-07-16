<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class offers extends Model
{
    use HasFactory;

    protected $fillable = ['user_id','brand_id','start_date','end_date','status','terms'];

    public function offer_items(){
        return  $this->hasMany(offers_items_info::class,'offer_id');
    }

    public function items(){
        return $this->belongsToMany(items_info::class,offers_items_info::class,'offer_id','item_info_id');
    }

    public function user(){
        return $this->belongsTo(User::class,'user_id');
    }

    public function brand(){
        return $this->belongsTo(brands::class,'brand_id')->withTrashed();
    }
}
