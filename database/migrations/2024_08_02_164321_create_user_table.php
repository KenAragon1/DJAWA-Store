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
        Schema::create('user', function (Blueprint $table) {
            $table->id();
            $table->string('name', 100);
            $table->string('email', 100);
            $table->string('email_verified_at', 100)->nullable();
            $table->string('password', 255);
            $table->string('remember_token', 255)->nullable();
            $table->string('user_type')->default('guest');
            $table->string('image', 255)->default('https://www.shutterstock.com/shutterstock/photos/2247726673/display_1500/stock-vector-user-profile-icon-vector-avatar-or-person-icon-profile-picture-portrait-symbol-neutral-gender-2247726673.jpg');            
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user');
    }
};
