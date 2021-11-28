<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateXuPhatsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('xuphat', function (Blueprint $table) {
            $table->increments('idXP');
            $table->integer('idKQ')->unsigned();
            $table->integer('idCT')->unsigned();
            $table->string('LoaiThe', 45);
            $table->integer('ThoiDiem');

            $table->foreign('idKQ')
                ->references('idKQ')
                ->on('ketqua')
                ->onUpdate('cascade')
                ->onDelete('cascade');

            $table->foreign('idCT')
                ->references('idCT')
                ->on('cauthu')
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
        Schema::dropIfExists('xuphat');
    }
}