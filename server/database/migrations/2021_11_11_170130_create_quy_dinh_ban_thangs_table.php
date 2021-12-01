<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateQuyDinhBanThangsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('quydinhbanthang', function (Blueprint $table) {
            $table->increments('idQUYDINHBANTHANG');
            $table->integer('idMG')->unsigned();
            $table->string('LoaiBT', 10);
            $table->integer('ThoiDiemBatDau');
            $table->integer('ThoiDiemKetThuc');
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
        Schema::dropIfExists('quydinhbanthang');
    }
}