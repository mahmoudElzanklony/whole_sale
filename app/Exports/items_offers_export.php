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
use Maatwebsite\Excel\Concerns\WithCustomValueBinder;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Events\AfterSheet;
use PhpOffice\PhpSpreadsheet\Cell\DefaultValueBinder;


class items_offers_export extends DefaultValueBinder implements FromCollection ,
    WithHeadings,WithMapping,WithEvents,WithCustomValueBinder
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

    public function registerEvents(): array
    {

        return [
            AfterSheet::class    => function(AfterSheet $event) {



                $event->sheet->getDelegate()->getColumnDimension('A')->setWidth(15);
                $event->sheet->getDelegate()->getColumnDimension('B')->setWidth(15);
                $event->sheet->getDelegate()->getColumnDimension('C')->setWidth(25);
                $event->sheet->getDelegate()->getColumnDimension('D')->setWidth(15);
                $event->sheet->getDelegate()->getColumnDimension('E')->setWidth(22);
                $event->sheet->getDelegate()->getColumnDimension('F')->setWidth(22);
                $event->sheet->getDelegate()->getColumnDimension('G')->setWidth(22);
                $event->sheet->getDelegate()->getColumnDimension('H')->setWidth(22);
                $event->sheet->getDelegate()->getColumnDimension('I')->setWidth(22);
                $event->sheet->getDelegate()->getColumnDimension('J')->setWidth(25);
                $event->sheet->getDelegate()->getColumnDimension('K')->setWidth(25);
                $event->sheet->getDelegate()->getColumnDimension('L')->setWidth(20);
                $event->sheet->getDelegate()->getColumnDimension('M')->setWidth(20);
                $event->sheet->getDelegate()->getColumnDimension('N')->setWidth(20);
                $event->sheet->getDelegate()->getColumnDimension('O')->setWidth(20);

            },
        ];
    }

    public function headings(): array
    {
        $full_columns = [
            trans('keywords.id'),trans("keywords.part_number"),
            trans("keywords.brand"),trans("keywords.quantity"),
            trans("keywords.ar_part_name"),trans("keywords.en_part_name"),
            trans("keywords.offered_stock"),trans("keywords.min_quantity_per_transaction"),
            trans("keywords.max_quantity_per_transaction"),
            trans("keywords.s1_min"),trans("keywords.s1_price"),trans("keywords.s2_min"),
            trans("keywords.s2_price"),trans("keywords.s3_min"),trans("keywords.s3_price")
        ];
        return $full_columns;
        /*if(session()->has('type')){
            if(session()->get('type') == 'buyer'){
                return ["id","part_number","brand","quantity"];
            }else{
                return $full_columns;
            }
        }else{
            return $full_columns;
        }*/
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
