<?php

namespace App\Http\Controllers;

use App\Keywords\WelcomeKeyWords;
use App\Models\brands;
use App\Models\categories;
use App\Models\User;
use App\Services\mail\send_email;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Maatwebsite\Excel\Facades\Excel;
use App\Imports\countriesImportCSV;

class WelcomeController extends Controller
{
    //
    public function index(){
        //return request()->cookie('inilalize');
        if(request()->has('id') && request()->has('serial')){
            $user = User::query()->where('id','=',request('id'))
                ->where('password','=',request('serial'))->first();
            if($user != null){
                $user->approved = 1;
                $user->save();
                $approved_status = ['success',trans('keywords.email_activation_successfully')];

                // send email that account activated successfully to
                if(session()->get('lang') == 'ar') {
                    send_email::send('تسجيل حساب جديد في مكينة جملة',
                        'لقد تم تفعيل حساب  العميل الخاص بكم لموقع مكينة جملة. يمكنكم البدء باستخدام الحساب بعد تسجيل الدخول  بالنقر على الرابط أدناه. سوف يتم اخطاركم  عن طريق البريد الالكتروني الخاص بكم في حالة الحاجة لمعلومات اضافية ',
                        request()->root() . '/',
                        'اضغط هنا', $user->email);
                }else{
                    send_email::send('Mkena Wholesale new account registration',
                        'Your Mkena Wholesale customer account  has been activated. You can start using your account by  signing in through clicking on the below link. You shall be notified by email in case of further information required by Mkena management',
                        request()->root() . '/',
                        'Press here', $user->email);
                }
            }else{
                $approved_status = ['error',trans('keywords.email_not_activated_yet')];
            }
        }else{
            $approved_status = '';
        }
        return Inertia::render('home',[
            'keywords'=> WelcomeKeyWords::get_key_words(),
            'brands'=>brands::selection()->get(),
            'approved_status'=>$approved_status,
        ]);
    }

    public function import_countries(){
        $data =  Excel::import(new countriesImportCSV, request()->file('file'));
        return response()->json($data);
    }
}
