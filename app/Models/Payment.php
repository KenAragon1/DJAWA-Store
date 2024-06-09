<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    use HasFactory;

    protected $table = 'payment';
    protected $guarded = [];

    protected $primaryKey = 'id_payment';

    public $timestamps = false;
    protected $casts = [
        'products' => 'json',
        'customer_details' => 'json',
    ];

    public function order()
    {
        return $this->hasOne(Order::class, 'id_payment');
    }
}
