<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\OrderItems;
use App\Models\OrderStatus;
use App\Models\Product;
use App\Models\ProductStock;
use Carbon\Carbon;
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
        $orders = Order::whereHas('order_status', function ($query) {
            $query->whereNotIn('status', ['EXPIRED', 'PENDING']);
        })->with('order_status')->get();

        return Inertia::render('Admin/Order/Index', [
            "orders" => $orders
        ]);
    }

    public function adminShow($id_order)
    {
        $order = Order::where('id_order', $id_order)->with(['payment', 'order_item', 'order_status'])->first();
        $status_option = OrderStatus::where('id_status', '>', $order->id_status)->get();
        return Inertia::render('Admin/Order/Show', [
            "order" => $order,
            "status_option" => $status_option
        ]);
    }

    public function index()
    {
        $orders = Order::where('id_user', auth()->id())->with(['payment', 'order_status'])->get();

        return Inertia::render('Client/Order/Index', [
            'orders' => $orders
        ]);
    }

    public function show($id_order)
    {
        $order = Order::where('id_order', $id_order)->with(['payment', 'order_item', 'order_status'])->first();

        if (!$order || $order->id_user !== auth()->id()) return abort(404);

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
        $order = Order::with('order_status')->findOrFail($id_order);

        // Only For Customer Made A Success Purchase
        if (auth()->user()->user_type === "client" && $order->order_status->status === 'PENDING') {
            $order->update([
                'id_status' => $order->id_status + 1,
                'ordered_at' => Carbon::now()
            ]);

            $paymentController = new paymentController();
            $paymentController->update($order->id_payment, $request->payment_method);
        }

        // For Admin
        if (auth()->user()->user_type === "Admin" && $order->order_status->status != 'PENDING' && $order->order_status->status != 'EXPIRED') {
            $current_status = $order->order_status->status;
            switch ($current_status) {
                case 'PROCESSED':
                    $request->validate([
                        'no_receipt' => 'required'
                    ]);
                    $order->update([
                        'id_status' => $request->id_status,
                        'no_receipt' => $request->no_receipt
                    ]);
                    break;
                case 'DELIVERY':
                    $order->update([
                        'id_status' => $request->id_status,
                    ]);
                    break;
                default:
                    dd($current_status);

                    break;
            }
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
