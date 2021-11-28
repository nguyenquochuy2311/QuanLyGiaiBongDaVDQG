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
        Schema::create('cauthu', function (Blueprint $table) {
            $table->increments('idCT');
            $table->integer('idCLB')->unsigned();
            $table->string('TenCT', 45);
            $table->date('NgaySinh');
            $table->string('ViTri', 45);
            $table->integer('SoAo');
            $table->integer('ChieuCao');
            $table->string('LoaiCauThu', 45);
            $table->string('AnhDaiDien', 45);
            $table->timestamps();

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
        Schema::dropIfExists('cauthu');
    }
}