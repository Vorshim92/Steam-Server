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
        Schema::create('services', function (Blueprint $table) {
            $table->id();
            $table->string('type');
            $table->string('name');
            $table->string('description');
            $table->string('image');
            $table->string('price');
            // $table->foreign('user_id')->references('id')->on('users');
            // $table->bigInteger('user_id')->unsigned();
            $table->foreignId('user_id')->constrained()->onUpdate('cascade')->onDelete('cascade');
            // $table->bigInteger('game_id')->unsigned();
            $table->foreignId('game_id')->constrained()->onUpdate('cascade')->onDelete('cascade');
            // $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('services', function (Blueprint $table) {
            $table->dropForeign(['user_id']);
            $table->dropForeign(['game_id']);
        });
        Schema::dropIfExists('services');
    }
};
