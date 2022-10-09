<?php

namespace App\Imports;

use App\Models\brands;
use App\Models\countries;
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
    public function model(array $row)
    {
        // php artisan make:import countriesImportCSV --model=countries to make this class
        return new quotations([
            //
            'user_id'=>auth()->id(),
            'brand_id'=>brands::query()->where('ar_name','=',$row['brand'])
                ->orWhere('en_name','=',$row['brand'])->first()->id,
            'part_number'=>$row['part_number'],
            'quantity'=>$row['quantity'],
            'serial'=>$row['serial'],
        ]);
    }

    public function rules(): array
    {
        return [
            'brand' => 'required',
            'part_number' => 'required',
            'quantity' => 'required',
            'serial' => 'required',
        ];
    }

    public function customValidationMessages()
    {
        return [
            'brand.required' => trans('keywords.brand').trans('keywords.required'),
            'part_number.required' => trans('keywords.part_number').trans('keywords.required'),
            'quantity.required' => trans('keywords.quantity').trans('keywords.required'),
            'serial.required' => trans('keywords.serial').trans('keywords.required'),
        ];
    }


}
