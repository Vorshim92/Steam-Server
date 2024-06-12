<?php

namespace Database\Seeders;

use App\Models\Game;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'username' => 'Admin',
            'email' => 'admin@admin.it',
            'role' => 'admin',
        ]);
        User::factory()->create([
            'username' => 'Test User',
            'email' => 'test@example.com',
        ]);

        Game::factory(10)->create();
    }
}