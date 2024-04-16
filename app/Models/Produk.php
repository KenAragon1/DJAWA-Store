<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Produk extends Model
{
    use HasFactory;

    protected $table = 'produk';
    protected $guarded = [''];

    protected $primaryKey = 'id_produk';

    public $timestamps = false;
    public function kategori()
    {
        return $this->belongsTo(Kategori::class, 'id_kategori');
    }

    public function keranjang() {
        return $this->hasOne(Keranjang::class, 'id_produk');
    }

}
