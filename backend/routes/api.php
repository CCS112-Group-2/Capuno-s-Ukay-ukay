<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;

// Authentication routes


Route::resource('/products',ProductController::class);
Route::post('/manageAdd', [ProductController::class, 'store']);
Route::post('/manageEdit', [ProductController::class, 'store']);

// Route::post('/products', [ProductController::class, 'store'])->name('products.store');
