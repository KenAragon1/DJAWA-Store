<?php

namespace App\Http\Controllers;

use App\Models\Payment;
use App\Models\Product;
use App\Models\User;
use App\Models\UserAddress;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;
use LDAP\Result;

class checkoutController extends Controller
{
    //
    public function checkoutPage()
    {
        $user = User::findOrFail(auth()->id());
        $productsData = $this->get();

        return Inertia::render('Client/Checkout/Index', [
            'productsData' => $productsData,
            'user' => $user,
            'addresses' => UserAddress::where('id_user', auth()->id())->get()
        ]);
    }


    public function post(Request $request)
    {
        Session::put(["checkoutData" =>  $request->products]);

        return redirect()->route('checkout-page');
    }

    public function get()
    {
        $checkoutData = session('checkoutData');


        if (!$checkoutData) {
            return redirect()->back();
        }

        $ids = [];

        foreach ($checkoutData as $data) {
            $ids[] = $data['id_product'];
        }

        $products = Product::whereIn('id_product', $ids)->select('id_product', 'name', 'price', 'weight', 'image')->get()->toArray();

        $productData = [];

        // calculating each price total item
        foreach ($checkoutData as $checkout) {
            foreach ($products as $product) {
                if ($checkout['id_product'] === $product['id_product']) {
                    $total = $product["price"] * $checkout["quantity"];
                    $productData[] = [...$product, "quantity" => $checkout["quantity"], "total" => $total];
                }
            }
        }

        $totalPrice = 0;
        $weight = 0;

        foreach ($productData as $product) {
            $totalPrice = $totalPrice + $product['total'];
            $weight = $weight + $product['weight'];
        }

        return ["total_price" => $totalPrice, "total_weight" => $weight, "products" => $productData];
    }
}
