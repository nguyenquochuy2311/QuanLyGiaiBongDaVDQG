<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\BxhCt;
use \DB;
class BxhCTController extends Controller
{
    public function index()
    {
        $BxhCT = DB::select('select TenCT,TenCLB,SoBanThang from cauthu join bxh_ct on cauthu.idCT = bxh_ct.idCT join clb on cauthu.idCLB = clb.idCLB');
        return response(['BxhCT'=>$BxhCT]);
    }
}
