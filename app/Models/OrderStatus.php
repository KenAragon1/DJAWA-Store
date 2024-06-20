<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderStatus extends Model
{
    use HasFactory;
    protected $table = 'order_status';
    protected $guarded = [];
    protected $primaryKey = 'id_status';

    public $timestamps = false;

    public function order()
    {
        return $this->hasOne(Order::class, 'id_status');
    }
}
