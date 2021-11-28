<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BxhCt extends Model
{
    use HasFactory;
    
    protected $table = 'bxh_ct';
    protected $primaryKey = 'idMG';

    protected $fillable =[
        'idCT',
        'SoBanThang',
        'created_at',
        'updated_at'
    ];
    
}
