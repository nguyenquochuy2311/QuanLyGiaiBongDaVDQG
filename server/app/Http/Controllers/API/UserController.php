<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\UpdateUserRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Illuminate\Auth\Events\Login;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response(User::all());
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
    public function store(StoreUserRequest $request)
    {
        $password = Hash::make($request->get('Password'));
        $request->merge([
            'Password' => $password,
        ]);
        User::create($request->all());
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
        $data = User::find($id);
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
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateUserRequest $request, $id)
    {
        $user = User::find($id);
        if(empty($user)){
            return response([
                'status' => 404,
                'message' => 'Không tìm thấy'
            ]);
        }
        
        $password = Hash::make($request->get('password'));
        $request->merge([
            'Password' => $password,
        ]);
        $user->update($request->all());
        return response([
            'status' => 200,
            'message' => 'Cập nhật thành công',
            "new_data" => $user
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
        $user = User::findOrFail($id);
        if(empty($user)){
            return response([
                'status' => 404,
                'message' => 'Không tìm thấy'
            ]);
        }
        $user->delete();
        return response([
            'status' => 200,
            'message' => 'Xóa thành công'
        ]);
    }

    public function login($email, $password, $role)
    {
        $user = DB::table('user')
            ->where('Email', '=', $email)
            ->where('Password', '=', $password)
            ->where('Rold', '=', $role)
            ->select('*')
            ->get();      
    }
}