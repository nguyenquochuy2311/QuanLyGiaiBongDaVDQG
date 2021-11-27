<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CauThu extends Model
{
    use HasFactory;

    protected $table = 'cauthu';
    protected $primaryKey = 'idCT';

    protected $fillable =[
        'idCLB',
        'TenCT',
        'NgaySinh',
        'ViTri',
        'SoAo',
        'ChieuCao',
        'LoaiCauThu',
        'AnhDaiDien',
        'created_at',
        'updated_at'
    ];
    public function clb()
    {
        return $this->belongsTo(Clb::class, 'idCT');
    }
}