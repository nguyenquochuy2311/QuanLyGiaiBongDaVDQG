<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\DoiBong;
use Illuminate\Http\Request;

class DoiBongController extends Controller
{
    public function index(){
        return DoiBong::all();
    }

    public function store(Request $request){
        $data=$request->all();
        return DoiBong::create($data);
    }
}