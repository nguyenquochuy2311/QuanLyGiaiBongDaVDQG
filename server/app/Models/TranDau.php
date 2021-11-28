<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class TranDau extends Model
{
    use HasFactory;
    
    const CREATED_AT = null;

    protected $table = 'trandau';
    protected $primaryKey = 'idTD';

    protected $fillable = [
        'VongDau',
        'Doi1',
        'Doi2',
        'SanDau',
        'ThoiGian',
        'idMG',
        'idToTT'
    ];

    public function ketqua() {
        return $this->hasOne(KetQua::class, 'idTD');
    }

    public function muagiai() {
        return $this->hasOne(MuaGiai::class, 'idMG');
    }

    public function totrongtai() {
        return $this->hasOne(ToTrongTai::class, 'idToTT');
    }
    
    public function getNameClb($id) {
        $a = DB::table('clb')->where('idCLB', $this['Doi'.$id])->get('TenCLB');
        return $a;
    }
}
