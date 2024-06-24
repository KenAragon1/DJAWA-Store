<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;

class categoryController extends Controller
{
    public function index(Category $category)
    {
        return Inertia::render('Category/Index', [
            'categories' => $category->all()
        ]);
    }

    public function show(Product $product, Category $category, $id_category)
    {

        return Inertia::render('Category/Show', [
            'products' => $product->where('id_category', $id_category)->get(),
            'category' => $category->findOrFail($id_category)
        ]);
    }

    public function adminIndex()
    {
        $categories = Category::all();
        return Inertia::render('Admin/Category/Index', [
            'categories' => $categories
        ]);
    }

    public function store(Request $request)
    {

        $validate = $request->validate([
            'name' => 'required|unique:category'
        ]);


        Category::create($validate);

        return redirect()->back()->with('success', 'Category created successfully!');
    }

    public function update(Request $request, Category $category, $id_category)
    {
        $validate = $request->validate([
            'name' => 'required|unique:category'
        ]);

        if ($category->findOrFail($id_category)->update($validate)) {
            return redirect()->back()->with('success', 'Category Updated Successfully');
        }
    }

    public function delete(Category $category, $id_category)
    {
        if ($category->findOrFail($id_category)->delete()) {
            return redirect()->back()->with('success', 'Category Deleted Successfully');
        }
    }
}
