<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class QuotationFormRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return auth()->check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function general_rules(){
        return [
            'brand_id'=>'required|array',
            'brand_id.*'=>'required',
            'part_number'=>'required|array',
            'part_number.*'=>'required',
            'quantity'=>'required|array',
            'quantity.*'=>'required|numeric',
        ];
    }
    public function rules()
    {
        if(str_contains($this->getRequestUri(),'draft')){
            return $this->save_at_draft_rules();
        }else{
            return $this->general_rules();
        }
    }

    public function save_at_draft_rules(){
        return [
            'brand_id'=>'required',
            'part_number'=>'required',
            'quantity'=>'required|numeric',
        ];
    }

    public function messages()
    {
        return [
            'brand_id'=>trans('keywords.brand'),
            'part_number'=>trans('keywords.part_number'),
            'quantity'=>trans('keywords.quantity'),
            'serial'=>trans('keywords.serial'),
        ];
    }
}
