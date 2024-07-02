<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\User;
use App\Models\Order;
use App\Models\Subscription;
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

        $this->call([
            GameSeeder::class,
            ServiceSeeder::class,
            SubscriptionSeeder::class,
            OrderSeeder::class,
            GameServerSeeder::class,

        ]);

        $subscription1 = Subscription::find(1);
        $subscription2 = Subscription::find(2);

        $order1 = Order::find(1);
        $order2 = Order::find(2);

        // Aggiorna le subscription con gli order_id
        $subscription1->update([
            'order_id' => $order1->id,
        ]);

        $subscription2->update([
            'order_id' => $order2->id,
        ]);
    }
}
