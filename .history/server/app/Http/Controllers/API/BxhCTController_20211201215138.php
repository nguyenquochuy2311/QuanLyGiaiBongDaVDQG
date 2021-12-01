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
        $BxhCT = BxhCt::get();
        return response($BxhCT);
    }
}
