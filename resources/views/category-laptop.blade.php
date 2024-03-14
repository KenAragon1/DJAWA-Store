@extends('components.navbar-footer')

@section('content')
    {{-- banner start --}}
    <div class="bg-slate-300 h-80 mb-8">
    </div>

    {{-- banner end --}}

    {{-- produk start --}}
    <div class="bg-white  shadow pt-5 w-11/12 flex mx-auto flex-col mb-8 border">
        <p class=" block  text-center text-4xl mb-5 " style="font-family:'Kaushan Script';">Laptop</p>
        <div class=" grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 gap-2 lg:gap-0 ">

            @for ($i = 0; $i < 12; $i++)
                {{-- card produk --}}
                <div class=" bg-white  px-1 pb-3 pt-1 border hover:border-blue-700">
                    <div class=" aspect-[1.2/1] bg-slate-400 w-full  ">
                        <img src="" alt="">
                    </div>
                    <div class="px-2">
                        <div class="mb-10">
                            <a href="{{ url('/produk/' . $i) }}"
                                class="text-lg hover:text-sky-700 hover:underline duration-100">Contoh
                                Laptop</a>
                            <p class="text-slate-500 text-sm">Rp 999 999 999</p>
                        </div>
                        <p class="text-sm">XX Terjual</p>
                    </div>
                </div>
                {{-- card produk --}}
            @endfor


        </div>

    </div>


    {{-- produk end --}}
@endsection