<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CauThu extends Model
{
    use HasFactory;

    protected $table = 'cauthu';
    protected $primaryKey = 'idCT';
    
    public function clb()
    {
        return $this->belongsTo(Clb::class, 'idCT');
    }
}