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
        Schema::create('gameservers', function (Blueprint $table) {
            $table->id();
            $table->enum('status', ['active', 'inactive', 'pending'])->default('pending');
            $table->string('hostsystems')->nullable();
            $table->integer('price'); // Based on slots
            $table->integer('duration')->default(30); // Assuming duration in days
            $table->string('username');
            // $table->foreignId('location_id')->constrained('locations')->onUpdate('cascade')->onDelete('cascade'); // Assuming you have a 'locations' table
            $table->string('ip');
            $table->integer('port');
            $table->integer('rcon_port')->nullable();
            $table->integer('memory');
            $table->string('game');
            $table->string('game_name');
            $table->integer('slots');
            $table->string('credentials')->nullable();

            // Foreign keys
            $table->foreignId('subscription_id')->unique()->constrained('subscriptions')->onUpdate('cascade')->onDelete('cascade');
            $table->foreignId('user_id')->constrained()->onUpdate('cascade')->onDelete('cascade');
            $table->foreignId('service_id')->constrained()->onUpdate('cascade')->onDelete('cascade');
            // $table->foreignId('servermachine_id')->nullable()->constrained()->onUpdate('cascade')->onDelete('cascade'); // Assuming you will have a 'servermachines' table

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('gameservers', function (Blueprint $table) {
            $table->dropForeign(['subscription_id']);
            $table->dropForeign(['user_id']);
            $table->dropForeign(['service_id']);
            // $table->dropForeign(['servermachine_id']);
            // $table->dropForeign(['location_id']);
        });
        Schema::dropIfExists('gameservers');
    }
};
