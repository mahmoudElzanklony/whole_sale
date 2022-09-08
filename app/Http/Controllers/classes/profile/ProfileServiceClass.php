<?php


namespace App\Http\Controllers\classes\profile;


use App\Http\Controllers\Controller;
use App\Http\Requests\noteFormRequest;
use App\Http\Requests\usersFormRequest;
use App\Http\traits\messages;
use App\Http\traits\upload_image;
use App\Models\listings_notes;
use App\Models\User;
use App\Models\user_company_info;
use App\Models\user_info;

class ProfileServiceClass extends Controller
{
    use upload_image;
    public function update_email_image(usersFormRequest $request){
        // check if i had a persoanl image
        $email = request('email');
        $data = [
            'email'=>$email
        ];
        if(request()->hasFile('profile_picture')){
            $image_name = $this->upload(request()->file('profile_picture'),'users');
            if($image_name == false){
                return messages::error_output(['profile_picture'=>[trans('errors.error_upload_image')]],response()->status(),response()->getStatusCode());
            }
            $data['image'] = $image_name;
        }
        User::query()->find(auth()->id())->update($data);

        return messages::success_output([trans('messages.updated_successfully')]);
    }

    public function update_password(usersFormRequest $request){
        User::query()->find(auth()->id())->update([
           'password'=>bcrypt($request->validated()['password'])
        ]);
        return messages::success_output([trans('messages.updated_successfully')]);
    }

    public function update_personal_data(usersFormRequest $request){
        $personal = request()->except(['username','phone']);
        $user_data = request()->only(['username','phone']);
        // check if whatapp status has value
        if(request()->has('whatapp_status') && request('whatapp_status') != 'undefined'){
            $personal['whatapp_status'] = 1;
        }else{
            $personal['whatapp_status'] = 0;
        }
        // update
        User::query()->find(auth()->id())->update($user_data);
        user_info::query()->where('user_id','=',auth()->id())->first()->update($personal);
        return messages::success_output([trans('messages.updated_successfully')]);
    }

    public function update_company_data(usersFormRequest $request){
         $role = User::query()->find(auth()->id())->role;
         if($role->name != 'brokerage_company'){
             return messages::error_output(['unauthorized'=>[trans('errors.unauthorized')]],401);
         }else{
             $bio = request('bio');
             $data = [
                 'bio'=>$bio
             ];
             if(request()->hasFile('image')){
                 $image_name = $this->upload(request()->file('image'),'companies');
                 if($image_name == false){
                     return messages::error_output(['profile_picture'=>[trans('errors.error_upload_image')]],response()->status(),response()->getStatusCode());
                 }
                 $data['image'] = $image_name;
             }
             user_company_info::query()->where('user_id','=',auth()->id())->first()->update($data);
             return messages::success_output([trans('messages.updated_successfully')]);
         }
    }

    public function update_secondary_data(usersFormRequest $request){
        $data = $request->validated();
        user_info::query()->where('user_id','=',auth()->id())->update($data);
        return messages::success_output([trans('messages.updated_successfully')]);
    }


    public function save_note(noteFormRequest $noteFormRequest){
        if(request()->has('id')){
            // check if you are authorized
            $note = listings_notes::query()->where('id','=',request('id'))
                ->where('user_id','=',auth()->id())->first();
            if($note == null) {
                return messages::error_output(['unauthorized' => [trans('errors.unauthorized')]], 401);
            }
        }
        // save note
        listings_notes::query()->updateOrCreate([
            'id'=>request()->has('id') ? request('id') : null,
        ],$noteFormRequest->validated());
        return messages::success_output([trans('messages.saved_successfully')]);

    }
}
