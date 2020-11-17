<?php

namespace App\Http\Services;

use App\Telephone;
use App\User;
use Illuminate\Support\Facades\DB;

// use Illuminate\Support\Facades\DB;

class UserService
{

    /**
     * Update an user data
     *
     * @param array $data
     * @param User $user
     * @return User
     */
    public function update(array $data, User $user): User
    {
        DB::beginTransaction();
        $user->fill($data);

        if (isset($data['address'])) {
            $this->handleAddress($data['address'], $user);
        }

        if (isset($data['telephones'])) {
            $this->handleTelephones($data['telephones'], $user);
        }
        $user->save();
        DB::commit();

        return $user;
    }

    /**
     * Update or Create user address
     *
     * @param array $address
     * @param User $user
     * @return void
     */
    private function handleAddress(array $address, User $user): void
    {
        $user->address
        ? $user->address()->update($address)
        : $user->address()->create($address);
    }

    /**
     * Update telephones from user
     *
     * @param array $address
     * @param User $user
     * @return void
     */
    private function handleTelephones(array $telephones, User $user): void
    {
        Telephone::where('user_id', $user->id)->delete();
        array_walk($telephones, function ($telephone, $i, $user) {
            $user->telephones()->create($telephone);
        }, $user);
    }
}
