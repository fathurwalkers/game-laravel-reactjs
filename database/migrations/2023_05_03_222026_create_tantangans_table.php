<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('tantangan', function (Blueprint $table) {
            $table->id();

            $table->string('opsi_1')->nullable();
            $table->string('opsi_2')->nullable();
            $table->string('opsi_3')->nullable();
            $table->string('jawaban_benar')->nullable();

            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('tantangan');
    }
};
