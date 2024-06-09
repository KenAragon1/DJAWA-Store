<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{

    use HasFactory;
    protected $table = 'cart';

    protected $guarded = [];

    protected $primaryKey = 'id_cart';

    public $timestamps = false;

    public function product()
    {
        return $this->belongsTo(Product::class, 'id_product');
    }
}
