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
        //
        Schema::create('product', function (Blueprint $table) {
            $table->id()->unique()->autoIncrement();
            $table->string('name');
            $table->integer('price');
            $table->integer('stock');
            $table->string('category');
            $table->json('spesification');
            $table->longText('description');
            $table->string('image');
            $table->string('slug');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
        Schema::dropIfExists('product');
    }
};
