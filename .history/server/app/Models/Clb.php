<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Sofa\Eloquence\Eloquence; //base trait 
use Sofa\Eloquence\Mappable; // extension trait

class Clb extends Model
{
    use HasFactory;

    protected $table = 'clb';
    protected $primaryKey = 'idCLB';
    
    protected $fillable = [
        'VietTat',
        'TenCLB',
        'SanNha',
        'TruSo',
        'Logo'
    ];
    
    public function ds_cau_thu()
    {
        return $this->hasMany(CauThu::class, 'idCLB');
    }
}