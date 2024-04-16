<?php

namespace App\Http\Controllers;

use App\Models\spesifikasi;
use Illuminate\Http\Request;

class spesifikasiController extends Controller
{
    //
    public function getSpesifikasi($id_kategori) {
        $spesifikasi = spesifikasi::where('id_kategori', $id_kategori)->get();
        return response()->json($spesifikasi);
    }
}
