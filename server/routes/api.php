<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\DoiBongController;
use App\Http\Controllers\API\CauThuController;

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
Route::get('doi_bong/search/{keyword}', [DoiBongController::class, 'search']);

// Cau thu
Route::get('cau_thu', [CauThuController::class, 'index']);
Route::get('cau_thu/{id}', [CauThuController::class, 'show']);
Route::get('cau_thu/search/{keyword}', [DoiBongController::class, 'search']);

// Admin
Route::get('ad/doi_bong/create', [DoiBongController::class, 'create']);
Route::post('ad/doi_bong/store',[DoiBongController::class, 'store']);
Route::get('ad/doi_bong/edit/{id}', [DoiBongController::class, 'edit']);
Route::put('ad/doi_bong/update/{id}', [DoiBongController::class, 'update']);
Route::delete('ad/doi_bong/delete/{id}', [DoiBongController::class, 'destroy']);

Route::get('ad/cau_thu/create', [CauThuController::class, 'create']);
Route::post('ad/cau_thu/store',[CauThuController::class, 'store']);
Route::get('ad/cau_thu/edit/{id}', [CauThuController::class, 'edit']);
Route::put('ad/cau_thu/update/{id}', [CauThuController::class, 'update']);
Route::delete('ad/cau_thu/delete/{id}', [CauThuController::class, 'destroy']);