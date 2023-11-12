<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        DB::table('users')->insert([
            'discord_id' => '468435424138887168',
            'name' => 'Artifex',
            'username' => 'directormac',
            'role' => 'judge',
        ]);

        DB::table('users')->insert([
            'discord_id' => '1110983476229980290',
            'name' => 'MJRolex',
            'username' => 'mjrolex',
            'role' => 'judge',
        ]);
    }
}
