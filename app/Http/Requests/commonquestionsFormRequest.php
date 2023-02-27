<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class commonquestionsFormRequest extends FormRequest
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
            'ar_question'=>'required',
            'en_question'=>'required',
            'ar_answer'=>'required',
            'en_answer'=>'required',
        ];
    }

    public function attributes()
    {
        return [
            'ar_question'=>trans('keywords.ar_question'),
            'en_question'=>trans('keywords.en_question'),
            'ar_answer'=>trans('keywords.ar_answer'),
            'en_answer'=>trans('keywords.en_answer'),
        ];
    }
}
