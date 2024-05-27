<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Product extends Model
{
    use HasFactory, SoftDeletes;
    protected $table = 'product';
    protected $guarded = ['deleted_at'];

    protected $primaryKey = 'id';

    public function cart()
    {
        return $this->hasOne(Product::class, 'id_product');
    }
}
