<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class apiController extends Controller
{
    //Only Accepts get method

    public function getProduct()
    {
        $productController = new productController();

        $productData = $productController->get('all');

        return response($productData);
    }

    public function getCategory()
    {
        $categoryData = Category::limit(5)->get();
        return response($categoryData);
    }
}
