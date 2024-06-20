<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\OrderItems;
use App\Models\OrderStatus;
use App\Models\Product;
use App\Models\ProductStock;
use Illuminate\Http\Request;
use Inertia\Inertia;

class orderController extends Controller
{
    //

    public function __construct()
    {
    }

    public function adminIndex()
    {
        $orders = Order::whereNotIn('id_status', [1])->get();
        return Inertia::render('Admin/Order/Index', [
            "orders" => $orders
        ]);
    }

    public function adminShow($id_order)
    {
        $order = Order::where('id_order', $id_order)->with('payment')->with('order_item')->first();
        $status_option = OrderStatus::where('id_status', '>', $order->id_status)->get();
        return Inertia::render('Admin/Order/Show', [
            "order" => $order,
            "status_option" => $status_option
        ]);
    }

    public function index()
    {
        $orders = Order::where('id_user', auth()->id())->with('payment')->get();

        return Inertia::render('Client/Order/Index', [
            'orders' => $orders
        ]);
    }

    public function show($id_order)
    {
        $order = Order::where('id_order', $id_order)->with('payment')->with('order_item')->with('order_status')->first();

        return Inertia::render('Client/Order/Show', [
            'order' => $order
        ]);
    }

    public function create(Request $request)
    {
        $paymentController = new paymentController();
        $id_payment = $paymentController->create($request->total, $request->customer_details);

        $order = Order::create([
            'id_user' => auth()->id(),
            'id_payment' => $id_payment,
            'id_status' => 1
        ]);

        $id_order = $order->id_order;

        $this->createDetails($id_order, $request->products);

        return redirect()->route('order-page', ['id_order' => $id_order]);
    }

    public function update($id_order, Request $request)
    {
        $order = Order::findOrFail($id_order);

        if (auth()->user()->user_type === "client" && $order->id_status === 1) {
            $order->update([
                'id_status' => $order->id_status + 1
            ]);

            $paymentController = new paymentController();
            $paymentController->update($order->id_payment, $request->payment_method);
        }

        if (auth()->user()->user_type === "Admin") {
            $order->update([
                'id_status' => $request->id_status
            ]);
        }


        return redirect()->back();
    }

    public function createDetails($id_order, $products)
    {
        $productIds = collect($products)->pluck('id_product')->toArray();


        $items = Product::select('id_product', 'name', 'price', 'image')
            ->whereIn('id_product', $productIds)
            ->get()
            ->keyBy('id_product');

        $itemsWithProduct = collect($products)->map(function ($product) use ($items, $id_order) {
            $item = $items->get($product['id_product']);
            return [
                'id_order' => $id_order,
                'id_product' => $item->id_product,
                'name' => $item->name,
                'price' => $item->price,
                'image' => $item->image,
                'quantity' => $product['quantity']
            ];
        });

        OrderItems::insert($itemsWithProduct->toArray());

        foreach ($products as $product) {
            ProductStock::where('id_product', $product['id_product'])
                ->decrement('quantity', $product['quantity']);
        }
    }
}
