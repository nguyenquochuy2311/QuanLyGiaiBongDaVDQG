<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DoiBong extends Model
{
    use HasFactory;
    
    protected $fillable = [
        "ten_doi_bong",
        "mo_ta"
    ];
}