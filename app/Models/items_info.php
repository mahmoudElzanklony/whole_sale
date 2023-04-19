<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class items_info extends Model
{
    use HasFactory;
    use \Awobaz\Compoships\Compoships;

    protected $fillable = ['user_id','part_number','brand_id','quotation_order_id','ar_part_name','en_part_name',
        'ar_part_description','en_part_description','offered_stock','min_quantity_per_transaction',
        'max_quantity_per_transaction',
        'unit_of_packing','quantity_per_pallet','width','length','thickness'
    ];

    public static function selection(){
        return self::query()->select('id','brand_id','quotation_order_id',
            app()->getLocale().'_part_name as part_name',app()->getLocale().'_part_description as part_description',
        'offered_stock','min_quantity_per_transaction','max_quantity_per_transaction','unit_of_packing','quantity_per_pallet'
            ,'width','length','thickness');
    }

    public function brand(){
        return $this->belongsTo(brands::class,'brand_id');
    }

    public function user(){
        return $this->belongsTo(User::class,'user_id');
    }

    public function role(){
        return $this->hasOneThrough(roles::class,User::class,'role_id','id');
    }

    public function quotation(){
        return $this->belongsTo(quotation_orders::class,'quotation_order_id');
    }

    public function supplied_part_number(){
        return $this->hasOne(items_infos_supplied_part_number::class,'item_id');
    }

    public function prices(){
        return $this->hasMany(items_infos_prices::class,'item_id');
    }

    public function vendor(){
        return $this->belongsTo(vendors_requests::class,'quotation_order_id','quotation_order_id');
    }

    public function offer(){
        return $this->hasOne(offers_items_info::class,'item_info_id');
    }
}
