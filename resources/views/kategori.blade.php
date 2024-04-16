@extends('components.navbar-footer')

@section('content')
    @extends('components.sidebar')
@section('sidebar-list')
    <p class="text-xl font-semibold">Kategori</p>
    @foreach ($allKategori as $perKategori)
        <li class="pl-4  hover:bg-gray-300"><a class="w-full"
                href="{{ $perKategori->kategori }}">{{ $perKategori->kategori }}</a>
        </li>
    @endforeach
@endsection

<div class="p-4 sm:ml-64">
    <div class="p-4 bg-white border rounded ">
        <p class="block mb-5 text-4xl text-center ">Kategori :
            {{ $judulKategori }}
        </p>
        <div class="grid grid-cols-2 gap-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 lg:gap-0">

            @for ($i = 0; $i < 12; $i++)
                {{-- card produk --}}
                <div class="px-1 pt-1 pb-3 bg-white border hover:border-blue-700">
                    <div class=" aspect-[1.2/1] bg-slate-400 w-full  ">
                        <img src="" alt="">
                    </div>
                    <div class="px-2">
                        <div class="mb-10">
                            <a href="{{ url('/produk/' . $i) }}"
                                class="text-lg duration-100 hover:text-sky-700 hover:underline">Contoh
                                Produk</a>
                            <p class="text-sm text-slate-500">Rp 999 999 999</p>
                            <p>Kategori</p>
                        </div>
                        <p class="text-sm">XX Terjual</p>
                    </div>
                </div>
                {{-- card produk --}}
            @endfor


        </div>
    </div>
</div>
@endsection
