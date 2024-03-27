@extends('components.navbar-footer')

@section('content')
    <div class="flex flex-col px-4 py-10 mx-auto my-8 overflow-hidden bg-white border shadow-xl w-96">
        <p class="mb-2 text-4xl text-center " style="font-family:'Kaushan Script';">Register</p>
        <hr class="mb-8">
        <form class="flex flex-col w-11/12 mx-auto mb-4" method="POST" action="{{ route('register') }}">
            @csrf
            <input class="px-4 py-3 mb-8 rounded outline outline-1 outline-slate-500" type="text" name="username"
                placeholder="Username">
            <input class="px-4 py-3 mb-8 rounded outline outline-1 outline-slate-500" type="email" name="email"
                placeholder="Email">
            <div class="relative w-full mb-8">
                <input class="w-full px-4 py-3 rounded outline outline-1 outline-slate-500" type="password" name="password"
                    id="password-input" placeholder="Password">
                <button class="absolute h-full px-2 right-2" type="button" id="show-password"><i
                        class="fa-solid fa-eye-slash"></i></button>
            </div>
            <button class="py-4 text-white transition-all rounded-lg bg-pastel-blue hover:bg-dark-pastel-blue"
                type="submit">Register</button>

        </form>
        <p class="text-center ">Sudah Punya Akun? <a href="{{ route('halLogin') }}"
                class="text-blue-800 underline">Login</a>
        </p>


    </div>
@endsection

@section('scripts')
    <script>
        const showPasswordBtn = document.querySelector('#show-password');
        const passwordInput = document.querySelector('#password-input');
        let isPasswordHidden = true;
        showPasswordBtn.addEventListener('click', () => {
            isPasswordHidden = !isPasswordHidden;
            toggleShowPassword();
        });

        function toggleShowPassword() {
            if (isPasswordHidden) {
                passwordInput.type = 'password';
                showPasswordBtn.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';

                return
            }
            passwordInput.type = 'text';
            showPasswordBtn.innerHTML = '<i class="fa-solid fa-eye"></i>';

        }
    </script>
@endsection
