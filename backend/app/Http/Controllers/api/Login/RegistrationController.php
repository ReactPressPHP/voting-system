<?php

namespace App\Http\Controllers\api\Login;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class RegistrationController extends Controller
{


   public function __construct(User $user)
   {
       $this->middleware('auth');
   }
}
