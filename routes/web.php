<?php

use App\Http\Controllers\cartController;
use App\Http\Controllers\categoryController;
use App\Http\Controllers\checkoutController;
use App\Http\Controllers\orderController;
use App\Http\Controllers\paymentController;
use App\Http\Controllers\productController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\rajaongkirController;
use App\Models\Category;
use App\Models\Order;
use App\Models\Product;
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

// Pages

// Home Page
Route::get('/', function () {
    $products = Product::all();
    return Inertia::render('HomePage', [
        "products" => $products
    ]);
})->name('home');


Route::get('/category-page', [categoryController::class, 'show'])->name('category-page');

// Category
Route::get('/category', [categoryController::class, 'get']);

// product
Route::get('/product/{slug}', [productController::class, 'show']);


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
    Route::prefix('profile')->controller(ProfileController::class)->group(function () {
        Route::get('/', 'edit')->name('profile.edit');
        Route::patch('/', 'update')->name('profile.update');
        Route::delete('/', 'destroy')->name('profile.destroy');
    });

    // Cart
    Route::get('/cart', [cartController::class, 'cartPage'])->name('cart-page');
    Route::post('/cart', [cartController::class, 'post']);
    Route::delete('/cart/{id}', [cartController::class, 'delete']);

    // Payment
    Route::get('/payment', [paymentController::class, 'paymentListPage'])->name('payment-list-page');
    Route::get('/payment/{id}', [paymentController::class, 'paymentPage'])->name('payment-page');


    // Checkout 
    Route::get('/checkout', [checkoutController::class, 'checkoutPage'])->name('checkout-page');
    Route::post('/checkout', [checkoutController::class, 'post']);

    // Order
    Route::get('/order', [orderController::class, 'index'])->name('order-list-page');
    Route::get('/order/{id_order}', [orderController::class, 'show'])->name('order-page');
    Route::post('/order', [orderController::class, 'create'])->name('order-create');
    Route::patch('/order/{id_order}', [orderController::class, 'update'])->name('order-update');
});


// Admin Only
Route::middleware(['auth', 'IsAdmin'])->prefix('dashboard')->group(function () {
    // Pages

    // Product
    Route::prefix('product')->controller(productController::class)->group(function () {
        Route::get(('/'), 'adminIndex')->name('admin.product.index');
        Route::get(('/create'), 'create')->name('product.create');
        Route::get(('/edit/{id_product}'), 'edit')->name('product.edit');
    });

    // Order
    Route::prefix('order')->controller(orderController::class)->group(function () {
        Route::get(('/'), 'adminIndex')->name('admin.order');
        Route::get(('/{id_order}'), 'adminShow')->name('admin.order.show');
    });

    // Category
    Route::get('/category', [categoryController::class, 'adminIndex'])->name('admin.category.index');

    // Home
});

// CRUD 

// Product
Route::prefix('product')->controller(productController::class)->middleware(['auth', 'IsAdmin'])->group(function () {
    Route::post('/', 'store')->name('product.store');
    Route::patch('/{id_product}', 'update')->name('product.update');
    Route::delete('/{id_product}', 'delete')->name('product.delete');
});

// Category
Route::prefix('category')->controller(categoryController::class)->middleware(['auth', 'IsAdmin'])->group(function () {
    Route::post('/', 'store')->name('category.store');
    Route::patch('/{id_category}', 'update')->name('category.update');
    Route::delete('/{id_category}', 'delete')->name('category.delete');
});




require __DIR__ . '/auth.php';
