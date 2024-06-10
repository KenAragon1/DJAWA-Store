<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use App\Models\Product;
use App\Models\User;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class ProfileController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): Response
    {
        $user = User::where('id', auth()->id())->with('user_profile')->first();
        return Inertia::render('Profile/Edit', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
            'user' => $user
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        $user = $request->user();
        $user->fill($request->validated());
        $userImage = User::select('image')->findOrFail(auth()->id());

        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }

        if ($request->hasFile('image')) {
            $newImage = $request->file('image');
            $imageName = uniqid() . '.' . $newImage->getClientOriginalExtension();
            $newImage->storeAs('public/images/user/', $imageName);
            $imageRoute = '/storage/images/user/' . $imageName;
            $user->image = $imageRoute;
        } else {
            $user->image = $userImage->image;
        }


        $request->user()->save();


        return Redirect::route('profile.edit');
    }

    public function updateImage(Request $request)
    {
        $request->validate([
            "image" => 'required'
        ]);

        $user = Product::findOrFail(1);

        return response($user);
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }
}
