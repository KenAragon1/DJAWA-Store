<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Keranjang extends Model
{

    use HasFactory;
    protected $table = 'keranjang';
    protected $guarded = [''];
    protected $primaryKey = 'id_keranjang';
    public function produk()
    {
        return $this->belongsTo(Produk::class, 'id_produk');
    }
}
