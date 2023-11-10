<?php

use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\Artisan;

/*
|--------------------------------------------------------------------------
| Console Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of your Closure based console
| commands. Each Closure is bound to a command instance allowing a
| simple approach to interacting with each command's IO methods.
|
*/

Artisan::command('inspire', function () {
    $this->comment(Inspiring::quote());
})->purpose('Display an inspiring quote');


use App\Models\DiscordServerMember;
use Illuminate\Support\Facades\Http;

Artisan::command('fetchDiscordMembers', function () {
    // Get scraped members from the API
    $response = Http::get('http://localhost:7000/api/scrape/members');
    $scrapedMembers = $response->json();

    $this->info('Discord members:');

    // Check if there is existing data in the database
    $discordMemberServer = discordServerMember::first();

    if ($discordMemberServer) {
        // Update existing data
        $discordMemberServer->members = json_encode($scrapedMembers);
        $discordMemberServer->save();
        $this->info('Existing data updated.');
    } else {
        // Create a new record
        DiscordServerMember::create(['members' => json_encode($scrapedMembers)]);
        $this->info('New data created.');
    }

})->purpose('Fetch and display Discord members');