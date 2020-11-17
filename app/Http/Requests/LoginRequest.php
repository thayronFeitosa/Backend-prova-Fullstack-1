<?php

namespace App\Http\Requests;

use Pearl\RequestValidate\RequestAbstract;

class LoginRequest extends RequestAbstract
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules(): array
    {
        return [
            'email' => 'required|email|',
            'password' => 'required|min:8',
        ];
    }

    /**
     * Get custom messages for validator errors.
     *
     * @return array
     */
    public function messages(): array
    {
        return [
            'required' => 'O :attribute é obrigatório.',
            'email' => 'O :attribute precisa ser um endereço válido.',

            'password.required' => 'A senha é obrigatória.',
            'password.min' => 'A senha precisa conter pelo menos :min caracteres.',
        ];
    }
}
