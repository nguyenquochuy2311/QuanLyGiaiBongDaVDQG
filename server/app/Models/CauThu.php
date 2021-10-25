<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CauThu extends Model
{
    use HasFactory;

    protected $fillable = [
        "ten_cau_thu",
        "vi_tri"
    ];
}
