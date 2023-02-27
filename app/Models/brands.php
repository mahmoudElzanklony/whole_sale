<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class brands extends Model
{
    use HasFactory;

    protected $fillable = ['ar_name','en_name','image'];

    public static function selection(){
        return self::query()->select('id',app()->getLocale().'_name as name','image');
    }
}
