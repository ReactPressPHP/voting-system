<?php

namespace App\Http\Controllers\api\Events;

use App\Http\Controllers\Controller;
use App\Models\votes;
use Illuminate\Http\Request;

class EventsController extends Controller
{
    public function vote(Request $request)
    {
        //get vote from front end
        $user = $request->user;
        //check if user has already voted
        $checkUserVoted = votes::where('user_id', $user)
                                ->whereNotNull('created_at')
                                ->first();
        if($checkUserVoted == null){
            //create vote
            $vote = new votes();
            $vote->user_id = $user;
            $vote->vote = $vote;
            $vote->vote_score = 1;
            
            $vote->save();
        }else{
            //return error
            return response()->json(['error' => 'User has already voted'], 400);
        }
    }
}
