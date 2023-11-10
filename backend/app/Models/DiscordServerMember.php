<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DiscordServerMember extends Model
{
    protected $table = 'z_discord_server_members';

    protected $fillable = ['members'];

    public $timestamps = true;
}