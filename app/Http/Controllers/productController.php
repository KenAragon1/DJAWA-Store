<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Inertia\Inertia;
use Illuminate\Support\Str;

class productController extends Controller
{
    public function __construct()
    {
    }

    // Admin Pages
    public function adminProductListPage()
    {
        $products = $this->get('paginate', 10);

        return Inertia::render('Admin/Product/ProductList', [
            'products' => $products
        ]);
    }

    public function adminAddProductPage()
    {
        return Inertia::render('Admin/Product/AddPage');
    }

    public function adminEditProductPage($id_product)
    {
        $product = $this->get('id_product', $id_product);

        return Inertia::render('Admin/Product/EditPage', [
            'product' => $product
        ]);
    }

    // Client Pages
    public function productDetailPage($slug)
    {
        $product = $this->get('slug', $slug);
        return Inertia::render('Client/Product/Index', [
            'product' => $product
        ]);
    }


    // Product Method
    public function get($get_by, $value = null)
    {
        switch ($get_by) {
            case 'all':
                return Product::all();
            case 'paginate':
                return Product::paginate($value);
            case 'id_product':
                return Product::findOrFail($value);
            case 'slug':
                return Product::where('slug', $value)->first();
            default:
                return;
        }
    }

    public function post(Request $request)
    {
        $request->validate(
            [
                'name' => 'required|string',
                'price' => 'required|integer',
                'stock' => 'required|integer',
                'id_category' => 'required',
                'brand' => 'required',
                'weight' => 'required',
                'description' => 'required',
                'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg',
            ]
        );

        $image = $request->file('image');
        $imageName = uniqid() . '.' . $image->getClientOriginalExtension();
        $image->storeAs('public/images/product/', $imageName);

        Product::create([
            'name' => $request->name,
            'price' => $request->price,
            'stock' => $request->stock,
            'id_category' => $request->id_category,
            'description' => $request->description,
            'brand' => $request->brand,
            'weight' => $request->weight,
            'image' => '/storage/images/product/' . $imageName,
            'slug' =>    Str::slug($request->name, '-')
        ]);


        return redirect()->route('admin.product');
    }

    public function put($id, Request $request)
    {
        $product = Product::findOrFail($id);


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
