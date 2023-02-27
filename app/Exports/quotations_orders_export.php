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
            "id","status","brand","part number","quantity","s1_min","s1_price","s2_min","s2_price","s3_min","s3_price"
        ];
    }

    public function map($row): array
    {
        $output = [];
        $prices_output = [];
        $final_output = [];
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

                if(sizeof($row->items) > 0){
                    // get item prices that part_number equal to quotation part number
                    $prices = collect($row->items)->filter(function ($e) use ($quotation){
                       return $e->part_number == $quotation->part_number;
                    })->first()->prices;
                    if(sizeof($prices) > 0){
                        // there are prices
                        foreach($prices as $price){
                            array_push($prices_output,$price->min_quantity);
                            array_push($prices_output,$price->price);
                        }
                    }
                }

                array_push($output,[
                    $row->id,
                    $status,
                    $quotation->brand->name,
                    $quotation->part_number,
                    $quotation->quantity,
                ]);
                $final_output[] = (array_merge($output[0],$prices_output));
                $prices_output = [];
                $output =  [];
            }
        }
        return $final_output;
    }


}
