@extends('components.navbar-footer')

@section('content')
    <div class="w-96 px-4 py-10 my-8  flex flex-col bg-white overflow-hidden shadow-xl mx-auto border">
        <p class=" text-4xl text-center mb-2" style="font-family:'Kaushan Script';">Register</p>
        <hr class="mb-8">
        <form class="flex flex-col w-11/12 mx-auto mb-4" method="POST" action="{{ route('register') }}">
            @csrf
            <input class="mb-8 rounded-lg px-4 py-3 outline outline-1 outline-slate-500" type="text" name="username"
                placeholder="Username">
            <input class="mb-8 rounded-lg px-4 py-3 outline outline-1 outline-slate-500" type="email" name="email"
                placeholder="Email">
            <input class="mb-8 rounded-lg px-4 py-3 outline outline-1 outline-slate-500" type="password" name="password"
                placeholder="Password">
            <button class="bg-pastel-blue text-white rounded-lg py-4 hover:bg-dark-pastel-blue transition-all"
                type="submit">Register</button>

        </form>
        <p class=" text-center">Sudah Punya Akun? <a href="{{ route('halLogin') }}"
                class="text-blue-800 underline">Login</a>
        </p>


    </div>
@endsection
