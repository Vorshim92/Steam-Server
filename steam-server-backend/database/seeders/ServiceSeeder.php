<?php

namespace Database\Seeders;

use App\Models\Service;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class ServiceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // \App\Models\Service::factory(10)->create();

        // id = 1 (Project Zomboid)
        Service::factory()->create([
            'type' => 'promo',
            'game_name' => 'Project Zomboid',
            'description' => 'Steam',
            'price' => 5,
            'cpu' => 'AMD 7700X',
            'ram' => 4,
            'location' => 'Frankfurt',
            'platform' => 'steam',
            'slots' => 4,
            'game_id' => 1,
        ]);
        Service::factory()->create([
            'type' => 'promo',
            'game_name' => 'Project Zomboid',
            'description' => 'Steam',
            'price' => 10,
            'cpu' => 'AMD 7800X',
            'ram' => 4,
            'location' => 'Frankfurt',
            'platform' => 'steam',
            'slots' => 4,
            'game_id' => 1,
        ]);
        Service::factory()->create([
            'type' => 'promo',
            'game_name' => 'Project Zomboid',
            'description' => 'Steam',
            'price' => 15,
            'cpu' => 'AMD 7950X',
            'ram' => 4,
            'location' => 'Frankfurt',
            'platform' => 'steam',
            'slots' => 4,
            'game_id' => 1,
        ]);
        Service::factory()->create([
            'type' => 'custom',
            'game_name' => 'Project Zomboid',
            'description' => 'Steam',
            'price' => 5,
            'cpu' => 'AMD 7700X',
            'ram' => 4,
            'location' => 'Frankfurt',
            'platform' => 'steam',
            'slots' => 4,
            'game_id' => 1,
        ]);
    }
}
