<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateQuotationsOrdersOffersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('quotations_orders_offers', function (Blueprint $table) {
            $table->id();
            $table->foreignId('quotation_order_id')->constrained('quotation_orders')->onUpdate('cascade')->onDelete('cascade');
            $table->foreignId('offer_id')->constrained('offers')->onUpdate('cascade')->onDelete('cascade');
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
        Schema::dropIfExists('quotations_orders_offers');
    }
}
