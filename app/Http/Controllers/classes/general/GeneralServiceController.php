<?php

namespace App\Http\Controllers\classes\general;

use App\Http\Controllers\Controller;
use App\Http\traits\messages;
use App\Models\listings_info;
use App\Models\quotations_draft;
use App\Services\notifications\pagiante_notifications;
use App\Services\gerneral_pagination\server_data;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class GeneralServiceController extends Controller
{
    //
    public function delete_item(){
        $table = request('table');
        $id = request('id');
        if($table == 'listings_infos'){
            $l = listings_info::query()->find($id);
            $l->type = 'deleted_at';
            $l->save();
            listings_info::query()->find($id)->delete();
        }else if($table == 'quotations-draft-user'){
            $quotation_draft = quotations_draft::query()
                ->where('quotation_id','=',$id)->orderBy('id','DESC')->first();
            quotations_draft::query()->insert([
               'quotation_id'=> $id,
               'brand_id'=> $quotation_draft->brand_id,
               'part_number'=> $quotation_draft->part_number,
               'quantity'=> $quotation_draft->quantity,
               'created_at'=>Carbon::now()->toDateTimeLocalString(),
               'updated_at'=>Carbon::now()->toDateTimeLocalString(),
               'deleted_at'=>Carbon::now()->toDateTimeLocalString()
            ]);
        }else {
            DB::table($table)->delete($id);
        }
        return messages::success_output([trans('messages.deleted_successfully')]);
    }


    public function paginate_notification_data(){
        $id = request('id') ?? 0;
        $type = request('type') ?? '';
        return pagiante_notifications::get_notifications($id,$type);
    }

    public function get_map_data_type(){
        $model =  '\\App\\Models\\'.request('type');
        $model = new $model();
        $data = $model->select('id',app()->getLocale().'_name as name')->get();
        return response()->json($data);

    }

    public function get_next_map_type(){
        $model =  '\\App\\Models\\'.request('type');
        $model = new $model();
        $data = $model->select('id',app()->getLocale().'_name as name')
            ->where(request('whereColumn'),'=',request('id'))->get();
        return response()->json($data);
    }

    public function paginate_data_definisons(){
        return response()->json(server_data::get_data());
    }
}
