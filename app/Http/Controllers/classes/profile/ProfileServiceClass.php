<?php


namespace App\Http\Controllers\classes\profile;


use App\Http\Controllers\Controller;
use App\Http\Requests\noteFormRequest;
use App\Http\Requests\QuotationFormRequest;
use App\Http\Requests\usersFormRequest;
use App\Http\traits\messages;
use App\Http\traits\upload_image;
use App\Imports\countriesImportCSV;
use App\Imports\QuotationImportCSV;
use App\Models\listings_notes;
use App\Models\quotations;
use App\Models\User;
use App\Models\user_company_info;
use App\Models\user_info;
use Maatwebsite\Excel\Facades\Excel;

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

    public function update_secondary_data(usersFormRequest $request){
        $data = $request->validated();
        user_info::query()->where('user_id','=',auth()->id())->update($data);
        return messages::success_output([trans('messages.updated_successfully')]);
    }

    public function send_quotation(QuotationFormRequest $request){
        for($i = 0; $i < sizeof($request->validated()['brand_id']); $i++){
            $inserted_data = [];
            $inserted_data['user_id'] = auth()->id();
            $inserted_data['brand_id'] = $request->validated()['brand_id'][$i];
            $inserted_data['quantity'] = $request->validated()['quantity'][$i];
            $inserted_data['serial'] = $request->validated()['serial'][$i];
            $inserted_data['part_number'] = $request->validated()['part_number'][$i];
            quotations::query()->create($inserted_data);
        }
        return messages::success_output([trans('messages.saved_successfully')]);
    }

    public function send_quotation_excel(){
        $file = request()->file('file');
        $exten = $file->getClientOriginalExtension();
        $file_name = time().rand(0,9999999999999). '_excel.' .$exten;

        try {
            Excel::import(new QuotationImportCSV,
                request()->file('file')
            );
        } catch (\Maatwebsite\Excel\Validators\ValidationException $e) {
            $failures = $e->failures();

            return messages::error_output($failures[0]->errors());

        }
        return messages::success_output([trans('messages.saved_successfully')]);
    }
}
