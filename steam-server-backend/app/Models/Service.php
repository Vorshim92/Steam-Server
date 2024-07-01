<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    use HasFactory;

    protected $fillable = [
        'price',
        'cpu',
        'ram',
        'location',
        'platform',
        'slots',
        'game_id',
    ];

    public function subscriptions()
    {
        return $this->hasMany(Subscription::class);
    }

    public function game()
    {
        return $this->belongsTo(Game::class);
    }
    public function order()
    {
        return $this->belongsTo(Order::class);
    }
}
