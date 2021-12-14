<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateQuyDinhDiemSosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('quydinhdiemso', function (Blueprint $table) {
            $table->increments('idQUYDINHDIEMSO');
            $table->integer('idMG')->unsigned();
            $table->integer('DiemThang');
            $table->integer('DiemHoa');
            $table->integer('DiemThua');
            $table->timestamps();

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
        Schema::dropIfExists('quydinhdiemso');
    }
}