<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Benda extends Model
{
    use HasFactory;
    protected $table = "benda";
    protected $guarded = [];
    protected $primaryKey = "id";
}
