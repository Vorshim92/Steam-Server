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
        // Verifica se l'utente è autenticato
        if (!auth()->check()) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        // Verifica se l'utente loggato è lo stesso dell'utente richiesto
        if (auth()->user()->id !== $user->id) {
            return response()->json(['error' => 'Unauthorized'], 403);
        }

        // Recupera l'utente con le relazioni
        $user = User::with('subscriptions', 'subscriptions.game_server')->findOrFail($user->id);

        return $user;
    }
}
