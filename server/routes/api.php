<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\ClbController;
use App\Http\Controllers\API\CauThuController;
use App\Http\Controllers\API\HlvController;
use App\Http\Controllers\API\TrongTaiController;

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

// Clb
Route::get('clb', [ClbController::class, 'index']);
Route::get('clb/{idCLB}', [ClbController::class, 'show']);
Route::get('clb/search/{keyword}', [ClbController::class, 'search']);

// // Cau thu
Route::get('cauthu', [CauThuController::class, 'index']);
Route::get('cauthu/{id}', [CauThuController::class, 'show']);
// Route::get('cau_thu/search/{keyword}', [DoiBongController::class, 'search']);

// // Admin
Route::get('ad/clb/create', [ClbController::class, 'create']);
Route::post('ad/clb/store',[ClbController::class, 'store']);
Route::get('ad/clb/edit/{idCLB}', [ClbController::class, 'edit']);
Route::put('ad/clb/update/{idCLB}', [ClbController::class, 'update']);
Route::delete('ad/clb/delete/{id}', [ClbController::class, 'destroy']);

// hlv
Route::get('hlv', [HlvController::class, 'index']);
// Route::get('hlv/{idHLV}', [HlvController::class, 'show']);
// Route::get('hlv/search/{keyword}', [HlvController::class, 'search']);

// hlv
Route::get('trongtai', [TrongTaiController::class, 'index']);

/* Dat
Hlv
CauThu
BxhClb
BxhCt
TrongTai
ToTrongTai

Luong
TranDau -> edit
GhiBan
KetQua
Xuphat

Huy
User
PheDuyet
3 QuyDinh
*/