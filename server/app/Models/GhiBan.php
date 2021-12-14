<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GhiBan extends Model
{
    use HasFactory;

    protected $table ='ghiban';
    protected $primaryKey = 'idGB';

    protected $fillable = [
        'idKQ',
        'idCT',
        'LoaiBT',
        'ThoiDiem',
    ];

    public function cauthu() {
        return $this->belongsTo(CauThu::class, 'idCT');
    }

    public function ketqua() {
        return $this->belongsTo(KetQua::class, 'idKQ');
    }
}