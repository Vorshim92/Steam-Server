<?php

namespace Database\Seeders;

use Carbon\Carbon;
use App\Models\Subscription;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class SubscriptionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Subscription::create([
        //     'payment_method' => 'credit_card',
        //     'payment_status' => 'paid',
        //     'price' => 50,
        //     'currency' => 'USD',
        //     'subscription_type' => 'monthly',
        //     'subscription_status' => 'active',
        //     'subscription_period' => '30 days',
        //     'subscription_start' => Carbon::now()->subDays(10)->toDateTimeString(),
        //     'subscription_end' => Carbon::now()->addDays(20)->toDateTimeString(),
        //     'subscription_next_billing' => Carbon::now()->addDays(20)->toDateTimeString(),
        //     'subscription_last_billing' => Carbon::now()->subDays(10)->toDateTimeString(),
        //     'user_id' => 1,
        //     'service_id' => 1,
        //     // 'order_id' => 1,
        // ]);

        // Subscription::create([
        //     'payment_method' => 'paypal',
        //     'payment_status' => 'unpaid',
        //     'price' => 120,
        //     'currency' => 'EUR',
        //     'subscription_type' => 'yearly',
        //     'subscription_status' => 'pending',
        //     'subscription_period' => '365 days',
        //     'subscription_start' => Carbon::now()->subMonths(1)->toDateTimeString(),
        //     'subscription_end' => Carbon::now()->addMonths(1)->toDateTimeString(),
        //     'subscription_next_billing' => Carbon::now()->addMonths(6)->toDateTimeString(),
        //     'subscription_last_billing' => Carbon::now()->subMonths(6)->toDateTimeString(),
        //     'user_id' => 1,
        //     'service_id' => 2,
        //     // 'order_id' => 2,
        // ]);
    }
}
