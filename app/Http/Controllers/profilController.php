<?php

namespace App\Http\Controllers;

use App\Models\Profil;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class profilController extends Controller
{
    //
    public function getProfil($id_user) {
        $profil = Profil::findOrFail($id_user)->first();
        return $profil;

    }

    public function updateProfil(Request $request) {
        // Validasi
        $profilData = $request->validate([

        ]);

        $profil = Profil::findOrFail(Auth::user()->id_user);
        $profil->update($profilData);

        return redirect()->route('profil-page')->with(["message" => "Berhasil Update Profil"]);

    }

    public function profilPage() {
        $profil = $this->getProfil(Auth::user()->id_user);
        return view('profil', compact('profil'));
    }

    public function editProfilPage() {
        $profil = $this->getProfil(Auth::user()->id_user);
        return view('edit-profil', compact('profil'));
    }
}
