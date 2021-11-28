<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateClbsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('clb', function (Blueprint $table) {
            $table->increments('idCLB');
            $table->string('VietTat', 10)->unique();
            $table->string('TenCLB', 45)->unique();
            $table->string('SanNha', 45);
            $table->string('TruSo', 45)->nullable();
            $table->string('Logo', 45);
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
        Schema::dropIfExists('clb');
    }
}