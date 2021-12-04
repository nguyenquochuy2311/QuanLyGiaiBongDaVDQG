<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;
use App\Models\User;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignUpRequest;
use App\Http\Requests\UpdateUserRequest;

class AuthController extends Controller
{
    public function signup(SignUpRequest $request)
    {
        $user = new User([
            'username' => $request->username,
            'email' => $request->email,
            'password' => bcrypt($request->password),
            'Role' => 0

        ]);
 
        $user->save();
 
        return response()->json([
            'status' => 'success',    
            'token_type' => 'Bearer',
            'Role' => $user->Role,
            'email' => $user->email,
            'password' => $user->password,
            'expires_at' => Carbon::parse(
            )->toDateTimeString()
        ]);
    }
    
    public function login(LoginRequest $request)
    {
        $credentials = request(['email', 'password']);
 
        if (!Auth::attempt($credentials)) {
            return response()->json([
                'status' => false,
                'message' => 'Unauthorized'
            ], 401);
        }
 
        $user = $request->user();
        $tokenResult = $user->createToken('Personal Access Token');
        $token = $tokenResult->token;
 
        if ($request->remember_me) {
            $token->expires_at = Carbon::now()->addWeeks(1);
        }
 
        $token->save();
 
        return response()->json([
            'status' => 'success',
            'access_token' => $tokenResult->accessToken,
            'token_type' => 'Bearer',
            'Role' => $user->Role,
            'email' => $user->email,
            'password' => $user->password,
            'expires_at' => Carbon::parse(
                $tokenResult->token->expires_at
            )->toDateTimeString()
        ]);
    }
 
    public function logout(Request $request)
    {
        $request->user()->token()->revoke();
        return response()->json([
            'status' => 'success',
        ]);
    }
 
    public function user(Request $request)
    {
        return response()->json($request->user());
    }

    public function index()
    {
        $data = User::all();
        return response($data);
    }

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

    public function edit($id)
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

    public function update(UpdateUserRequest $request, $id)
    {
        $user = User::find($id);
        if(empty($user)){
            return response([
                'status' => 404,
                'message' => 'Không tìm thấy'
            ]);
        }
        $user->update($request->all());
        return response([
            'status' => 200,
            'message' => 'Cập nhật thành công',
            "new_data" => $user 
        ]);
    }

    public function destroy($id)
    {
        $user = User::find($id);
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

    public function search($username)
    {
        $result = User::where('username', 'like', '%'.$username.'%')->get();
        if(count($result)){
            return $result;
        }
        return response([
            'status' => 404,
            'message' => 'Không tìm thấy'
        ]); 
    }

    public function searchEmail($email)
    {
        $result = User::where('email', 'like', '%'.$email.'%')->get();
        if(count($result)){
            return $result;
        }
        return response([
            'status' => 404,
            'message' => 'Không tìm thấy'
        ]); 
    }
}