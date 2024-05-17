<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;

// Route::middleware(['auth:sanctum'])->get('/products', function (Request $request) {
//     return $request->user();
// });

Route::resource('/products',ProductController::class);
Route::post('/manageAdd', [ProductController::class, 'store']);
Route::post('/manageEdit', [ProductController::class, 'store']);
Route::get('/manage', function () {
    return view('manage');
});
// Route::post('/products', [ProductController::class, 'store'])->name('products.store');