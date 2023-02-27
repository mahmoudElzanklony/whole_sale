<?php

namespace App\Exports;

use App\Models\quotation_orders;
use Illuminate\Database\Eloquent\Builder as EloquentBuilder;
use Illuminate\Database\Eloquent\Relations\Relation;
use Illuminate\Database\Query\Builder;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\FromQuery;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;


class items_offers_export implements FromCollection ,WithHeadings,WithMapping
{
    /**
     * @return \Illuminate\Support\Collection
     */
    use Exportable;

    private $payments;

    public function __construct(Collection $collection)
    {
        $this->payments = $collection;
    }


    public function collection()
    {
        return $this->payments;
    }

    public function headings(): array
    {
        return [
            "id", "brand", "part number", "offered stock", "s1_min", "s1_price", "s2_min", "s2_price", "s3_min", "s3_price"
        ];
    }

    public function map($row): array
    {
        $output = [];
        $prices_output = [];
        $final_output = [];
        if(sizeof($row->prices) > 0){
            // there are prices
            foreach($row->prices as $price){
                array_push($prices_output,$price->min_quantity);
                array_push($prices_output,$price->price);
            }
        }
        array_push($output,[
           $row->id,
           $row->brand->name,
           $row->part_number,
           $row->offered_stock,
        ]);
        $final_output[] = (array_merge($output[0],$prices_output));
        $prices_output = [];
        $output =  [];
        return $final_output;

    }
}
