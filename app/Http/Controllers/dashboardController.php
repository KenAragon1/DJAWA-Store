<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class dashboardController extends Controller
{
    // View
    public function viewDashboard()
    {
        return view('dashboard');
    }

    public function viewDashboardProduk()
    {
        return view('dashboard-produk');
    }

    public function viewEditProduk($id_produk)
    {
        return view('dashboard-edit-produk');
    }
}
