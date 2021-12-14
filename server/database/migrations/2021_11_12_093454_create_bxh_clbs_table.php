<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBxhClbsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bxh_clb', function (Blueprint $table) {
            $table->integer('idMG')->unsigned();
            $table->integer('idCLB')->unsigned();
            $table->primary(['idMG', 'idCLB']);
            $table->integer('Thang');
            $table->integer('Hoa');
            $table->integer('Thua');
            $table->integer('SoTran');
            $table->integer('Diem');
            $table->timestamps();

            $table->foreign('idMG')
                ->references('idMG')
                ->on('muagiai')
                ->onUpdate('cascade')
                ->onDelete('cascade');
            
            $table->foreign('idCLB')
                ->references('idCLB')
                ->on('clb')
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
        Schema::dropIfExists('bxh_clb');
    }
}