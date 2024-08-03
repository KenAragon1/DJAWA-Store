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
        Schema::create('product', function (Blueprint $table) {
            $table->id('id_product');
            $table->string('name' ,100);
            $table->integer('price');
            $table->string('brand', 20);
            $table->integer('weight');
            $table->longText('description');
            $table->text('image');
            $table->string('slug', 100);
            $table->foreignId('id_category')->constrained('category', 'id_category')->onDelete('cascade');
            $table->timestamps();
        });

 
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('product');
    }
};
