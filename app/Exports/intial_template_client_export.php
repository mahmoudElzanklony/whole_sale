<?php

namespace App\Exports;


use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Events\AfterSheet;


class intial_template_client_export implements  WithHeadings,WithEvents
{
    /**
     * @return \Illuminate\Support\Collection
     */
    use Exportable;


    public function registerEvents(): array
    {
        return [
            AfterSheet::class    => function(AfterSheet $event) {

                $event->sheet->getDelegate()->getColumnDimension('A')->setWidth(20);
                $event->sheet->getDelegate()->getColumnDimension('B')->setWidth(20);
                $event->sheet->getDelegate()->getColumnDimension('C')->setWidth(20);

            },
        ];
    }

    public function headings(): array
    {
        $full_columns = [
            trans("keywords.part_number"),
            trans("keywords.brand"),trans("keywords.quantity"),
        ];
        return $full_columns;
    }

}
