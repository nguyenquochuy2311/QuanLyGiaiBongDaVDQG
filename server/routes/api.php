<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\ClbController;
use App\Http\Controllers\API\CauThuController;
use App\Http\Controllers\API\HlvController;
use App\Http\Controllers\API\TrongTaiController;
use App\Http\Controllers\API\ToTrongTaiController;
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


// // Admin
Route::get('ad/clb/create', [ClbController::class, 'create']);
Route::get('ad/clb/edit/{idCLB}', [ClbController::class, 'edit']);
Route::post('ad/clb/store',[ClbController::class, 'store']);
Route::put('ad/clb/update/{idCLB}', [ClbController::class, 'update']);
Route::delete('ad/clb/delete/{idCLB}', [ClbController::class, 'destroy']);


Route::post('ad/hlv/store',[HlvController::class, 'store']);
Route::delete('ad/hlv/delete/{idhlv}', [HlvController::class, 'destroy']);
Route::put('ad/hlv/update/{idHLV}', [HlvController::class, 'update']);

Route::post('ad/trongtai/store',[TrongTaiController::class, 'store']);
Route::delete('ad/trongtai/delete/{idTT}', [TrongTaiController::class, 'destroy']);
Route::put('ad/trongtai/update/{idTT}', [TrongTaiController::class, 'update']);

Route::post('totrongtai/addTotrongtai/{idTTC},{idTTB1},{idTTB2}',[ToTrongTaiController::class, 'addTotrongtai']);
Route::put('ad/totrongtai/update/{idToTT},{idTT}', [ToTrongTaiController::class, 'update']);

Route::post('ad/cauthu/store',[CauThuController::class, 'store']);
Route::delete('ad/cauthu/delete/{idCT}', [CauThuController::class, 'destroy']);
Route::put('ad/cauthu/update/{idCT}', [CauThuController::class, 'update']);

// Clb
Route::get('clb', [ClbController::class, 'index']);
Route::get('clb/{idCLB}', [ClbController::class, 'show']);
Route::get('clb/search/{tenCLB}', [ClbController::class, 'search']);

// // Cau thu
Route::get('cauthu', [CauThuController::class, 'index']);
Route::get('clb/search/{tenCT}', [CauThuController::class, 'search']);

// hlv
Route::get('hlv', [HlvController::class, 'index']);
Route::get('hlv/search/{tenHLV}', [HlvController::class, 'search']);

// Route::get('hlv/{idHLV}', [HlvController::class, 'show']);
// Route::get('hlv/search/{keyword}', [HlvController::class, 'search']);

// trong tài
Route::get('trongtai', [TrongTaiController::class, 'index']);
Route::get('trongtai/search/{tenTT}', [TrongTaiController::class, 'search']);

// tổ trọng tài
Route::get('totrongtai', [ToTrongTaiController::class, 'index']);
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