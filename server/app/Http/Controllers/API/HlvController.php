<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Hlv;
use App\Http\Requests\StoreHLVRequest;
use App\Http\Requests\UpdateHlvRequest;

class HlvController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // $data = Hlv::with('CLB')->get();
        $data = Hlv::with('CLB')->get();

        return response($data);
        
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return response([
            'status' => 200,
            'message' => 'OK'
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreHLVRequest $request)
    {
        Hlv::create($request->all());
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
        $data = Hlv::find($id);
        if(empty($data)){
            return response([
                'status' => 404,
                'message' => 'Không tìm thấy'
            ]);
        }
        return response($data);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $data = Hlv::find($id);
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
    public function update(UpdateHlvRequest $request, $id)
    {
        $HLV = Hlv::find($id);
        if(empty($HLV)){
            return response([
                'status' => 404,
                'message' => 'Không tìm thấy'
            ]);
        }
        $HLV->update($request->all());
        return response([
            'status' => 200,
            'message' => 'Cập nhật thành công',
            "new_data" => $HLV
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
        $data = Hlv::findOrFail($id);
        // if(empty($doi_bong) || !is_numeric() ){
         if(empty($data)  ){
            return response([
                'status' => 404,
                'message' => 'Không tìm thấy'
            ]);
        }
        $data->delete(); 
        return response([
            'status' => 200,
            'message' => 'Xóa thành công'
        ]);
    }

    public function search($tenHLV)
    {
        $result = Hlv::where('TenHlv', 'like', '%'.$tenHLV.'%')->get();
        if(count($result)){
            return $result;
        }
        return response([
            'status' => 404,
            'message' => 'Không tìm thấy'
        ]);
    }
}
