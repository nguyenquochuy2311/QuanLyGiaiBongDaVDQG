<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;
use Validator;
use App\Models\User;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignUpRequest;

class AuthController extends Controller
{
    public function signup(SignUpRequest $request)
    {
        $user = new User([
            'username' => $request->username,
            'email' => $request->email,
            'password' => bcrypt($request->password)
        ]);
 
        $user->save();
 
        return response()->json([
            'status' => 'success',
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
}