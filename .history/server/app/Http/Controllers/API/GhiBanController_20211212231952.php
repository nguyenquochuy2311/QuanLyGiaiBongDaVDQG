<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\StoreGhiBanRequest;
use App\Http\Requests\UpdateGhiBanRequest;
use App\Models\GhiBan;
use Illuminate\Support\Facades\DB;

class GhiBanController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $banthangs = GhiBan::all();
        
        foreach ($banthangs as $banthang) {
            $banthang['TenCauThu'] = $banthang['cauthu']['TenCT'];
            $banthang['SoAo'] = $banthang['cauthu']['SoAo'];
            $banthang['ViTri'] = $banthang['cauthu']['ViTri'];
        }
        return response($banthangs);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return response([
            'status' => 201,
            'message' => 'OK'
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreGhiBanRequest $request)
    {
        GhiBan::create($request->all());
        return response([
            'status' => 200,
            'message' => "Thêm thành công"
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $data = GhiBan::find($id);
        if(empty($data)){
            return response([
                'status' => 404,
                'message' => 'Không tìm thấy'
            ]);
        }

        $detail = [
            'idGB' => $data['idGB'],
            'idKQ' => $data['idKQ'],
            'idCT' => $data['idCT'],
            'TenCauThu' => $data->cauthu['TenCT'],
            'SoAo' => $data->cauthu['SoAo'],
            'ViTri' => $data->cauthu['ViTri'],
            'LoaiBT' => $data['LoaiBT'],
            'ThoiDiem' => $data['ThoiDiem']
        ];

        return response($detail);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $data = GhiBan::find($id);
        if(empty($data)){
            return response([
                'status' => 404,
                'message' => 'Không tìm thấy'
            ]);
        }
        return response($data);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateGhiBanRequest $request, $id)
    {
        $ban_thang = GhiBan::find($id);
        if(empty($ban_thang )){
            return response([
                'status' => 404,
                'message' => 'Không tìm thấy'
            ]);
        }
        $ban_thang ->update($request->all());
        return response([
            'status' => 200,
            'message' => 'Cập nhật thành công',
            "new_data" => $ban_thang 
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        
        $ban_thang = GhiBan::findOrFail($id);
        if(empty($ban_thang || !is_numeric($id) )){
            return response([
                'status' => 404,
                'message' => 'Không tìm thấy'
            ]);
        }
        $ban_thang->delete();
        return response([
            'status' => 200,
            'message' => 'Xóa thành công'
        ]);
    }

 
}
