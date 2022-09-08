<?php

namespace App\Http\Controllers;

use App\Http\traits\messages;
use App\Models\categories;
use App\Services\categories\categories_data;
use Illuminate\Http\Request;

class CategoriesController extends Controller
{
    //
    public function get_sub_where(){
        if(request()->has('value')){
            $sub_categories = categories_data::get_categories_type(request('value'));
            return messages::success_output('',$sub_categories);
        }
    }

    public function get_parent(){
        $data = categories_data::get_categories_type(null);
        return messages::success_output('',$data);
    }
}
