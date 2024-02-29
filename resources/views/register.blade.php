@extends('components.navbar-footer')

@section('content')
    <div class=" bg-slate-100 w-4/6 flex shadow-xl rounded mx-auto mb-4 overflow-hidden">
        <div class="w-1/2">
            Hi
        </div>
        <div class="w-1/2 px-4 py-10  flex flex-col bg-sky-950 overflow-hidden shadow">
            <p class="text-slate-100 text-4xl text-center mb-2" style="font-family:'Kaushan Script';">DJAWA.IRL</p>
            <hr class="mb-8">
            <form class="flex flex-col w-11/12 mx-auto mb-4" method="POST" action="{{ route('register') }}">
                @csrf
                <input class="mb-8 rounded-lg px-4 py-4" type="text" name="username" placeholder="Username">
                <input class="mb-8 rounded-lg px-4 py-4" type="email" name="email" placeholder="Email">
                <input class="mb-8 rounded-lg px-4 py-4" type="password" name="password" placeholder="Password">
                <button class="bg-slate-900 text-white rounded-lg py-4 hover:bg-white hover:text-black transition-all"
                    type="submit">Register</button>
            </form>

        </div>
    </div>
@endsection
