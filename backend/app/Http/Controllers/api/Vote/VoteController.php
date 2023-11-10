<?php

namespace App\Http\Controllers\Api\Vote;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Jakyeru\Larascord\Http\Controllers\DiscordController;


use App\Models\DiscordServerMember;

class VoteController extends Controller
{
    public function Vote(Request $request)
    {

        $postData = $request->all();

        $discord_id = $postData['discord_id'] ?? null;
        $event_id = $postData['event_id'] ?? null;
        $team_id = $postData['team_id'] ?? null;

        $isValidMember = $this->isValidDiscordServerMember($discord_id);

        return response()->json($isValidMember);
    }


    private function isValidDiscordServerMember($discord_id)
    {

        // Check if any records exist in the z_discord_server_members table
        $discordServerMember = DiscordServerMember::latest()->first();

        if ($discordServerMember) {

            // Get the members array from the latest record
            $membersArray = json_decode($discordServerMember->members, true);

            // Check if the Discord ID is in the members array
            if (!in_array($discord_id, $membersArray)) 
            {
                return false;
            }

            return true;

        } else {
            // No records exist in the z_discord_server_members table
            return false;
        }

    }
}
