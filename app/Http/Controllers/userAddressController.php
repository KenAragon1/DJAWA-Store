<?php

namespace App\Http\Controllers;

use App\Models\UserAddress;
use Illuminate\Http\Request;

class userAddressController extends Controller
{
    //
    public function get()
    {
        return UserAddress::where('id_user', auth()->id())->get();
    }

    public function store(Request $request)
    {
        $validate = $request->validate([
            'label' => 'required',
            'province' => 'required',
            'city' => 'required',
            'zip' => 'required',
            'detail' => 'required'
        ]);

        UserAddress::create([
            'id_user' => auth()->id(),
            ...$validate
        ]);

        return redirect()->back()->with('success', 'Successfully created new address');
    }

    public function delete($id_address)
    {
        UserAddress::findOrFail($id_address)->delete();
        return redirect()->back()->with('success', 'Successfully deleted address');
    }
}
