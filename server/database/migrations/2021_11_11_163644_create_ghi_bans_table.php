<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGhiBansTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ghiban', function (Blueprint $table) {
            $table->increments('idGB');
            $table->integer('idKQ')->unsigned();
            $table->integer('idCT')->unsigned();
            $table->string('LoaiBT', 45);
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
        Schema::dropIfExists('ghiban');
    }
}