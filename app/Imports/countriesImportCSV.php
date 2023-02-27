<?php

namespace App\Imports;

use App\Models\countries;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\Importable;
use Maatwebsite\Excel\Concerns\WithValidation;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class countriesImportCSV implements ToModel, WithValidation, WithHeadingRow
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
        return new countries([
            //
            'ar_name'=>$row['ar_name'],
            'en_name'=>$row['en_name'],
            'ar_info'=>$row['ar_info'],
            'en_info'=>$row['en_info'],
        ]);
    }

    public function rules(): array
    {
        return [
            'ar_name' => 'required',
            'en_name' => 'required',
            'ar_info' => 'required',
            'en_info' => 'required',
        ];
    }

    public function customValidationAttributes()
    {
        return ['ar_name' => 'email'];
    }
}
