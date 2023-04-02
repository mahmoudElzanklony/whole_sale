<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCancelledQuotationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cancelled_quotations', function (Blueprint $table) {
            $table->id();
            $table->foreignId('quotation_id')->constrained('quotation_orders')
                ->onUpdate('cascade')->onDelete('cascade');
            $table->foreignId('cancelled_id')->constrained('reasons_cancellation_orders')
                ->onUpdate('cascade')->onDelete('cascade');
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
        Schema::dropIfExists('cancelled_quotations');
    }
}
