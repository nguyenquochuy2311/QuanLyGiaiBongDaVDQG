<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreQDBanThangRequest;
use App\Http\Requests\UpdateQDBanThangRequest;
use App\Models\QuyDinhBanThang;

class QDBanThangController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = QuyDinhBanThang::all();
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
    public function store(StoreQDBanThangRequest $request)
    {
        // if(is_numeric($request->ThoiDiemBatDau) && is_numeric($request->ThoiDiemKetThuc)){
        //     if($request->ThoiDiemBatDau>$request->ThoiDiemKetThuc){
        //         return response()->json([
        //            'status' => false,
        //            'message' => 'Lỗi thêm dữ liệu',
        //            'detail'=> 'Thời điểm bắt đầu phải nhỏ hơn thời điểm kết thúc'
        //         ]);
        //     }
        // }
        QuyDinhBanThang::create($request->all());
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
        $data = QuyDinhBanThang::find($id);
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
        $data = QuyDinhBanThang::find($id);
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
    public function update(UpdateQDBanThangRequest $request, $id)
    {
        $quy_dinh = QuyDinhBanThang::find($id);
        if(empty($quy_dinh)){
            return response([
                'status' => 404,
                'message' => 'Không tìm thấy'
            ]);
        }
        // if(is_numeric($request->ThoiDiemBatDau) && is_numeric($request->ThoiDiemKetThuc)){
        //     if($request->ThoiDiemBatDau>$request->ThoiDiemKetThuc){
        //         return response()->json([
        //            'status' => false,
        //            'message' => 'Lỗi cập nhật dữ liệu',
        //            'detail'=> 'Thời điểm bắt đầu phải nhỏ hơn thời điểm kết thúc'
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
        $quy_dinh = QuyDinhBanThang::find($id);
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

    public function search($loaiBT)
    {
        $result = QuyDinhBanThang::where('LoaiBT', 'like', '%'.$loaiBT.'%')->get();
        if(count($result)){
            return $result;
        }
        return response([
            'status' => 404,
            'message' => 'Không tìm thấy'
        ]);
    }
}