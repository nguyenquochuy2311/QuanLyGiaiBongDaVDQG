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
        $BxhCLB = BxhClb::get()
        return response(['BxhCLB'=>$BxhCLB]);
    }

}
