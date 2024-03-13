@extends('components.navbar-footer')

@section('content')
    <div class="bg-white w-10/12 my-8  mx-auto px-4 py-6 rounded shadow-xl gap-6 border">
        <p class="text-center">KERANJANG</p>
        <div class=" w-full">
            <div class="flex px-6 py-4 bg-primary text-white rounded text-center ">
                <div class="mr-4"><input type="checkbox" name="" id=""></div>
                <div class="w-4/12">
                    <p class="inline-block">Produk</p>
                </div>
                <div class="w-2/12">
                    <p class="inline-block">Harga per Unit</p>
                </div>
                <div class="w-2/12">
                    <p class="inline-block">Kuantitas</p>
                </div>
                <div class="w-2/12">
                    <p class="inline-block">Total Harga</p>
                </div>
                <div class="w-2/12">
                    <p class="inline-block">Action</p>
                </div>
            </div>
            {{-- produk start --}}
            @for ($i = 0; $i < 8; $i++)
                <div class="flex items-center px-6 py-4 w-full text-center">
                    <div class="mr-4"><input type="checkbox" name="" id=""></div>
                    <div class="w-4/12 flex gap-2">

                        <div class="w-1/3 aspect-square bg-slate-500">
                            <img src="" class="w-full h-auto" alt="">
                        </div>

                        <div class="w-2/3 text-left">
                            <p class="inline-block">Nama Produk</p>
                        </div>
                    </div>
                    <div class="w-2/12">
                        <p>Rp 13.000.000</p>
                    </div>
                    <div class="w-2/12 flex justify-center gap-0">
                        <button
                            class="border-2 border-r-0 border-sky-950 w-6 aspect-square hover:bg-primary hover:text-white duration-100"
                            onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                            -
                        </button>

                        <input id="form1" min="0" name="quantity" value="1" type="number"
                            class="w-9 border-2 border-sky-950 text-center bg-slate-200 focus:outline-none" />

                        <button
                            class="  border-2 border-l-0 border-sky-950 w-6 aspect-square hover:bg-primary hover:text-white duration-100"
                            onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                            +
                        </button>
                    </div>
                    <div class="w-2/12">
                        <p>Rp 26.000.000</p>
                    </div>
                    <div class="w-2/12">
                        <button class="bg-red-600 text-white p-1 rounded-md w-8 aspect-square"><i
                                class='bx bxs-trash'></i></button>
                    </div>
                </div>
                <hr class="my-2">
            @endfor

            {{-- produk end --}}

        </div>

    </div>
    <div class="w-full bg-white border shadow flex justify-between items-center fixed bottom-0">
        <div class="p-4">
            <p>Total Harga</p>
            <p>Rp. XXX.XXX.XXX</p>
        </div>
        <div class="h-auto">
            <button class="h-auto bg-pastel-blue">Checkout</button>
        </div>
    </div>
@endsection
