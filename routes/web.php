<?php

use App\Http\Controllers\authController;
use App\Http\Controllers\dashboardController;
use App\Http\Controllers\ItemController;
use App\Http\Controllers\keranjangController;
use App\Http\Controllers\produkController;
use App\Http\Controllers\userController;
use App\Http\Controllers\kategoriController;
use App\Http\Controllers\pesananController;
use App\Http\Controllers\profilController;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/
// Home Page
Route::get('/', function() {
    return view('home');
})->name('home');

Route::get('/kategori', [kategoriController::class, "getKategori"]);

// View Auth

Route::middleware(['IsGuest'])->group(function () {
    Route::get('/login', [authController::class, 'halLogin'])->name('halLogin');
    Route::get('/register', [authController::class, 'halRegister'])->name('halRegister');
});


// API Auth
Route::post('/login', [authController::class, 'login'])->name('login');
Route::post('/register', [authController::class, 'Register'])->name('register');
Route::get('/logout', [authController::class, 'logout'])->name('logout');



// Dashboard Admin

Route::middleware(['IsLogin', 'IsAdmin'])->group(function () {
    // View Dashboard & Form
    Route::get('/dashboard', [dashboardController::class, 'dashboardPage'])->name('dashboard');
    Route::get('/dashboard/produk', [dashboardController::class, 'produkPage'])->name('dashboard-produk');
    Route::get('/dashboard/produk/edit/{id_produk}', [dashboardController::class, 'viewEditProduk'])->name('dashboard-edit-produk');
    Route::get('/dashboard/pesanan', [pesananController::class, 'dashboardPesananPage'])->name('dashboard-pesanan');
    Route::get('/dashboard/produk/tambah', function() {
        return view('dashboard.tambah-produk');
    })->name('tambah-produk-page');
});


// Produk

// View Produk
Route::get('/produk/{id_produk}', [produkController::class, 'viewProduk'])->name('detail-produk');



// API Produk
Route::post('/produk', [produkController::class, 'postProduk'])->name('post-produk')->middleware('IsAdmin');
Route::put('/produk/{id_produk}', [produkController::class, 'updateProduk'])->name('update-produk');
Route::delete('/produk/{id_produk}', [produkController::class, 'deleteProduk'])->name('delete-produk');




// Profil

// View Profil
Route::get('/user/{id_user}', [profilController::class, 'profilPage'])->name('profil-page');
Route::get('/user/{id_user}/edit', [profilController::class, 'editProfilPage'])->name('edit-profil-page');

// API Profil



// Keranjang

// View Keranjang
Route::get('/keranjang', [keranjangController::class, 'keranjangView'])->name('keranjang');

// API Keranjang
Route::get('/keranjang/{id_user}', [keranjangController::class, 'getProdukInCart'])->name('getProdukInCart');
Route::post('/keranjang', [keranjangController::class, 'addToCart'])->name('addToCart');



// Kategori

// View Kategori
// Kategori Laptop
Route::get('/kategori/{kategori}', [kategoriController::class, 'viewKategori'])->name('kategori');

Route::get('/checkout', function () {
    return view('checkout');
})->name('checkout-page');


// Riwayat Pesanan
Route::get('/pesanan', function(){
    return view('pesanan');
})->name('hal-pesanan');