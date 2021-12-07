<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\StoreCauThuRequest;
use App\Http\Requests\UpdateCauThuRequest;
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
        // $cau_thu = CauThu::with('clb')->get();
        $cau_thu = cau_thu::orderBy('idCLB', 'DESC')->get();
        return response($cau_thu);
        // $cau_thu = Clb::orderBy('idCT', 'DESC')->get();
        // return response($cau_thu);
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
            'message' => 'Thêm cầu thủ thành công'
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreCauThuRequest $request)
    {
        $data = DB::table('cauthu')
                ->where('idCLB',$request->idCLB)
                ->where('SoAo',$request->SoAo)
                ->select()
                ->get();
                // return response(count($data));
        $var = count($data);
        if($var != 0 ){
            return response([
                'status' => 200,
                'message' => "Không thế thêm cầu thủ. Vì đã có cầu thủ mang áo số $request->SoAo"
            ]);
        }
        else{
            CauThu::create($request->all());  
            return response([
                'status' => 200,
                'message' => "Thêm thành công"
            ]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $data = CauThu::find($id);
        if(empty($data)){
            return response([
                'status' => 404,
                'message' => 'Không tìm thấy'
            ]);
        }
        // $cau_thu = DB::table('cau_thus')
        //     ->join('doi_bongs', 'cau_thus.doi_bong_id', '=', 'doi_bongs.id')
        //     ->where('cau_thus.id', '=', $id)
        //     ->select('cau_thus.*', 'doi_bongs.ten_doi_bong')
        //     ->get(); 
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
        $data = CauThu::find($id);
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
        $Cauthu = CauThu::find($id);
        if(empty($Cauthu)){
            return response([
                'status' => 404,
                'message' => 'Không tìm thấy'
            ]);
        }else{
            $data = DB::table('cauthu')
            ->where('idCLB',$request->idCLB)
            ->where('SoAo',$request->SoAo)
            ->whereNotIn('idCT',[$id])
            ->select()
            ->get();
            // return response(count($data));
            $var = count($data);
            if($var > 0 ){
                return response([
                    'status' => 200,
                    'message' => "Không thể cập nhập cầu thủ. Vì đã có cầu thủ mang áo số $request->SoAo"
                ]);
            }
            else{
                $Cauthu->update($request->all());
                return response([
                    'status' => 200,
                    'message' => 'Cập nhật thành công',
                    "new_data" => $Cauthu
                ]);
            }
        }
        
       
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $cauthu = CauThu::find($id);
        // $data = count($cauthu);
         if(empty($cauthu)){
            return response([
                'status' => 404,
                'message' => 'Không tìm thấy cầu thủ cần xoá'
            ]);
        }else{
            $cauthu->delete();
            return response([
                'status' => 200,
                'message' => 'Xóa thành công'
            ]);
        }
    }

    public function search($tenCT)
    {
        $result = CauThu::where('TenCT', 'like', '%'.$tenCT.'%')->get();
        if(count($result)){
            return $result;
        }
        return response([
            'status' => 404,
            'message' => 'Không tìm thấy'
        ]);
    }
}