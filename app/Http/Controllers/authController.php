<?php

namespace App\Http\Controllers;

use App\Models\Profil;
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
            $user = User::where('username', $request->username)->first();

            return response()->json($user->createToken("token")->plainTextToken);
        }

        return response()->json(["message" => "gagal"]);
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
        $valid['id_user'] = rand(1000000000, 9999999999);
        // dd($valid);

        $user = User::create($valid);

        $profil = new Profil();
        $profil->id_user = $user->id_user;
        $profil->save();

        return redirect()->route('login');
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
