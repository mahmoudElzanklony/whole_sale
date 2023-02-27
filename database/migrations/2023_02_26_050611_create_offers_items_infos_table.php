<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOffersItemsInfosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('offers_items_infos', function (Blueprint $table) {
            $table->id();
            $table->foreignId('offer_id')->constrained()->onUpdate('cascade')->onDelete('cascade');
            $table->foreignId('item_info_id')->constrained('items_infos')->onUpdate('cascade')->onDelete('cascade');
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
        Schema::dropIfExists('offers-items-infos');
    }
}
