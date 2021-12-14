<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHlvsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('hlv', function (Blueprint $table) {
            $table->increments('idHLV');
            $table->integer('idCLB')->unsigned();
            $table->string('TenHLV', 45);
            $table->date('NgaySinh');
            $table->string('ChucVu', 45);
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
        Schema::dropIfExists('hlv');
    }
}