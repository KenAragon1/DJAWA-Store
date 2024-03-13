@extends('components.navbar-footer')

@section('content')
    <div class="w-3/5 mx-auto bg-white rounded px-6 py-4  shadow-xl mb-6">
        <div class="w-full">
            {{-- popup header --}}
            <div>
                <p class="text-2xl font-bold text-center">Form Edit Produk</p>
            </div>
            <hr class="my-2">
            {{-- popup content --}}
            <div class="w-full flex justify-center mx-auto">
                <form id="form-edit-produk" action=""
                    onsubmit="return confirm('Apakah Anda Yakin Ingin Mengubah Produk Ini?')" class="w-full">
                    <div class="flex flex-col gap-1 mb-2">
                        <label for="nama-produk">Nama Produk</label>
                        <input type="text" name="nama-produk" id="nama-produk"
                            class="border border-slate-400 px-2 py-1 rounded w-full">
                    </div>
                    <div class="flex flex-col gap-1 mb-2">
                        <label for="kategori-produk">kategori Produk</label>

                        <select name="kategori-produk" id="kategori-produk" disabled
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
                <button type="submit" form="form-edit-produk"
                    class="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-800"><i class='bx bxs-edit'></i>
                    Edit Produk</button>
                <button data-popup="close-popup" type="submit"
                    class="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-800">
                    Cancel</button>
            </div>
        </div>
    </div>
@endsection
