<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\TrongTai;
use App\Http\Requests\StoreTrongTaiRequest;
class TrongTaiController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = TrongTai::with('ds_trong_tai')->get();
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
    public function store(StoreTrongTaiRequest $request)
    {
        TrongTai::create($request->all());
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
        $data = TrongTai::find($id);
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
        $data = TrongTai::find($id);
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
    public function update(Request $request, $id)
    {
        $data = TrongTai::find($id);
        if(empty($data)){
            return response([
                'status' => 404,
                'message' => 'Không tìm thấy'
            ]);
        }
        $data->update($request->all());
        return response([
            'status' => 200,
            'message' => 'Cập nhật thành công',
            "new_data" => $data
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
        $data = TrongTai::find($id);
        if(empty($data)){
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

    public function search($tenTT)
    {
        $result = TrongTai::where('TenTT', 'like', '%'.$tenTT.'%')->get();
        if(count($result)){
            return $result;
        }
        return response([
            'status' => 404,
            'message' => 'Không tìm thấy'
        ]);
    }
}
