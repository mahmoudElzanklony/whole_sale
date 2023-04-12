<?php

namespace App\Http\Controllers\classes;

use App\Http\Controllers\Controller;
use App\Http\Requests\brandsFormRequest;
use App\Http\Requests\categoriesFormRequest;
use App\Http\Requests\commonquestionsFormRequest;
use App\Http\Requests\countriesFormRequest;
use App\Http\Requests\currenciesFormRequest;
use App\Http\Requests\mapFormRequest;
use App\Http\Requests\offersFormRequest;
use App\Http\Requests\packagesFormRequest;
use App\Http\Requests\questionsFormRequest;
use App\Http\Requests\subCategoriesFormRequest;
use App\Http\Requests\supportFormRequest;
use App\Http\Requests\uploadfilesFormRequest;
use App\Http\Requests\usersFormRequest;
use App\Http\traits\messages;
use App\Imports\AdminQuotationReplyCSV;
use App\Imports\QuotationImportCSV;
use App\Models\advertising_points_price;
use App\Models\answers;
use App\Models\areas;
use App\Models\brands;
use App\Models\categories;
use App\Models\categories_questions;
use App\Models\cities;
use App\Models\common_questions;
use App\Models\countries;
use App\Models\currencies;
use App\Models\governments;
use App\Models\listing_photos;
use App\Models\listings_info;
use App\Models\map_images;
use App\Models\offers;
use App\Models\offers_items_info;
use App\Models\packages;
use App\Models\packages_prices_places;
use App\Models\questions;
use App\Models\quotation_orders;
use App\Models\roles;
use App\Models\supplier_data;
use App\Models\support;
use App\Models\tax_money;
use App\Models\User;
use App\Models\users_privillages;
use App\Services\listings\average_price_at_area;
use App\Services\listings\get_pointsprice_of_place;
use App\Services\mail\send_email;
use App\Services\map\get_location_where;
use App\Services\notifications\create_notification;
use App\Services\statistics\filter_statistics_admin;
use Illuminate\Http\Request;
use App\Http\traits\upload_image;
use Maatwebsite\Excel\Facades\Excel;

class DashboardServiceClass extends Controller
{
    //
    use upload_image;

    public function save_brand(brandsFormRequest $request){
        $validated = $request->validated();
        if(request()->hasFile('image')){
            $image = $this->upload(request('image'),'brands');
            $validated['image'] = $image;
        }else if(!(request()->has('id'))){
            $validated['image'] = 'default.png';
        }
        $item = brands::query()->updateOrCreate([
            'id'=>request()->has('id') ? request('id'):null
        ],$validated);

        return messages::success_output(trans('messages.saved_successfully'),$item,request()->has('id') ? 'update':'insert');
    }

    // save question

    public function save_user(usersFormRequest $request){
        $validated = $request->validated();
        // check if image has been uploaded
        if(request()->hasFile('image')){
            $image = $this->upload(request('image'),'users');
            $validated['image'] = $image;
        }else if(!(request()->has('id'))){
            $validated['image'] = 'default.png';
        }
        // check if password is updated
        if(request()->filled('password')){
            $validated['password'] = bcrypt(request('password'));
        }
        if(request()->has('privillage')){
            $validated['role_id'] = roles::query()->where('name','=','supervisor')->first()->id;
            $validated['approved'] = 1;
        }
        if(request()->has('serial_number')){
            $validated['serial_number'] = request('serial_number');
        }
        $item = User::query()->updateOrCreate([
            'id'=>request()->has('id') ? request('id'):null
        ],$validated);
        // seller data
        if(request()->has('currency') && request()->has('delivery_terms')){
            supplier_data::query()->updateOrCreate([
                'user_id'=>$item->id,
            ],[
                'currency'=>request('currency'),
                'delivery_terms'=>request('delivery_terms'),
            ]);
        }

        // privillage for supper visor
        if(request()->has('privillage')){
            users_privillages::query()->where('user_id','=',$item->id)->delete();
            foreach(request('privillage') as $p){
                users_privillages::query()->create([
                    'user_id'=>$item->id,
                    'privillage_id'=>$p,
                ]);
            }
            $item = User::query()->with('privileges')
                ->whereHas('role',function ($e){
                    $e->where('name','=','supervisor');
                })->first();
        }else{
            $item = User::query()
                ->with(['seller_data','role','country'=>function($e){
                    $e->select('id',app()->getLocale().'_name as name');
                }])->find(request('id'));
        }

        return messages::success_output(trans('messages.saved_successfully'),$item,request()->has('id') ? 'update':'insert');

    }

    public function get_pages(){
        return messages::success_output('',users_privillages::query()
            ->with('privillage')
            ->where('user_id','=',auth()->id())->get());
    }

    public function save_support(supportFormRequest $request){
        $data = $request->validated();
        $item = support::query()->updateOrCreate([
            'id'=>request()->has('id') ? request('id'):null
        ],$data);
        // send email
        $title = 'هذه رساله من اداره موقع ايواء';
        send_email::send($title,request('reply'),'','',request('email'));
        return messages::success_output(trans('messages.saved_successfully'),$item,request()->has('id') ? 'update':'insert');

    }


    public function save_files(){
        if(request()->hasFile('quotation_file')){
            $file = request()->file('quotation_file');
            $extension = strtolower($file->getClientOriginalExtension());

            if(in_array($extension, ['csv', 'xls', 'xlsx'])) {
                $name = 'template.' . $file->getClientOriginalExtension();
                $file->move(public_path('excels/'), $name);
            }
        }
        if(request()->hasFile('product_file')){
            $product_file = request()->file('product_file');
            $extension = strtolower($product_file->getClientOriginalExtension());
            if(in_array($extension, ['csv', 'xls', 'xlsx'])) {
                $product_name = 'product_template.' . $product_file->getClientOriginalExtension();
                $product_file->move(public_path('excels/'), $product_name);
            }
        }
        return messages::success_output(trans('messages.saved_successfully'));
    }

    public function save_pointad(){
        switch(request('type')){
            case 'countries':{$place_id = request('country_id');} break;
            case 'governments':{$place_id = request('government_id');} break;
            case 'cities':{$place_id = request('city_id');} break;
            case 'areas':{$place_id = request('area_id');} break;
        }
        $data = [
            'type'=>request('type'),
            'place_id'=>$place_id,
            'no_points'=>request('no_points'),
        ];
        $d = advertising_points_price::query()->updateOrCreate([
            'id'=>request()->has('id') ? request('id'):null
        ],$data);


        if($d->type == 'countries'){
            $d['place'] = countries::query()->find($d['place_id']);
        }else if ($d->type == 'governments'){
            $d['place'] = governments::query()->find($d['place_id']);
        }else if ($d->type == 'cities'){
            $d['place'] = cities::query()->find($d['place_id']);
        }else if ($d->type == 'areas'){
            $d['place'] = areas::query()->find($d['place_id']);
        }


        return messages::success_output(trans('messages.saved_successfully'),$d,request()->has('id') ? 'update':'insert');

    }

    public function save_settings(usersFormRequest $request){
        $validated = $request->validated();
        if(request()->has('password') && request()->filled('password')){
            $validated['password'] = bcrypt(request('password'));
        }
        $user = User::query()->where('id','=',auth()->id())->update($validated);
        return messages::success_output(trans('messages.saved_successfully'));
    }

    public function accept_listing(){
        $id = request('id');
        $listing = listings_info::query()->findOrFail($id);
        $listing->type = 'live';
        $listing->save();
    }

    public function save_question(commonquestionsFormRequest $request){
        $data = $request->validated();
        $item = common_questions::query()->updateOrCreate([
            'id'=>request()->has('id') ? request('id'):null
        ],$data);
        return messages::success_output(trans('messages.saved_successfully'),$item,request()->has('id') ? 'update':'insert');

    }

    public function save_country(countriesFormRequest $request){
        $data = $request->validated();
        $item = countries::query()->updateOrCreate([
            'id'=>request()->has('id') ? request('id'):null
        ],$data);
        return messages::success_output(trans('messages.saved_successfully'),$item,request()->has('id') ? 'update':'insert');

    }

    public function save_offers(offersFormRequest $request){
        $validated = $request->validated();

        $offer = offers::query()->updateOrCreate([
            'id'=>request()->has('id') ? request('id'):null
        ],$validated);

        $file = request()->file('file');
        $exten = $file->getClientOriginalExtension();
        $file_name = time().rand(0,9999999999999). '_excel.' .$exten;
        try {

            Excel::import(new AdminQuotationReplyCSV(null,$offer->id),
                request()->file('file')
            );
        } catch (\Maatwebsite\Excel\Validators\ValidationException $e) {
            $failures = $e->failures();
            return messages::error_output($failures[0]->errors());
        }
        $item = offers::query()->with(['offer_items','user','brand'=>function($e){
            return $e->select('id',app()->getLocale().'_name as name');
        }])->find($offer->id);

        return messages::success_output(trans('messages.saved_successfully'),$item,request()->has('id') ? 'update':'insert');
    }

}
