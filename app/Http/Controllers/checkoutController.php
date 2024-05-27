<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;

class checkoutController extends Controller
{
    //
    public function show()
    {
        return Inertia::render('Client/Checkout/CheckoutPage');
    }

    public function createSession(Request $request)
    {

        session(["checkoutData" =>  $request->checkoutData]);
        return redirect()->route('checkout-page');
    }

    public function getSession()
    {
        $checkoutData = session('checkoutData');

        return response([...$checkoutData, "address" => ""], 200);
    }

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
}
