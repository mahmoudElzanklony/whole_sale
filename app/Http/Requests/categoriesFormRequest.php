<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class categoriesFormRequest extends FormRequest
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
            'ar_name'=>'required|max:191',
            'en_name'=>'required|max:191',
            'tu_name'=>'nullable|max:191',
            'ar_info'=>'required|max:191',
            'en_info'=>'required|max:191',
            'tu_info'=>'nullable|max:191',
            'parent_id'=>'nullable|exists:categories,id',
            'image'=>'nullable|image|mimes:jpg,jpeg,png,gif',
        ];
    }

    public function attributes()
    {
        return [
            'image'=>trans('keywords.image'),
            'ar_name'=>trans('keywords.ar_name'),
            'en_name'=>trans('keywords.en_name'),
            'tu_name'=>trans('keywords.tu_name'),
            'ar_description'=>trans('keywords.ar_description'),
            'en_description'=>trans('keywords.en_description'),
            'tu_description'=>trans('keywords.tu_description'),
            'parent_id'=>trans('keywords.category_parent_id'),
        ];
    }
}
