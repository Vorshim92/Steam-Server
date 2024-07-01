<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\V1\GameController;
use App\Http\Controllers\Api\V1\UserController;
use App\Http\Controllers\Api\V1\OrderController;
use App\Http\Controllers\Api\V1\SubscriptionController;

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::name('api.v1.')->prefix('v1')->group(function () {
    Route::apiResource('/games', GameController::class);
    Route::apiResource('/users', UserController::class);
    Route::apiResource('/subscriptions', SubscriptionController::class);
    Route::apiResource('/orders', OrderController::class);
});
