<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('benda', function (Blueprint $table) {
            $table->id();
            $table->string('content_benda')->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('benda');
    }
};
