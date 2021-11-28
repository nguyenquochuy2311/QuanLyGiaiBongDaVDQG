<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\ClbController;
use App\Http\Controllers\API\CauThuController;
use App\Http\Controllers\API\UserController;
use App\Http\Controllers\API\AuthController;
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

// User
Route::get('ad/user', [UserController::class, 'index']);
Route::get('ad/user/{UID}', [UserController::class, 'show']);
Route::get('ad/user/create', [UserController::class, 'create']);
Route::post('ad/user/store', [UserController::class, 'store']);
Route::get('ad/user/edit/{UID}', [UserController::class, 'edit']);
Route::put('ad/user/update/{UID}', [UserController::class, 'update']);
Route::delete('ad/user/delete/{UID}', [UserController::class, 'destroy']);
Route::get('ad/user/login/{Email}/{Password}/{Role}', [UserController::class, 'login']);

// Clb
Route::get('clb', [ClbController::class, 'index']);
Route::get('clb/{idCLB}', [ClbController::class, 'show']);
Route::get('clb/search/{tenCLB}', [ClbController::class, 'search']);

// // Cau thu
Route::get('cauthu', [CauThuController::class, 'index']);
Route::get('cauthu/{id}', [CauThuController::class, 'show']);
// Route::get('cau_thu/search/{keyword}', [DoiBongController::class, 'search']);

Route::group([
    'prefix' => 'auth'
], function () {
    Route::post('login', [AuthController::class, 'login']);
    Route::post('signup', [AuthController::class, 'signup']);
    Route::group([
      'middleware' => 'auth:api'
    ], function() {
        Route::delete('logout', [AuthController::class, 'logout']);
        Route::get('me', [AuthController::class, 'user']);

        Route::get('clb/create', [ClbController::class, 'create']);
        Route::post('clb/store',[ClbController::class, 'store']);
        Route::get('clb/edit/{idCLB}', [ClbController::class, 'edit']);
        Route::put('clb/update/{idCLB}', [ClbController::class, 'update']);
        Route::delete('clb/delete/{idCLB}', [ClbController::class, 'destroy']);
        
        
    });
});


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