<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Order extends Model
{
    use HasFactory;

    public function subscription(): BelongsTo
    {
        return $this->belongsTo(Subscription::class);
    }

    public function service(): HasOne
    {
        return $this->hasOne(Service::class);
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
