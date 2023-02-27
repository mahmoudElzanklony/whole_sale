<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class users_privillages extends Model
{
    use HasFactory;

    protected $fillable = ['user_id','privillage_id'];

    public function privillage(){
        return $this->belongsTo(privillages::class,'privillage_id');
    }
}
