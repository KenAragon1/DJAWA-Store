@extends('components.navbar-footer')

@section('content')
    @include('components.carousel')

    {{-- kategori start --}}
    <div class="w-11/12 pt-4 mx-auto mb-4 bg-white border shadow">
        <div class="mb-4">
            <p class="block mb-5 text-xl ml-4">Kategori</p>
        </div>
        <div class="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
            @foreach ($kategori as $kategori)
                <div class="relative w-auto p-4 border cursor-pointer hover:border-pastel-blue">
                    <div class="flex items-center w-10/12 mx-auto rounded-full aspect-square">
                        <img src="{{ asset('assets/kategori/' . $kategori->kategori . '.jpeg') }}" alt=""
                            class="w-full h-auto">
                    </div>
                    <p class="text-center ">{{ $kategori->kategori }}</p>
                    <a href="{{ route('kategori', ['kategori' => $kategori->kategori]) }}"
                        class="absolute top-0 left-0 w-full h-full"></a>
                </div>
            @endforeach



        </div>
    </div>
    {{-- kategori end --}}

    {{-- produk start --}}
    <div class="flex flex-col w-11/12 pt-5 mx-auto mb-8 bg-white border shadow">
        <p class="block mb-5 text-4xl text-center ">Top Produk</p>
        <div class="grid grid-cols-2 gap-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 lg:gap-0">

            @for ($i = 0; $i < 12; $i++)
                {{-- card produk --}}
                <div class="relative px-1 pt-1 pb-3 bg-white border hover:border-blue-700">
                    <div class=" aspect-[1.2/1] bg-slate-400 w-full  ">
                        <img src="" alt="">
                    </div>
                    <div class="px-2">
                        <div class="mb-10">
                            <p class="text-lg duration-100 hover:text-sky-700 hover:underline">Contoh
                                Produk</p>
                            <p class="text-sm text-slate-500">Rp 999 999 999</p>
                            <p>Kategori</p>
                        </div>
                        <p class="text-sm">XX Terjual</p>
                    </div>
                    <a href="{{ url('/produk/' . $i) }}" class="absolute top-0 left-0 w-full h-full"></a>
                </div>
                {{-- card produk --}}
            @endfor


        </div>

    </div>


    {{-- produk end --}}
@endsection
