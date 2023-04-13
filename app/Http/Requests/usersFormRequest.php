<?php

namespace App\Http\Requests;

use App\Rules\matchOldPasssword;
use Illuminate\Foundation\Http\FormRequest;

class usersFormRequest extends FormRequest
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

    public function login(){
        return [
            'email'=>'required|email|max:191',
            'password'=>'required|min:6|max:191',
        ];
    }

    public function reset_psasword(){
        return [
            'password'=>'required|confirmed|min:7|max:191',
        ];
    }

    public function store_user_from_register(){
        return [
            //
            'brands'=>'required|array',
            'brands.*'=>'required|exists:brands,id',
            'trade_licence'=>'required|image|mimes:png,jpeg,jpg,gif'
        ];
    }

    public function register(){
        return [
            //
            'username'=>'required',
            'email'=>'required|email|max:191',
            'password'=>'required|min:7|max:191|confirmed',
            'phone'=>'required|min:7',
            'vat'=>'nullable|digits:15',
            'country_id'=>'required|exists:countries,id',
            'role_id'=>'required|exists:roles,id',
        ];
    }

    public function store_bank(){
        return [
            //
            'account_number'=>'required|max:191',
            'iban'=>'required|max:191',
            'swift_code'=>'required|max:191',
            'bank_licence'=>session()->has('bank_data') ? 'nullable':'required|image|mimes:png,jpg,jpeg,gif',
        ];
    }
    public function update_admin(){
        return [
            // unique:users,email,'.(auth()->id() == request('id') ? auth()->id():request('id'))
            'username'=>'required|max:191',
            'email'=>'required|email|max:191',
            'phone'=>'required|min:7',
            'country_id'=>'required|exists:countries,id',
            'image'=>'nullable|image|mimes:jpg,jpeg,png,gif',
        ];
    }

    public function update_email_image(){
        return [
            //
            'email'=>'required|max:191|email|unique:users,email,'.auth()->user()->id,
            'phone'=>'required|max:191',
            'username'=>'required|max:191',
            'country_id'=>'required|exists:countries,id',
            'vat'=>'nullable|digits:15',
            'profile_picture'=>'nullable|mimes:jpg,jpeg,png,gif',
        ];
    }

    public function update_password(){
        return [
            'current_password'=>['required',new matchOldPasssword()],
            'password'=>'required|confirmed|min:7|max:191',
        ];
    }

    public function update_personal_data(){
        return [
            'full_name'=>'required|max:191',
            'username'=>'required|max:191',
            'phone'=>'required|min:7',
        ];
    }

    public function update_company_data(){
        return [
            'bio'=>'required',
            'image'=>'nullable|mimes:jpg,jpeg,png,gif',
        ];
    }

    public function update_scondary_data(){
        return [
            'age'=>'required',
            'gender'=>'required',
            'marital_status'=>'required',
            'education'=>'required',
            'industry'=>'required',
            'position'=>'required',
        ];
    }

    public function rules()
    {
        if(str_contains($this->getRequestUri(),'/login')){
            return $this->login();
        }else if(str_contains($this->getRequestUri() , '/register/store-personal-data')){
            return $this->register();
        }else if(str_contains($this->getRequestUri() , '/register/store-bank-data')){
            return $this->store_bank();
        }else if(str_contains($this->getRequestUri() , '/newpass')){
            return $this->reset_psasword();
        }else if(str_contains($this->getRequestUri() , '/register/store-user-from-register')){
            return $this->store_user_from_register();
        }else if(str_contains($this->getRequestUri() , '/profile/update-email-image')){
            return $this->update_email_image();
        }else if(str_contains($this->getRequestUri() , '/profile/update-password')){
            return $this->update_password();
        }else if(str_contains($this->getRequestUri() , '/profile/update-personal-data')){
            return $this->update_personal_data();
        }else if(str_contains($this->getRequestUri() , '/profile/update-company-data')){
            return $this->update_company_data();
        }else if(str_contains($this->getRequestUri() , '/profile/update-secondary-data')){
            return $this->update_scondary_data();
        }else if(str_contains($this->getRequestUri() , '/dashboard')){
            return $this->update_admin();
        }
    }

    public function attributes()
    {
        return [
            'username'=>trans('keywords.username'),
            'full_name'=>trans('keywords.full_name'),
            'email'=>trans('keywords.email'),
            'password'=>trans('keywords.password'),
            'country_id'=>trans('keywords.country'),
            'phone'=>trans('keywords.phone'),
            'current_password'=>trans('keywords.current_password'),
            'image'=>trans('keywords.image'),
            'block'=>trans('keywords.block'),
            'role_id'=>trans('keywords.user_type'),
            'account_number'=>trans('keywords.account_number'),
            'bank_licence'=>trans('keywords.bank_info_document'),
            'trade_licence'=>trans('keywords.trade_licence'),
            'brands'=>trans('keywords.brands'),
        ];
    }

    public function messages()
    {
        return [

        ];
    }
}
