<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $table = 'category';

    protected $guarded = [];

    protected $primaryKey = 'id_category';


    public $timestamps = false;

    protected $casts = [
        'spesification' => 'array'
    ];

    public function product()
    {
        return $this->belongsTo(Product::class, 'id_category');
    }
}
