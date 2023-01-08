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

class QuotationImportCSV implements ToModel, WithValidation, WithHeadingRow
{
    use Importable;
    /**
     * @param array $row
     *
     * @return \Illuminate\Database\Eloquent\Model|null
     */
    private $qutation_bill;
    public function __construct($qutation_bill){
        $this->qutation_bill = $qutation_bill;
    }
    public function model(array $row)
    {
        // php artisan make:import countriesImportCSV --model=countries to make this class
        // create new quotation bill

        return new quotations([
            //
            'quotation_order_id'=>$this->qutation_bill->id,
            'brand_id'=>brands::query()->where('ar_name','=',$row['brand'])
                ->orWhere('en_name','=',$row['brand'])->first()->id,
            'part_number'=>$row['part_number'],
            'quantity'=>$row['quantity'],
        ]);
    }


    public function rules(): array
    {
        return [
            'brand' => 'required|exists:brands,en_name',
            'part_number' => 'required',
            'quantity' => 'required',
        ];
    }

    public function customValidationMessages()
    {
        return [
            'brand.required' => trans('keywords.brand').trans('keywords.required'),
            'brand.exists' => trans('keywords.brand').' '.trans('keywords.not_exists'),
            'part_number.required' => trans('keywords.part_no').trans('keywords.required'),
            'quantity.required' => trans('keywords.quantity').trans('keywords.required'),
        ];
    }


}
