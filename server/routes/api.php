<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\ClbController;
use App\Http\Controllers\API\CauThuController;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\QDBanThangController;
use App\Http\Controllers\API\QDCauThuController;
use App\Http\Controllers\API\QDDiemSoController;

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

// Quy Dinh Ban Thang
Route::get('qd-banthang', [QDBanThangController::class, 'index']);
Route::get('qd-banthang/{idQUYDINHBANTHANG}', [QDBanThangController::class, 'show']);
// Route::get('qd-banthang/search/{loaiBT}', [QDBanThangController::class, 'search']);

// Quy Dinh Cau Thu
Route::get('qd-cauthu', [QDCauThuController::class, 'index']);
Route::get('qd-cauthu/{idQDCT}', [QDCauThuController::class, 'show']);

// Quy Dinh Diem So
Route::get('qd-diemso', [QDDiemSoController::class, 'index']);
Route::get('qd-diemso/{idQUYDINHDIEMSO}', [QDDiemSoController::class, 'show']);

// Cau thu
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
        
        Route::get('all-user', [AuthController::class, 'index']);
        Route::get('user-by-id/{UID}', [AuthController::class, 'show']);
        Route::get('edit/{UID}', [AuthController::class, 'edit']);
        Route::put('update/{UID}', [AuthController::class, 'update']);
        Route::delete('delete/{UID}', [AuthController::class, 'destroy']);
        Route::get('search-name/{username}', [AuthController::class, 'search']);
        Route::get('search-email/{email}', [AuthController::class, 'searchEmail']);
        
        Route::get('clb/create', [ClbController::class, 'create']);
        Route::post('clb/store',[ClbController::class, 'store']);
        Route::get('clb/edit/{idCLB}', [ClbController::class, 'edit']);
        Route::put('clb/update/{idCLB}', [ClbController::class, 'update']);
        Route::delete('clb/delete/{idCLB}', [ClbController::class, 'destroy']);
        
        Route::get('qd-banthang/create', [QDBanThangController::class, 'create']);
        Route::post('qd-banthang/store',[QDBanThangController::class, 'store']);
        Route::get('qd-banthang/edit/{idQUYDINHBANTHANG}', [QDBanThangController::class, 'edit']);
        Route::put('qd-banthang/update/{idQUYDINHBANTHANG}', [QDBanThangController::class, 'update']);
        Route::delete('qd-banthang/delete/{idQUYDINHBANTHANG}', [QDBanThangController::class, 'destroy']);

        Route::get('qd-cauthu/create', [QDCauThuController::class, 'create']);
        Route::post('qd-cauthu/store',[QDCauThuController::class, 'store']);
        Route::get('qd-cauthu/edit/{idQDCT}', [QDCauThuController::class, 'edit']);
        Route::put('qd-cauthu/update/{idQDCT}', [QDCauThuController::class, 'update']);
        Route::delete('qd-cauthu/delete/{idQDCT}', [QDCauThuController::class, 'destroy']);

        Route::get('qd-diemso/create', [QDDiemSoController::class, 'create']);
        Route::post('qd-diemso/store',[QDDiemSoController::class, 'store']);
        Route::get('qd-diemso/edit/{idQUYDINHDIEMSO}', [QDDiemSoController::class, 'edit']);
        Route::put('qd-diemso/qd-cauthu/update/{idQUYDINHDIEMSO}', [QDDiemSoController::class, 'update']);
        Route::delete('qd-diemso/delete/{idQUYDINHDIEMSO}', [QDDiemSoController::class, 'destroy']);
    });
});