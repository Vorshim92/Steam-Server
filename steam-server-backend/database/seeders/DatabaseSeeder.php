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

        // Game::factory(10)->create();

        Game::factory()->create([
            'name' => "Project Zomboid",
            'description' => fake()->text(),
            'image_thumbnail' => "http://localhost:8000/storage/game_images/project_zomboid_thumbnail.jpg",
            'image_vertical' => "http://localhost:8000/storage/game_images/project_zomboid_vertical.jpg",
            'image_title' => "http://localhost:8000/storage/game_images/project_zomboid_title.png",
        ]);

        Game::factory()->create([
            'name' => "Minecraft",
            'description' => fake()->text(),
            'image_thumbnail' => "http://localhost:8000/storage/game_images/minecraft_thumbnail.jpg",
            'image_vertical' => "http://localhost:8000/storage/game_images/minecraft_vertical.jpg",
            'image_title' => "http://localhost:8000/storage/game_images/minecraft_title.png",
        ]);


        Game::factory()->create([
            'name' => "7 Days to Die",
            'description' => fake()->text(),
            'image_thumbnail' => "http://localhost:8000/storage/game_images/7_days_to_die_thumbnail.jpg",
            'image_vertical' => "http://localhost:8000/storage/game_images/7_days_to_die_vertical.jpg",
            'image_title' => "http://localhost:8000/storage/game_images/7_days_to_die_title.png",
        ]);

        Game::factory()->create([
            'name' => "ARK: Survival Evolved",
            'description' => fake()->text(),
            'image_thumbnail' => "http://localhost:8000/storage/game_images/ark_thumbnail.jpg",
            'image_vertical' => "http://localhost:8000/storage/game_images/ark_vertical.jpg",
            'image_title' => "http://localhost:8000/storage/game_images/ark_title.png",
        ]);
        Game::factory()->create([
            'name' => "DayZ",
            'description' => fake()->text(),
            'image_thumbnail' => "http://localhost:8000/storage/game_images/dayz_thumbnail.jpg",
            'image_vertical' => "http://localhost:8000/storage/game_images/dayz_vertical.jpg",
            'image_title' => "http://localhost:8000/storage/game_images/dayz_title.png",
        ]);
        Game::factory()->create([
            'name' => "Eurocup",
            'description' => fake()->text(),
            'image_thumbnail' => "http://localhost:8000/storage/game_images/eurocup_thumbnail.jpg",
            'image_vertical' => "http://localhost:8000/storage/game_images/eurocup_vertical.jpg",
            'image_title' => "http://localhost:8000/storage/game_images/eurocup_title.png",
        ]);
        Game::factory()->create([
            'name' => "Chivalry",
            'description' => fake()->text(),
            'image_thumbnail' => "http://localhost:8000/storage/game_images/chivalry_thumbnail.jpg",
            'image_vertical' => "http://localhost:8000/storage/game_images/chivalry_vertical.jpg",
            'image_title' => "http://localhost:8000/storage/game_images/chivalry_title.png",
        ]);
    }
}
