<?php

namespace App\Http\Controllers;

use App\Models\Kategori;
use Illuminate\Http\Request;

class kategoriController extends Controller
{
    //
    public function getKategori()
    {
        $kategori = Kategori::all();
        return response($kategori);
    }



    public function viewKategori($kategori)
    {
        $allKategori = $this->getAllKategori();
        $judulKategori = $kategori;
        return view('kategori', compact('judulKategori', 'allKategori'));
    }
}
