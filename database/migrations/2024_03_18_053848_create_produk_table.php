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
        Schema::create('produk', function (Blueprint $table) {
            $table->id('id_produk')->unique();
            $table->string('nama_produk');
            $table->bigInteger('id_kategori')->unsigned();
            $table->integer('harga_produk');
            $table->integer('stok');
            $table->json('spesifikasi');
            $table->string('deskripsi_produk');
            $table->string('foto_produk');
            $table->foreign('id_kategori')->references('id_kategori')->on('kategori');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('produk');
    }
};
