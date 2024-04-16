<!doctype html>
<html>

<head>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    @vite(['resources/css/app.css', 'resources/js/app.js'])
    <link href='https://fonts.googleapis.com/css?family=Kaushan Script' rel='stylesheet'>
    <link rel="stylesheet" href="fontaswome/css/all.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <script src="https://code.jquery.com/jquery-3.7.1.js" integrity="sha256-eKhayi8LEQwp4NKxN+CfCh+3qOVUtJn3QNZ0TciWLP4="
        crossorigin="anonymous"></script>
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


<body class="min-h-full shadow-md bg-slate-50">

    {{-- navbar start --}}
    <nav class="bg-white px-2 lg:px-3 py-3 sticky top-0 shadow z-[9999]">
        <div class="flex items-center ">
            <div class="flex items-center justify-start w-1/3">
                <a href="{{ route('home') }}" class="text-xl text-pastel-yellow"
                    style="font-family:'Kaushan Script';">DJAWA.IRL</a>
            </div>

            <div class="flex items-center justify-center w-1/3">
                <div class="relative w-60 lg:w-80">
                    <input type="search" name="" id=""
                        class="w-full px-3 py-2 rounded placeholder:italic placeholder:text-sm outline outline-1 outline-slate-500 focus:ring-2 focus:ring-inset focus:ring-indigo-100"
                        placeholder="Barang apa yang kamu cari?">
                    <div class="">
                        <button
                            class="absolute inset-y-0 right-[2px] rounded  text-slate-500 aspect-square hover:bg-black  h-[98%] transition-all duration-200">
                            <i class='bx bx-search-alt-2'></i>
                        </button>
                    </div>
                </div>
            </div>
            <div class="flex items-center justify-end w-1/3 gap-2">
                @if (Auth::check())
                    <a href="{{ route('keranjang', ['id_user' => Auth::user()->id_user]) }}"><i
                            class="p-2 text-xl duration-100 rounded fa-solid fa-cart-shopping hover:bg-pastel-blue hover:text-white"></i></a>
                    <div class="relative flex items-center gap-2 ">
                        <button
                            class="w-10 overflow-hidden text-white duration-100 border rounded-full hover:bg-dark-pastel-blue"
                            data-dropdown-toggle="dropdown" data-dropdown-trigger="click">
                            <img src="{{ asset('assets/foto-profil/default-profile.jpg') }}" alt="">
                        </button>
                        <div id="dropdown" data-target="dropdown" class="hidden bg-white border shadow w-52">
                            <ul class="">
                                @if (Auth::user()->utype == 'admin')
                                    <li class="px-4 py-2 cursor-pointer hover:bg-slate-400"><a
                                            href="{{ route('dashboard') }}" class="block w-full h-full">
                                            <i class="fa-solid fa-chart-pie"></i>
                                            Dashboard</a>
                                    </li>
                                @endif
                                <li class="px-4 py-2 cursor-pointer hover:bg-slate-400"><a
                                        href="{{ route('profil-page', ['id_user' => Auth::user()->id_user]) }}"
                                        class="block w-full h-full"><i class="fa-solid fa-user"></i> Profil</a></li>
                                <li class="px-4 py-2 cursor-pointer hover:bg-slate-400"> <a
                                        href="{{ route('hal-pesanan') }}" class="block w-full h-full"><i
                                            class="fa-solid fa-money-bill"></i> Order
                                        History</a>
                                </li>
                                <li class="px-4 py-2 cursor-pointer hover:bg-slate-400"> <a href="{{ route('logout') }}"
                                        class="block w-full h-full"><i class="fa-solid fa-right-from-bracket"></i> Log
                                        out</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                @else
                    <a href="{{ route('halLogin') }}"
                        class="px-4 py-2 duration-100 rounded text-slate-100 bg-pastel-blue hover:bg-dark-pastel-blue">Login</a>
                @endif
            </div>
        </div>
    </nav>
    {{-- Navbar End --}}

    @yield('content')


    {{-- footer start --}}
    <footer class="flex items-center px-2 py-8 bg-white border">

        <div class="grid w-11/12 grid-cols-3 gap-4 mx-auto text-center text-black">
            <div class="w-11/12 ">
                <p class="mb-4 text-2xl ">paragraph</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime natus nulla est? In cupiditate
                    eveniet ipsum quo, perspiciatis illum modi error libero molestiae tenetur! Animi!</p>
            </div>
            <div class="w-11/12 ">
                <p class="mb-4 text-2xl ">paragraph</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime natus nulla est? In cupiditate
                    eveniet ipsum quo, perspiciatis illum modi error libero molestiae tenetur! Animi!</p>
            </div>
            <div class="w-11/12 ">
                <p class="mb-4 text-2xl ">paragraph</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime natus nulla est? In cupiditate
                    eveniet ipsum quo, perspiciatis illum modi error libero molestiae tenetur! Animi!</p>
            </div>
        </div>
    </footer>
    {{-- footer end --}}

    @yield('scripts')

</body>

</html>
