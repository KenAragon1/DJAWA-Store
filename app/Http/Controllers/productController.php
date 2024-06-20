<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProductRequest;
use App\Models\Product;
use App\Models\ProductStock;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Inertia\Inertia;
use Illuminate\Support\Str;

class productController extends Controller
{
    public function __construct()
    {
    }

    public function adminIndex()
    {
        $products = Product::with(['stock', 'category'])->paginate(10);

        return Inertia::render('Admin/Product/Index', [
            'products' => $products
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Product/Create');
    }

    public function edit($id_product)
    {

        $product = Product::with('stock')->findOrFail($id_product);

        return Inertia::render('Admin/Product/Edit', [
            'product' => $product
        ]);
    }

    // Client Pages
    public function show($slug)
    {
        $product = Product::where('slug', $slug)->first();

        if (!$product) abort(404);

        return Inertia::render('Client/Product/Index', [
            'product' => $product
        ]);
    }

    public function store(ProductRequest $request)
    {
        $image = $request->file('image');
        $imageName = uniqid() . '.' . $image->getClientOriginalExtension();
        $image->storeAs('public/images/product/', $imageName);

        $product = Product::create([
            'name' => $request->name,
            'price' => $request->price,
            'id_category' => $request->id_category,
            'description' => $request->description,
            'brand' => $request->brand,
            'weight' => $request->weight,
            'image' => '/storage/images/product/' . $imageName,
            'slug' =>    Str::slug($request->name, '-')
        ]);

        ProductStock::create([
            'id_product' => $product->id_product,
            'quantity' => $request->stock,
        ]);

        return redirect()->route('admin.product');
    }

    public function update($id_product, Request $request)
    {
        $product = Product::findOrFail($id_product);


        if ($request->hasFile('image')) {
            $newImage = $request->file('image');
            $imageName = uniqid() . '.' . $newImage->getClientOriginalExtension();
            $newImage->storeAs('public/images/product/', $imageName);
            $imageRoute = '/storage/images/product/' . $imageName;
        } else {
            $imageRoute = $product->image;
        }

        $product->update([
            'name' => $request->name,
            'price' => $request->price,
            'stock' => $request->stock,
            'category' => $request->category,
            'description' => $request->description,
            'spesification' => $request->spesification,
            'image' =>  $imageRoute,
            'slug' => Str::slug($request->name, '-')
        ]);

        return to_route('admin.product');
    }

    public function delete($id_product)
    {
        $product = Product::findOrFail($id_product);
        $product->delete();
        return redirect()->back();
    }
}
