<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\UpdateTranDauRequest;
use Illuminate\Support\Facades\DB;
use App\Models\TranDau;
use App\Models\Clb;


class TranDauController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $trandaus = TranDau::all();
        //Eloquent ORM
        
        
        //Query Builder
        
        foreach ($trandaus as $trandau) {
            $doi1 = Clb::where('idclb', $trandau['Doi1'])->value('TenCLB');
            $doi2 = Clb::where('idclb', $trandau['Doi2'])->value('TenCLB');
            $muaGiai = DB::table('muagiai')->where('idMG', $trandau['idMG'])->value('tenMG');

            $trandau['TenDoi1'] = $doi1;
            $trandau['TenDoi2'] = $doi2;
            $trandau['MuaGiai'] = $muaGiai;

        };

        return response($trandaus);
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
        $data = TranDau::find($id);
        if(empty($data)){
            return response([
                'status' => 404,
                'message' => 'Không tìm thấy'
            ]);
        }

        //Eloquent ORM
        $doi1 = Clb::where('idclb', $data['Doi1'])->value('TenCLB');
        $doi2 = Clb::where('idclb', $data['Doi2'])->value('TenCLB');
        
        //Query Builder
        $muaGiai = DB::table('muagiai')->where('idMG', $data['idMG'])->value('tenMG');

        $detail = [
            'idKQ' => $data['idTD'],
            'Doi1' => $data['Doi1'],
            'TenDoi1' => $doi1,
            'Doi2' => $data['Doi2'],
            'TenDoi2' => $doi2,
            'VongDau' => $data['VongDau'],
            'SanDau' => $data['SanDau'],
            'ThoiGian' => $data['ThoiGian'],
            'idToTT' => $data['idToTT'],
            'MuaGiai' => $muaGiai,
            'updated_at' => \Carbon\Carbon::now()
            
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
        $data = TranDau::find($id);
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
    public function update(UpdateTranDauRequest $request, $id)
    {
        $tran_dau= TranDau::find($id);
        if(empty($tran_dau)){
            return response([
                'status' => 404,
                'message' => 'Không tìm thấy'
            ]);
        }
        $tran_dau->update($request->all());
        return response([
            'status' => 200,
            'message' => 'Cập nhật thành công',
            "new_data" => $tran_dau
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
