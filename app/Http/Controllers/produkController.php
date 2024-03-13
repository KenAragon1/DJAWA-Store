<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class produkController extends Controller
{
    // View
    public function viewProduk($id_produk)
    {
        $produk = $this->getProduk($id_produk);
        return view('detail-produk');
    }

    public function viewUpdateProduk()
    {

    }


    // API untuk Produk
    public function getProduk($id_produk)
    {
        $a = 1 + 1;
        return $a;
    }

    public function postProduk()
    {
    }

    public function updateProduk()
    {

    }

    public function deleteProduk()
    {
    }


}
