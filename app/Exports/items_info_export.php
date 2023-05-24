<?php

namespace App\Exports;

use App\Models\brands;
use App\Models\items_infos_supplied_part_number;
use App\Models\quotation_orders;
use Illuminate\Database\Eloquent\Builder as EloquentBuilder;
use Illuminate\Database\Eloquent\Relations\Relation;
use Illuminate\Database\Query\Builder;
use Illuminate\Support\Collection;
use PhpOffice\PhpSpreadsheet\Cell\Cell;
use Maatwebsite\Excel\Concerns\ToModel;
use PhpOffice\PhpSpreadsheet\Cell\DataType;

use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\FromQuery;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Events\AfterSheet;
use Maatwebsite\Excel\Concerns\WithCustomValueBinder;
use PhpOffice\PhpSpreadsheet\Cell\DefaultValueBinder;





class items_info_export extends DefaultValueBinder implements FromCollection ,
    WithHeadings,WithMapping,WithEvents,WithCustomValueBinder
{
    /**
     * @return \Illuminate\Support\Collection
     */
    use Exportable;

    private $payments;
    private $has_brand;
    public function __construct(Collection $collection , $has_brand = true){
        $this->payments = $collection;
        $this->has_brand = $has_brand;
    }

    public function bindValue(Cell $cell, $value)
    {
        if (is_numeric($value)) {
            $cell->setValueExplicit($value, DataType::TYPE_STRING);

            return true;
        }

        // else return default behavior
        return parent::bindValue($cell, $value);
    }

    public function collection()
    {
        return $this->payments;
    }

    public function registerEvents(): array
    {

        return [
            AfterSheet::class    => function(AfterSheet $event) {

                $style = [
                    //Set border Style
                    'borders' => [
                        'outline' => [
                            'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THICK,
                            'color' => ['argb' => 'EB2B02'],
                            'width'=>'1px'
                        ],

                    ],

                    //Set font style
                    'font' => [
                        'bold'      =>  true,
                        'color' => ['argb' => 'EB2B02'],
                    ],

                    //Set background style
                    'fill' => [
                        'fillType' => \PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID,
                        'startColor' => [
                            'rgb' => 'dff0d8',
                        ]
                    ],

                ];
                $cells = ['B1', 'D1', 'E1', 'G1', 'H1', 'I1', 'J1', 'P1', 'Q1'];

                for($i = 0; $i < sizeof($cells); $i++){
                    $event->sheet->styleCells(
                        $cells[$i],
                        $style
                    );
                }


                $event->sheet->getDelegate()->getColumnDimension('A')->setWidth(15);
                $event->sheet->getDelegate()->getColumnDimension('B')->setWidth(15);
                $event->sheet->getDelegate()->getColumnDimension('C')->setWidth(25);
                $event->sheet->getDelegate()->getColumnDimension('D')->setWidth(25);
                $event->sheet->getDelegate()->getColumnDimension('E')->setWidth(25);
                $event->sheet->getDelegate()->getColumnDimension('F')->setWidth(25);
                $event->sheet->getDelegate()->getColumnDimension('G')->setWidth(25);
                $event->sheet->getDelegate()->getColumnDimension('H')->setWidth(25);
                $event->sheet->getDelegate()->getColumnDimension('I')->setWidth(25);
                $event->sheet->getDelegate()->getColumnDimension('J')->setWidth(25);
                $event->sheet->getDelegate()->getColumnDimension('K')->setWidth(25);
                $event->sheet->getDelegate()->getColumnDimension('L')->setWidth(20);
                $event->sheet->getDelegate()->getColumnDimension('M')->setWidth(20);
                $event->sheet->getDelegate()->getColumnDimension('N')->setWidth(20);
                $event->sheet->getDelegate()->getColumnDimension('O')->setWidth(23);
                $event->sheet->getDelegate()->getColumnDimension('P')->setWidth(23);
                $event->sheet->getDelegate()->getColumnDimension('Q')->setWidth(23);
                $event->sheet->getDelegate()->getColumnDimension('R')->setWidth(23);
                $event->sheet->getDelegate()->getColumnDimension('S')->setWidth(23);
                $event->sheet->getDelegate()->getColumnDimension('T')->setWidth(23);
                $event->sheet->getDelegate()->getColumnDimension('U')->setWidth(23);
                $event->sheet->getDelegate()->getColumnDimension('V')->setWidth(23);
                $event->sheet->getDelegate()->getColumnDimension('W')->setWidth(23);

            },
        ];
    }

    public function headings(): array
    {
        $full_columns = [
            trans('keywords.id'),trans("keywords.part_number"),trans('keywords.supplied_part_number'),
            trans("keywords.brand"),trans("keywords.quantity"),
            trans("keywords.ar_part_name"),trans("keywords.en_part_name"),
            trans("keywords.offered_stock"),trans("keywords.min_quantity_per_transaction"),
            trans("keywords.max_quantity_per_transaction"),
            trans("keywords.unit_of_packing"),trans("keywords.quantity_per_pallet"),
            trans("keywords.width"),trans("keywords.length"),trans("keywords.thickness"),
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
        $counter = 1;
        if(sizeof($row->quotations) > 0){
            if(sizeof($row->quotations) == sizeof($row->items)){
                $rows_data = $row->quotations;
            }else{
                // in this case you have many items with different prices and different quantities
                $rows_data = $row->items;
            }
            foreach ($rows_data as $key => $quotation){
                if(sizeof($row->items) > 0){
                    // get item prices that part_number equal to quotation part number
                    if($quotation->prices == null){
                        $item = collect($row->items)->filter(function ($e) use ($quotation){
                            return $e->part_number == $quotation->part_number;
                        })->first();
                    }else{
                        $item = $quotation; // in this case you use $row->items at line 170
                        $quotation->quantity = $row->quotations->filter(function ($e) use ($item){
                            return $e->part_number == $item->part_number;
                        })->first()->quantity;

                    }
                    $item->brand = brands::selection()->find($item->brand_id);
                    if(sizeof($item->prices) > 0){
                        // there are prices
                        foreach($item->prices as $price){
                            array_push($prices_output,$price->min_quantity);
                            array_push($prices_output,$price->price);
                        }
                    }
                    array_push($output,[
                        $counter++,
                        //   $status,
                        $quotation->part_number,
                        items_infos_supplied_part_number::query()->where('item_id',$item->id)->first()->part_number??'',
                        $item->brand->name ?? $item->brand_id,
                        $quotation->quantity,
                        $item->ar_part_name,
                        $item->en_part_name,
                        $item->offered_stock,
                        $item->min_quantity_per_transaction,
                        $item->max_quantity_per_transaction,
                        $item->unit_of_packing,
                        $item->quantity_per_pallet,
                        $item->width,
                        $item->length,
                        $item->thickness,
                    ]);
                    $final_output[] = (array_merge($output[0],$prices_output));
                    $prices_output = [];
                    $output =  [];
                }else{
                    $item = collect($row->items)->filter(function ($e) use ($quotation){
                        return $e->part_number == $quotation->part_number;
                    })->first();
                    array_push($output,[
                        $counter++,
                        //   $status,
                        $quotation->part_number,
                        $item != null ? (items_infos_supplied_part_number::query()->where('item_id',$item->id)->first()->part_number??''):'',
                        $quotation->brand->name ?? $quotation->brand_id,
                        $quotation->quantity,
                    ]);
                    $final_output[] = $output[0];
                }

                array_pop($output);
            }
        }
        return $final_output;
    }


}
