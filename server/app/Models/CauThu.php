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

    public function banthangs()
    {
        return $this->hasMany(GhiBan::class, 'idCT');
    }

    public function xuphats()
    {
        return $this->hasMany(XuPhat::class, 'idCT');
    }

    
}