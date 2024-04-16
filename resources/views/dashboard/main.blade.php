@extends('layouts.dashboard')
@section('body')
    @include('dashboard-components.sidebar')
    <div class="p-4 sm:ml-64">
        <div class="p-4 bg-white border rounded-lg dark:border-gray-700">
            <p>Selamat Datang, {{ Auth::user()->name }}</p>
            <div class="px-4 py-2 border rounded">
                <p class="text-2xl font-bold">Online User</p>
                <p>XXX user</p>
            </div>
        </div>
    </div>
@endsection
