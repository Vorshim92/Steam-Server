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
        // Schema::table('subscriptions', function (Blueprint $table) {
        //     $table->foreignId('game_server_id')->unique()->nullable()->constrained('game_servers')->onUpdate('cascade')->onDelete('cascade');
        // });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // Schema::table('subscriptions', function (Blueprint $table) {
        //     $table->dropForeign(['gameserver_id']);
        // });
    }
};