<?php

namespace App\Http\Controllers;

use App\Keywords\SaveProductKeywords;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductsController extends Controller
{
    //
    public function save_product(){
        return Inertia::render('save_products',[
           'keywords'=>SaveProductKeywords::get_keywords(),
           'main_title'=>trans('keywords.create_product_using_for_or_file'),
        ]);
    }
}
