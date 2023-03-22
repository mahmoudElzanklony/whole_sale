<?php


namespace App\Services\gerneral_pagination;


use App\Models\quotation_orders;
use Illuminate\Support\Facades\DB;

class server_data
{
    public static function get_data(){
        if(request('table') == 'quotation_orders'){
            return quotation_orders::query()
            ->when(session()->get('type') =='buyer',function ($e){
                $e->where('user_id','=',auth()->id());
            })->when(session()->get('type') =='seller',function ($e){
                    $e->with('vendors_requests',function ($qu){
                          $qu->withCount('check_user_from_vendor_at_items');
                    })->whereHas('vendors_requests',function ($e){
                        $e->where('user_id',auth()->id());
                    });
            })->when(session()->get('type') == 'admin'||session()->get('type')=='supervisor',function ($e){
                $e->with('user:id,username,phone');
            })
                ->orderBy('id','DESC')
                ->when(request()->has('searches') && sizeof(request('searches')) > 0, function ($e) {
                    foreach (request('searches') as $key => $value) {
                        if ($key == 'is_completed' && $value != '') {
                            $e->where(function ($e) use ($key,$value){
                                if (str_contains( 'تم الارسال للادراة',$value) == true || str_contains( 'has been sent to admin',$value) == true) {
                                    $e->orWhere($key, '=', 0);
                                }
                                if (str_contains( 'الغاء الطلب',$value) == true || str_contains( 'Cancel request',$value) == true) {
                                    $e->orWhere($key, '=', -1);
                                }
                                if (str_contains( 'تم الرد من الأدارة',$value) == true || str_contains( 'admin reply',$value) == true) {
                                    $e->orWhere($key, '=', 1);
                                }
                                if (str_contains( 'تم الارسال للموردين',$value) == true || str_contains( 'sent to vendors',$value) == true) {
                                    $e->orWhere($key, '=', 0)->whereDoesntHave('items',function($q){
                                        $q->whereHas('user',function($u){
                                           $u->whereHas('role',function($r){
                                               $r->where('name','=','seller');
                                           }) ;
                                        });
                                    });
                                }
                                if (str_contains('تم الرد من الموردين',$value) == true || str_contains( 'vendors reply',$value) == true) {
                                    $e->orWhere($key, '=', 11);
                                }
                                if (str_contains('تم تأكيد الطلب',$value) == true || str_contains( 'order confirmed',$value) == true) {
                                    $e->orWhere($key, '=', 2);
                                }
                                if (str_contains('تم انهاء الطلب بنجاح',$value) == true || str_contains( 'order has been done successfully',$value) == true) {
                                    $e->orWhere($key, '=', 3);
                                }

                       });

                        }else if($key == 'id' && $value != null){
                            $e->where($key, 'LIKE', '%'.$value . '%');
                        }else if(($key == 'username' && $value != null ) || ($key == 'phone' && $value != null )){
                            $e->whereHas('user',function ($e) use ($key,$value){
                                $e->where($key, 'LIKE', '%'.$value . '%');
                            });
                        }
                    }
                    if(array_key_exists('from',request('searches')) && array_key_exists('to',request('searches'))){
                        if((request('searches')['from'] != null ) && (request('searches')['to'] != null )){
                            $e->whereRaw('created_at >= "'.request('searches')['from'].'" AND created_at <= "'.request('searches')['to'].'"');
                        }
                    }

                })
               // ->toSql();
                ->paginate(request('length'));
        }else {
            return DB::table(request('table'))
                ->orderBy('id', 'DESC')
                ->when(request()->has('searches') && sizeof(request('searches')) > 0, function ($e) {
                    foreach (request('searches') as $key => $value) {
                        if ($key == 'is_visible' && $value != '') {
                            if (str_contains($value, 'ن')) {
                                $e->where($key, 'LIKE', 1);
                            } else {
                                $e->where($key, 'LIKE', 0);
                            }
                        } else if ($key != 'tags' && $value != '') {
                            $e->where($key, 'LIKE', $value . '%');
                        }
                    }
                })
                ->paginate(request('length'));
        }
    }
}
