<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class categoryController extends Controller
{
    public function laptopView()
    {
        return view('category-laptop');
    }
}