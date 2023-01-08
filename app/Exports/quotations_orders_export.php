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


class quotations_orders_export implements FromCollection ,WithHeadings,WithMapping
{
    /**
    * @return \Illuminate\Support\Collection
    */
    use Exportable;

    private $payments;
    public function __construct(Collection $collection){
        $this->payments = $collection;
    }


    public function collection()
    {
        return $this->payments;
    }

    public function headings(): array
    {
        return [
            "id","status","brand","part number","quantity"
        ];
    }

    public function map($row): array
    {
        $output = [];
        if(sizeof($row->quotations) > 0){
            foreach ($row->quotations as $quotation){
                if($row->is_completed == 0){
                  $status = trans('keywords.sent_to_admin');
                }else if( $row->is_completed == 1 ){
                  $status = trans('keywords.reply_from_admin');
                } else if( $row->is_completed == 2 ){
                    $status = trans('keywords.client_confirm_request');
                }else{
                    $status = trans('keywords.complete_request_successfully');
                }
                array_push($output,[
                    $row->id,
                    $status,
                    $quotation->brand->name,
                    $quotation->part_number,
                    $quotation->quantity,
                ]);
            }
        }
        return $output;
    }


}
