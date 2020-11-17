<?php

namespace App\Http\Requests;

use App\Rules\Cpf;
use Pearl\RequestValidate\RequestAbstract;

class UserRequest extends RequestAbstract
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'name'=>'required',
            'cpf'=>['required',new Cpf(),'unique:users,cpf'],
            'email'=>'required|email|unique:users,email',
            'birthdate'=>'date',
            'password'=>'required|min:8|confirmed'
        ];
    }
}