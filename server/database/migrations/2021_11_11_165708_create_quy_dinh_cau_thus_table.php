<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateQuyDinhCauThusTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('quydinhcauthu', function (Blueprint $table) {
            $table->increments('idQDCT');
            $table->integer('idMG')->unsigned();
            $table->integer('TuoiToiThieu');
            $table->integer('TuoiToiDa');
            $table->integer('SLToiThieu');
            $table->integer('SLToiDa');
            $table->integer('SLNuocNgoai');
            $table->timestamps();

            $table->foreign('idMG')
                ->references('idMG')
                ->on('muagiai')
                ->onUpdate('cascade')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('quydinhcauthu');
    }
}