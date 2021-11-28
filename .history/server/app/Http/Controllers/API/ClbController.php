<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
<<<<<<< HEAD:.history/server/app/Http/Controllers/API/DoiBongController_20211128225556.php
use App\Models\DoiBong;
use App\Http\Requests\DoiBongStore;
use App\Http\Requests\DoiBongUpdate;
=======
use App\Http\Requests\StoreClbRequest;
use App\Http\Requests\UpdateClbRequest;
use App\Models\Clb;
>>>>>>> huy:.history/server/app/Http/Controllers/API/ClbController.php

class ClbController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // $data = Clb::all();
        //$data = Clb::with('ds_cau_thu')->get(['idCLB', 'VietTat']);
        //$data = Clb::all(['idCLB', 'VietTat']);
        $data = Clb::with('ds_cau_thu')->get();
        return response($data);
    }

<<<<<<< HEAD
    public function store(DoiBongStore $request){
        $data=$request->validated();
        return DoiBong::create($data);
=======
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
    public function store(StoreClbRequest $request)
    {
        // post
        Clb::create($request->all());
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
        $data = Clb::find($id);
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
        $data = Clb::find($id);
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
    public function update(UpdateClbRequest $request, $id)
    {
        $doi_bong = Clb::find($id);
        if(empty($doi_bong)){
            return response([
                'status' => 404,
                'message' => 'Không tìm thấy'
            ]);
        }
        $doi_bong->update($request->all());
        return response([
            'status' => 200,
            'message' => 'Cập nhật thành công',
            "new_data" => $doi_bong
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
        $doi_bong = Clb::findOrFail($id);
        if(empty($doi_bong || !is_numeric($id) )){
            return response([
                'status' => 404,
                'message' => 'Không tìm thấy'
            ]);
        }
        $doi_bong->delete();
        return response([
            'status' => 200,
            'message' => 'Xóa thành công'
        ]);
    }

    public function search($tenCLB)
    {
<<<<<<< HEAD:.history/server/app/Http/Controllers/API/DoiBongController_20211128225556.php
        return DoiBong::where('ten_doi_bong', 'like', '%'.$keyword.'%')->get();
>>>>>>> hung/huy
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
=======
        $result = Clb::where('TenCLB', 'like', '%'.$tenCLB.'%')->get();
        if(count($result)){
            return $result;
        }
        return response([
            'status' => 404,
            'message' => 'Không tìm thấy'
        ]);
>>>>>>> huy:.history/server/app/Http/Controllers/API/ClbController.php
    }
}