<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\BxhClb;
use \DB;


class BxhCLBController extends Controller
{
    public function index()
    {
        $BxhCLB = DB::select('select TenCLB,Thang,Hoa,Thua,SoTran,Diem from clb join bxh_clb on clb.idCLB = bxh_clb.idCLB ');
        
        return response(['BxhCLB'=>$BxhCLB]);
    }

}
