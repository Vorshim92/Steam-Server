<?php

namespace Database\Seeders;

use App\Models\GameServer;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class GameServerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // GameServer::create([
        //     'status' => 'active',
        //     'hostsystems' => 'host1',
        //     'price' => 100,
        //     'duration' => 30,
        //     'username' => 'user1',
        //     'ip' => '192.168.1.1',
        //     'port' => 27015,
        //     'rcon_port' => 27016,
        //     'memory' => 8,
        //     'game' => 'CSGO',
        //     'game_name' => 'Counter Strike: Global Offensive',
        //     'slots' => 16,
        //     'credentials' => 'user1_pass',
        //     'subscription_id' => 1,
        //     'user_id' => 1,
        //     'service_id' => 1,
        // ]);

        // GameServer::create([
        //     'status' => 'pending',
        //     'hostsystems' => 'host2',
        //     'price' => 200,
        //     'duration' => 60,
        //     'username' => 'user2',
        //     'ip' => '192.168.1.2',
        //     'port' => 27017,
        //     'rcon_port' => 27018,
        //     'memory' => 16,
        //     'game' => 'Minecraft',
        //     'game_name' => 'Minecraft',
        //     'slots' => 32,
        //     'credentials' => 'user2_pass',
        //     'subscription_id' => 2,
        //     'user_id' => 2,
        //     'service_id' => 2,
        // ]);
    }
}
