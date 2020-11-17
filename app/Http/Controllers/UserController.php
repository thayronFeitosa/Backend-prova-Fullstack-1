<?php

namespace App\Http\Controllers;

use App\User;
use App\Address;
use App\Telephone;
use App\Certificate;
use App\Http\Requests\UserRequest;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    public function createUser(UserRequest $request)
    {
        $data = $request->all();

        DB::beginTransaction();
        $user = User::create($data);
        $telefoneData = $request->only(['number']);
        $telefoneData['user_id'] = $user->id;
        Telephone::create($telefoneData);
        $addressData = $request->only(['address'][0]);
        $addressData = $addressData['address'];
        $addressData['user_id'] = $user->id;
        Address::create($addressData);
        DB::commit();
        return response()->json($user);
    }

    public function getUser()
    {
        $user = auth()->user();
        $telephones = Telephone::where('user_id', $user->id)->get();
        $address = Address::where('user_id', $user->id)->get();
        $certificate = Certificate::where('user_id', $user->id)->get();
        $user['telephones'] = $telephones;
        $user['address'] = $address;
        $user['certificate'] = $certificate;
        return response()->json($user);
    }
}
