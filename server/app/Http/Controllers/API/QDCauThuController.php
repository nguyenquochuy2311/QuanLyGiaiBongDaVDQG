<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreQDCauThuRequest;
use App\Http\Requests\UpdateQDCauThuRequest;
use Illuminate\Http\Request;
use App\Models\QuyDinhCauThu;

class QDCauThuController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = QuyDinhCauThu::all();
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
    public function store(StoreQDCauThuRequest $request)
    {
        // if(is_numeric($request->SLToiThieu) && is_numeric($request->SLToiDa)){
        //     if($request->SLToiThieu>$request->SLToiDa){
        //         return response()->json([
        //            'status' => false,
        //            'message' => 'Lỗi thêm dữ liệu',
        //            'detail'=> 'Số lượng tối thiểu phải nhỏ hơn số lượng tối đa'
        //         ]);
        //     }
        // }
        QuyDinhCauThu::create($request->all());
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
        $data = QuyDinhCauThu::find($id);
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
        $data = QuyDinhCauThu::find($id);
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
    public function update(UpdateQDCauThuRequest $request, $id)
    {
        $quy_dinh = QuyDinhCauThu::find($id);
        if(empty($quy_dinh)){
            return response([
                'status' => 404,
                'message' => 'Không tìm thấy'
            ]);
        }
        // if(is_numeric($request->SLToiThieu) && is_numeric($request->SLToiDa)){
        //     if($request->SLToiThieu>$request->SLToiDa){
        //         return response()->json([
        //            'status' => false,
        //            'message' => 'Lỗi cập nhật dữ liệu',
        //            'detail'=> 'Số lượng tối thiểu phải nhỏ hơn số lượng tối đa'
        //         ]);
        //     }
        // }
        $quy_dinh->update($request->all());
        return response([
            'status' => 200,
            'message' => 'Cập nhật thành công',
            "new_data" => $quy_dinh
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
        $quy_dinh = QuyDinhCauThu::find($id);
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