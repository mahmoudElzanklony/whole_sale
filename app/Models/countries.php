<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
class countries extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = ['ar_name','en_name','ar_info','en_info'];

    public static function selection(){
        return self::query()->select('id',app()->getLocale().'_name as name',app()->getLocale().'_info as info');
    }


}
