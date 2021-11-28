<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\BxhClb;



class BxhCLBController extends Controller
{
    public function index()
    {
        $BxhCLB = BxhClb::all();
        return response($BxhCLB);
    }

}
