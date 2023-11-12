<?php

namespace App\Http\Controllers\Api\Vote;

use App\Http\Controllers\Controller;
use App\Models\Votes;
use App\Models\events;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\DiscordServerMember;
use App\Models\Teams;
use DateTime;
use Carbon\Carbon;
use Illuminate\Support\Facades\Date;

class VoteController extends Controller
{
    public function Vote(Request $request)
    {
       
        $postData = $request->all();
        $discord_id = $postData['discord_id'] ?? null;
        $event_id = $postData['event_id'] ?? null;
        $team_id = $postData['team_id'] ?? null;
        $score = $postData['score'] ?? 1;

        // Check start date and end date of the event
        $event = events::find($event_id);

        $currentDateTime = Carbon::parse(Carbon::now())->format('Y-m-d H:i:s');

        // Check if voting not yet started
        if ( $currentDateTime < $event->voting_startdate ) {
            return response()->json(['error' => 'Voting not yet started'], 400);            
        }

        // Check if voting already ended
        if ( $currentDateTime > $event->voting_enddate ) {
            return response()->json(['error' => 'Voting already ended'], 400);
        }

        // Check if user is logged
        if ($discord_id == null && $event_id !== null && $team_id !== null) {
            return response()->json(['error' => 'Please log in with Discord to make a vote. Login mo to!'], 400);
        }

        if ($discord_id == null || $event_id == null || $team_id == null) {
            return response()->json(['error' => 'Nung ginagawa muh!. Something went wrong'], 400);
        }

        

        // If user is not a member of discord server
        $isValidMember = $this->isValidDiscordServerMember($discord_id);
        if (!$isValidMember) 
        {
            return response()->json(['error' => 'Only members who have been part of the Daedalus Discord server for at least one week before the event can vote. Better luck next year.'], 400);
        }

        $is_judge = "true";

        // Reset score to maximum of 5
        if ($score > 5) { $score = 5; }

        // Check if discord id is in the database usertest. If yes he can vote more than 1 point
        $count = DB::table('users')->where('discord_id', $discord_id)->count();
        if ($count === 0) {
            $score = 1;
            $is_judge = "false";
        }


        if ($is_judge == "true") 
        {
            // If user is a judge (TRUE) check if he already voted on specific team. If true, return error
            $count = DB::table('votes')
            ->where('discord_id', $discord_id)
            ->where('event_id', $event_id)
            ->where('team_id', $team_id)
            ->count();
            if ($count > 0) {
                return response()->json(['error' => "You've already made a vote/score for this team BOSSING!"], 400);
            }
        } 
        else 
        {
            // If user is not judge (FALSE), check if he already voted. If true, return error
            $count = DB::table('votes')
            ->where('discord_id', $discord_id)
            ->where('event_id', $event_id)
            ->count();
            if ($count > 0) {
                return response()->json(['error' => 'You have already voted and can only vote once'], 400);
            } 

            // Check if the the voter is a member of the team they are voting
            $team = DB::table('teams')
            ->where('id', $team_id)
            ->first();
            $team_members_data = json_decode($team->members, TRUE);
            $member_discord_ids = array_column($team_members_data, 'discord_id');
            if (in_array($discord_id, $member_discord_ids)) 
            {
                return response()->json(['error' => 'You cannot vote for your own team. Wag ka madaya.'], 400);
            }
            // return response()->json($team_members_data);
        }
         
        
        // SAVING DATA
        $vote = new Votes;
        $vote->discord_id = $discord_id;
        $vote->event_id = $event_id;
        $vote->team_id = $team_id;
        $vote->score = $score;
        $vote->is_judge = $is_judge;
        $vote->save();

        return response()->json(['error' => 'Congratulations you have voted.'], 201);

        // FOR TESTING
        return response()->json([
            'is_judge' => strval($is_judge),
            'score' => intval($score),
            'event_id' => $event_id,
            'team_id' => $team_id,
            'discord_id' => $discord_id,
        ]);

    }

    public function VoteRankings(Request $request)
    {
        $eventId = $request->route('eventId');

        // total number of judges
        $judgeCount = Votes::where('event_id', $eventId)
        ->where('is_judge', 'true')
        ->distinct('discord_id')
        ->count();

        // total number of community voters
        $communityVoterCount = Votes::where('event_id', $eventId)
        ->where('is_judge', 'false')
        ->count();

        // return response()->json( [ $communityVoterCount ] );
        
        $teams = Teams::where('event_id', $eventId)
        ->select('id', 'name')
        ->get();
        foreach ($teams as $team) {
            // $team->members = json_decode($team->members);

            // Community total votes per team
            $communityTotalVotes = Votes::where('event_id', $eventId)
            ->where('team_id', $team->id)
            ->where('is_judge', 'false')
            ->count();
            $team->communityTotalVotes = $communityTotalVotes;

            // Judges total votes per team
            $judgesTotalVotes = Votes::where('event_id', $eventId)
            ->where('team_id', $team->id)
            ->where('is_judge', 'true')
            ->sum('score');
            $team->judgesTotalVotes = $judgesTotalVotes;
        }

        $result = [
            "judgeCount" => $judgeCount,
            "communityVoterCount" => $communityVoterCount,
            "teams" => $teams
        ];
        return response()->json($result);
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
