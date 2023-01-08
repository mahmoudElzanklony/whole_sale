<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class quotations_draft extends Model
{
    use HasFactory;

    protected $fillable = ['quotation_id','brand_id','part_number','quantity'];

    public function brand(){
        return $this->belongsTo(brands::class,'brand_id');
    }
}
