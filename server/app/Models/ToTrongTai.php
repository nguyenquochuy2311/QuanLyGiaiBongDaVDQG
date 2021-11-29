<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ToTrongTai extends Model
{
    use HasFactory;

    protected $table = 'totrongtai';
    protected $primaryKey = 'idToTT';   

    protected $fillable =[
        'idTT',
        'created_at',
        'updated_at'
    ];

    public function To_trong_tai(){
        return $this->belongsTo(TrongTai::class, 'idToTT');

    }}
