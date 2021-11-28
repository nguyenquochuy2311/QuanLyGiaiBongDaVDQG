<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\BxhCt;

class BxhCTController extends Controller
{
    public function index()
    {
        $BxhCT = BxhCt::all();
        return response($BxhCT);
    }
}
