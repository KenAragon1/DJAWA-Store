<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class itemController extends Controller
{
    public function home()
    {
        return view('home');
    }

    public function listItem()
    {
        $listItem = [
            ['id' => 1, 'nama' => 'Mouse', 'harga' => 12345],
            ['id' => 2, 'nama' => 'Komputer', 'harga' => 12345],
            ['id' => 3, 'nama' => 'CPU', 'harga' => 12345],
            ['id' => 4, 'nama' => 'GPU', 'harga' => 12345],
            ['id' => 5, 'nama' => 'Kipas', 'harga' => 12345],
            ['id' => 6, 'nama' => 'Laptop', 'harga' => 12345],
            ['id' => 7, 'nama' => 'Keyboard', 'harga' => 12345],
            ['id' => 8, 'nama' => 'Headset', 'harga' => 12345],
        ];

        // Pass the array of products to the view
        return view('list-item', ['listItem' => $listItem]);
    }

}
