<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ToTrongTai;
use App\Models\TrongTai;
use \DB;
class ToTrongTaiController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = ToTrongTai::with('To_trong_tai')->get();
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
            'status' => 201,
            'message' => 'Thêm Tổ trọng tài thành công'
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store($idTTC,$idTTB1,$idTTB2)
    {
      
        $Trongtaichinh = TrongTai::find($idTTC);
        $Trongtaibien1 = TrongTai::find($idTTB1);
        $TrongTaibien2 = TrongTai::find($idTTB2);
        $Array = array();
       
        if($idTTC != $idTTB1 && $idTTC != $idTTB2 && $idTTB1 != $idTTB2){


            $Array[0] =$Trongtaibien1->idTT;
            $Array[1] =$TrongTaibien2->idTT;
            
            $totrongtai = new ToTrongTai;
            $totrongtai->idTT = $Trongtaichinh->idTT;
            $totrongtai->save();

            $data = new ToTrongTai;
            $data->idToTT = ToTrongTai::max('idToTT');

            for($i = 0; $i < 2; $i++){
                $totrongtaiBien = new ToTrongTai;
                $totrongtaiBien->idToTT = $data->idToTT;
                $totrongtaiBien->idTT = $Array[$i];
                $totrongtaiBien->save();
            }
            
            return response([

                'status' => 200,
                'message' => "Thêm thành công"
                
            ]);
        
        }else {
            
            if($idTTC == $idTTB1 ){
                return response([
                    $idTTC,
                    $idTTB1,

                    'status' => 404,
                    'message' => "Trọng tài $Trongtaichinh->TenTT đã được thêm vô đội"
                ]);
            }
            else if( $idTTC == $idTTB2){
                return response([
                    'status' => 404,
                    'message' => "Trọng tài $Trongtaichinh->TenTT đã được thêm vô đội "
                ]);
            }
            else if ($idTTB1 == $idTTB2){
                return response([
                    'status' => 404,
                    'message' => "Trọng tài $Trongtaibien1->TenTT đã được thêm vô đội"
                ]);
            }
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
        // $Totrongtai = ToTrongTai::where('idToTT', $id)->value('idTT');
        $Totrongtai = DB::select('select TenTT from trongtai join totrongtai on trongtai.idTT = totrongtai.idTT where idToTT = "'.$id.'"');
        return response(['Totrongtai'=>$Totrongtai]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $data = ToTrongTai::find($id);
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
    public function update(Request $request, $idToTT,$idTT)
    {
        $data =  ToTrongTai::where('idToTT',$idToTT)->where('idTT',$idTT)->get();
        // return response(count($data));
        if(count($data) == 0){
            return response([
                'status' => 404,
                'message' => 'Không tìm thấy'
            ]);
        }
        else{
            $UpdateToTrongTai = new ToTrongTai;
            $UpdateToTrongTai = ToTrongTai::where('idToTT',$idToTT)->where('idTT',$idTT)->update(['idTT' => $request->idTT]);
            
            return response([
                'status' => 200,
                'message' => 'Cập nhật thành công',
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
        $data = ToTrongTai::findOrFail($id);
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

    
}
