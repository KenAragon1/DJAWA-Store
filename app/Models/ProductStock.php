<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductStock extends Model
{
    protected $table = 'product_stock';

    protected $primaryKey = 'id_stock';

    protected $guarded = [''];

    public   $timestamps = false;

    public function product()
    {
        return $this->belongsTo(Product::class, 'id_product');
    }

    use HasFactory;
}
