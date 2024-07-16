<?php

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

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
            $table->string('game_name');
            $table->string('description');
            $table->integer('price');
            $table->string('cpu');
            $table->integer('ram')->default(4);
            $table->enum('location', ['Frankfurt', 'London', 'Milan']);
            $table->enum('platform', ['steam', 'pc'])->default('steam');
            $table->integer('slots')->unsigned()->default(4);
            $table->foreignId('game_id')->constrained()->onUpdate('cascade')->onDelete('cascade');
            $table->timestamps();
        });

        // Add check constraint for slots
        DB::statement('ALTER TABLE services ADD CONSTRAINT check_slots_range CHECK (slots BETWEEN 1 AND 128)');
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('services', function (Blueprint $table) {
            $table->dropForeign(['game_id']);
        });

        // Drop the check constraint
        DB::statement('ALTER TABLE services DROP CONSTRAINT check_slots_range');

        Schema::dropIfExists('services');
    }
};
