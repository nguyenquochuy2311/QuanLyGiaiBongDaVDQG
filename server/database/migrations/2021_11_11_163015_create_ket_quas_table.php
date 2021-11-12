<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateKetQuasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ketqua', function (Blueprint $table) {
            $table->increments('idKQ');
            $table->integer('idTD')->unsigned();
            $table->integer('BTDoi1');
            $table->integer('BTDoi2');
            $table->timestamps();

            $table->foreign('idTD')
                ->references('idTD')
                ->on('trandau')
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
        Schema::dropIfExists('ketqua');
    }
}