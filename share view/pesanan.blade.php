@extends('components.navbar-footer')

@section('content')
    <div class="w-10/12 gap-6 px-4 py-6 mx-auto my-8 bg-white border rounded shadow-xl overflow-x-auto">
        <p class="mb-4 text-2xl font-bold text-center">PESANAN</p>
        <table class="min-w-full overflow-x-auto divide-y ">
            <thead class="text-white bg-pastel-blue">
                <tr>
                    <th scope="col" class="p-4">
                        <div class="flex items-center">
                            <input id="checkbox-all" aria-describedby="checkbox-1" type="checkbox"
                                class="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600">
                            <label for="checkbox-all" class="sr-only">checkbox</label>
                        </div>
                    </th>
                    <th scope="col" colspan="2" class="p-4 text-xs font-medium text-left uppercase ">
                        Produk
                    </th>
                    <th scope="col" class="p-4 text-xs font-medium text-left uppercase ">
                        Jumlah
                    </th>
                    <th scope="col" class="p-4 text-xs font-medium text-left uppercase ">
                        Total
                    </th>
                    <th scope="col" class="p-4 text-xs font-medium text-left uppercase ">
                        Jenis Pesanan
                    </th>
                    <th scope="col" class="p-4 text-xs font-medium text-left uppercase ">
                        Waktu Pemesanan
                    </th>
                    <th scope="col" class="p-4 text-xs font-medium text-left uppercase w-fit">
                        Status Pemesanan
                    </th>
                    <th scope="col" class="p-4 text-xs font-medium text-left uppercase w-fit">
                        Action
                    </th>
                </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                @for ($i = 0; $i < 10; $i++)
                    <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                        <td class="w-4 p-4">
                            <div class="flex items-center">
                                <input id="checkbox" aria-describedby="checkbox-1" type="checkbox"
                                    class="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600">
                                <label for="checkbox" class="sr-only">checkbox</label>
                            </div>
                        </td>
                        <td>
                            <div class="w-20 aspect-[1.2/1] bg-slate-500"></div>
                        </td>
                        <td>
                            <p>Nama Produk</p>

                        </td class="flex p-4 text-sm font-normal text-gray-500 dark:text-gray-400">
                        <td class="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <p>10</p>
                        </td>
                        <td
                            class="max-w-sm p-4 overflow-hidden text-base font-normal text-gray-500 truncate xl:max-w-xs dark:text-gray-400">
                            <p>Rp XXX.XXX.XXX</p>

                        </td>
                        <td class="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">BCA
                        </td>
                        <td class="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white"></td>
                        <td class="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white"></td>

                        <td class="p-4 space-x-2 whitespace-nowrap w-fit">
                            <button type="button" id="updateProductButton"
                                class="inline-flex items-center p-3 text-sm font-medium text-center text-white rounded-lg bg-pastel-blue hover:bg-dark-pastel-blue focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                <i class="fa-solid fa-eye"></i>
                            </button>
                            <button type="button" id="deleteProductButton"
                                class="inline-flex items-center p-3 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900">
                                <i class="fa-solid fa-trash"></i>
                            </button>
                        </td>
                    </tr>
                @endfor

            </tbody>
        </table>


    </div>
@endsection
