<!doctype html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    @vite('resources/css/app.css')
    <link href='https://fonts.googleapis.com/css?family=Kaushan Script' rel='stylesheet'>
    <link rel="stylesheet" href="fontaswome/css/all.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <title>DJAWA.IRL</title>
    <style>
        /* Chrome, Safari, Edge, Opera */
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }

        /* Firefox */
        input[type=number] {
            -moz-appearance: textfield;
        }
    </style>
</head>


<body class="bg-slate-50 shadow-md min-h-full">
    {{-- navbar start --}}
    <nav class="bg-white px-2 lg:px-3 py-3 sticky top-0 shadow">
        <div class=" flex items-center">
            <div class="w-1/3 flex items-center justify-center">
                <a href="{{ route('home') }}" class="text-pastel-yellow text-xl"
                    style="font-family:'Kaushan Script';">DJAWA.IRL</a>
            </div>

            <div class="w-1/3 flex items-center justify-center">
                <div class="w-60 relative lg:w-80">
                    <input type="search" name="" id=""
                        class=" w-full py-2 px-3 rounded placeholder:italic placeholder:text-sm outline outline-1 outline-slate-500  focus:ring-2 focus:ring-inset focus:ring-indigo-100"
                        placeholder="Barang apa yang kamu cari?">
                    <div class="">
                        <button
                            class="absolute inset-y-0 right-[2px] rounded  text-slate-500 aspect-square hover:bg-black  h-[98%] transition-all duration-200">
                            <i class='bx bx-search-alt-2'></i>
                        </button>
                    </div>
                </div>
            </div>
            <div class="w-1/3 flex items-center justify-center">
                @if (Auth::check())
                    <div class=" flex gap-2 items-center relative min-w-40">
                        <button class="text-white w-full bg-pastel-blue rounded px-4 py-2 hover:bg-dark-pastel-blue"
                            data-toggle="dropdown-menu">Hallo, <span
                                class=" underline">{{ Auth::user()->username }}</span></button>
                        <ul data-target="dropdown" class="absolute top-[100%]  bg-slate-100 w-full invisible">
                            <li class="px-4 py-2 hover:bg-slate-400 cursor-pointer"><a
                                    href="{{ url('/user/' . Auth::user()->uid) }}"
                                    class="w-full h-full block">Profil</a></li>
                            <li class="px-4 py-2 hover:bg-slate-400 cursor-pointer"> <a href="{{ route('logout') }}"
                                    class="w-full h-full block">Log
                                    out</a>
                            </li>
                        </ul>
                    </div>
                @else
                    <a href="{{ route('halLogin') }}"
                        class="text-slate-100 bg-pastel-blue rounded px-4 py-2 hover:bg-dark-pastel-blue duration-100">Login</a>
                @endif
            </div>
        </div>
    </nav>
    {{-- Navbar End --}}

    @yield('content')


    {{-- footer start --}}
    <footer class="bg-white px-2 py-8 border flex items-center">

        <div class="grid grid-cols-3 gap-4 text-center w-11/12 mx-auto text-black">
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
    <script src="{{ asset('scripts/dropdown.js') }}"></script>
    @yield('scripts')
</body>

</html>
