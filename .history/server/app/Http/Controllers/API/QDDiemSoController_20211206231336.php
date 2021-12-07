<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\StoreQDDiemSoRequest;
use App\Http\Requests\UpdateQDDiemSoRequest;
use App\Models\QuyDinhDiemSo;

class QDDiemSoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = QuyDinhDiemSo::all();
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
    public function store(StoreQDDiemSoRequest $request)
    {
        QuyDinhDiemSo::create($request->all());
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
        $data = QuyDinhDiemSo::find($id);
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
        $data = QuyDinhDiemSo::find($id);
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
    public function update(UpdateQDDiemSoRequest $request, $id)
    {
        $quy_dinh = QuyDinhDiemSo::find($id);
        if(empty($quy_dinh)){
            return response([
                'status' => 404,
                'message' => 'Không tìm thấy'
            ]);
        }
        $quy_dinh->update($request->all());
        return response(
            'status' => 200,
            'message' => 'Cập nhật thành công',
             $quy_dinh
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $quy_dinh = QuyDinhDiemSo::find($id);
        if(empty($quy_dinh)){
            return response([
                'status' => 404,
                'message' => 'Không tìm thấy'
            ]);
        }
        $quy_dinh->delete();
        return response([
            'status' => 200,
            'message' => 'Xóa thành công'
        ]);
    }
}