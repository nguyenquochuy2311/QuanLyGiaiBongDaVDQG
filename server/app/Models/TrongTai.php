<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TrongTai extends Model
{
    use HasFactory;
    protected $table = 'trongtai';
    protected $primaryKey = 'idTT';
    protected $fillable = [
        'TenTT',
        'NgaySinh',
        'ViTri',
        'AnhDaiDien',
        'created_at',
        'updated_at'
    ];

    public function ds_trong_tai(){
        return $this->belongsTo(TrongTai::class);
        return $this->hasMany(ToTrongTai::class, 'idTT');

    }
}
