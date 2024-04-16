<?php

namespace App\Livewire;

use App\Http\Controllers\kategoriController;
use App\Http\Controllers\spesifikasiController;
use Livewire\Component;

class TambahProduk extends Component
{
    public $kategori;

    public $id_kategori;
    public $spesifikasi;
   
    public function render(spesifikasiController $spesifikasiController)
    {
        $kategori = $this->getKategori();
        // render spesifikasi
        if ($this->id_kategori) {
            // $this->spesifikasi = ModelsSpesifikasi::where('id_kategori', $this->id_kategori)->get();
            $this->spesifikasi = $spesifikasiController->getSpesifikasi($this->id_kategori);

        }
        return view('livewire.tambah-produk', compact('kategori'));
    }
}
