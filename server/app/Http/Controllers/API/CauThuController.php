<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\DB;
use App\Models\CauThu;

class CauThuController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // $cau_thu = DB::table('cauthu')
        //     ->join('clb', 'cauthu.idCLB', '=', 'clb.idCLB')
        //     ->select('cauthu.*', 'clb.TenCLB')
        //     ->get();
        $cau_thu = CauThu::with('clb')->get();
        return response($cau_thu);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // CauThu::create($request->all());  
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
        // $data = CauThu::find($id);
        // if(empty($data)){
        //     return response([
        //         'status' => 404,
        //         'message' => 'Không tìm thấy'
        //     ]);
        // }
        // $cau_thu = DB::table('cau_thus')
        //     ->join('doi_bongs', 'cau_thus.doi_bong_id', '=', 'doi_bongs.id')
        //     ->where('cau_thus.id', '=', $id)
        //     ->select('cau_thus.*', 'doi_bongs.ten_doi_bong')
        //     ->get();
        // return response($cau_thu);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}