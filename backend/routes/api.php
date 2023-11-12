<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\Login\UserController;
use App\Http\Controllers\Api\Events\EventsController;
use App\Http\Controllers\Api\Vote\VoteController;
use App\Http\Controllers\Api\Teams\TeamController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::get('/Login', [UserController::class, 'DiscordLogin']);
Route::get('/events', [EventsController::class, 'records']);
Route::get('/events/{id}', [EventsController::class, 'singleItem']);
Route::post('/events/create', [EventsController::class, 'create']);
Route::post('/events/update/{id}', [EventsController::class, 'update']);
Route::post('/events/delete/{id}', [EventsController::class, 'delete']);

Route::get('/teams/{eventId}', [TeamController::class, 'EventTeams']);
Route::get('/teams/{eventId}/{teamId}', [TeamController::class, 'EventTeamsSingle']);

Route::post('/vote', [VoteController::class, 'Vote']);
Route::get('/vote/rankings/{eventId}', [VoteController::class, 'VoteRankings']);

Route::get('/roleChecker/{id?}', [UserController::class, 'roleChecker']);



