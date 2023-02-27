<?php


namespace App\Services\notifications;


use App\Models\notifications;

class pagiante_notifications
{
    public static function get_notifications($id = 0 , $type = ''){
        $data =  notifications::selection()->with('sender',function($e){
            $e->with('role:id,name');
        })
            ->when($id != 0 , function($e) use($id){
                $e->where('receiver_id','=',$id);
            })
            ->when($type != '' && ($type == 'admin' || $type == 'supervisor'), function($e) use($type){
                $e->whereHas('receiver',function($e) use ($type){
                    $e->whereHas('role',function($role) use ($type){
                        $role->where('name','=','admin');
                        $role->orWhere('name','=','supervisor');
                    });
                });
            })
            ->orderBy('id','DESC')
            ->paginate(12);
        $ids = $data->getCollection()->map(function ($e){
            return $e['id'];
        });
        notifications::query()->whereIn('id',$ids)->update([
            'seen'=>1
        ]);
        return $data;
    }
}
