$(document).ready(function () {
    $.ajax({
        url: "http://127.0.0.1:8000/kategori",
        type: "GET",
        success: function (response) {
            $("#loading-kategori").hide();
            response.forEach((kategori) => {
                $("#kategori-container").html(
                    $("#kategori-container").html() +
                        `<div class="relative w-auto p-4 border cursor-pointer hover:border-blue-700">
                        <div class="flex items-center w-10/12 mx-auto rounded-full aspect-square">
                            <img src="assets/kategori/${kategori.kategori}.jpeg" alt=""
                                class="w-full h-auto">
                        </div>
                        <p class="text-center ">${kategori.kategori}</p>
                        <a href="{{ route('kategori', ['kategori' => ${kategori.kategori})}}"
                            class="absolute top-0 left-0 w-full h-full"></a>
                    </div>`
                );
            });
        },
    });

    $.ajax({
        url: "api/produk",
        type: "get",
        success: function (response) {
            $("*#produk-loading").hide();
            const dataProduk = response.produk;
            console.log(dataProduk);
            dataProduk.forEach((produk) => {
                const { nama_produk, harga_produk, id_produk, foto_produk } =
                    produk;
                $("#produk-container").html(
                    $("#produk-container").html() +
                        `<div class="relative px-1 pt-1 pb-3 bg-white border hover:border-blue-700">
                    <div class=" aspect-[1.2/1] bg-slate-400 w-full  ">
                        <img src="storage/foto_produk/${foto_produk}" alt="" class="h-auto w-auto">
                    </div>
                    <div class="px-2">
                        <div class="mb-10">
                            <p class="overflow-hidden text-lg duration-100 whitespace-nowrap text-ellipsis hover:text-sky-700 hover:underline">${nama_produk}</p>
                            <p class="text-sm text-slate-500">Rp ${harga_produk}</p>
                            <p>Kategori</p>
                        </div>
                        <p class="text-sm">XX Terjual</p>
                    </div>
                    <a href="/produk/${id_produk}" class="absolute top-0 left-0 w-full h-full"></a>
                </div>`
                );
            });
        },
    });
});
