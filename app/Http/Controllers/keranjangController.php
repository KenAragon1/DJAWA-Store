<?php

namespace App\Http\Controllers;

use App\Models\Keranjang;
use App\Models\Produk;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class keranjangController extends Controller
{
    //
    public function KeranjangView()
    {
        return view('keranjang');
    }

    public function getProdukInCart($id_user)
    {
        $produk = Keranjang::where('id_user', $id_user)->with('produk')->get();

        return response()->json(["data" => $produk]);
    }

    public function addToCart(Request $request)
    {
        $request->validate([
            'id_produk' => 'required',
            'jumlah_produk' => 'required'
        ]);

        $id_produk = $request->id_produk;
        $jumlah_produk = $request->jumlah_produk;
        $id_user = 1;

        $isProdukInCart = Keranjang::where('id_user', $id_user)->where('id_produk', $id_produk)->first();

        if ($isProdukInCart) {
            $updateJumlah = $isProdukInCart->jumlah_produk + $jumlah_produk;
            $isProdukInCart->update(['jumlah_produk' => $updateJumlah]);
            return response()->json(['message' => 'berhasil menambah kuantitas produk', "keranjang" => Keranjang::where('id_user', $id_user)->where('id_produk', $id_produk)->first()]);
        }

        $newKeranjang = Keranjang::create([
            'id_user' => $id_user,
            'id_produk' => $id_produk,
            'jumlah_produk' => $jumlah_produk
        ]);

        return response()->json(['message' => 'berhasil menambahkan produk ke keranjang', 'data' => $newKeranjang]);
    }
}
