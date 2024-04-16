<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('spesifikasi', function (Blueprint $table) {
            $table->id('id_spesifikasi');
            $table->BigInteger('id_kategori')->unsigned();
            $table->string('spesifikasi');
            $table->foreign('id_kategori')->references('id_kategori')->on('kategori');
        
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('spesifikasi');
    }
};
