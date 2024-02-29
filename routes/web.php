<?php

use App\Http\Controllers\authController;
use App\Http\Controllers\dashboardController;
use App\Http\Controllers\ItemController;
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


Route::get('/list-item', [ItemController::class, 'showItem']);


Route::get('/cekuser', function () {
    dd(session()->all());
    return;
});

// Login
Route::get('/login', [authController::class, 'halLogin'])->name('halLogin');
Route::post('/login', [authController::class, 'login'])->name('login');

// Register
Route::get('/register', [authController::class, 'halRegister'])->name('halRegister');
Route::post('/register', [authController::class, 'Register'])->name('register');

// Logout
Route::get('/logout', [authController::class, 'logout'])->name('logout');

// dashboard
Route::get('/dashboard', [dashboardController::class, 'dashboard'])->name('dashboard');

// List Item
Route::get('/listItem', [ItemController::class, 'listItem'])->name('listItem');

