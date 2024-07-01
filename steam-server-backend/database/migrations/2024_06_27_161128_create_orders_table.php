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
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->decimal('price', 8, 2);
            $table->enum('status', ['pending', 'paid', 'cancelled'])->default('pending');
            $table->foreignId('user_id')->constrained('users')->onUpdate('cascade')->onDelete('cascade');
            $table->foreignId('service_id')->constrained('services')->onUpdate('cascade')->onDelete('cascade');
            $table->foreignId('subscription_id')->constrained('subscriptions')->onUpdate('cascade')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('orders', function (Blueprint $table) {
            $table->dropForeign(['user_id']);
            $table->dropForeign(['service_id']);
            $table->dropForeign(['subscription_id']);
        });

        Schema::dropIfExists('orders');
    }
};
