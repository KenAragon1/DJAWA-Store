<?php

use App\Http\Controllers\authController;
use App\Http\Controllers\kategoriController;
use App\Http\Controllers\keranjangController;
use App\Http\Controllers\produkController;
use App\Http\Controllers\spesifikasiController;
use App\Models\Kategori;
use App\Models\Produk;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/produk/{id_produk}', [produkController::class, "getProduk"])->name('api-get-produk');

// Api CRUD Produk
Route::get('/produk', [produkController::class, 'getAllProduk']);
Route::post('/produk', [produkController::class, 'postProduk']);
Route::post('/produk/{id_produk}', [produkController::class, "updateProduk"])->name('api-update-produk');
Route::delete('/produk/{id}', [produkController::class, "deleteProduk"]);

// Get Spesifikasi Produk
Route::get('/spesifikasi/{id_kategori}', [spesifikasiController::class, "getSpesifikasi"]);

// Cart API



