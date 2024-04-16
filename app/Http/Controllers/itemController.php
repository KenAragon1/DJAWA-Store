<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class itemController extends Controller
{
    public function home(kategoriController $kategoriController)
    {
        $kategori = $kategoriController->getAllKategori();
        return view('home', compact('kategori'));
    }
}
