<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class QuyDinhCauThu extends Model
{
    use HasFactory;

    protected $table = 'quydinhcauthu';
    protected $primaryKey = 'idQDCT';

    protected $fillable = [
        'idMG',
        'TuoiToiThieu',
        'TuoiToiDa',
        'SLToiThiet',
        'SLToiDa',
        'SLNuocNgoai'
    ];
}