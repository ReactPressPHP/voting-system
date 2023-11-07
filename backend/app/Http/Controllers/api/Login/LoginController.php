<?php

namespace App\Http\Controllers\api\Login;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (auth()->attempt($credentials)) {
            // Authentication passed
            $user = auth()->user();
            $token = $user->createToken('auth_token')->plainTextToken;

            return response()->json(['token' => $token], 200);
        } else {
            // Authentication failed
            return response()->json(['error' => 'Unauthorized'], 401);
        }
    }
}