<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Spesification extends Model
{
    use HasFactory;

    protected $table = "spesification";
    protected $primaryKey = 'id';
}
