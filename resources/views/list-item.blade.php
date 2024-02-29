@extends('components.navbar-footer')
@section('content')
    <div class="bg-sky-950 rounded-lg shadow-md px-4 py-5 w-11/12 flex mx-auto flex-col mb-8">
        <p class=" block text-white text-center text-4xl mb-5 " style="font-family:'Kaushan Script';">List Produk</p>
        <div class=" grid grid-cols-3 lg:grid-cols-4 place-items-center gap-y-4">

            @foreach ($listItem as $item)
                {{-- card produk --}}
                <div class=" bg-white cursor-pointer rounded shadow-sm-lg px-1 pt-1 pb-4 w-40 lg:w-56">
                    <div class=" aspect-square bg-slate-400 w-full  rounded">
                        <img src="" alt="">
                    </div>
                    <div class="px-2">
                        <p class="text-lg">{{ $item['nama'] }}</p>
                        <p class="text-slate-500 text-sm">{{ $item['harga'] }}</p>
                    </div>
                </div>
                {{-- card produk --}}
            @endforeach



        </div>

    </div>
@endsection
