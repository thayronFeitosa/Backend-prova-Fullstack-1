<?php

namespace App\Http\Requests;

use App\Rules\Cpf;
use Illuminate\Validation\Rule;
use Pearl\RequestValidate\RequestAbstract;

class UserRequest extends RequestAbstract
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
            'name' => 'required|min:2',
            'cpf' => ['required', new Cpf(), "unique:users,cpf $this->id"],
            'birthdate' => 'required|date',
            'email' => 'required|email|unique:users,email,' . $this->id, 
            'password' => 'required|min:8|confirmed',
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
            'unique' => 'Este :attribute já está cadastrado.',
            'email' => 'O :attribute precisa ser um endereço válido.',
            'max' => 'O :attribute não pode conter mais de :max caracteres.',
            'size' => 'O :attribute precisa ter :size caracteres.',
            'unique' => 'Este :attribute já está cadastrado.',

            'name.required' => 'O nome é obrigatório.',
            'name.min' => 'O nome precisa conter pelo menos :min caracteres.',

            'birthdate.required' => 'A data de nascimento é obrigatória.',
            'birthdate.date' => 'A data de nascimento precisa ser válida.',

            'password.required' => 'A senha é obrigatória.',
            'password.min' => 'A senha precisa conter pelo menos :min caracteres.',
            'password.confirmed' => 'A confirmação da senha não está igual a senha.',
        ];
    }

}
