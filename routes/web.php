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
    Route::get('/tebak-huruf-angka/huruf', [HomeController::class, 'tebak_huruf'])->name('tebak-huruf');
    Route::get('/tebak-huruf-angka/angka', [HomeController::class, 'tebak_angka'])->name('tebak-angka');
    Route::get('/tebak-benda', [HomeController::class, 'tebak_benda'])->name('tebak-benda');
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
