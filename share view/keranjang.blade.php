@extends('components.navbar-footer')

@section('content')
    <div class="w-10/12 gap-6 px-4 py-6 mx-auto my-8 bg-white border rounded shadow-xl">
        <p class="mb-4 text-2xl font-bold text-center">Keranjang</p>
        <div class="w-full ">
            <div class="flex px-6 py-4 text-center text-white rounded bg-primary ">
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
                <div class="flex items-center w-full px-6 py-4 text-center">
                    <div class="mr-4"><input type="checkbox" name="" id=""></div>
                    <div class="flex w-4/12 gap-2">

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
                    <div class="flex justify-center w-2/12 gap-0">
                        <button
                            class="w-6 duration-100 border-2 border-r-0 border-sky-950 aspect-square hover:bg-primary hover:text-white"
                            onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                            -
                        </button>

                        <input id="form1" min="0" name="quantity" value="1" type="number"
                            class="text-center border-2 w-9 border-sky-950 bg-slate-200 focus:outline-none" />

                        <button
                            class="w-6 duration-100 border-2 border-l-0 border-sky-950 aspect-square hover:bg-primary hover:text-white"
                            onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                            +
                        </button>
                    </div>
                    <div class="w-2/12">
                        <p>Rp 26.000.000</p>
                    </div>
                    <div class="w-2/12">
                        <button class="w-8 p-1 text-white bg-red-600 rounded-md aspect-square"><i
                                class='bx bxs-trash'></i></button>
                    </div>
                </div>
                <hr class="my-2">
            @endfor

            {{-- produk end --}}

        </div>

    </div>
    <div class="fixed bottom-0 flex items-center justify-between w-full h-20 bg-white border shadow">
        <div class="p-4">
            <p class="text-gray-500">Total Harga</p>
            <p class="text-2xl font-bold">Rp. XXX.XXX.XXX</p>
        </div>
        <div class="table w-40 h-full">
            <a href="{{ route('checkout-page') }} "
                class="table-cell w-full h-20 text-xl font-bold text-center text-white align-middle bg-pastel-blue hover:bg-dark-pastel-blue">Checkout</a>
        </div>
    </div>
@endsection
