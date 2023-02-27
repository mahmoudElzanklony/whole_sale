<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class quotations extends Model
{
    use HasFactory , SoftDeletes;

    protected $fillable = ['quotation_order_id','brand_id','part_number','quantity'];

    public function brand(){
        return $this->belongsTo(brands::class,'brand_id');
    }

    public function quotation_order(){
        return $this->belongsTo(quotation_orders::class,'quotation_order_id');
    }

    public function last_draft(){
        if(session()->has('type') && session()->get('type') == 'admin'){
            return $this->hasMany(quotations_draft::class,'quotation_id')->orderBy('id','DESC');
        }
        return $this->hasOne(quotations_draft::class,'quotation_id')->orderBy('id','DESC');
    }

}
