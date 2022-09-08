<?php


namespace App\Handling_Data\dashboard;


use App\Models\categories;
use App\Models\questions;

class sub_categories_dashboard
{
    public static function handle_data($id){

        return [
            'table_head_keys'=>[
                'image'=>trans('keywords.image'),
                'ar_name'=>trans('keywords.ar_name'),
                'en_name'=>trans('keywords.en_name'),
             //   'tu_name'=>trans('keywords.tu_name'),
                'ar_description'=>trans('keywords.ar_description'),
                'en_description'=>trans('keywords.en_description'),
            //    'tu_description'=>trans('keywords.tu_description'),
                'questions'=>trans('keywords.questions'),
                'actions'=>trans('keywords.actions'),
            ],
            'data'=>categories::query()->with('questions','cat_questions')
                ->select('id','ar_name as ar_name_cat','en_name as en_name_cat','tu_name as tu_name_cat'
                    ,'ar_info','en_info','tu_info','parent_id','image')
                ->where('parent_id','=',$id)
                ->orderBy('id','DESC')->get(),
            'questions'=>questions::selection()->get(),
            'data_model'=>[
                'ar_name_cat'=>trans('keywords.ar_name'),
                'en_name_cat'=>trans('keywords.en_name'),
              //  'tu_name_cat'=>trans('keywords.tu_name'),
                'ar_info'=>trans('keywords.ar_description'),
                'en_info'=>trans('keywords.en_description'),
             //   'tu_info'=>trans('keywords.tu_description'),
                'image'=>trans('keywords.image'),
            ],
            'question_data'=>[
                'ar_question'=>trans('keywords.ar_question'),
                'en_question'=>trans('keywords.en_question'),
             //   'tu_question'=>trans('keywords.tu_question'),
                'question_type'=>trans('keywords.question_type'),
                'question_required'=>trans('keywords.question_required'),
                'ar_question_values'=>trans('keywords.ar_question_values'),
                'en_question_values'=>trans('keywords.en_question_values'),
            //    'tu_question_values'=>trans('keywords.tu_question_values'),
            ]
        ];
    }
}
