<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class QuyDinhDiemSo extends Model
{
    use HasFactory;

    protected $table = 'quydinhdiemso';
    protected $primaryKey = 'idQUYDINHDIEMSO';

    protected $fillable = [
        'idMG',
        'DiemThang',
        'DiemHoa',
        'DiemThua'
    ];
}