<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Product extends Model
{
    use HasFactory;
    protected $table = 'product';
    protected $guarded = ['deleted_at'];

    protected $primaryKey = 'id_product';

    protected $casts = [
        "spesification" => "json"
    ];

    public function cart()
    {
        return $this->hasOne(Product::class, 'id_product');
    }

    public function stock()
    {
        return $this->hasOne(ProductStock::class, 'id_product');
    }

    public function category()
    {
        return $this->belongsTo(Category::class, 'id_category');
    }
}
