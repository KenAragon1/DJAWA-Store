@extends('layouts.dashboard')

@section('body')
    <div class="w-[32rem] px-6 py-4 mx-auto my-6 bg-white rounded shadow-xl">
        <div class="w-full">
            {{-- popup header --}}
            <div>
                <p class="text-2xl font-bold text-center">Form Edit Produk</p>
            </div>
            <hr class="my-2">
            {{-- popup content --}}
            <div class="flex justify-center w-full mx-auto">
                <form id="form-edit-produk" enctype="multipart/form-data" method="POST" class="w-full">
                    @csrf
                    <div class="flex flex-col gap-1 mb-2">
                        <label for="nama-produk">Nama Produk</label>
                        <input value="" type="text" name="nama-produk" id="nama-produk"
                            class="w-full px-2 py-1 border rounded border-slate-400">
                    </div>
                    <div class="flex flex-col gap-1 mb-2">
                        <label for="kategori-produk">kategori Produk</label>
                        <select name="kategori-produk" id="kategori-produk" readonly
                            class="px-2 py-2 bg-white border rounded border-slate-400">
                        </select>
                    </div>
                    <div class="flex flex-col gap-1 mb-2">
                        <label for="harga-produk">Harga Produk</label>
                        <input value="" type="number" name="harga-produk" id="harga-produk"
                            class="w-full px-2 py-1 border rounded border-slate-400">
                    </div>
                    <div class="flex flex-col gap-1 mb-4">
                        <label for="">Spesifikasi</label>
                        <div id="spesifikasi-container">

                        </div>
                    </div>
                    <div class="flex flex-col gap-1 mb-2">
                        <label for="deskripsi-produk">Deskripsi Produk</label>
                        <textarea name="deskripsi-produk" id="deskripsi-produk" cols="20" rows="5"
                            class="w-full px-2 py-1 border rounded border-slate-400"></textarea>
                    </div>
                    <div class="flex flex-col gap-1 mb-4">
                        <label for="">Foto Produk</label>
                        <div class="w-1/3 aspect-[1.2/1] bg-gray-500 flex items-center">
                            <img src="" alt="" id="foto-preview" class="w-full h-auto">
                        </div>
                        <input type="file" name="foto_produk" id="foto-produk" class="w-full" value="">
                    </div>

                    <button type="button" id="submit-form"
                        class="px-4 py-2 text-white bg-green-600 rounded hover:bg-green-800"><i class='bx bxs-edit'></i>
                        Edit Produk</button>
                </form>
            </div>
            <hr class="my-2">
            {{-- popup footer --}}
            <div class="mb-4">


            </div>
        </div>
    </div>
@endsection

@section('scripts')
    <script>
        console.log('{{ $id_produk }}')
        $(document).ready(function() {
            $.ajax({
                type: "get",
                url: "{{ url('api/produk/' . $id_produk) }}",
                success: function(response) {
                    const dataSpesifikasi = JSON.parse(response[0].spesifikasi)
                    $('#foto-preview').attr('src',
                        `/storage/foto_produk/${response[0].foto_produk}`);
                    $('#nama-produk').val(response[0].nama_produk)
                    $('#harga-produk').val(response[0].harga_produk)
                    $('#deskripsi-produk').val(response[0].deskripsi_produk)

                    $('#kategori-produk').html(`
                    <option value="${response[0].kategori.id_kategori}" selected>${response[0].kategori.kategori}</option>
                    `)

                    for (let spesifikasi in dataSpesifikasi) {
                        $('#spesifikasi-container').html(
                            $('#spesifikasi-container').html() +
                            `<div class="flex">
                                <div
                                    class="inline-flex items-center w-20 px-3 text-sm text-gray-900 bg-gray-200 border border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                    ${spesifikasi}
                                </div>
                                <input type="text"
                                    class=" bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="" name="${spesifikasi}" id="spesifikasi-input" value="${dataSpesifikasi[spesifikasi]}">
                            </div>`
                        )
                    }

                }
            });

            $("button#submit-form").click(function(e) {
                e.preventDefault();
                dataProduk = new FormData();
                dataProduk.append("nama_produk", $('input#nama-produk').val())
                dataProduk.append("id_kategori", $('select#kategori-produk').val())
                dataProduk.append("harga_produk", $('input#harga-produk').val())
                dataProduk.append("spesifikasi", spesifikasiJSON())
                dataProduk.append("deskripsi_produk", $('textarea#deskripsi-produk').val())
                dataProduk.append("foto_produk", $('input#foto-produk')[0].files[0])

                $.ajax({
                    type: "POST",
                    url: "{{ url('/api/produk/' . $id_produk) }}",
                    data: dataProduk,
                    contentType: false,
                    processData: false,
                    success: function(response) {
                        alert('berhasil')
                        window.location.href = "{{ url('produk/' . $id_produk) }}"
                    },
                    error: function(xhr, status, error) {
                        console.error(xhr.responseText);
                    },
                    complete: function() {
                        console.log(dataProduk)
                    }
                });

            });

            function spesifikasiJSON() {
                const dataSpesifikasi = {};
                $('input#spesifikasi-input').each(function() {
                    const spesifikasiKey = $(this).attr('name');
                    const spesifikasiValue = $(this).val();

                    dataSpesifikasi[spesifikasiKey] = spesifikasiValue
                });

                return JSON.stringify(dataSpesifikasi)
            }
        });
    </script>
@endsection
