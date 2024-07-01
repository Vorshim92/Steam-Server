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
        Schema::create('subscriptions', function (Blueprint $table) {
            $table->id();
            $table->string('payment_method');
            $table->string('payment_status');
            $table->integer('price');
            $table->string('currency');
            $table->string('subscription_type');
            $table->string('subscription_status');
            $table->string('subscription_period');
            $table->string('subscription_start');
            $table->string('subscription_end');
            $table->string('subscription_next_billing');
            $table->string('subscription_last_billing');
            $table->foreignId('user_id')->constrained()->onUpdate('cascade')->onDelete('cascade');
            $table->foreignId('service_id')->constrained()->onUpdate('cascade')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('subscriptions', function (Blueprint $table) {
            $table->dropForeign(['user_id']);
        });
        Schema::dropIfExists('subscriptions');
    }
};
