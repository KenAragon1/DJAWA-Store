@extends('layouts.dashboard')

@section('body')
    @include('dashboard-components.sidebar')
    <div class="p-4 sm:ml-64">
        <div class="p-4 bg-white border rounded-lg dark:border-gray-700">
            <div class="flex flex-col gap-2">
                <div class="w-1/2">
                    <input type="search" name="" id=""
                        class="w-full px-4 py-2 rounded placeholder:italic placeholder:text-sm outline outline-1 outline-slate-200 focus:outline-sky-500"
                        placeholder="Barang apa yang kamu cari?">
                </div>
                <div class="flex justify-between">
                    <div class=""><label for="sort">Sort By : </label>
                        <select name="" id="sort" class="  px-4 py-[0.45rem] rounded ">
                            <option value="">Name (A-Z)</option>
                            <option value="">Paling Laku</option>
                        </select>
                    </div>

                    <div class="">
                        <a href="{{ route('tambah-produk-page') }}"
                            class="inline-block px-4 py-2 text-white bg-green-600 rounded hover:bg-green-800"><i
                                class='bx bx-plus-circle'></i>
                            Tambah Produk Baru</a>
                    </div>
                </div>
            </div>
            <hr class="my-2">
            <div class="overflow-x-auto">
                <table class="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-600">
                    <thead class="bg-gray-100 dark:bg-gray-700">
                        <tr>
                            <th scope="col" class="p-4">
                                <div class="flex items-center">
                                    <input id="checkbox-all" aria-describedby="checkbox-1" type="checkbox"
                                        class="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600">
                                    <label for="checkbox-all" class="sr-only">checkbox</label>
                                </div>
                            </th>
                            <th scope="col" colspan="2"
                                class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                Produk
                            </th>
                            <th scope="col"
                                class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                Harga
                            </th>
                            <th scope="col"
                                class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                Sisa Stok
                            </th>
                            <th scope="col"
                                class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                ID
                            </th>
                            <th scope="col"
                                class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                Terjual
                            </th>
                            <th scope="col"
                                class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400 w-fit">
                                Actions
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
                                    <p>Rp XXX.XXX.XXX</p>
                                </td>
                                <td
                                    class="max-w-sm p-4 overflow-hidden text-base font-normal text-gray-500 truncate xl:max-w-xs dark:text-gray-400">
                                    <p>3</p>
                                </td>
                                <td class="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">#1234
                                </td>
                                <td class="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white"></td>
                                <td class="p-4 space-x-2 whitespace-nowrap w-fit">
                                    <button type="button" id="updateProductButton"
                                        class="inline-flex items-center p-3 text-sm font-medium text-center text-white bg-green-500 rounded-lg hover:bg-green-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                        <i class="fa-solid fa-pen-to-square"></i>
                                    </button>
                                    <button type="button" id="deleteProductButton"
                                        class="inline-flex items-center p-3 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900">
                                        <i class="fa-solid fa-trash"></i>
                                    </button>
                                    <a href="{{ route('detail-produk', ['id_produk' => $i]) }}" type="button"
                                        id="updateProductButton"
                                        class="inline-flex items-center p-3 text-sm font-medium text-center text-white rounded-lg bg-pastel-blue hover:bg-dark-pastel-blue focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                        <i class="fa-solid fa-eye"></i>
                                    </a>
                                </td>
                            </tr>
                        @endfor

                    </tbody>
                </table>
            </div>

        </div>
    </div>
@endsection

@section('scripts')
    <script></script>
@endsection
