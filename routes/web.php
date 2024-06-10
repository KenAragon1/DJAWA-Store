<?php

use App\Http\Controllers\cartController;
use App\Http\Controllers\categoryController;
use App\Http\Controllers\checkoutController;
use App\Http\Controllers\orderController;
use App\Http\Controllers\paymentController;
use App\Http\Controllers\productController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\rajaongkirController;
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

// Home
Route::get('/', function () {
    return Inertia::render('HomePage');
})->name('home');



// Category
Route::get('/category-page', [categoryController::class, 'show'])->name('category-page');
Route::get('/category', [categoryController::class, 'get']);

// product
Route::get('/product/{slug}', [productController::class, 'productDetailPage']);


// Cart
Route::post('/calculateTotal', [cartController::class, 'calculateTotal']);



// Rajaongkir
Route::get('/rajaongkir/getProvinsi', [rajaongkirController::class, 'getProvinsi']);
Route::get('/rajaongkir/getKota/{id_provinsi}', [rajaongkirController::class, 'getKota']);

Route::post('/midtrans', [checkoutController::class, 'midtrans']);




Route::get('/dashboard', function () {
    return Inertia::render('Admin/Dashboard/Index');
})->middleware(['auth', 'verified'])->name('dashboard');

// Client
Route::middleware('auth')->group(function () {
    // Profile
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    // Cart
    Route::get('/cart', [cartController::class, 'cartPage'])->name('cart-page');
    Route::post('/cart', [cartController::class, 'post']);
    Route::delete('/cart/{id}', [cartController::class, 'delete']);

    // Payment
    Route::get('/payment', [paymentController::class, 'paymentListPage'])->name('payment-page');
    Route::get('/payment/{id}', [paymentController::class, 'paymentPage'])->name('payment-main');


    // Checkout 
    Route::get('/checkout', [checkoutController::class, 'checkoutPage'])->name('checkout-page');
    Route::post('/checkout', [checkoutController::class, 'post']);

    // Order
    Route::get('/order', [orderController::class, 'orderListPage'])->name('order-list-page');
    Route::get('/order/{id_order}', [orderController::class, 'orderPage'])->name('order-page');
    Route::post('/order', [orderController::class, 'create'])->name('order-create');
    Route::patch('/order/{id_order}', [orderController::class, 'update']);
});


// Admin
Route::middleware(['auth', 'IsAdmin'])->prefix('dashboard')->group(function () {

    // Product
    Route::prefix('product')->group(function () {
        Route::get(('/'), [productController::class, 'adminProductListPage'])->name('admin.product');
        Route::get(('/add-page'), [productController::class, 'adminAddProductPage'])->name('admin.add-product-page');
        Route::get(('/edit-page/{id_product}'), [productController::class, 'adminEditProductPage'])->name('admin.edit-product-page');
    });
});

// CRUD 

// Product
Route::middleware(['auth', 'IsAdmin'])->group(function () {
    Route::post('/product', [productController::class, 'post']);
    Route::patch('/product/{id}', [productController::class, 'put']);
    Route::delete('/product/{id_product}', [productController::class, 'delete']);
});


require __DIR__ . '/auth.php';
