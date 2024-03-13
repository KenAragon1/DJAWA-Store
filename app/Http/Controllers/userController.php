<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class userController extends Controller
{
    //
    public function profilUser($id_user)
    {
        return view('profil');
    }
}
