<?php

namespace App\Http\Controllers\api\Events;

use App\Http\Controllers\Controller;
use App\Models\votes;
use Illuminate\Http\Request;
use DateTime;
use App\Models\events;

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
        if ($checkUserVoted == null) {
            //create vote
            $vote = new votes();
            $vote->user_id = $user;
            $vote->vote = $vote;
            $vote->vote_score = 1;

            $vote->save();
        } else {
            //return error
            return response()->json(['error' => 'User has already voted'], 400);
        }
    }

    // View datas
    public function records(Request $request)
    {

        $page = $request->input('page') ?? '1';
        $keyword = $request->input('keyword') ?? '';
        $limit = $request->input('limit') ?? '10';
        $order = $request->input('order') ?? 'asc';
        $orderBy = $request->input('orderBy') ?? 'title';

        $events = events::query()
            ->where('title', 'LIKE', "%$keyword%")
            ->orWhere('content', 'LIKE', "%$keyword%")
            ->orderBy($orderBy, $order)
            ->paginate($limit, ['*'], 'page', $page);

        $currentPage = $events->currentPage();
        $totalPages = $events->lastPage();
        $items = $events->items();

        return response()->json(compact('currentPage', 'totalPages', 'items'));
    }

    public function singleItem(Request $request)
    {
        $id = $request->route('id');
        return response()->json(events::find($id));
    }

    public function update(Request $request)
    {
        $id = $request->route('id');
        $event = events::find($id);
        $event->update($request->all());
        return response()->json($event);
    }

    public function delete(Request $request)
    {
        $id = $request->route('id');
        $event = events::find($id);
        $event->delete();
        return response()->json($event);
    }

    // Create event
    public function create(Request $request)
    {

        // Validate required input fields
        $title = $request->input('title');
        $short_description = $request->input('short_description');
        $content = $request->input('content');
        $voting_startdate = $request->input('voting_startdate');
        $voting_enddate = $request->input('voting_enddate');

        if (!$title) {
            return response()->json(['error' => 'Title is required'], 400);
        }

        if (!$short_description) {
            return response()->json(['error' => 'Short description is required'], 400);
        }

        if (!$content) {
            return response()->json(['error' => 'Content is required'], 400);
        }

        if (!$voting_startdate) {
            return response()->json(['error' => 'Voting start date is required'], 400);
        }

        if (!$this->isValidDateTime($voting_startdate)) {
            return response()->json(['error' => 'Voting start date is not valid'], 400);
        }

        if (!$voting_enddate) {
            return response()->json(['error' => 'Voting end date is required'], 400);
        }

        if (!$this->isValidDateTime($voting_enddate)) {
            return response()->json(['error' => 'Voting end date is not valid'], 400);
        }

        if (!$this->isStartDateNotGreaterThanEndDate($voting_startdate, $voting_enddate)) {
            return response()->json(['error' => 'voting start date must be before voting end date'], 400);
        }

        // Validate the request
        $request->validate([
            'cover_image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048', // Example validation rules for an image file
        ]);

        // Check if a file has been uploaded
        if ($request->hasFile('cover_image')) {
            // Get the uploaded file
            $file = $request->file('cover_image');
            $path = $file->store('uploads', 'public');
            $generatedFilename = $file->hashName();
        }

        // Save data to the database
        $event = new events;
        $event->title = $title;
        $event->short_description = $short_description;
        $event->content = $content;
        $event->voting_startdate = $voting_startdate;
        $event->voting_enddate = $voting_enddate;

        // Check if a file has been uploaded and update the model accordingly
        if (isset($path) && isset($generatedFilename)) {
            // $event->cover_image_path = $path;
            // $event->cover_image_filename = $generatedFilename;
            $event->cover_image = '/storage/uploads/' . $generatedFilename;
        }
        $event->save();
        // $event->image_url = isset($path) ? asset('storage/' . $path) : null;
        return response()->json($event);
    }


    private function isValidDateTime($value)
    {
        $format = 'Y-m-d H:i:s';
        $dateTime = DateTime::createFromFormat($format, $value);
        return $dateTime && $dateTime->format($format) === $value;
    }

    private function isStartDateNotGreaterThanEndDate($startDate, $endDate)
    {
        // Convert date strings to DateTime objects
        $startDateTime = new DateTime($startDate);
        $endDateTime = new DateTime($endDate);

        // Compare the dates
        return $startDateTime <= $endDateTime;
    }
}
