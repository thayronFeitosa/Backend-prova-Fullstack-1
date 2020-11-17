<?php

namespace App\Http\Controllers;

use App\User;
use App\Address;
use App\Telephone;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    public function createUser(Request $request)
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
}
