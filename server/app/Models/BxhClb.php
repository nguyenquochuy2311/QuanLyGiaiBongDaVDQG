<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BxhClb extends Model
{
    use HasFactory;
    
    protected $table = 'bxh_clb';
    protected $primaryKey = 'idMG';

    protected $fillable =[
        'idCLB',
        'Thang',
        'Hoa',
        'Thua',
        'Sotran',
        'Diem',
        'created_at',
        'updated_at'
    ];
    
}
