<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTranDausTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('trandau', function (Blueprint $table) {
            $table->increments('idTD');
            $table->integer('VongDau');
            $table->integer('Doi1')->unsigned();
            $table->integer('Doi2')->unsigned();
            $table->string('SanDau');
            $table->dateTime('ThoiGian');
            $table->integer('idMG')->unsigned();
            $table->integer('idToTT')->unsigned();
            $table->timestamps();

            $table->foreign('Doi1')
                ->references('idCLB')
                ->on('clb')
                ->onUpdate('cascade')
                ->onDelete('cascade');

            $table->foreign('Doi2')
                ->references('idCLB')
                ->on('clb')
                ->onUpdate('cascade')
                ->onDelete('cascade');

            $table->foreign('idMG')
                ->references('idMG')
                ->on('muagiai')
                ->onUpdate('cascade')
                ->onDelete('cascade');
                
            $table->foreign('idToTT')
                ->references('idToTT')
                ->on('totrongtai')
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
        Schema::dropIfExists('trandau');
    }
}