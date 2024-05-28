<?php

namespace App\Http\Controllers;

use App\Models\Produk;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

use function Laravel\Prompts\error;

class produkController extends Controller
{
    // View
    public function viewProduk($id_produk)
    {
        return view('detail-produk', compact('id_produk'));
    }

    public function viewUpdateProduk()
    {
    }


    // API untuk Produk
    public function getProduk($id_produk)
    {
        // $produk = Produk::where('id_produk', '=', $id_produk)->with('kategori')->get();
        // if ($produk->isEmpty()) {
        //     return response()->json(["Message" => "Produk Tidak Ada"]);
        // }
        return response()->json('hallo');
    }

    public function getAllProduk()
    {
        // $produk = Produk::all();
        return response()->json(["produk" => "xd"]);
    }

    public function postProduk(Request $request)
    {

        // validasi 
        $rules = [
            'nama_produk' => 'required|string',
            'id_kategori' => 'required|integer',
            'harga_produk' => 'required|integer',
            'deskripsi_produk' => 'required',
            'spesifikasi' => 'required|json',
            'foto_produk' => 'required|image|mimes:jpeg,png,jpg,gif,svg',
        ];

        $validator = Validator::make($request->all(), $rules);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 422);
        }

        // set image
        $nama_produk = $request->input('nama_produk');
        $image = $request->foto_produk;
        $imageName = Str::slug($nama_produk) . '.' . $image->getClientOriginalExtension();
        $image->storeAs('public/foto_produk', $imageName);
        $request['foto_produk'] = $imageName;

        // Send Data to Database
        $newProduk = Produk::create([
            'nama_produk' => $request->nama_produk,
            'id_kategori' => $request->id_kategori,
            'harga_produk' => $request->harga_produk,
            'deskripsi_produk' => $request->deskripsi_produk,
            'spesifikasi' => $request->spesifikasi,
            'foto_produk' => $imageName,
        ]);

        return response()->json(['message' => 'Produk created successfully', 'data' => $newProduk]);
    }

    public function updateProduk(Request $request, $id_produk)
    {
        $produk = Produk::findOrFail($id_produk);

        $rules = [
            'nama_produk' => 'required|string',
            'id_kategori' => 'required|integer',
            'harga_produk' => 'required|integer',
            'deskripsi_produk' => 'required',
            'spesifikasi' => 'required|json',
        ];

        $validator = Validator::make($request->all(), $rules);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        // set image
        if ($request->hasFile('foto_produk')) {
            $nama_produk = $request->input('nama_produk');
            $image = $request->foto_produk;
            $imageName = Str::slug($nama_produk) . '.' . $image->getClientOriginalExtension();
            $image->storeAs('public/foto_produk', $imageName);
            $request['foto_produk'] = $imageName;
        } else {
            $request['foto_produk'] = $produk->foto_produk;
        }

        $produk->update($request->all());

        $newProduk = Produk::findOrFail($id_produk);

        return response()->json(['message' => 'berhasil update produk', 'edit' => $newProduk]);
    }

    public function deleteProduk($id_produk)
    {
        $produk = Produk::findOrFail($id_produk);
        $produk->delete();
        return response()->json(["message" => "berhasil", "delete" => $produk]);
    }
}
