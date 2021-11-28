<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateToTrongTaisTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('totrongtai', function (Blueprint $table) {
            $table->increments('idToTT');
            $table->integer('idTT')->unsigned();
            $table->primary(['idToTT', 'idTT']);
            $table->timestamps();

            $table->foreign('idTT')
                ->references('idTT')
                ->on('trongtai')
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
        Schema::dropIfExists('totrongtai');
    }
}