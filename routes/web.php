<?php

use App\Http\Controllers\cartController;
use App\Http\Controllers\checkoutController;
use App\Http\Controllers\productController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('HomePage');
})->name('home');

Route::get('/product/{slug}', [productController::class, 'productPage']);

// Cart


Route::post('/calculateTotal', [cartController::class, 'calculateTotal']);


// Checkout 
Route::get('/checkout-page', [checkoutController::class, 'show'])->name('checkout-page');
Route::get('/checkout', [checkoutController::class, 'getSession']);
Route::post('/checkout', [checkoutController::class, 'createSession']);

// Rajaongkir
Route::get('/checkout/getProvinsi', [checkoutController::class, 'getProvinsi']);
Route::get('/checkout/getKota/{id_provinsi}', [checkoutController::class, 'getKota']);




Route::get('/dashboard', function () {
    return Inertia::render('Admin/Dashboard/Index');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/cart-page', [cartController::class, 'show'])->name('cart');
    Route::get('/cart', [cartController::class, 'get']);
    Route::post('/cart', [cartController::class, 'post']);
    Route::delete('/cart/{id}', [cartController::class, 'delete']);
});


// Admin
Route::middleware(['auth', 'IsAdmin'])->prefix('dashboard')->group(function () {
    Route::get(('/product'), function () {
        return Inertia::render('Admin/Product/Index');
    })->name('admin.product');
});

require __DIR__ . '/auth.php';
