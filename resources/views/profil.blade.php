@extends('components.navbar-footer')

@section('content')
    <div class="bg-white w-8/12 flex mx-auto my-8 px-4 py-6 rounded shadow-xl gap-6">
        <div class="w-1/3 ">
            <div class="w-full bg-slate-300 aspect-square mb-4">
                <img class="w-full h-auto" src="" alt="">
            </div>
            <div class="">
                <button
                    class="text-slate-100 mb-4 bg-pastel-blue rounded w-full px-4 py-2 hover:bg-dark-pastel-blue duration-100">Edit
                    Profil</button>
                <button
                    class="text-slate-100 mb-4 bg-pastel-blue rounded w-full px-4 py-2 hover:bg-dark-pastel-blue duration-100">Ganti
                    Password</button>
            </div>
        </div>

        <div class="w-2/3">
            <div class="w-full mb-4">
                <label class="mb-2" for="">Username</label>
                <br class="mb-1">
                <input type="text" name="" id="" value="Angga" readonly
                    class="text-slate-600 rounded px-4 py-2 read-only:bg-slate-200 w-full">
            </div>
            <div class="w-full mb-4">
                <label class="mb-2" for="">Email</label>
                <br class="my-1">
                <input type="email" name="" id="" value="angga@gmail.com" readonly
                    class="text-slate-600 rounded px-4 py-2 read-only:bg-slate-200 w-full">
            </div>
            <div class="w-full mb-4">
                <label class="mb-2" for="">Nama Lengkap</label>
                <br class="my-1">
                <input type="text" name="" id="" value="Dewangga Fadillah Yusuf" readonly
                    class="text-slate-600 rounded px-4 py-2 read-only:bg-slate-200 w-full">
            </div>
            <div class="w-full mb-4">
                <label class="mb-2" for="">No. Telepon</label>
                <br class="my-1">
                <input type="text" name="" id="" value="+62 896-8303-8109" readonly
                    class="text-slate-600 rounded px-4 py-2 read-only:bg-slate-200 w-full">
            </div>
            <div class="w-full mb-4">
                <label class="mb-2" for="">Alamat</label>
                <br class="my-1">
                <textarea name="" id="" readonly rows="10"
                    class="text-slate-600 rounded px-4 py-2 read-only:bg-slate-200 w-full whitespace-pre-line">
                    Perumahan Mutiara Biru Blok C No.26, Kec. Batu Aji, Kel. Buliang, Kota Batam
                </textarea>
            </div>
        </div>
    </div>
@endsection
