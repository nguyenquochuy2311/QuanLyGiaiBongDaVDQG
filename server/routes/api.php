<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\DoiBongController;
use App\Models\DoiBong;
use Whoops\Run;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Doi bong
Route::get('doi_bong', [DoiBongController::class, 'index']);
Route::get('doi_bong/{id}', [DoiBongController::class, 'show']);

// Admin
Route::get('ad/doi_bong/create', [DoiBongController::class, 'create']);
Route::post('ad/doi_bong/store',[DoiBongController::class, 'store']);
Route::get('ad/doi_bong/edit/{id}', [DoiBongController::class, 'edit']);
// Route::post('ad/doi_bong/update', [DoiBongController::class, 'update']);