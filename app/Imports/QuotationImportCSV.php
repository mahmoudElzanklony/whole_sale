<?php

namespace App\Imports;

use App\Models\brands;
use App\Models\countries;
use App\Models\quotation_orders;
use App\Models\quotations;
use Illuminate\Database\Eloquent\Model;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\Importable;
use Maatwebsite\Excel\Concerns\WithValidation;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Concerns\SkipsEmptyRows;


use Maatwebsite\Excel\Concerns\WithMappedCells;
use Maatwebsite\Excel\Imports\HeadingRowFormatter;

HeadingRowFormatter::extend('quotation-custom', function($value, $key) {

    // And you can use heading column index.
    //dd(app()->getLocale());
    if(array_search($value,trans('keywords')) == false){
        app()->setLocale(app()->getLocale() == 'ar'?'en':'ar');
    }
    return  array_search($value,trans('keywords'));
});
HeadingRowFormatter::default('quotation-custom');

class QuotationImportCSV implements ToModel, WithValidation, WithHeadingRow,SkipsEmptyRows
{
    use Importable;
    /**
     * @param array $row
     *
     * @return \Illuminate\Database\Eloquent\Model|null
     */
    private $qutation_bill;
    public $data = [];
    public function __construct($qutation_bill = null){
        $this->qutation_bill = $qutation_bill;
    }


    public function model(array $row)
    {
        // php artisan make:import countriesImportCSV --model=countries to make this class
        // create new quotation bill
        if($this->qutation_bill != null) {
            // dd($row);
            return new quotations([
                //
                'quotation_order_id' => $this->qutation_bill->id,
                'brand_id' => brands::query()->where('ar_name', '=', $row['brand'])
                        ->orWhere('en_name', '=', $row['brand'])->first()->id ?? $row['brand'],
                'part_number' => $row['part_number'],
                'quantity' => $row['quantity'],
            ]);
        }else{
            array_push($this->data,$row);
        }
    }


    public function rules(): array
    {
        return [
            'brand' => 'required',
            'part_number' => 'required',
            'quantity' => 'required',
        ];
    }

    public function customValidationMessages()
    {
        return [
            'brand.required' => trans('keywords.brand').trans('keywords.required'),
            'part_number.required' => trans('keywords.part_no').trans('keywords.required'),
            'quantity.required' => trans('keywords.quantity').trans('keywords.required'),
        ];
    }


}
