<?php

namespace App\Imports;

use App\Models\brands;
use App\Models\countries;
use App\Models\items_info;
use App\Models\items_infos_prices;
use App\Models\items_infos_supplied_part_number;
use App\Models\offers_items_info;
use App\Models\quotation_orders;
use App\Models\quotations;
use Illuminate\Database\Eloquent\Model;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\Importable;
use Maatwebsite\Excel\Concerns\WithValidation;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Concerns\WithMappedCells;
use Maatwebsite\Excel\Imports\HeadingRowFormatter;

HeadingRowFormatter::extend('custom', function($value, $key) {

    // And you can use heading column index.
     //dd(app()->getLocale());
     if(array_search($value,trans('keywords')) == false){
         app()->setLocale(app()->getLocale() == 'ar'?'en':'ar');
     }
     return  array_search($value,trans('keywords'));
});
HeadingRowFormatter::default('custom');


class AdminQuotationReplyCSV implements ToModel, WithHeadingRow
{
    use Importable;

    /**
     * @param array $row
     *
     * @return \Illuminate\Database\Eloquent\Model|null
     */

    private $quotation_order_id;
    private $offer_id;
    public function __construct($quotation_order_id = null , $offer_id = null){
        $this->quotation_order_id = $quotation_order_id;
        $this->offer_id = $offer_id;
    }


    public function model(array $row)
    {
        // php artisan make:import countriesImportCSV --model=countries to make this class
        // create new quotation bill

        $item = new items_info([
            //
            'user_id'=>auth()->id(),
            'part_number'=>$row['part_number'],
            'brand_id'=>brands::query()->where('ar_name','=',$row['brand'])
                ->orWhere('en_name','=',$row['brand'])->first()->id??$row['brand'],
            'quotation_order_id'=>$this->quotation_order_id ?? null,
            'ar_part_name'=>$row['ar_part_name'],
            'en_part_name'=>$row['en_part_name'],
            'ar_part_description'=>$row['ar_part_description'],
            'en_part_description'=>$row['en_part_description'],
            'offered_stock'=>$row['offered_stock'],
            'min_quantity_per_transaction'=>$row['min_quantity_per_transaction'],
            'max_quantity_per_transaction'=>$row['max_quantity_per_transaction'],
            'unit_of_packing'=>$row['unit_of_packing'],
            'quantity_per_pallet'=>$row['quantity_per_pallet'],
            'width'=>$row['width'],
            'length'=>$row['length'],
            'thickness'=>$row['thickness'],
        ]);
        $item->save();

        // check if there is supplied part number
        if(strlen($row['supplied_part_number']) > 0){
            items_infos_supplied_part_number::query()->updateOrCreate([
                'item_id'=>$item->id,
            ],[
               'part_number'=> $row['supplied_part_number']
            ]);
        }

        // check if offer_id is not null to save items offers
        if($this->offer_id != null){
            offers_items_info::query()->create([
               'offer_id'=>$this->offer_id,
               'item_info_id'=>$item->id,
            ]);
        }
        if(array_key_exists('s1_min',$row) && $row['s1_min'] != '' &&  array_key_exists('s1_price',$row) && $row['s1_price'] != ''){
            items_infos_prices::query()->create([
                'item_id'=>$item->id,
                'min_quantity'=>$row['s1_min'],
                'price'=>$row['s1_price']
            ]);
        }
        if(array_key_exists('s2_min',$row) && $row['s2_min'] != '' &&  array_key_exists('s2_price',$row) && $row['s2_price'] != ''){
            items_infos_prices::query()->create([
                'item_id'=>$item->id,
                'min_quantity'=>$row['s2_min'],
                'price'=>$row['s2_price']
            ]);
        }
        if(array_key_exists('s3_min',$row) && $row['s3_min'] != '' &&  array_key_exists('s3_price',$row) && $row['s3_price'] != ''){
            items_infos_prices::query()->create([
                'item_id'=>$item->id,
                'min_quantity'=>$row['s3_min'],
                'price'=>$row['s3_price']
            ]);
        }
    }


    public function rules(): array
    {
        return [
            'brand' => 'required',
            'part_number' => 'required',
            'offered_stock' => 'required',
            'min_quantity_per_transaction' => 'required',
            'max_quantity_per_transaction' => 'required',
        ];
    }

    public function customValidationMessages()
    {
        return [
            'brand.required' => trans('keywords.brand').trans('keywords.required'),
            'part_number.required' => trans('keywords.part_no').trans('keywords.required'),
            'offered_stock.required' => trans('keywords.offered_stock').trans('keywords.required'),
            'min_quantity_per_transaction.required' => trans('keywords.min_quantity_per_transaction').trans('keywords.required'),
            'max_quantity_per_transaction.required' => trans('keywords.max_quantity_per_transaction').trans('keywords.required'),
        ];
    }


}
