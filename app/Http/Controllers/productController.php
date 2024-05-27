<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;
use Illuminate\Support\Str;

class productController extends Controller
{
    //
    public function productPage($slug)
    {
        $product = Product::where('slug', '=', $slug)->first();

        return Inertia::render('Client/Product/Index', [
            'product' => $product
        ]);
    }


    public function get()
    {
        $product = Product::all();
        return response()->json($product, 201);
    }

    public function get2($id)
    {
        $product = Product::findOrFail($id);
        return response()->json($product, 201);
    }



    public function post(Request $request)
    {
        $request->validate(
            [
                'name' => 'required|string',
                'price' => 'required|integer',
                'stock' => 'required|integer',
                'category' => 'required',
                'spesification' => 'required',
                'description' => 'required',
                'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg',
            ]
        );

        $name = $request->input('name');
        $image = $request->image;
        $imageName = Str::slug(($name) . '.' . $image->getClientOriginalExtension());
        $image->storeAs('public/foto_produk', $imageName);

        Product::create([
            'name' => $request->name,
            'price' => $request->price,
            'stock' => $request->stock,
            'category' => $request->category,
            'description' => $request->description,
            'spesification' => $request->spesification,
            'image' => $imageName,
            'slug' => Str::slug($request->name, '-')
        ]);


        return to_route('admin.product');
    }

    public function put($id, Request $request)
    {
        $product = Product::findOrFail($id);

        if ($request->hasFile('image')) {
            Storage::delete('foto_produk/' . $product->image);
            $image = $request->file('image');
            $newImageName = Str::slug(($request->name) . '.' . $image->getClientOriginalExtension());
            $image->storeAs('public/foto_produk', $newImageName);
        } else {
            if ($request->name == $product->name) {
                $newImageName = 'foto_produk/' . $request->image;
                $oldImageName = 'foto_produk/' . $product->image;
                Storage::copy($oldImageName, $newImageName);
                Storage::delete($oldImageName);
            } else {
                $newImageName = $product->image;
            }
        }


        $product->update([
            'name' => $request->name,
            'price' => $request->price,
            'stock' => $request->stock,
            'category' => $request->category,
            'description' => $request->description,
            'spesification' => $request->spesification,
            'image' => $newImageName,
            'slug' => Str::slug($request->name, '-')
        ]);

        return to_route('admin.product');
    }

    public function delete($id)
    {
        $product = Product::findOrFail($id);
        $product->delete();
        return response()->json(["message" => "berhasil menghapus produk"], 200);
    }
}
