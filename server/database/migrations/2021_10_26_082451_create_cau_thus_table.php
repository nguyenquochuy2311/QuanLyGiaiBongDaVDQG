<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCauThusTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cau_thus', function (Blueprint $table) {
            $table->increments('id');
            $table->string('ten_cau_thu');
            $table->integer('so_ao')->unique();
            $table->string('vi_tri');
            $table->integer('doi_bong_id')->unsigned();
            $table->timestamps();

            $table->foreign('doi_bong_id')
                ->references('id')
                ->on('doi_bongs')
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
        Schema::dropIfExists('cau_thus');
    }
}
