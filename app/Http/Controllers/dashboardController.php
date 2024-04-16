<?php

namespace App\Http\Controllers;

use App\Models\Kategori;
use App\Models\Produk;
use Illuminate\Http\Request;

class dashboardController extends Controller
{
    // View
    public function dashboardPage()
    {
        return view('dashboard.main');
    }

    public function produkPage()
    {
        return view('dashboard.produk');
    }

    public function viewEditProduk($id_produk)
    {
        return view('dashboard.edit-produk', compact('id_produk'));
    }
}
