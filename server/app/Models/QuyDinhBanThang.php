<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class QuyDinhBanThang extends Model
{
    use HasFactory;

    protected $table = 'quydinhbanthang';
    protected $primaryKey = 'idQUYDINHBANTHANG';

    protected $fillable = [
        'idMG',
        'LoaiBT',
        'ThoiDiemBatDau',
        'ThoiDiemKetThuc',
        'Logo'
    ];
}