<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class categoryController extends Controller
{
    public function show()
    {
        return Inertia::render();
    }

    public function get()
    {
        $categoryData = Category::all();
        return response($categoryData);
    }
}
