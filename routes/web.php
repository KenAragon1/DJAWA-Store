<?php

use App\Http\Controllers\authController;
use App\Http\Controllers\dashboardController;
use App\Http\Controllers\ItemController;
use App\Http\Controllers\keranjangController;
use App\Http\Controllers\produkController;
use App\Http\Controllers\userController;
use App\Http\Controllers\categoryController;
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

Route::get('/', [ItemController::class, 'home'])->name('home');

// Auth

// View Auth
Route::get('/login', [authController::class, 'halLogin'])->name('halLogin');
Route::get('/register', [authController::class, 'halRegister'])->name('halRegister');

// API Auth
Route::post('/login', [authController::class, 'login'])->name('login');
Route::post('/register', [authController::class, 'Register'])->name('register');
Route::get('/logout', [authController::class, 'logout'])->name('logout');



// Dashboard Admin

// View Dashboard & Form
Route::get('/dashboard', [dashboardController::class, 'viewDashboard'])->name('dashboard');
Route::get('/dashboard/produk', [dashboardController::class, 'viewDashboardProduk'])->name('dashboard-produk');
Route::get('/dashboard/produk/edit/{id_produk}', [dashboardController::class, 'viewEditProduk'])->name('dashboard-edit-produk');



// Produk

// View Produk
Route::get('/produk/{id_produk}', [produkController::class, 'viewProduk'])->name('detail-produk');

// API Produk
Route::post('/produk', [produkController::class, 'postProduk'])->name('post-produk');
Route::put('/produk/{id_produk}', [produkController::class, 'updateProduk'])->name('update-produk');
Route::delete('/produk/{id_produk}', [produkController::class, 'deleteProduk'])->name('delete-produk');



// Profil

// View Profil
Route::get('/user/{id_user}', [userController::class, 'profilUser']);

// API Profil



// Keranjang

// View Keranjang
Route::get('/keranjang/{id_user}', [keranjangController::class, 'keranjangView']);

// API Keranjang



// Kategori

// View Kategori
// Kategori Laptop
Route::get('/category/laptop', [categoryController::class, 'laptopView']);