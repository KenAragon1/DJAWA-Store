<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\OrderItems;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class orderController extends Controller
{
    //

    public function __construct()
    {
    }

    public function orderListPage()
    {
        $orderList = Order::where('id_user', auth()->id())->get();

        return Inertia::render('Client/Order/OrderList', [
            'orderList' => $orderList
        ]);
    }

    public function orderPage($id_order)
    {
        $orderData = Order::where('id_order', $id_order)->with('payment')->with('order_item')->first();

        return Inertia::render('Client/Order/OrderPage', [
            'orderData' => $orderData
        ]);
    }

    public function get()
    {
    }

    public function create(Request $request)
    {
        $paymentController = new paymentController();
        $id_payment = $paymentController->create($request->total, $request->customer_details);

        $order = Order::create([
            'id_user' => auth()->id(),
            'id_payment' => $id_payment,
            'status' => 'payment_pending'
        ]);

        $id_order = $order->id_order;

        $this->createDetails($id_order, $request->products);

        return redirect()->route('order-page', ['id_order' => $id_order]);
    }

    public function update($id_order, Request $request)
    {
        $order = Order::findOrFail($id_order);

        $order->update([
            'status' => $request->status
        ]);

        $paymentController = new paymentController();
        $paymentController->update($order->id_payment, $request->total_transaction, $request->payment_method);

        return redirect()->back();
    }

    public function createDetails($id_order, $products)
    {
        $productIds = array_map(function ($product) {
            return $product['id_product'];
        }, $products);

        $items = Product::select('id_product', 'name', 'price', 'image')->whereIn('id_product', $productIds)->get()->toArray();

        $itemsWithProduct = array_map(function ($item) use ($products) {
            $productFilter = array_filter($products, function ($product) use ($item) {
                return $product['id_product'] == $item['id_product'];
            });

            $firstProduct =  array_shift($productFilter);
            $productQuantity = $firstProduct['quantity'];
            return [...$item, "quantity" => $productQuantity];
        }, $items);


        foreach ($itemsWithProduct as $item) {
            OrderItems::create([
                'id_order' => $id_order,
                ...$item
            ]);
        }
    }
}
