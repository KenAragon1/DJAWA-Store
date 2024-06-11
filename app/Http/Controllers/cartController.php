<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class cartController extends Controller
{
    //
    public function cartPage()
    {
        $cartData = $this->get();
        return Inertia::render('Client/Cart/CartPage', [
            'cartData' => $cartData
        ]);
    }

    public function get()
    {
        $cartItems = Cart::where('id_user', '=', auth()->id())->with('product')->get();

        return $cartItems;
    }

    public function post(Request $request)
    {
        $id_user = auth()->id();
        $id_product = $request->id_product;

        $cart = Cart::where('id_user', '=',  $id_user)->where('id_product', '=', $id_product)->first();

        if ($cart) {
            $updateCartQuantity = $cart->quantity + $request->amount;
            $cart->update([
                'quantity' =>  $updateCartQuantity
            ]);

            return response(["message" => "Berhasil Menambah Jumlah Produk"], 200);
        }

        Cart::create([
            'id_user' => $id_user,
            'id_product' => $id_product,
            'quantity' => $request->amount
        ]);

        return response(["message" => "Berhasil Menambah Produk ke Keranjang"], 200);
    }

    public function delete($id)
    {
        $id_user = auth()->id();

        $cart = Cart::findOrFail($id);

        if (!$cart) {
            return response(["error" => "Produk yang ingin dihapus tidak ada", "data" => $cart], 400);
        }

        if ($cart->id_user !== $id_user) {
            return response(["error" => "Ini bukan milik kamu"], 401);
        }

        $cart->delete();

        return redirect()->back();
        // return response("berhasil", 200);
    }

    public function calculateTotal(Request $request)
    {
        // Receiving an array that contains object / key value 
        // item object contain {
        // id_cart
        // id_product
        // amount
        //}
        $items = $request->data;
        $total = 0;
        $productSummary = array();

        foreach ($items as $item) {
            $product = Product::findOrFail($item['id_product']);

            // calculate total price per item
            $total_per_item = $product->price * $item['quantity'];

            // calculate total purchase
            $total += $total_per_item;

            // set summary data info
            array_push($productSummary, [
                "id_product" => $product->id_product,
                "imageSlug" => $product->image,
                "name" => $product->name,
                "price" => $product->price,
                "quantity" => $item['quantity'],
                "total" => $total_per_item
            ]);
        }

        return response(["products" => $productSummary, "totalPrice" => $total], 200);
    }
}
