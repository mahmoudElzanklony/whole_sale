<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateItemsInfosSuppliedPartNumbersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('items_infos_supplied_part_numbers', function (Blueprint $table) {
            $table->id();
            $table->foreignId('item_id')->constrained('items_infos')
                ->onUpdate('cascade')->onDelete('cascade');
            $table->string('part_number')->nullable();
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
        Schema::dropIfExists('items_infos_supplied_part_numbers');
    }
}
