@extends('components.navbar-footer')

@section('content')
    <div class="flex w-8/12 gap-6 px-4 py-6 mx-auto my-8 bg-white rounded shadow-xl">
        <div class="w-1/3 ">
            <div class="w-full mb-4 bg-slate-300 aspect-square">
                <img class="w-full h-auto" src="" alt="">
            </div>
            <div class="">
                <a href="{{ route('edit-profil-page', ['id_user' => Auth::user()->id_user]) }}"
                    class="inline-block w-full px-4 py-2 mb-4 text-center duration-100 rounded text-slate-100 bg-pastel-blue hover:bg-dark-pastel-blue">Edit
                    Profil</a>
                <button
                    class="w-full px-4 py-2 mb-4 duration-100 rounded text-slate-100 bg-pastel-blue hover:bg-dark-pastel-blue">Ganti
                    Password</button>
            </div>
        </div>

        <div class="w-2/3">
            <div class="w-full mb-4">
                <label class="mb-2" for="">Username</label>
                <br class="mb-1">
                <input type="text" name="" id="" value="{{ Auth::user()->username }}" readonly
                    class="w-full px-4 py-2 rounded text-slate-600 read-only:bg-slate-200">
            </div>
            <div class="w-full mb-4">
                <label class="mb-2" for="">Email</label>
                <br class="my-1">
                <input type="email" name="" id="" value="{{ Auth::user()->email }}" readonly
                    class="w-full px-4 py-2 rounded text-slate-600 read-only:bg-slate-200">
            </div>
            <div class="w-full mb-4">
                <label class="mb-2" for="">Nama Lengkap</label>
                <br class="my-1">
                <input type="text" name="" id="" value="{{ $profil->nama_lengkap }}" readonly
                    class="w-full px-4 py-2 rounded text-slate-600 read-only:bg-slate-200">
            </div>
            <div class="w-full mb-4">
                <label class="mb-2" for="">No. Telepon</label>
                <br class="my-1">
                <input type="text" name="" id="" value="{{ $profil->nomor_telepon }}" readonly
                    class="w-full px-4 py-2 rounded text-slate-600 read-only:bg-slate-200">
            </div>
            <div class="w-full mb-4">
                <label class="mb-2" for="">Alamat</label>
                <br class="my-1">
                <textarea name="" id="" readonly rows="10"
                    class="w-full px-4 py-2 whitespace-pre-line rounded text-slate-600 read-only:bg-slate-200">
                    {{ $profil->alamat }}
                </textarea>
            </div>
        </div>
    </div>
@endsection
