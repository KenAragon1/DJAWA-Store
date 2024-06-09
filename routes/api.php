<?php

use App\Http\Controllers\apiController;
use App\Http\Controllers\cartController;
use App\Http\Controllers\checkoutController;
use App\Http\Controllers\paymentController;
use App\Http\Controllers\productController;
use App\Http\Controllers\rajaongkirController;
use App\Http\Controllers\spesificationController;
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

Route::get('/product', [apiController::class, 'getProduct']);


Route::get('/midtrans', [paymentController::class, 'midtrans']);

Route::post('/cart', [cartController::class, 'post']);

Route::post('/ongkir', [rajaongkirController::class, 'ongkir']);

route::get('/spesification/{id_category}', [spesificationController::class, 'get']);
