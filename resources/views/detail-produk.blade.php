@extends('components.navbar-footer')
@section('content')
    <div class="flex mx-auto w-10/12 bg-white shadow-xl rounded mt-8 mb-4 px-4 py-4 border">
        <div class="w-1/3 p-3">
            <div class="w-full aspect-[1.2/1] bg-slate-600">
                <img src="" alt="">
            </div>
            <div class="">

            </div>
        </div>
        <div class="w-2/3 p-3">
            <p class=" text-4xl mb-2">Nama Produk</p>
            <hr class="mb-2">
            <p class="text-2xl text-sky-900 font-bold">Rp XXX.XXX.XXX</p>
            <div class="font-medium text-xl mt-4">
                <table class="w-full border-separate border-spacing-y-4">

                    <tr class="py-2">
                        <td class="w-3/12 font-semibold">RAM</td>
                        <td>
                            <div class="flex items-center gap-4">
                                <div class="">
                                    <input type="radio" name="ram" id="8">
                                    <label for="8">8 GB</label>
                                </div>
                                <div class="">
                                    <input type="radio" name="ram" id="16">
                                    <label for="16">16 GB</label>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr class="py-2">
                        <td class="w-3/12 font-semibold">SSD</td>
                        <td>
                            <div class="flex items-center gap-4">
                                <div class="">
                                    <input type="radio" name="ssd" id="256">
                                    <label for="256">256 GB</label>
                                </div>
                                <div class="">
                                    <input type="radio" name="ssd" id="512">
                                    <label for="512">512 GB</label>
                                </div>
                            </div>
                        </td>
                        </td>
                    </tr>

                    <tr class="py-2">
                        <td class="w-3/12 font-semibold">Quantity</td>
                        <td>
                            <div class="flex gap-0">
                                <button
                                    class="  outline outline-1 outline-pastel-blue w-7 aspect-square hover:bg-pastel-blue hover:text-white duration-100"
                                    onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                                    -
                                </button>

                                <input id="form1" min="0" name="quantity" value="1" type="number"
                                    class="w-16 outline outline-1 outline-pastel-blue text-center bg-none" />

                                <button
                                    class="  outline outline-1 outline-pastel-blue w-7 aspect-square hover:bg-pastel-blue hover:text-white duration-100"
                                    onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                                    +
                                </button>

                            </div>
                        </td>
                    </tr>
                </table>
                <div class="">
                    <button
                        class="text-sm bg-primary hover:bg-dark-pastel-blue duration-100 text-white p-4 rounded ">Tambahkan
                        ke
                        Keranjang</button>
                    <button
                        class="text-sm bg-primary hover:bg-dark-pastel-blue duration-100 text-white p-4 rounded ">Checkout
                        Sekarang</button>
                </div>
            </div>
        </div>
    </div>
    <div class="flex  mx-auto w-10/12 bg-white shadow-xl rounded mb-8 px-4 py-4 border">
        <div class="w-2/5">
            <div class="w-full  px-4">
                <p class="text-2xl italic mb-4 text-slate-500">Spesifikasi</p>

                <table class="w-full border-separate border-spacing-y-4">
                    <tr class="py-2">
                        <td class="w-4/12 font-semibold">Category</td>
                        <td>Laptop</td>
                    </tr>
                    <tr class="py-2">
                        <td class="w-4/12 font-semibold">Processor</td>
                        <td>AMD Ryzen 7</td>
                    </tr>
                    <tr class="py-2">
                        <td class="w-4/12 font-semibold">RAM</td>
                        <td>8 GB Up To 16 GB</td>
                    </tr>
                    <tr class="py-2">
                        <td class="w-4/12 font-semibold">Storage</td>
                        <td>256 GB Up To 1 TB</td>
                    </tr>
                    <tr class="py-2">
                        <td class="w-4/12 font-semibold">Screen</td>
                        <td>15 inch Resolution Full HD 1920 x 1080 </td>
                    </tr>
                </table>
            </div>

        </div>
        <div class="w-3/5 pl-4">
            <p class="text-2xl italic mb-4 text-slate-500">Deskripsi</p>
            <div class="">
                <p class=" whitespace-pre-line"> Lorem ipsum dolor sit amet.

                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores iusto error maiores deleniti laborum
                    impedit rerum qui placeat ullam harum nam, officiis, neque quos aspernatur, ipsa maxime natus odit fuga?
                    lorem
                </p>
            </div>
        </div>

    </div>
@endsection
