<?php

namespace App\Http\Requests;

use Pearl\RequestValidate\RequestAbstract;

class LoginRequest extends RequestAbstract
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'email'=>'required|email',
            'password'=>'required|min:8'
        ];
    }
}