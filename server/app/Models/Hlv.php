<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Hlv extends Model
{
    use HasFactory;

    protected $table ='hlv';
    protected $primaryKey = 'idHLV';
    
    protected $fillable = [
        'idCLB',
        'TenHLV',
        'NgaySinh',
        'ChucVu',
        'AnhDaiDien',
        'created_at',
        'updated_at'
    ];

    public function CLB(){
        return $this->belongsTo(Clb::class, 'idCLB');
    }}
