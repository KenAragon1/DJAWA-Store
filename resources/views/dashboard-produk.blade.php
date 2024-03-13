@extends('components.navbar-footer')

@section('content')
    <div class="bg-white w-10/12 flex mx-auto my-8 px-4 py-6 rounded shadow-lg gap-6 border border-1">

        <div class=" w-full">
            <div class="flex flex-col gap-2">
                <div class="w-1/2">
                    <input type="search" name="" id=""
                        class=" w-full py-2 px-4 rounded placeholder:italic placeholder:text-sm outline outline-1 outline-slate-200 focus:outline-sky-500"
                        placeholder="Barang apa yang kamu cari?">
                </div>
                <div class="">
                    <label for="sort">Sort By : </label>
                    <select name="" id="sort" class="bg-primary text-white px-4 py-[0.58rem] rounded ">
                        <option value="">Name (A-Z)</option>
                        <option value="">Paling Laku</option>
                    </select>
                    <button class="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-800" data-toggle="popup"
                        data-target="#popup-tambah-produk"><i class='bx bx-plus-circle'></i>
                        Tambah Produk Baru</button>


                </div>

            </div>
            <hr class="my-2">
            <div class="flex px-6 py-4 rounded text-center ">

                <div class="w-4/12">
                    <p class="inline-block">Produk</p>
                </div>
                <div class="w-2/12">
                    <p class="inline-block">Harga per Unit</p>
                </div>
                <div class="w-2/12">
                    <p class="inline-block">SisaStok</p>
                </div>
                <div class="w-2/12">
                    <p>Jumlah Terjual</p>
                </div>
                <div class="w-2/12">
                    <p class="inline-block">Action</p>
                </div>
            </div>
            <hr class="my-2">
            {{-- produk start --}}
            <div class="flex items-center px-6 py-4 w-full text-center">

                <div class="w-4/12 flex gap-2">

                    <div class="w-10 aspect-square bg-slate-500">
                        <img src="" class="w-full h-auto" alt="">
                    </div>

                    <div class="w-2/3 text-left">
                        <p class="inline-block">Nama Produk</p>
                    </div>
                </div>
                <div class="w-2/12">
                    <p>Rp XXX.XXX.XXX</p>
                </div>
                <div class="w-2/12">
                    <p>XX</p>
                </div>
                <div class="w-2/12">
                    <p>XX</p>
                </div>

                <div class="w-2/12">
                    <button class="bg-red-600 text-white p-1 rounded-md w-8 aspect-square hover:bg-red-800"><i
                            class='bx bxs-trash'></i></button>
                    <a href="{{ route('dashboard-edit-produk', ['id_produk' => 1]) }}"
                        class="bg-green-600 text-white px-[0.45rem] py-[0.32rem] rounded-md w-8 aspect-square hover:bg-green-800"><i
                            class='bx bxs-edit'></i></a>
                    <a href="{{ route('detail-produk', ['id_produk' => 1]) }}"
                        class="bg-pastel-blue text-white px-[0.45rem] py-[0.32rem] rounded-md w-8 aspect-square hover:bg-dark-pastel-blue"><i
                            class="fa-regular fa-eye"></i></a>
                </div>
            </div>
            <hr class="my-2">
            {{-- produk end --}}

        </div>
    </div>


    {{-- pop up form start --}}
    <div class="inset-x-0 inset-y-0 bg-slate-800 opacity-75 fixed z-50 hidden transition-opacity" id="background-grey">
    </div>
    <div id="popup-tambah-produk" data-popup="popup"
        class="w-3/5 mx-auto bg-white rounded px-6 py-4 fixed overflow-y-scroll inset-x-0 inset-y-5 z-[999] shadow-xl hidden">
        <div class="w-full">
            {{-- popup header --}}
            <div>
                <p class="text-2xl font-bold text-center">Tambah Produk Form</p>
            </div>
            <hr class="my-2">
            {{-- popup content --}}
            <div class="w-full flex justify-center mx-auto">
                <form id="form-tambah-produk" action=""
                    onsubmit="return confirm('Apakah Data Sudah Terisi Dengan Pas?')" class="w-full">
                    <div class="flex flex-col gap-1 mb-2">
                        <label for="nama-produk">Nama Produk</label>
                        <input type="text" name="nama-produk" id="nama-produk"
                            class="border border-slate-400 px-2 py-1 rounded w-full">
                    </div>
                    <div class="flex flex-col gap-1 mb-2">
                        <label for="kategori-produk">kategori Produk</label>

                        <select name="kategori-produk" id="kategori-produk"
                            class="bg-white border border-slate-400 px-2 py-2 rounded">
                            <option value="1">~~ Pilih Kategori ~~</option>
                            <option value="2">Komputer</option>
                            <option value="3">Laptop</option>
                            <option value="4">Aksesoris</option>
                        </select>
                    </div>
                    <div class="flex flex-col gap-1 mb-2">
                        <label for="harga-produk">Harga Produk</label>
                        <input type="number" name="harga-produk" id="harga-produk"
                            class="border border-slate-400 px-2 py-1 rounded w-full">
                    </div>
                    <div class="flex flex-col gap-1 mb-2">
                        <label for="spesifikasi-produk">Spesifikasi Produk</label>
                        <input type="text" name="spesifikasi-produk" id="spesifikasi-produk"
                            class="border border-slate-400 px-2 py-1 rounded w-full">
                    </div>
                    <div class="flex flex-col gap-1 mb-2">
                        <label for="deskripsi-produk">Deskripsi Produk</label>
                        <textarea name="deskripsi-produk" id="deskripsi-produk" cols="20" rows="5"
                            class="border border-slate-400 px-2 py-1 rounded w-full"></textarea>
                    </div>
                    <div class="flex flex-col gap-1 mb-2">
                        <label for="">Foto Produk</label>
                        <label for="foto-produk"
                            class="py-10 border border-slate-400 border-dashed text-center text-slate-700 cursor-pointer">
                            <input type="file" name="foto-produk" id="foto-produk" class="w-full hidden">
                            <i class='bx bx-image-add text-[60px]'></i>
                            <br>
                            Tambahkan Foto Produk
                        </label>
                    </div>

                </form>
            </div>
            <hr class="my-2">
            {{-- popup footer --}}
            <div class="mb-4">
                <button type="submit" form="form-tambah-produk"
                    class="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-800"><i class='bx bx-plus-circle'></i>
                    Tambah Produk</button>
                <button data-popup="close-popup" type="submit"
                    class="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-800">
                    Cancel</button>
            </div>
        </div>
    </div>
    {{-- pop up form end --}}
@endsection

@section('scripts')
    <script src="{{ asset('scripts/popup.js') }}"></script>
@endsection
