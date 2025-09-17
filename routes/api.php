<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// 👇 Add these missing routes
Route::get('/contacts', [ContactController::class, 'index']);   // list contacts
Route::post('/contacts', [ContactController::class, 'store']); // create new contact
Route::put('/contacts/{contact}', [ContactController::class, 'update']);   // update contact
Route::delete('/contacts/{contact}', [ContactController::class, 'destroy']); // delete contact
