<?php

namespace App\Http\Controllers\Api\Teams;

use App\Http\Controllers\Controller;
use App\Models\Teams;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class TeamController extends Controller
{
    public function EventTeams(Request $request)
    {
        $eventId = $request->route('eventId');

        $teams = Teams::where('event_id', $eventId)->get();

        foreach ($teams as $team) {
            $team->members = json_decode($team->members);
            // Perform any necessary formatting or manipulation here
        }
        return response()->json($teams);
    }

    public function EventTeamsSingle(Request $request)
    {
        $eventId = $request->route('eventId');
        $teamId = $request->route('teamId');

        $team = Teams::where('event_id', $eventId)
        ->where('id', $teamId)
        ->first();

        if (!$team) {
            return response()->json(['error' => 'Team not found'], 404);
        }

        $team->members = json_decode($team->members);
        return response()->json($team);
    }
}
