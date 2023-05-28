<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Huruf;
use App\Models\Angka;
use App\Models\Benda;

class DatabaseSeeder extends Seeder
{
    public function run()
    {
        $array_huruf = [
            "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
        ];

        $array_angka = [
            "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"
        ];

        $array_benda = [
            "Lemari",
            "Ranjang",
            "Jendela",
            "Kulkas",
            "Ponsel",
            "Buku",
            "Tas",
            "Pensil",
            "Topi",
            "Sepatu",
            "Baju",
            "Celana",
            "Sepeda",
        ];

        foreach ($array_huruf as $item) {
            $huruf = new Huruf;
            $save_huruf = $huruf->create([
                'content_huruf' => $item,
                'created_at' => now(),
                'updated_at' => now()
            ]);
            $save_huruf->save();
        }

        foreach ($array_angka as $item) {
            $angka = new Angka;
            $save_angka = $angka->create([
                'content_angka' => $item,
                'created_at' => now(),
                'updated_at' => now()
            ]);
            $save_angka->save();
        }

        foreach ($array_benda as $item) {
            $benda = new Benda;
            $save_benda = $benda->create([
                'content_benda' => $item,
                'created_at' => now(),
                'updated_at' => now()
            ]);
            $save_benda->save();
        }
    }
}
