<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class rajaongkirController extends Controller
{
    //
    public function getProvinsi()
    {
        $response = Http::withHeaders([
            'key' => env("RAJAONGKIR_KEY")
        ])->get('https://api.rajaongkir.com/starter/province');

        return response($response);
    }

    public function getKota($id_provinsi)
    {
        if (!$id_provinsi) {
            return response(["error" => "please select province"], 400);
        }

        $response = Http::withHeaders([
            'key' => env("RAJAONGKIR_KEY")
        ])->withQueryParameters([
            'province' => $id_provinsi
        ])->get('https://api.rajaongkir.com/starter/city');

        return response($response);
    }

    public function ongkir(Request $request)
    {
        $request->validate([
            "destination" => "required",
        ]);

        $weight = 0;

        foreach ($request->products as $product) {
            $weight = $weight + ($product['weight'] * $product['quantity']);
        }

        (array) $response = Http::withHeaders([
            'key' => env("RAJAONGKIR_KEY")
        ])->post('https://api.rajaongkir.com/starter/cost', [
            "origin" => 5,
            "destination" => $request->destination,
            "weight" => $weight,
            "courier" => "jne",
        ]);


        return response($response);
    }
}
