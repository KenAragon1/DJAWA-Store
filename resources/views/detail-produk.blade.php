@extends('components.navbar-footer')
@section('content')
    <div class="flex w-11/12 px-4 py-4 mx-auto mt-8 mb-4 bg-white border rounded shadow-xl">
        <div class="w-1/3 p-3">
            <div class="w-full aspect-[1.2/1] bg-slate-600">
                <img alt="" id="foto-produk">
            </div>
            <div class="">

            </div>
        </div>
        <div class="w-2/3 p-3">
            <p class="mb-2 text-4xl " id="nama-produk">Nama Produk</p>
            <hr class="mb-2">
            <p class="text-2xl font-bold text-sky-900" id="harga-produk">Rp XXX.XXX.XXX</p>
            <div class="mt-4 text-xl font-medium">
                <table class="w-full border-separate border-spacing-y-4">

                    {{-- <tr class="py-2">
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
                    </tr> --}}

                    <tr class="py-2">
                        <td class="w-3/12 font-semibold">Quantity</td>
                        <td>
                            <div class="flex gap-0">
                                <button
                                    class="duration-100 outline outline-1 outline-pastel-blue w-7 aspect-square hover:bg-pastel-blue hover:text-white"
                                    onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                                    -
                                </button>

                                <input id="form1" min="0" name="jumlah_produk" value="1" type="number"
                                    class="w-16 text-center outline outline-1 outline-pastel-blue bg-none" />

                                <button
                                    class="duration-100 outline outline-1 outline-pastel-blue w-7 aspect-square hover:bg-pastel-blue hover:text-white"
                                    onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                                    +
                                </button>

                            </div>
                        </td>
                    </tr>
                </table>
                <div class="">
                    @auth
                        @if (Auth::user()->utype != 'admin')
                            <button id="add-to-cart-btn"
                                class="p-4 text-sm text-white duration-100 rounded bg-primary hover:bg-dark-pastel-blue ">Tambahkan
                                ke
                                Keranjang</button>
                            <button
                                class="p-4 text-sm text-white duration-100 rounded bg-primary hover:bg-dark-pastel-blue ">Checkout
                                Sekarang</button>
                        @endif

                        @if (Auth::user()->utype == 'admin')
                            <a href="{{ route('dashboard-edit-produk', ['id_produk' => $id_produk]) }}"
                                class="inline-block p-4 text-sm text-white duration-100 bg-green-500 rounded hover:bg-green-800 ">
                                Edit Produk</a>
                            <button class="p-4 text-sm text-white duration-100 bg-red-600 rounded hover:bg-red-800 ">Delete
                                Produk</button>
                        @endif
                    @endauth


                </div>
            </div>
        </div>
    </div>
    <div class="flex w-11/12 px-4 py-4 mx-auto mb-8 bg-white border rounded shadow-xl">
        <div class="w-2/5">
            <div class="w-full px-4">
                <p class="mb-4 text-2xl italic text-slate-500">Spesifikasi</p>

                <table class="w-full border-separate border-spacing-y-4" id="tabel-spesifikasi">
                    <tr class="py-2">
                        <td class="w-4/12 font-semibold">Category</td>
                        <td>Laptop</td>
                    </tr>
                </table>
            </div>

        </div>
        <div class="w-3/5 pl-4">
            <p class="mb-4 text-2xl italic text-slate-500">Deskripsi</p>
            <div class="">
                <p class="whitespace-pre-line " id="deskripsi-produk"> Lorem ipsum dolor sit amet.

                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores iusto error maiores deleniti laborum
                    impedit rerum qui placeat ullam harum nam, officiis, neque quos aspernatur, ipsa maxime natus odit fuga?
                    lorem
                </p>
            </div>
        </div>

    </div>

    <div class="flex flex-col w-11/12 pt-5 mx-auto mb-8 bg-white border shadow">
        <p class="block mb-5 text-4xl text-center ">Rekomendasi Produk Lain</p>
        <div class="grid grid-cols-2 gap-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 lg:gap-0">

            @for ($i = 0; $i < 6; $i++)
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
@endsection

@section('scripts')
    <script>
        $(document).ready(function() {

            $.ajaxSetup({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                }
            });

            const token = localStorage.getItem('accessToken')
            let idProduk;

            // Get Data Produk
            $.ajax({
                type: "get",
                url: "{{ route('api-get-produk', ['id_produk' => $id_produk]) }}",
                success: function(response) {
                    idProduk = response[0].id_produk
                    const dataSpesifikasi = JSON.parse(response[0].spesifikasi)
                    $('#foto-produk').attr('src',
                        `/storage/foto_produk/${response[0].foto_produk}`);
                    $('#nama-produk').text(response[0].nama_produk)
                    $('#harga-produk').text('Rp ' + response[0].harga_produk)
                    $('#deskripsi-produk').text(response[0].deskripsi_produk)

                    for (let spesifikasi in dataSpesifikasi) {
                        $('#tabel-spesifikasi').html(
                            $('#tabel-spesifikasi').html() +
                            `<tr class="py-2">
                                <td class="w-4/12 font-semibold">${spesifikasi}</td>
                                <td>${dataSpesifikasi[spesifikasi]}</td>
                            </tr>`
                        )
                    }

                }
            });

            // Add To Cart
            $('#add-to-cart-btn').click(function(e) {
                e.preventDefault();

                const data = new FormData();
                data.append('id_produk', idProduk);
                data.append('jumlah_produk', $('[name="jumlah_produk"]').val())

                $.ajax({
                    type: "POST",
                    url: "{{ route('addToCart') }}",
                    headers: {
                        'Authorization': 'Bearer ' + token
                    },
                    data: data,
                    processData: false,
                    contentType: false,
                    success: function(response) {
                        alert(response.message)
                    }
                });
            })
        });
    </script>
@endsection
