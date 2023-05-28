<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::group(['prefix' => '/'], function () {
    Route::get('/', [HomeController::class, 'index'])->name('homepage');
    Route::get('/mengenal-huruf', [HomeController::class, 'mengenal_huruf'])->name('mengenal-huruf');
    Route::get('/mengenal-angka', [HomeController::class, 'mengenal_angka'])->name('mengenal-angka');
    Route::get('/tebak-huruf-angka', [HomeController::class, 'tebak_huruf_angka'])->name('tebak-huruf-angka');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
