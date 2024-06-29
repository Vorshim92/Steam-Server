<?php

namespace App\Http\Controllers\Api\V1;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class UserController extends Controller
{
    public function index()
    {
        return response()->json(auth()->user());
    }

    public function show(User $user)
    {
        $user = User::with('subscriptions', 'subscriptions.game_server')->findorfail($user->id);
        return ['data' => $user];
    }
}
