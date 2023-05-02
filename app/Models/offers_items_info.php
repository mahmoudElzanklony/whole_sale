<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class offers_items_info extends Model
{
    use HasFactory;

    protected $fillable = ['offer_id','item_info_id'];

    public function item_info(){
        return $this->belongsTo(items_info::class,'item_info_id');
    }

    public function offer(){
        return $this->belongsTo(offers::class,'offer_id');
    }

}
