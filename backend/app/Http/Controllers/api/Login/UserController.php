<?php

namespace App\Http\Controllers\Api\Login;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Jakyeru\Larascord\Http\Controllers\DiscordController;

class UserController extends Controller
{
    public function DiscordLogin(Request $request){
        $request->validate([
            
        ]);
        return response()->json([
            'message' => 'Store Success',
        ]);
    }
}
