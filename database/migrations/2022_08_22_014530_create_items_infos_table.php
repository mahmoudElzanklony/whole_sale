<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateItemsInfosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('items_infos', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('part_number');
            $table->string('brand_id')->nullable();
            $table->foreignId('quotation_order_id')->constrained('quotation_orders')
                ->onUpdate('cascade')->onDelete('cascade');
            $table->string('ar_part_name');
            $table->string('en_part_name');
            $table->string('ar_part_description');
            $table->string('en_part_description');
            $table->integer('offered_stock');
            $table->integer('min_quantity_per_transaction');
            $table->integer('max_quantity_per_transaction');
            $table->integer('unit_of_packing');
            $table->integer('quantity_per_pallet');
            $table->integer('width');
            $table->integer('length');
            $table->integer('thickness');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('items_infos');
    }
}
