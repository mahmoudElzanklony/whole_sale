<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class common_questions extends Model
{
    use HasFactory;

    protected $fillable = ['ar_question','en_question','ar_answer','en_answer'];

    public static function selection(){
        return self::query()
            ->select('id',app()->getLocale().'_question as question',app()->getLocale().'_answer as answer');
    }
}
