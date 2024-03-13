@extends('components.navbar-footer')

@section('content')
    <div class="w-96 px-4 py-10 my-8  flex flex-col bg-white overflow-hidden shadow-xl mx-auto border">
        <p class=" text-4xl text-center mb-2" style="font-family:'Kaushan Script';">Login</p>
        <hr class="mb-8">
        <form class="flex flex-col w-11/12 mx-auto mb-4" method="POST" action="{{ route('login') }}">
            @csrf
            <input class="mb-8 rounded px-4 py-3 outline outline-1 outline-slate-500" type="text" name="username"
                placeholder="Username">
            <input class="mb-8 rounded px-4 py-3 outline outline-1 outline-slate-500" type="password" name="password"
                placeholder="Password">
            <button class="bg-pastel-blue hover:bg-dark-pastel-blue  rounded-lg py-4  text-white transition-all"
                type="submit">Login</button>
        </form>
        <p class=" text-center">Belum mempunyai akun? <a href="{{ route('halRegister') }}"
                class="text-blue-800 underline">Register</a>
            Sekarang</p>
    </div>
@endsection
