<!doctype html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    @vite('resources/css/app.css')
    <link href='https://fonts.googleapis.com/css?family=Kaushan Script' rel='stylesheet'>
    <link rel="stylesheet" href="fontaswome/css/all.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css">

</head>


<body class="bg-slate-200 shadow-md min-h-full">
    {{-- navbar start --}}
    <nav class="bg-sky-950 px-2 lg:px-3 py-3 sticky mb-8">
        <div class=" flex justify-around items-center">
            <div class="">
                <a href="#" class="text-slate-100 text-xl" style="font-family:'Kaushan Script';">DJAWA.IRL</a>

            </div>
            <div class="w-60 relative lg:w-80">
                <input type="search" name="" id=""
                    class=" w-full py-1 px-4 rounded-full placeholder:italic placeholder:text-sm  focus:ring-2 focus:ring-inset focus:ring-indigo-100"
                    placeholder="Barang apa yang kamu cari?">
                <div class="">
                    <button
                        class="absolute inset-y-0 right-[10px] rounded-full aspect-square hover:bg-sky-950 hover:text-white h-full foc">
                        <i class='bx bx-search-alt-2'></i>
                    </button>

                </div>
            </div>
            @if (Auth::check())
                <div class=" flex gap-2 items-center">
                    <p class="text-white">Hallo, <span class=" underline">{{ Auth::user()->username }}</span></p>
                    <a href="{{ route('logout') }}"
                        class="text-slate-100 bg-red-600 rounded px-4 py-2 hover:bg-slate-600">Log out</a>
                </div>
            @else
                <div class="">
                    <a href="{{ route('halLogin') }}"
                        class="text-slate-100 bg-slate-900 rounded px-4 py-2 hover:bg-slate-600">Login</a>
                </div>
            @endif

        </div>
    </nav>
    {{-- Navbar End --}}

    @yield('content')

    {{-- footer start --}}
    <footer class="bg-sky-950 px-2 py-8">

        <div class="grid grid-cols-3 gap-4 text-center w-11/12 mx-auto text-white">
            <div class=" w-11/12">
                <p class="  text-2xl mb-4" style="font-family: Kaushan Script;">paragraph</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime natus nulla est? In cupiditate
                    eveniet ipsum quo, perspiciatis illum modi error libero molestiae tenetur! Animi!</p>
            </div>
            <div class=" w-11/12">
                <p class="  text-2xl mb-4" style="font-family: Kaushan Script;">paragraph</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime natus nulla est? In cupiditate
                    eveniet ipsum quo, perspiciatis illum modi error libero molestiae tenetur! Animi!</p>
            </div>
            <div class=" w-11/12">
                <p class="  text-2xl mb-4" style="font-family: Kaushan Script;">paragraph</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime natus nulla est? In cupiditate
                    eveniet ipsum quo, perspiciatis illum modi error libero molestiae tenetur! Animi!</p>
            </div>
        </div>
    </footer>
    {{-- footer end --}}
</body>

</html>
