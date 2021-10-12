<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\DoiBong;
use App\Http\Requests\DoiBongStore;
use App\Http\Requests\DoiBongUpdate;

class DoiBongController extends Controller
{
    public function index(){
        return DoiBong::all();
    }

    public function store(DoiBongStore $request){
        $data=$request->validated();
        return DoiBong::create($data);
    }

    public function show(DoiBong $doiBong){
        return $doiBong;
    }

    public function update(DoiBongUpdate $request, DoiBong $doiBong)
    {
        $find = DoiBong::find($doiBong);
        if(is_null($find)){
            return response()->json('Record Not Found', 404);
        }
        $data=$request->validated();
        return $doiBong->update($data);
    }
}