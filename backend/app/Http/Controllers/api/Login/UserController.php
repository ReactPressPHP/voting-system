<?php

namespace App\Http\Controllers\Api\Login;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    public function DiscordLogin(Request $request){
        $request->validate([
            
        ]);
        return response()->json([
            'message' => 'Store Success',
        ]);
    }

    public function roleChecker(Request $request){
        $discord_id =  $request->id ?? null;

        $count = User::query()->where('discord_id', $discord_id)->count();
        $is_judge = "false";
        if ($count > 0) {
          $is_judge = "true";
        }
      
        return response()->json(['is_judge' => $is_judge]);

    }
}
