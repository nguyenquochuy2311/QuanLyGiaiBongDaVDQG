<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTrongTaisTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('trongtai', function (Blueprint $table) {
            $table->increments('idTT');
            $table->string('TenTT', 45);
            $table->date('NgaySinh');
            $table->string('ViTri', 45);
            $table->string('AnhDaiDien', 45);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('trongtai');
    }
}