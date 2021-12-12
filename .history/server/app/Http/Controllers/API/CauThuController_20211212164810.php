<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\StoreCauThuRequest;
use App\Http\Requests\UpdateCauThuRequest;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
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
        $cau_thu = CauThu::orderBy('idCT', 'DESC')->with('clb')->get();
        return response($cau_thu);
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
                'status' => 204,
                'message' => "Không thế thêm cầu thủ. Vì đã có cầu thủ mang áo số $request->SoAo"
            ]);
        }
        else{
            if($request->hasFile('image'))
            {
                $path_name = 'uploads/cauthu/';
                $file = $request->file('image');
                $filename = $file->getClientOriginalName();
                if(File::exists(public_path('uploads/cauthu/' . $filename)))
                {
                    return response([
                        'status' => 500,
                        'message' => 'Lỗi thêm dữ liệu',
                        'detail' => 'Tồn tại tên file: '.$filename
                    ]); 
                }
                $file->move($path_name, $filename);
                $request->merge([
                    'AnhDaiDien' => $path_name.$filename
                ]);
            }  
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
            // ->where('AnhDaiDien',$request->AnhDaiDien)
            // ->where('NgaySinh',$request->NgaySinh)

            ->whereNotIn('idCT',[$id])
            ->select()
            ->get();
            // return response(count($data));
            $var = count($data);
            if($var > 0 ){
                return response([
                    'status' => 204,
                    'message' => "Không thể cập nhập cầu thủ. Vì đã có cầu thủ mang áo số $request->SoAo"
                ]);
            }
            else{
                if($request->hasFile('image'))
                {
                    $path_name = 'uploads/cauthu/';
                    $file = $request->file('image');
                    $filename = $file->getClientOriginalName();
                    if($path_name.$filename != $Cauthu->AnhDaiDien)
                    {
                        if(File::exists(public_path($path_name . $filename)))
                        {
                            return response([
                                'status' => 500,
                                'message' => 'Lỗi cập nhật dữ liệu',
                                'detail' => 'Tồn tại tên file: '.$filename
                            ]); 
                        }
                        request()->file('image')->move($path_name, $filename);
                    }
                    $request->merge([
                        'AnhDaiDien' => $path_name.$filename
                    ]);
                } 
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