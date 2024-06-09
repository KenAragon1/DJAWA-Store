<?php

namespace App\Http\Controllers;

use App\Models\Spesification;

class spesificationController extends Controller
{
    //
    public function get($id_category)
    {
        $spesifikasi = Spesification::where('id_category', $id_category)->get();
        return response()->json($spesifikasi);
    }
}
