<?php

namespace App\Http\Controllers;

use App\Models\brands;
use Illuminate\Http\Request;
use App\Http\traits\messages;
class BrandsController extends Controller
{
    //
    use messages;
    public function get_data(){
        return messages::success_output('',brands::selection()->get());
    }
}
