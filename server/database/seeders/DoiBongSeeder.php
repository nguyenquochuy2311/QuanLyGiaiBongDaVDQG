<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\DoiBong;
use Carbon\Carbon;

class DoiBongSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $doi_bong = [
            [
                'ten_doi_bong' => 'Viettel',
                'mo_ta' => '5G',
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
            ],
            [
                'ten_doi_bong' => 'Hồng Lĩnh Hà Tĩnh',
                'mo_ta' => 'Núi Hồng',
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
            ]
        ];

        DoiBong::insert($doi_bong);
    }
}
