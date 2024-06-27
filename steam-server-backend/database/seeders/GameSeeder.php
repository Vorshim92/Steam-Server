<?php

namespace Database\Seeders;

use App\Models\Game;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class GameSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Game::factory(10)->create();

        Game::factory()->create([
            'name' => "Project Zomboid",
            'description' => fake()->text(),
            'image_thumbnail' => "storage/game_images/project_zomboid_thumbnail.jpg",
            'image_vertical' => "storage/game_images/project_zomboid_vertical.jpg",
            'image_title' => "storage/game_images/project_zomboid_title.png",
            'isTop' => false,
            'isFeatured' => true,
            'isLatest' => true,
        ]);

        Game::factory()->create([
            'name' => "Minecraft",
            'description' => fake()->text(),
            'image_thumbnail' => "storage/game_images/minecraft_thumbnail.jpg",
            'image_vertical' => "storage/game_images/minecraft_vertical.jpg",
            'image_title' => "storage/game_images/minecraft_title.png",
            'isTop' => true,
            'isFeatured' => true,
            'isLatest' => false,
        ]);


        Game::factory()->create([
            'name' => "7 Days to Die",
            'description' => fake()->text(),
            'image_thumbnail' => "storage/game_images/7_days_to_die_thumbnail.jpg",
            'image_vertical' => "storage/game_images/7_days_to_die_vertical.jpg",
            'image_title' => "storage/game_images/7_days_to_die_title.png",
            'isTop' => true,
            'isFeatured' => false,
            'isLatest' => false,
        ]);

        Game::factory()->create([
            'name' => "ARK: Survival Evolved",
            'description' => fake()->text(),
            'image_thumbnail' => "storage/game_images/ark_thumbnail.jpg",
            'image_vertical' => "storage/game_images/ark_vertical.jpg",
            'image_title' => "storage/game_images/ark_title.png",
            'isTop' => true,
            'isFeatured' => false,
            'isLatest' => false,
        ]);
        Game::factory()->create([
            'name' => "DayZ",
            'description' => fake()->text(),
            'image_thumbnail' => "storage/game_images/dayz_thumbnail.jpg",
            'image_vertical' => "storage/game_images/dayz_vertical.jpg",
            'image_title' => "storage/game_images/dayz_title.png",
            'isTop' => true,
            'isFeatured' => false,
            'isLatest' => true,
        ]);
        Game::factory()->create([
            'name' => "Eurocup",
            'description' => fake()->text(),
            'image_thumbnail' => "storage/game_images/eurocup_thumbnail.jpg",
            'image_vertical' => "storage/game_images/eurocup_vertical.jpg",
            'image_title' => "storage/game_images/eurocup_title.png",
            'isTop' => false,
            'isFeatured' => false,
            'isLatest' => true,
        ]);
        Game::factory()->create([
            'name' => "Chivalry",
            'description' => fake()->text(),
            'image_thumbnail' => "storage/game_images/chivalry_thumbnail.jpg",
            'image_vertical' => "storage/game_images/chivalry_vertical.jpg",
            'image_title' => "storage/game_images/chivalry_title.png",
            'isTop' => true,
            'isFeatured' => true,
            'isLatest' => false,
        ]);
    }
}
