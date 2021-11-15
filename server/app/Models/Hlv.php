<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Sofa\Eloquence\Eloquence; //base trait 
use Sofa\Eloquence\Mappable;  
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

    public function danh_sach_HLV(){
        return $this->belongsTo(Clb::class, 'idHLV');
    }
}
