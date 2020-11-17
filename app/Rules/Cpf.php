<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;

class Cpf implements Rule
{
    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value): bool
    {
        $cpf = preg_replace('/[^0-9]/is', '', $value);

        if (strlen($cpf) != 11) {
            return false;
        }

        if (preg_match('/(\d)\1{10}/', $cpf)) {
            return false;
        }

        for ($i = 9; $i < 11; $i++) {
            for ($j = 0, $c = 0; $c < $i; $c++) {
                $j += $cpf[$c] * (($i + 1) - $c);
            }
            $j = ((10 * $j) % 11) % 10;
            if ($cpf[$c] != $j) {
                return false;
            }
        }
        return true;
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message(): string
    {
        return 'O :attribute é inválido.';
    }
}
