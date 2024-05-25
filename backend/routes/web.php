<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\UserController;
Route::get('login', [UserController::class, 'showLoginForm'])->name('login');
Route::post('login', [UserController::class, 'login']);
Route::post('logout', [UserController::class, 'logout'])->name('logout');

Route::get('/manage', function () {
    Route::get('manage', function () {
        return view('manage');
    });

    // Add other routes that need protection here
})->middleware('auth');
require __DIR__.'/auth.php';

