<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tantangan extends Model
{
    use HasFactory;
    protected $table = "tantangan";
    protected $guarded = [];
    protected $primaryKey = "id";
}
