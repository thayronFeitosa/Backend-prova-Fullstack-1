<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function login(LoginRequest $request)
    {
        $data = $request->only(['email', 'password']);
        $token = Auth::attempt($data);
        return !$token
        ? response()->json(['error' => 'Usuário ou senha incorretas']) 
        : response()->json(["token"=>$token]);
    }
}
