<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class pesananController extends Controller
{
    //

    public function dashboardPesananPage() {
        return view('dashboard-pesanan');
    }
}
