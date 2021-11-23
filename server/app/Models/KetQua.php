<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class KetQua extends Model
{
    use HasFactory;

    const CREATED_AT = null;

    protected $table ='ketqua';
    protected $primaryKey = 'idKQ';

    protected $fillable = [
        'BTDoi1',
        'BTDoi2',
    ];

    public function trandau() {
        return $this->belongsTo(TranDau::class, 'idTD');
    }

    public function xuphats() {
        return $this->hasMany(XuPhat::class, 'idKQ');
    }

    public function ghibans() {
        return $this->hasMany(GhiBan::class, 'idKQ');
    }
}
