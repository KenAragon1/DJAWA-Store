@extends('components.navbar-footer')

@section('content')
    {{-- banner start --}}
    <div class="bg-slate-300 h-80 mb-8">
    </div>

    {{-- banner end --}}

    {{-- kategori start --}}
    <div class="bg-sky-950 rounded-lg shadow-md px-4 py-5 w-11/12 flex mx-auto flex-col mb-8">
        <p class=" block text-white text-center text-4xl mb-5 " style="font-family:'Kaushan Script';">Category</p>
        <div class=" grid grid-cols-4 place-items-center gap-y-4">
            {{-- icon kategori start --}}
            <div class="flex justify-center items-center flex-col">
                <div
                    class="flex justify-center items-center rounded-[50%] bg-sky-900 shadow-xl aspect-square w-6/12  cursor-pointer mb-2 hover:rounded-xl transition ease-linear duration-700">
                    <svg class=" fill-white w-1/2 h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                        <path
                            d="M0 192H176V0H160C71.6 0 0 71.6 0 160v32zm0 32V352c0 88.4 71.6 160 160 160h64c88.4 0 160-71.6 160-160V224H192 0zm384-32V160C384 71.6 312.4 0 224 0H208V192H384z" />
                    </svg>
                </div>
                <p class="text-white text-xl">Mouse</p>
            </div>
            {{-- icon kategori end --}}
            {{-- dummy start --}}
            <div class="flex justify-center items-center flex-col">
                <div
                    class="flex justify-center items-center rounded-full bg-sky-900 shadow-xl aspect-square w-6/12  cursor-pointer mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="fill-white w-1/2 h-auto">
                        <path
                            d="M258.6 0c-1.7 0-3.4 .1-5.1 .5C168 17 115.6 102.3 130.5 189.3c2.9 17 8.4 32.9 15.9 47.4L32 224H29.4C13.2 224 0 237.2 0 253.4c0 1.7 .1 3.4 .5 5.1C17 344 102.3 396.4 189.3 381.5c17-2.9 32.9-8.4 47.4-15.9L224 480v2.6c0 16.2 13.2 29.4 29.4 29.4c1.7 0 3.4-.1 5.1-.5C344 495 396.4 409.7 381.5 322.7c-2.9-17-8.4-32.9-15.9-47.4L480 288h2.6c16.2 0 29.4-13.2 29.4-29.4c0-1.7-.1-3.4-.5-5.1C495 168 409.7 115.6 322.7 130.5c-17 2.9-32.9 8.4-47.4 15.9L288 32V29.4C288 13.2 274.8 0 258.6 0zM256 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                    </svg>
                </div>
                <p class="text-white text-xl">Fan</p>
            </div>
            <div class="flex justify-center items-center flex-col">
                <div
                    class="flex justify-center items-center rounded-full bg-sky-900 shadow-xl aspect-square w-6/12  cursor-pointer mb-2">
                    <svg class="fill-white w-1/2 h-auto" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                        <path
                            d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64H240l-10.7 32H160c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H346.7L336 416H512c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zM512 64V288H64V64H512z" />
                    </svg>
                </div>
                <p class="text-white text-xl">Monitor</p>
            </div>
            <div class="flex justify-center items-center flex-col">
                <div
                    class="flex justify-center items-center rounded-full bg-sky-900 shadow-xl aspect-square w-6/12  cursor-pointer mb-2">
                    <svg class="fill-white w-1/2 h-auto" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                        <path
                            d="M64 64C28.7 64 0 92.7 0 128V384c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H64zm16 64h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V240zm16 80h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V336c0-8.8 7.2-16 16-16zm80-176c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V144zm16 80h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zM160 336c0-8.8 7.2-16 16-16H400c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V336zM272 128h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16zM256 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V240zM368 128h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16zM352 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V240zM464 128h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H464c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16zM448 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H464c-8.8 0-16-7.2-16-16V240zm16 80h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H464c-8.8 0-16-7.2-16-16V336c0-8.8 7.2-16 16-16z" />
                    </svg>
                </div>
                <p class="text-white text-xl">Keyboard</p>
            </div>
            <div class="flex justify-center items-center flex-col">
                <div
                    class="flex justify-center items-center rounded-full bg-sky-900 shadow-xl aspect-square w-6/12  cursor-pointer mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="fill-white w-1/2 h-auto"
                        viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                        <path
                            d="M176 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64c-35.3 0-64 28.7-64 64H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64v56H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64v56H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64c0 35.3 28.7 64 64 64v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448h56v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448h56v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448c35.3 0 64-28.7 64-64h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448V280h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448V176h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448c0-35.3-28.7-64-64-64V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H280V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H176V24zM160 128H352c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32zm192 32H160V352H352V160z" />
                    </svg>
                </div>
                <p class="text-white text-xl">Proccessor</p>
            </div>
            <div class="flex justify-center items-center flex-col">
                <div
                    class="flex justify-center items-center rounded-full bg-sky-900 shadow-xl aspect-square w-6/12  cursor-pointer mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="fill-white w-1/2 h-auto"
                        viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                        <path
                            d="M64 64C28.7 64 0 92.7 0 128v7.4c0 6.8 4.4 12.6 10.1 16.3C23.3 160.3 32 175.1 32 192s-8.7 31.7-21.9 40.3C4.4 236 0 241.8 0 248.6V320H576V248.6c0-6.8-4.4-12.6-10.1-16.3C552.7 223.7 544 208.9 544 192s8.7-31.7 21.9-40.3c5.7-3.7 10.1-9.5 10.1-16.3V128c0-35.3-28.7-64-64-64H64zM576 352H0v64c0 17.7 14.3 32 32 32H80V416c0-8.8 7.2-16 16-16s16 7.2 16 16v32h96V416c0-8.8 7.2-16 16-16s16 7.2 16 16v32h96V416c0-8.8 7.2-16 16-16s16 7.2 16 16v32h96V416c0-8.8 7.2-16 16-16s16 7.2 16 16v32h48c17.7 0 32-14.3 32-32V352zM192 160v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V160c0-17.7 14.3-32 32-32s32 14.3 32 32zm128 0v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V160c0-17.7 14.3-32 32-32s32 14.3 32 32zm128 0v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V160c0-17.7 14.3-32 32-32s32 14.3 32 32z" />
                    </svg>
                </div>
                <p class="text-white text-xl">RAM</p>
            </div>
            <div class="flex justify-center items-center flex-col">
                <div
                    class="flex justify-center items-center rounded-full bg-sky-900 shadow-xl aspect-square w-6/12  cursor-pointer mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="fill-white w-1/2 h-auto"
                        viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                        <path
                            d="M64 80c-8.8 0-16 7.2-16 16V258c5.1-1.3 10.5-2 16-2H448c5.5 0 10.9 .7 16 2V96c0-8.8-7.2-16-16-16H64zM48 320v96c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V320c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zM0 320V96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V320v96c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320zm280 48a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm120-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
                    </svg>
                </div>
                <p class="text-white text-xl">Storage</p>
            </div>
            <div class="flex justify-center items-center flex-col">
                <div
                    class="flex justify-center items-center rounded-full bg-sky-900 shadow-xl aspect-square w-6/12  cursor-pointer mb-2">
                    <svg class="fill-white w-1/2 h-auto" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                        <path
                            d="M128 32C92.7 32 64 60.7 64 96V352h64V96H512V352h64V96c0-35.3-28.7-64-64-64H128zM19.2 384C8.6 384 0 392.6 0 403.2C0 445.6 34.4 480 76.8 480H563.2c42.4 0 76.8-34.4 76.8-76.8c0-10.6-8.6-19.2-19.2-19.2H19.2z" />
                    </svg>
                </div>
                <p class="text-white text-xl">Laptop</p>
            </div>
            {{-- dummy end --}}
        </div>
    </div>
    {{-- kategori end --}}

    {{-- produk start --}}
    <div class="bg-sky-950 rounded-lg shadow-md px-4 py-5 w-11/12 flex mx-auto flex-col mb-8">
        <p class=" block text-white text-center text-4xl mb-5 " style="font-family:'Kaushan Script';">Produk</p>
        <div class=" grid grid-cols-3 lg:grid-cols-4 place-items-center gap-y-4">

            @for ($i = 0; $i < 8; $i++)
                {{-- card produk --}}
                <div class=" bg-white cursor-pointer rounded shadow-sm-lg px-1 pt-1 pb-4 w-40 lg:w-56">
                    <div class=" aspect-square bg-slate-400 w-full  rounded">
                        <img src="" alt="">
                    </div>
                    <div class="px-2">
                        <p class="text-lg">Contoh Produk</p>
                        <p class="text-slate-500 text-sm">Rp 999 999 999</p>
                    </div>
                </div>
                {{-- card produk --}}
            @endfor


        </div>

    </div>
    {{-- produk end --}}
@endsection
