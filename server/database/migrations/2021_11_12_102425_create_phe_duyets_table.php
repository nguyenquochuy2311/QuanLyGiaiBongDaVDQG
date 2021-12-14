<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePheDuyetsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pheduyet', function (Blueprint $table) {
            $table->integer('idCLB')->unsigned();
            $table->integer('idMG')->unsigned();
            $table->primary(['idCLB', 'idMG']);
            $table->dateTime('ThoiGianDK');
            $table->dateTime('ThoiGianCN');
            $table->timestamps();

            $table->foreign('idCLB')
                ->references('idCLB')
                ->on('clb')
                ->onUpdate('cascade')
                ->onDelete('cascade');

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
        Schema::dropIfExists('pheduyet');
    }
}