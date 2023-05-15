<?php

namespace App\Http\Controllers\classes\auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\usersFormRequest;
use App\Http\traits\messages;
use App\Mail\Myemail;
use App\Models\notifications;
use App\Models\roles;
use App\Models\User;
use App\Services\auth\register_service;
use App\Services\get_first_admin;
use App\Services\mail\send_email;
use App\Services\notifications\create_notification;
use Illuminate\Http\Request;
use App\Http\traits\upload_image;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthServicesClass extends Controller
{
    use messages , upload_image;
    //
    // post


    public function store_personal_info(usersFormRequest $request){
        $role = roles::query()->find(request('role_id'));

        // check if email is already exists
        $user_email = User::query()->with('role')->where('email','=',request('email'))->first();
        if($user_email != null){
            // its already exists
            // check if role name is equal to user register
            if($user_email->role->name == $role->name){
                // send an error
                $rules = [
                    'email' => 'unique:users'
                ];

                return $this->validate(request(), $rules, []);
            }
        }
        $admin = get_first_admin::get_admin();

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
                    'تأكيد بريدك الالكتروني لتفعيل حسابك بموقع مكينة جملة',
                    request()->root() . '/home?id=' . $user->id . '&serial=' . $user->password,
                    'الرجاء الضغط هنا', $user->email
                );
               // send email to admin about user registeration in arabic
                send_email::send('تسجيل مستخدم جديد (اسم المستخدم  / '.$user->username.') ',
                    'لقد قام '.trans('keywords['.$role->name.']').' جديد بتقديم طلب للتسجيل بالموقع .  للاطلاع على التفاصيل، بامكانك الدخول لحسابك عن طريق النقر على الرابط أدناه',
                    request()->root() . '/dashboard/users',
                    'الرجاء الضغط هنا', $admin->email
                );
            }else{
                send_email::send('Email confirmation',
                    'Kindly verify your registered email in you Mkena Wholesale created account by clicking on the link below. Kindly discard this email if you haven\'t recently tried to create an account with Mkena Wholesale',
                    request()->root() . '/activation?id=' . $user->id . '&serial=' . $user->password,
                    'Press here', $user->email
                );
                // send email to admin about user registeration in english
                send_email::send('New '.$role->name.' registration (User Name /  '.$user->username.') ',
                    'A new '.$role->name.' has just filed a registration request. To review the details you can  sign in into your account by clicking on the below link',
                    request()->root() . '/dashboard/users',
                    'Press here', $admin->email
                );
            }

            // send notification to admin
            $notification_data = [
              'sender_id'=>$user->id,
              'receiver_id'=>get_first_admin::get_admin()->id,
              'ar_info'=>'هناك عمليه تسجيل جديدة من قبل '.($role->name == 'buyer'?'عميل':'مورد'),
              'en_info'=>'there is a new registration from  '.$role->name,
              'seen'=>0,

            ];
            create_notification::new_notification($notification_data);

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
            // check if user has two emails
            $user_emails = User::query()->with('role')
                ->where('email','=',request('email'))
                ->get();
            if(sizeof($user_emails) > 1){
                // has more than email
                auth()->logout();
                return messages::success_output(''
                    ,$user_emails);
            }else {
                session()->put('type', $role_name);
                if ($role_name == 'admin' || $role_name == 'supervisor') {
                    $url = '/dashboard';
                } else if ($role_name == 'buyer') {
                    $url = '/profile/quotations';
                } else {
                    $url = '/profile/pricing';
                }
                return messages::success_output(['message'=>'','user'=>auth()->user()]
                    ,'', $url);
            }

        }
        return messages::error_output(['message'=>trans('messages.unauthenticated_err_form')]);
    }

    // select role you want to login
    public function selectrole(){
        $user = User::query()->with('role')->find(request('id'));
        $role_name = $user->role->name;
        Auth::login(User::query()->find(request('id')));

        session()->put('type', $role_name);
        if ($role_name == 'admin' || $role_name == 'supervisor') {
            $url = '/dashboard';
        } else if ($role_name == 'buyer') {
            $url = '/profile/quotations';
        } else {
            $url = '/profile/pricing';
        }
        return messages::success_output(['message' => '', 'user' => auth()->user()]
            , '', $url);
    }

    public function sendmail(){
        if(request()->has('email')){
            $user = User::query()->where('email','=',request('email'))->first();
            if($user != null){
                if(session()->get('lang') == 'ar') {
                    send_email::send('استرجاع كلمة المرور',
                        'من فضلك اضغط علي الرابط بالاسفل لادخال كلمة مرور جديده',
                        request()->root() . '/new-password?id=' . $user->id . '&serial=' . $user->serial_number,
                        'الرجاء الضغط هنا', $user->email
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
