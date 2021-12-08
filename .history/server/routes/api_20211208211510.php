<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\ClbController;
use App\Http\Controllers\API\CauThuController;
use App\Http\Controllers\API\TranDauController;
use App\Http\Controllers\API\GhiBanController;
use App\Http\Controllers\API\KetQuaController;
use App\Http\Controllers\API\XuPhatController;
use App\Http\Controllers\API\HlvController;
use App\Http\Controllers\API\TrongTaiController;
use App\Http\Controllers\API\ToTrongTaiController;
use App\Http\Controllers\API\BxhCLBController;
use App\Http\Controllers\API\BxhCTController;
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

// Tran Dau
Route::get('trandau', [TranDauController::class, 'index']);
Route::get('trandau/{idTD}', [TranDauController::class, 'show']);
Route::get('trandau/filterlsd/{day}-{month}', [TranDauController::class, 'getLichSuDau']);

// Ghi Ban
Route::get('ghiban', [GhiBanController::class, 'index']);
Route::get('ghiban/{idGB}', [GhiBanController::class, 'show']);

// Ket Qua
Route::get('ketqua', [KetQuaController::class, 'index']);
Route::get('ketqua/{idKQ}', [KetQuaController::class, 'show']);

// Xu phat
Route::get('xuphat', [XuPhatController::class, 'index']);
Route::get('xuphat/{idXP}', [XuPhatController::class, 'show']);

// Tran Dau
Route::get('trandau', [TranDauController::class, 'index']);
Route::get('trandau/{idTD}', [TranDauController::class, 'show']);

// Ghi Ban
Route::get('ghiban', [GhiBanController::class, 'index']);
Route::get('ghiban/{idGB}', [GhiBanController::class, 'show']);
Route::get('ghiban/detail/{idGB}', [GhiBanController::class, 'showDetail']);

// Ket Qua
Route::get('ketqua', [KetQuaController::class, 'index']);
Route::get('ketqua/{idKQ}', [KetQuaController::class, 'show']);

// Xu phat
Route::get('xuphat', [XuPhatController::class, 'index']);
Route::get('xuphat/{idXP}', [XuPhatController::class, 'show']);

// Cau thu
Route::get('cauthu', [CauThuController::class, 'index']);
Route::get('cauthu/{id}', [CauThuController::class, 'show']);
// Route::get('cau_thu/search/{keyword}', [DoiBongController::class, 'search']);

// Cau thu
Route::get('cauthu', [CauThuController::class, 'index']);
Route::get('cauthu/search/{tenCT}', [CauThuController::class, 'search']);

// HLV
Route::get('hlv', [HlvController::class, 'index']);
Route::get('hlv/search/{tenHLV}', [HlvController::class, 'search']);
// Route::get('hlv/{idHLV}', [HlvController::class, 'show']);
// Route::get('hlv/search/{keyword}', [HlvController::class, 'search']);

// trong tài
Route::get('trongtai', [TrongTaiController::class, 'index']);
Route::get('trongtai/search/{tenTT}', [TrongTaiController::class, 'search']);

// tổ trọng tài
Route::get('totrongtai', [ToTrongTaiController::class, 'index']);

//bxh CLB
Route::get('bxh_clb', [BxhCLBController::class, 'index']);

//bxh CT
Route::get('bxh_ct', [BxhCTController::class, 'index']);

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

Route::group([
    'prefix' => 'auth'
], function () {
    Route::post('login', [AuthController::class, 'login']);
    Route::post('signup', [AuthController::class, 'signup']);
    Route::group([
      'middleware' => 'auth:api'
    ], function() {
        // Admin User
        Route::delete('logout', [AuthController::class, 'logout']);
        Route::get('me', [AuthController::class, 'user']);
        
        Route::get('all-user', [AuthController::class, 'index']);
        Route::get('user-by-id/{UID}', [AuthController::class, 'show']);
        Route::get('edit/{UID}', [AuthController::class, 'edit']);
        Route::post('update/{UID}', [AuthController::class, 'update']);
        Route::delete('delete/{UID}', [AuthController::class, 'destroy']);
        Route::get('search-name/{username}', [AuthController::class, 'search']);
        Route::get('search-email/{email}', [AuthController::class, 'searchEmail']);
        
        // Admin CLB
        Route::get('clb/create', [ClbController::class, 'create']);
        Route::post('clb/store',[ClbController::class, 'store']);
        Route::get('clb/edit/{idCLB}', [ClbController::class, 'edit']);
        Route::post('clb/update/{idCLB}', [ClbController::class, 'update']);
        Route::delete('clb/delete/{idCLB}', [ClbController::class, 'destroy']);

        // Admin HLV
        Route::post('hlv/store',[HlvController::class, 'store']);
        Route::delete('hlv/delete/{idhlv}', [HlvController::class, 'destroy']);
        Route::put('hlv/update/{idHLV}', [HlvController::class, 'update']);
        
        // Admin Cau Thu
        Route::post('cauthu/store',[CauThuController::class, 'store']);
        Route::delete('cauthu/delete/{idCT}', [CauThuController::class, 'destroy']);
        Route::post('cauthu/update/{idCT}', [CauThuController::class, 'update']);

        // Admin Trong Tai
        Route::post('trongtai/store',[TrongTaiController::class, 'store']);
        Route::delete('trongtai/delete/{idTT}', [TrongTaiController::class, 'destroy']);
        Route::put('trongtai/update/{idTT}', [TrongTaiController::class, 'update']);
        
        // Admin To Trong Tai
        Route::post('totrongtai/addTotrongtai/{idTTC},{idTTB1},{idTTB2}',[ToTrongTaiController::class, 'addTotrongtai']);
        Route::put('totrongtai/update/{idToTT},{idTT}', [ToTrongTaiController::class, 'update']);

        // Admin Tran Dau

        Route::get('trandau/edit/{idTD}', [TranDauController::class, 'edit']);
        Route::put('trandau/update/{idTD}', [TranDauController::class, 'update']);

        // Admin Ket Qua 
        Route::post('ketqua/store', [KetQuaController::class, 'store']);
        Route::post('ketqua/edit/{idKQ}', [KetQuaController::class, 'edit']);
        Route::post('ketqua/update/{idKQ}', [KetQuaController::class, 'update']);
        Route::delete('ketqua/delete/{idKQ}', [KetQuaController::class, 'destroy']);

        // Admin Ghi Ban
        Route::get('ghiban/create', [GhiBanController::class, 'create']);
        Route::post('ghiban/store', [GhiBanController::class, 'store']);
        Route::get('ghiban/edit/{idGB}', [GhiBanController::class, 'edit']);
        Route::put('ghiban/update/{idGB}', [GhiBanController::class, 'update']);
        Route::delete('ghiban/delete/{idGB}', [GhiBanController::class, 'destroy']);
        
        // Admin Xu Phat
        Route::get('xuphat/create', [XuPhatController::class, 'create']);
        Route::post('xuphat/store', [XuPhatController::class, 'store']);
        Route::get('xuphat/edit/{idXP}', [XuPhatController::class, 'edit']);
        Route::put('xuphat/update/{idXP}', [XuPhatController::class, 'update']);
        Route::delete('xuphat/delete/{idXP}', [XuPhatController::class, 'destroy']);

        // Admin Quy Dinh Ban Thang
        Route::get('qd-banthang/create', [QDBanThangController::class, 'create']);
        Route::post('qd-banthang/store',[QDBanThangController::class, 'store']);
        Route::get('qd-banthang/edit/{idQUYDINHBANTHANG}', [QDBanThangController::class, 'edit']);
        Route::post('qd-banthang/update/{idQUYDINHBANTHANG}', [QDBanThangController::class, 'update']);
        Route::delete('qd-banthang/delete/{idQUYDINHBANTHANG}', [QDBanThangController::class, 'destroy']);

        // Admin Quy Dinh Cau Thu
        Route::get('qd-cauthu/create', [QDCauThuController::class, 'create']);
        Route::post('qd-cauthu/store',[QDCauThuController::class, 'store']);
        Route::get('qd-cauthu/edit/{idQDCT}', [QDCauThuController::class, 'edit']);
        Route::put('qd-cauthu/update/{idQDCT}', [QDCauThuController::class, 'update']);
        Route::delete('qd-cauthu/delete/{idQDCT}', [QDCauThuController::class, 'destroy']);

        // Admin Quy Dinh Diem So
        Route::get('qd-diemso/create', [QDDiemSoController::class, 'create']);
        Route::post('qd-diemso/store',[QDDiemSoController::class, 'store']);
        Route::get('qd-diemso/edit/{idQUYDINHDIEMSO}', [QDDiemSoController::class, 'edit']);
        Route::post('qd-diemso/update/{idQUYDINHDIEMSO}', [QDDiemSoController::class, 'update']);
        Route::delete('qd-diemso/delete/{idQUYDINHDIEMSO}', [QDDiemSoController::class, 'destroy']);
    });
});