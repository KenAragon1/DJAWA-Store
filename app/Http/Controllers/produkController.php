<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class produkController extends Controller
{
    //

    public function detailProduk($id_produk)
    {
        return view('detail-produk');

    }
}
