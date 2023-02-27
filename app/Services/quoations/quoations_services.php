<?php


namespace App\Services\quoations;


use App\Models\items_info;
use App\Models\quotations;

class quoations_services
{
    public static function get_info_data($id){
        return  quotations::query()
            ->where('quotation_order_id',$id)
            ->with(['brand:id,'.app()->getLocale().'_name as name','last_draft'=>function($e){
                $e->with('brand:id,'.app()->getLocale().'_name as name')->orderBy('id','DESC');
            }])->get();
    }

    public static function get_info_admin_data($id){
        return  items_info::query()
            ->where('quotation_order_id',$id)
            ->when(session('type') == 'seller',function ($e){
                $e->where('user_id',auth()->id());
            })
            ->when(session('type') != 'seller',function ($e){
                $e->whereHas('user',function ($e){
                    $e->whereHas('role',function ($q){
                       $q->where('name','!=','seller');
                    });
                });
            })
            ->with('brand:id,'.app()->getLocale().'_name as name')
            ->with('prices')
            ->get();
    }

    public static function get_quotation_draft($id){
        return  quotations::query()
            ->with(['brand:id,'.app()->getLocale().'_name as name','last_draft'=>function($e){
                $e->with('brand:id,'.app()->getLocale().'_name as name');
            }])->find($id);
    }

    public static function get_statics($request = null){
        for($i = 1; $i < 13; $i++) {
            $data[$i] = quotations::query()->groupBy('quotation_order_id')
                ->whereHas('quotation_order',function($e){
                    $e->where('user_id','=',auth()->id());
                })
                ->when($request != null && $request['part_number'] != null,function ($e){
                    $e->where('part_number','=',request('part_number'));
                })
                ->when($request != null && $request['brand_id'] != null,function ($e){
                    $e->where('brand_id','=',request('brand_id'));
                })
                ->whereMonth('created_at', $i)
                ->whereYear('created_at',$request['created_at'] ?? Date('Y'))
                ->select('id','created_at')->count();
        }
        return $data;
    }
}
