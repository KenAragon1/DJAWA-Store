@extends('components.navbar-footer')

@section('content')
    {{-- banner start --}}
    <div class="mb-8 bg-slate-300 h-80">
    </div>

    {{-- banner end --}}

    {{-- produk start --}}
    <div class="flex flex-col w-11/12 pt-5 mx-auto mb-8 bg-white border shadow">
        <p class="block mb-5 text-4xl text-center " style="font-family:'Kaushan Script';">Laptop</p>
        <div class="grid grid-cols-2 gap-2  sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 lg:gap-0">

            @for ($i = 0; $i < 12; $i++)
                {{-- card produk --}}
                <div class="px-1 pt-1 pb-3 bg-white border  hover:border-blue-700">
                    <div class=" aspect-[1.2/1] bg-slate-400 w-full  ">
                        <img src="" alt="">
                    </div>
                    <div class="px-2">
                        <div class="mb-10">
                            <a href="{{ url('/produk/' . $i) }}"
                                class="text-lg duration-100 hover:text-sky-700 hover:underline">Contoh
                                Laptop</a>
                            <p class="text-sm text-slate-500">Rp 999 999 999</p>
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
