<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class XuPhat extends Model
{
    use HasFactory;
    

    protected $table = 'xuphat';
    protected $primaryKey = 'idXP';

    protected $fillable = [
        'idKQ',
        'idCT',
        'LoaiThe',
        'ThoiDiem',
    ];

    public function ketqua() {
        return $this->belongsTo(KetQua::class, 'idKQ');
    }

    public function cauthu() {
        return $this->belongsTo(CauThu::class, 'idCT');
    }
}
