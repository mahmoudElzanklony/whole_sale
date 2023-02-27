<?php

namespace App\Http\Controllers;

use App\Keywords\products\MyProductsKeywords;
use App\Keywords\products\SaveProductKeywords;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductsController extends Controller
{
    //

    public function index(){
        return Inertia::render('products/my_products',[
            'keywords'=>MyProductsKeywords::get_keywords()
        ]);
    }

    public function save_product(){
        return Inertia::render('products/save_products',[
           'keywords'=>SaveProductKeywords::get_keywords(),
           'main_title'=>trans('keywords.create_product_using_for_or_file'),
        ]);
    }
}
