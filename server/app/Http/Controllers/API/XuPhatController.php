<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\StoreXuPhatRequest;
use App\Http\Requests\UpdateXuPhatRequest;
use App\Models\XuPhat;
use Illuminate\Support\Facades\DB;

class XuPhatController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $tickets = Xuphat::all();

        foreach ($tickets as $ticket) {
            $cauthu = $ticket->cauthu();
            $ticket['TenCT'] = $cauthu->value('TenCT');
            $ticket['SoAo'] = $cauthu->value('SoAo');
            $ticket['ViTri'] = $cauthu->value('ViTri');
        }
        return response($tickets);
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
    public function store(StoreXuPhatRequest $request)
    {
        XuPhat::create($request->all());
        return response([
            'status' => 201,
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
        $ticket = XuPhat::find($id);
        if(empty($ticket)){
            return response([
                'status' => 404,
                'message' => 'Không tìm thấy'
            ]);
        }

        $cauthu = $ticket->cauthu();
        $ticket['TenCT'] = $cauthu->value('TenCT');
        $ticket['SoAo'] = $cauthu->value('SoAo');
        $ticket['ViTri'] = $cauthu->value('ViTri');
        return response($ticket);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $data = XuPhat::find($id);
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
    public function update(UpdateXuPhatRequest $request, $id)
    {
        $xu_phat = XuPhat::find($id);
        if(empty($xu_phat )){
            return response([
                'status' => 404,
                'message' => 'Không tìm thấy'
            ]);
        }
        $xu_phat ->update($request->all());
        return response([
            'status' => 200,
            'message' => 'Cập nhật thành công',
            "new_data" => $xu_phat 
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
        $xu_phat = XuPhat::findOrFail($id);
        if(empty($xu_phat || !is_numeric($id) )){
            return response([
                'status' => 404,
                'message' => 'Không tìm thấy'
            ]);
        }
        $xu_phat->delete();
        return response([
            'status' => 200,
            'message' => 'Xóa thành công'
        ]);
    }

}
