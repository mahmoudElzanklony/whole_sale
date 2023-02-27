<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class uploadfilesFormRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'quotation_file'=>'nullable|in:csv,xlsx,xls',
            'product_file'=>'nullable|in:csv,xlsx,xls',
        ];
    }
}
