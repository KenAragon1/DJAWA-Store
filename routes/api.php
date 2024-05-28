<?php

use App\Http\Controllers\authController;
use App\Http\Controllers\cartController;
use App\Http\Controllers\kategoriController;
use App\Http\Controllers\keranjangController;
use App\Http\Controllers\productController;
use App\Http\Controllers\produkController;
use App\Http\Controllers\ProfileController;
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

Route::get('/product', [productController::class, 'get']);
Route::get('/product/{id}', [productController::class, 'get2']);
Route::post('/product', [productController::class, 'post']);
Route::put('/product/{id}', [productController::class, 'put']);
Route::delete('/product/{id}', [productController::class, 'delete']);
Route::delete('/cart/{id}', [cartController::class, 'delete']);

Route::get('/getKategori', [kategoriController::class, 'getKategori']);

Route::post('/cart', [cartController::class, 'post']);

Route::post('/produk', [produkController::class, 'postProduk']);
Route::delete('/produk/{id_produk}', [produkController::class, 'deleteProduk']);

// Route::get('/keranjang/{id_user}', [keranjangController::class, 'getProdukInCart']);
Route::post('/keranjang', [keranjangController::class, 'addToCart']);
