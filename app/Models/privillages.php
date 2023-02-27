<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class privillages extends Model
{
    use HasFactory;

    protected $fillable = ['ar_name','en_name','icon'];

    public static function selection(){
        return self::query()->select('id',app()->getLocale().'_name as name','icon');
    }
}
