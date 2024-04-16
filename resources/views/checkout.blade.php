@extends('components.navbar-footer')

@section('content')
    <div class="w-11/12 mx-auto my-8 ">
        <p class="mb-4 text-2xl font-bold text-center">Checkout</p>
        <div class="grid lg:grid-cols-[60%,auto] gap-x-4">
            <div class="mb-4 md:mb-0">
                {{-- Alamat --}}
                <div class="mb-4 overflow-hidden rounded-t-lg shadow">
                    <div class="h-2 bg-pastel-blue"></div>
                    <div class=" bg-white grid grid-cols-[75%,auto] px-4 pt-2 pb-6 gap-x-2">
                        <div class="">
                            <p class="mb-2 text-lg font-bold"><i class="fa-solid fa-location-dot"></i> Address for Delivery
                            </p>
                            <p class="mb-2">Username +62-xxx-xxxx-xxxx</p>
                            <p class="text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque itaque
                                incidunt
                                officia, quasi
                                accusantium modi exercitationem voluptate. Molestias, nostrum, cum, commodi quisquam
                                dignissimos
                                eligendi asperiores libero ipsam excepturi accusantium aperiam?</p>
                        </div>
                        <div class="">
                            <a href="" class="text-blue-500 underline">Change</a>
                        </div>
                    </div>
                </div>

                {{-- Product Summary --}}
                <div class="overflow-hidden bg-white rounded-t-lg shadow">
                    <div class="h-2 bg-pastel-blue"></div>
                    <div class="">
                        {{-- Produk Checkout --}}
                        <div class="flex justify-between gap-4 p-6 bg-white rounded-lg ">
                            <img src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                                alt="product-image" class="w-40 rounded-lg " />
                            <div class="flex justify-between w-full">
                                <div class="mt-5 sm:mt-0">
                                    <h2 class="text-lg font-bold text-gray-900">Produk Checkout</h2>
                                    <p class="mt-1 text-xs text-gray-700">x pcs</p>
                                </div>
                                <div class="flex justify-between mt-4 ">
                                    <div class="border-gray-100 ">
                                        <p class="text-lg text-end">Rp xxx.xxx.xxx</p>
                                        <p class="text-xs text-gray-500 text-end">Rp xxx.xxx.xxx / Pcs</p>

                                    </div>

                                </div>
                            </div>
                        </div>
                        <hr>
                    </div>
                    <div class="">
                        <div class="px-4 py-2">
                            <div class="mb-4">
                                <label class="text-lg font-semibold" for="delivery"><i class="fa-solid fa-truck"></i>
                                    Delivery</label>
                                <select name="" id="delivery" class="w-full rounded">
                                    <option value="">Ninja Express</option>
                                    <option value="">Shopee Delivery</option>
                                    <option value="">FedEx</option>
                                    <option value="">J&T Express</option>
                                    <option value="">Si Cepat</option>
                                    <option value="">Anteraja</option>
                                </select>
                            </div>
                            <div class="mb-4">
                                <label for="payment" class="text-lg font-semibold"><i
                                        class="fa-regular fa-credit-card"></i> Payment</label>
                                <select name="" id="payment" class="w-full rounded">
                                    <option value="">Transfer Bank</option>
                                    <option value="">Dana</option>
                                    <option value="">Gopay</option>
                                    <option value="">Indomaret</option>
                                    <option value="">Alfamart</option>
                                    <option value="">Debit</option>
                                </select>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {{-- Price Summary --}}
            <div class="overflow-hidden bg-white rounded-t-lg shadow h-fit">
                <div class="h-2 bg-pastel-blue"></div>

                <div class="px-4 pt-2 pb-6">
                    <p class="mb-2 text-lg font-bold"><i class="fa-regular fa-rectangle-list"></i> Summary</p>

                    <table class="w-full mb-8 border-separate border-spacing-y-1">
                        <tr>
                            <td class="w-3/5">Item Price</td>
                            <td class="text-end">Rp xxx.xxx.xxx</td>
                        </tr>
                        <tr>
                            <td>Delivery Fee</td>
                            <td class="text-end">Rp xxx.xxx.xxx</td>
                        </tr>
                        <tr>
                            <td class="py-2 text-lg font-semibold border-y-2">Total Price</td>
                            <td class="text-lg font-semibold text-end border-y-2">Rp xxx.xxx.xxx</td>
                        </tr>
                    </table>
                    <button
                        class="w-full px-4 py-2 duration-100 rounded text-slate-100 bg-pastel-blue hover:bg-dark-pastel-blue">Checkout</button>

                </div>

            </div>
        </div>

    </div>
@endsection
