<?php

namespace App\Http\Controllers\classes\auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\usersFormRequest;
use App\Http\traits\messages;
use App\Mail\Myemail;
use App\Models\roles;
use App\Models\User;
use App\Services\auth\register_service;
use App\Services\mail\send_email;
use Illuminate\Http\Request;
use App\Http\traits\upload_image;

class AuthServicesClass extends Controller
{
    use messages , upload_image;
    //
    // post


    public function store_personal_info(usersFormRequest $request){
        $role = roles::query()->find(request('role_id'));
        if($role->name == 'buyer' || $role->name == 'seller'){
            $personal_info = $request->validated();
            $personal_info['password'] = bcrypt($personal_info['password']);
            $personal_info['image'] = 'default.png';
            $personal_info['approved'] = 0;
            $personal_info['wallet'] = 0;
            $personal_info['serial_number'] = time();
            $user = User::query()->create($personal_info);
            if(session()->get('lang') == 'ar') {
                send_email::send('تأكيد الايمل الالكتروني الخاص بك',
                    'هذه رساله لتأكيد الايمل الالكتروني الخاص بك من فضلك اضغط علي الرابط بالاسفل ',
                    request()->root() . '/home?id=' . $user->id . '&serial=' . $user->password,
                    'اضغط هنا', $user->email
                );
            }else{
                send_email::send('Email confirmation',
                    'Please click on the link below to activate email',
                    request()->root() . '/activation?id=' . $user->id . '&serial=' . $user->password,
                    'Press here', $user->email
                );
            }
            return messages::success_output(trans('messages.registered_user'),'','/login');
        }else {
            session()->put('personal_data', $request->validated());
            return messages::success_output();
        }
    }

    public function store_bank_info(usersFormRequest $request){
        $validated = $request->validated();
        if(request()->hasFile('bank_licence')){
            $image = $this->upload(request('bank_licence'),'bank_licence');
            $validated['bank_licence'] = $image;
        }
        // check if you store bank data before and dont upload a new licence
        // so you updated new bank data with old image stored at bank data session
        if(session()->has('bank_data') && !(request()->hasFile('bank_licence'))){
            $validated['bank_licence'] = session()->get('bank_data')['bank_licence'];
        }
        session()->put('bank_data',$validated);
        return messages::success_output();
    }

    public function register_post(usersFormRequest $request){
        $data = $request->validated();
        if(request()->hasFile('trade_licence')){
            $image = $this->upload(request('trade_licence'),'trade_licence');
            $data['trade_licence'] = $image;
        }
        register_service::register_process(request(),$data);
        return messages::success_output(trans('messages.saved_new_user'));
    }

    // post
    public function login_post(usersFormRequest $request){
        if(auth()->attempt($request->validated())){
            $role_name = roles::query()->find(auth()->user()->role_id)->name;
            session()->put('type',$role_name);
            if($role_name == 'admin' ){
                $url = '/dashboard';
            }else if($role_name == 'buyer'){
                $url = '/profile/quotations';
            }else{
                $url = '/profile/edit';
            }
            return messages::success_output(['message'=>'','user'=>auth()->user()]
                ,'', $url);
        }
        return messages::error_output(['message'=>trans('messages.unauthenticated_err_form')]);
    }

    public function sendmail(){
        if(request()->has('email')){
            $user = User::query()->where('email','=',request('email'))->first();
            if($user != null){
                if(session()->get('lang') == 'ar') {
                    send_email::send('استرجاع كلمة المرور',
                        'من فضلك اضغط علي الرابط بالاسفل لادخال كلمة مرور جديده',
                        request()->root() . '/new-password?id=' . $user->id . '&serial=' . $user->serial_number,
                        'اضغط هنا', $user->email
                    );
                }else{
                    send_email::send('Reset password',
                        'Please click on the link below to enter a new password on the site',
                        request()->root() . '/new-password?id=' . $user->id . '&serial=' . $user->serial_number,
                        'Press here', $user->email
                    );
                }
                return messages::success_output(trans('messages.email_sent_successfully'));
            }else{
                return messages::error_output(['message'=>trans('errors.not_found_user')]);
            }
        }else{
            return messages::error_output(['message'=>trans('errors.not_found_user')]);
        }

    }


    public function newpass(usersFormRequest $request){
        User::query()->where('email','=',request('email'))->first()->update([
            'password'=>bcrypt($request->validated()['password'])
        ]);
        return messages::success_output([trans('messages.updated_successfully')]);
    }

    public function logout(){
        session()->forget('type');
        auth()->logout();
        return back();
    }
}
