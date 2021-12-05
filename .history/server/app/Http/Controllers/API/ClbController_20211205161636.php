<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\StoreClbRequest;
use App\Http\Requests\UpdateClbRequest;
use App\Models\Clb;
use App\Models\Hlv;
use Illuminate\Support\Facades\DB;
class ClbController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        
        // $data_HLV = Clb::with('ds_hlv')->get();
        // $data_Cauthu = Clb::with('ds_cau_thu')->get();

        
        $clb = DB::table('clb')
        // ->join('cauthu', 'clb.idCLB', '=','cauthu.i dCLB')
        // ->join('hlv','clb.idCLB', '=' ,'hlv.idCLB')
        // ->select()
        ->get();
        // $clb = Clb::with('clb')->get();
    return response($clb);

        // return response($data_HLV);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        // form get
        return response([
            'status' => 201,
            'message' => 'Thêm CLB thành công'
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
        if($request->hasFile('Logo'))
        {
            $file = $request->file('Logo');
            $filename = $file->getClientOriginalName();
            // $filename = time(). '-' .$extension;
            $result = Clb::where('Logo', '=', $filename)->get();
            if(count($result)){
                return response([
                    'status' => false,
                    'message' => 'Lỗi thêm dữ liệu',
                    'detail' => 'Trùng tên hình ảnh'
                ]);
            }
            $file->storeAs('uploads/clb/', $filename);

            $clb = new CLb();
            $clb->VietTat = $request->VietTat;
            $clb->TenCLB = $request->TenCLB;
            $clb->SanNha = $request->SanNha;
            $clb->TruSo = $request->TruSo;
            $clb->Logo =  $filename;
            $clb->save();

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
        if($request->hasFile('Logo'))
        {
            $file = $request->file('Logo');
            $filename = $file->getClientOriginalName();
            // $filename = time(). '-' .$extension;
            $file->storeAs('uploads/clb/', $filename);

            $clb = new Clb();
            $clb->idCLB = $id;
            $clb->VietTat = $request->VietTat;
            $clb->TenCLB = $request->TenCLB;
            $clb->SanNha = $request->SanNha;
            $clb->TruSo = $request->TruSo;
            $clb->Logo =  $filename;
            
            return response([
                'request' => $request->all(),
                'clb' => $clb
            ]);
            $doi_bong->update($clb);
            return response([
                'status' => 200,
                'message' => 'Cập nhật thành công',
                "new_data" => $doi_bong
            ]);
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
        $doi_bong = Clb::findOrFail($id);
        $data = count($doi_bong);
        if($data = 0 ){
            return response([
                'status' => 404,
                'message' => 'Không tìm thấy'
            ]);
        }else{
            $doi_bong->delete();
            return response([
                'status' => 200,
                'message' => 'Xóa thành công'
            ]);
        }
    }

    public function search($keyword)
    {
        return Clb::where('TenCLB', 'like', '%'.$keyword.'%')->get();
    }
}