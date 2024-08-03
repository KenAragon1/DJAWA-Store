<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories =    [
            ["name" => "CPU"],
            ["name" => "GPU"],
            ["name" => "Monitor"],
            ["name" => "Mouse"],
            ["name" => "Motherboard"],
            ["name" => "Case"],
        ];
        //
        DB::table('category')->insert($categories);
    }
}
