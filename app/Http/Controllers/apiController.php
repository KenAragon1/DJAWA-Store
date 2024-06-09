<?php

namespace App\Http\Controllers;

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
}
