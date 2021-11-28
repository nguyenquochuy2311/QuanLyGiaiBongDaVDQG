<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\ClbController;
use App\Http\Controllers\API\CauThuController;
use App\Http\Controllers\API\TranDauController;
use App\Http\Controllers\API\GhiBanController;
use App\Http\Controllers\API\KetQuaController;
use App\Http\Controllers\API\XuPhatController;

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
Route::get('clb/search/{tenCLB}', [ClbController::class, 'search']);

// Tran Dau
Route::get('trandau', [TranDauController::class, 'index']);
Route::get('trandau/{idTD}', [TranDauController::class, 'show']);
// Admin Tran Dau
Route::put('ad/trandau/edit/{idTD}', [TranDauController::class, 'edit']);
Route::put('ad/trandau/update/{idTD}', [TranDauController::class, 'update']);

// Ghi Ban
Route::get('ghiban', [GhiBanController::class, 'index']);
Route::get('ghiban/{idGB}', [GhiBanController::class, 'show']);
Route::get('ghiban/detail/{idGB}', [GhiBanController::class, 'showDetail']);
// Admin Ghi Ban
Route::put('ad/ghiban/create', [GhiBanController::class, 'create']);
Route::post('ad/ghiban/store', [GhiBanController::class, 'store']);
Route::put('ad/ghiban/edit/{idGB}', [GhiBanController::class, 'edit']);
Route::put('ad/ghiban/update/{idGB}', [GhiBanController::class, 'update']);
Route::delete('ad/ghiban/delete/{idGB}', [GhiBanController::class, 'destroy']);

// Ket Qua
Route::get('ketqua', [KetQuaController::class, 'index']);
Route::get('ketqua/{idKQ}', [KetQuaController::class, 'show']);


// Admin Ket Qua 
Route::put('ad/ketqua/edit/{idKQ}', [KetQuaController::class, 'edit']);
Route::put('ad/ketqua/update/{idKQ}', [KetQuaController::class, 'update']);

// Xu phat
Route::get('xuphat', [XuPhatController::class, 'index']);
Route::get('xuphat/{idXP}', [XuPhatController::class, 'show']);
// Admin Xu Phat


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
Route::delete('ad/clb/delete/{idCLB}', [ClbController::class, 'destroy']);

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