<?php

namespace App\Http\Controllers\API;


use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\UpdateKetQuaRequest;
use Illuminate\Support\Facades\DB;
use App\Models\KetQua;
use App\Models\Clb;

class KetQuaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $ketquas = KetQua::all();

        foreach ($ketquas as $ketqua) {
            $doi1 = Clb::where('idclb', $ketqua['trandau']['Doi1'])->value('TenCLB');
            $doi2 = Clb::where('idclb', $ketqua['trandau']['Doi2'])->value('TenCLB');
            
            $muaGiai = DB::table('muagiai')->where('idMG', $ketqua['trandau']['idMG'])->value('tenMG');
            $tickets = DB::table('xuphat')
                    ->join('cauthu', 'xuphat.idCT', '=', 'cauthu.idCT')
                    ->where('idKQ', $ketqua->idKQ)
                    ->get(['idXP', 'xuphat.idCT', 'TenCT', 'SoAo', 'ViTri', 'LoaiThe', 'ThoiDiem']);
        
         
            $scores = $ketqua->ghibans()->join('cauthu', 'ghiban.idCT', '=', 'cauthu.idCT')->get(['ghiban.idCT', 'TenCT', 'SoAo', 'ViTri', 'LoaiBT', 'ThoiDiem']);
            $ketqua['TenDoi1'] = $doi1;
            $ketqua['TenDoi2'] = $doi2;
            $ketqua['XuPhat'] = $tickets;
            $ketqua['BanThang'] = $scores;
            $ketqua['MuaGiai'] = $muaGiai;

        }
        return $ketquas;
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
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $data = KetQua::find($id);
        if(empty($data)){
            return response([
                'status' => 404,
                'message' => 'Không tìm thấy'
            ]);
        }
        //Eloquent ORM
        $doi1 = Clb::where('idclb', $data['trandau']['Doi1'])->value('TenCLB');
        $doi2 = Clb::where('idclb', $data['trandau']['Doi2'])->value('TenCLB');
        
        //Query Builder
        $muaGiai = DB::table('muagiai')->where('idMG', $data['trandau']['idMG'])->value('tenMG');
        $tickets = DB::table('xuphat')
                    ->join('cauthu', 'xuphat.idCT', '=', 'cauthu.idCT')
                    ->where('idKQ', $data->idKQ)
                    ->get(['idXP', 'xuphat.idCT', 'TenCT', 'SoAo', 'LoaiThe', 'ThoiDiem']);
        
         // $scores = DB::table('ghiban')
        //             ->where('idKQ', $data->idKQ)
        //             ->join('cauthu', 'ghiban.idCT', '=', 'cauthu.idCT')
        //             ->get(['ghiban.idCT', 'TenCT', 'LoaiBT', 'ThoiDiem']);
        $scores = $data->ghibans()->join('cauthu', 'ghiban.idCT', '=', 'cauthu.idCT')->get(['ghiban.idCT', 'TenCT', 'SoAo', 'LoaiBT', 'ThoiDiem']);;

        $detail = [
            'idKQ' => $data['idKQ'],
            'TenDoi1' => $doi1,
            'BanThangDoi1' => $data['BTDoi1'],
            'TenDoi2' => $doi2,
            'BanThangDoi2' => $data['BTDoi2'],
            'VongDau' => $data['trandau']['VongDau'],
            'SanDau' => $data['trandau']['SanDau'],
            'ThoiGian' => $data['trandau']['ThoiGian'],
            'idToTT' => $data['trandau']['idToTT'],
            'MuaGiai' => $muaGiai,
            'XuPhat' => $tickets,
            'BanThang' => $scores,
            
        ];
        
        return response($detail);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $data = KetQua::find($id);
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
    public function update(UpdateKetQuaRequest $request, $id)
    {
        $ket_qua = KetQua::find($id);
        if(empty($ket_qua )){
            return response([
                'status' => 404,
                'message' => 'Không tìm thấy'
            ]);
        }
        $ket_qua ->update($request->all());
        return response([
            'status' => 200,
            'message' => 'Cập nhật thành công',
            "new_data" => $ket_qua 
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
        //
    }


}
