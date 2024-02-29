<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class authController extends Controller
{
    public function login(Request $request)
    {
        $login = $request->validate([
            'username' => 'required',
            'password' => 'required'
        ]);

        if (Auth::attempt($login)) {
            $request->session()->regenerate();
            Log::info('User logged in successfully: ' . Auth::user()->username);

            return redirect('/');
        }

        return back();
    }
    //
    public function register(Request $request)
    {
        $valid = $request->validate([
            'username' => 'required|unique:user',
            'password' => 'required',
            'email' => 'required|email|unique:user'
        ]);

        $valid['password'] = bcrypt($valid['password']);
        $valid['uid'] = rand(1000, 9999);
        // dd($valid);
        try {
            if (User::create($valid)) {
                return redirect('/login');
            } else {
                return redirect('/register');
            }
        } catch (\Error $error) {
            //throw $th;
            return 'something went wrong';
        }

    }

    public function logout()
    {
        Auth::logout();
        return redirect('/');
    }

    public function halRegister()
    {
        return view('register');
    }
    public function halLogin()
    {

        return view('login');
    }


}
