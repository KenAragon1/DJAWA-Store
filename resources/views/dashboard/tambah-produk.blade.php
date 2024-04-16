@extends('layouts.dashboard')

@section('body')
    {{-- Loading Start --}}
    <div role="status" id="loading"
        class="fixed flex items-center justify-center w-full transform -translate-x-1/2 -translate-y-1/2 h-dvh top-1/2 left-1/2 ">
        <div class="absolute w-full h-full bg-slate-300 opacity-20"></div>
        <div class="p-4 bg-white border-2 border-gray-500">
            <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-slate-600"
                viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor" />
                <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill" />
            </svg>
        </div>
        <span class="sr-only">Loading...</span>
    </div>
    {{-- Loading End --}}

    <div class="px-4 pt-2 pb-4 mx-auto my-4 bg-white border shadow w-[30rem]">
        <p class="text-2xl font-bold text-center">Tambah Produk Baru</p>
        <form id="form-tambah-produk" class="w-full " method="POST" enctype="multipart/form-data">
            <div class="flex flex-col gap-1 mb-4">
                <label for="nama-produk">Nama Produk</label>
                <input type="text" name="nama_produk" id="nama-produk" autocomplete="off"
                    class="w-full px-2 py-1 border rounded border-slate-400">

            </div>

            <div class="flex flex-col gap-1 mb-4">
                <label for="kategori-produk">kategori Produk</label>
                <select name="id_kategori" id="kategori-produk" class="px-2 py-2 bg-white border rounded border-slate-400">
                    <option value="null">~Silahkan Pilih Kategori~</option>
                </select>
            </div>

            <div class="flex flex-col gap-1 mb-4">
                <label for="harga-produk">Harga Produk</label>
                <input type="number" name="harga_produk" id="harga-produk"
                    class="w-full px-2 py-1 border rounded border-slate-400">
            </div>

            <div class="flex flex-col gap-1 mb-4">
                <label for="">Spesifikasi</label>
                <div id="spesifikasi-container">
                    <input type="text" name="" disabled id="" class="w-full"
                        placeholder="Silahkan Pilih Kategori Terlebih Dahulu">
                </div>
            </div>

            <div class="flex flex-col gap-1 mb-4">
                <label for="deskripsi-produk">Deskripsi Produk</label>
                <textarea name="deskripsi_produk" id="deskripsi-produk" cols="20" rows="5"
                    class="w-full px-2 py-1 border rounded border-slate-400"></textarea>
            </div>

            <div class="flex flex-col gap-1 mb-4">
                <label for="">Foto Produk</label>
                <div class="w-1/3 aspect-[1.2/1] bg-gray-500 flex items-center">
                    <img src="" alt="" id="foto-preview" class="w-full h-auto">
                </div>
                <input type="file" name="foto_produk" id="foto-produk" class="w-full">

            </div>
            <button type="button" data-modal-target="popup-modal" data-modal-toggle="popup-modal"
                class="px-3 py-2 text-sm text-white bg-green-600 hover:bg-green-900">Submit</button>
        </form>

    </div>

    <div id="popup-modal" tabindex="-1"
        class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative w-full max-w-md max-h-full p-4">
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <button type="button"
                    class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-hide="popup-modal">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
                <div class="p-4 text-center md:p-5">
                    <svg class="w-12 h-12 mx-auto mb-4 text-gray-400 dark:text-gray-200" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Apakah Anda yakin ingin menambah
                        produk baru?</h3>
                    <button data-modal-hide="popup-modal" type="button" id="submit-form"
                        class="text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center">
                        Ya, saya yakin
                    </button>
                    <button data-modal-hide="popup-modal" type="button"
                        class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">No,
                        Batal</button>
                </div>
            </div>
        </div>
    </div>
@endsection

@section('scripts')
    <script>
        $(document).ready(function() {

            $("button#submit-form").click(function(e) {
                e.preventDefault();
                $('#loading').show();
                dataProduk = new FormData();
                dataProduk.append("nama_produk", $('input#nama-produk').val())
                dataProduk.append("id_kategori", $('select#kategori-produk').val())
                dataProduk.append("harga_produk", $('input#harga-produk').val())
                dataProduk.append("spesifikasi", spesifikasiJSON())
                dataProduk.append("deskripsi_produk", $('textarea#deskripsi-produk').val())
                dataProduk.append("foto_produk", $('input#foto-produk')[0].files[0])

                $.ajax({
                    type: "POST",
                    url: "http://127.0.0.1:8000/api/produk",
                    data: dataProduk,
                    contentType: false,
                    processData: false,
                    success: function(response) {
                        alert('berhasil')
                        window.location.href = "{{ route('dashboard-produk') }}"
                    },
                    error: function(xhr, status, error) {
                        const errorMessage = JSON.parse(xhr.responseText);
                        for (let errorKey in errorMessage.error) {
                            $(`[name="${errorKey}"`).removeClass('border-slate-400');
                            $(`[name="${errorKey}"]`).addClass('border-red-600');
                        }
                        $('#loading').hide()

                    }
                });

            });

            $("select#kategori-produk").change(function() {
                $('#loading').show()

                // Fetching Spesifikasi Data
                $.ajax({
                    url: `http://127.0.0.1:8000/api/spesifikasi/${$(this).val()}`,
                    type: "GET",
                    success: function(dataSpesifikasi) {
                        $('#spesifikasi-container').html('')

                        dataSpesifikasi.forEach(spesifikasi => {
                            $('#spesifikasi-container').html(
                                $('#spesifikasi-container').html() +
                                `<div class="flex">
                    <div class="inline-flex items-center w-20 px-3 text-sm text-gray-900 bg-gray-200 border border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                        ${spesifikasi.spesifikasi}
                    </div>
                    <input type="text" 
                        class=" bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="" name="${spesifikasi.spesifikasi}" id="spesifikasi-input">
                </div>`
                            )
                        })
                    },
                    complete: function() {
                        $('#loading').hide()
                    }
                });

            })

            $.ajax({
                url: "http://127.0.0.1:8000/kategori",
                type: "GET",
                success: function(response) {
                    response.forEach((kategori) => {
                        $('#loading').hide()
                        $("select#kategori-produk").html(
                            $("select#kategori-produk").html() +
                            `<option value="${kategori.id_kategori}">${kategori.kategori}</option>`
                        );
                    });
                },
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

        $('#foto-produk').change(function() {
            // Read the selected file
            var file = this.files[0];
            // Check if a file is selected
            if (file) {
                // Create a FileReader object
                var reader = new FileReader();
                // Set the onload event handler
                reader.onload = function(e) {
                    // Set the src attribute of the image element to the data URL of the selected file
                    $('#foto-preview').attr('src', e.target.result);
                }
                // Read the selected file as a Data URL
                reader.readAsDataURL(file);
            }
        });
    </script>
@endsection
