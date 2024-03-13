@extends('components.navbar-footer')

@section('content')
    {{-- banner start --}}
    <div class="bg-slate-300 h-80 mb-8">
    </div>

    {{-- banner end --}}

    {{-- kategori start --}}
    <div class="bg-white border shadow mb-4 pt-4 w-11/12 mx-auto">
        <div class="mb-4">
            <p class="text-center">Kategori Produk</p>
        </div>
        <div class="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
            @for ($i = 0; $i < 16; $i++)
                <div class="border hover:border-pastel-blue p-4 w-auto cursor-pointer">
                    <div class="w-10/12 aspect-square bg-primary rounded-full mx-auto">
                        <img src="" alt="">
                    </div>
                    <p class=" text-center">Kategori</p>
                </div>
            @endfor


        </div>
    </div>
    {{-- kategori end --}}

    {{-- produk start --}}
    <div class="bg-white  shadow pt-5 w-11/12 flex mx-auto flex-col mb-8 border">
        <p class=" block  text-center text-4xl mb-5 " style="font-family:'Kaushan Script';">Top Produk</p>
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
                                Produk</a>
                            <p class="text-slate-500 text-sm">Rp 999 999 999</p>
                            <p>Kategori</p>
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
