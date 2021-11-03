<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CauThu extends Model
{
    use HasFactory;

    protected $fillable = [
        "ten_cau_thu",
        "so_ao",
        "vi_tri",
        "doi_bong_id"
    ];

    public function doi_bong()
    {
        return $this->belongsTo(DoiBong::class);
    }

}
