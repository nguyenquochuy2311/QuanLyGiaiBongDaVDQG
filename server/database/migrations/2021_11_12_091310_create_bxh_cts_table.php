<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBxhCtsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bxh_ct', function (Blueprint $table) {
            $table->integer('idMG')->unsigned();
            $table->integer('idCT')->unsigned();
            $table->primary(['idMG', 'idCT']);
            $table->integer('SoBanThang');
            $table->timestamps();

            $table->foreign('idMG')
                ->references('idMG')
                ->on('muagiai')
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
        Schema::dropIfExists('bxh_ct');
    }
}