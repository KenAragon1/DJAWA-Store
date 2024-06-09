<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $table = 'order';
    protected $guarded = [];
    protected $primaryKey = 'id_order';

    public $timestamps = false;

    public function payment()
    {
        return $this->belongsTo(Payment::class, 'id_payment');
    }

    public function order_item()
    {
        return $this->hasMany(OrderItems::class, 'id_order');
    }
}
