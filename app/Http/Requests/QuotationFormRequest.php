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
    public function rules()
    {
        return [
            'brand_id'=>'required|array',
            'brand_id.*'=>'required|exists:brands,id',
            'part_number'=>'required|array',
            'part_number.*'=>'required|numeric',
            'quantity'=>'required|array',
            'quantity.*'=>'required|numeric',
            'serial'=>'required|array',
            'serial.*'=>'required|numeric',
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
