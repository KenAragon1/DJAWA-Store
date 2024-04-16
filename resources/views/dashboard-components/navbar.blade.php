{{-- navbar start --}}
<nav class="sticky top-0 px-2 py-3 bg-white shadow lg:px-3">
    <div class="flex items-center ">
        <div class="flex items-center justify-start w-1/2">
            <a href="{{ route('home') }}" class="text-xl text-pastel-yellow"
                style="font-family:'Kaushan Script';">DJAWA.IRL</a>
        </div>


        <div class="flex items-center justify-end w-1/2 gap-2">
            <div class="relative flex items-center gap-2 ">
                <button
                    class="w-10 overflow-hidden text-white duration-100 border rounded-full hover:bg-dark-pastel-blue"
                    data-dropdown-toggle="dropdown" data-dropdown-trigger="click">
                    <img src="{{ asset('assets/foto-profil/default-profile.jpg') }}" alt="">
                </button>
                <div id="dropdown" data-target="dropdown" class="hidden bg-white shadow w-44">
                    <ul class="">
                        <li class="px-4 py-2 cursor-pointer hover:bg-slate-400"><a href="{{ route('dashboard') }}"
                                class="block w-full h-full">Dashboard</a>
                        </li>
                        <li class="px-4 py-2 cursor-pointer hover:bg-slate-400"><a
                                href="{{ route('profil-page', ['id_user' => Auth::user()->id_user]) }}"
                                class="block w-full h-full">Profil</a></li>
                        <li class="px-4 py-2 cursor-pointer hover:bg-slate-400"> <a href="{{ route('logout') }}"
                                class="block w-full h-full">Log
                                out</a>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    </div>
</nav>
{{-- Navbar End --}}
