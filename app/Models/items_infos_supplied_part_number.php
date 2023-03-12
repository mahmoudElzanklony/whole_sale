<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class items_infos_supplied_part_number extends Model
{
    use HasFactory;

    protected $fillable = ['item_id','part_number'];
}
