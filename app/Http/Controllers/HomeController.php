<?php

namespace App\Http\Controllers;

use App\Models\Angka;
use App\Models\Huruf;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Faker\Factory as Faker;
use Illuminate\Support\Arr;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        return Inertia::render('Homepage');
    }

    public function mengenal_huruf()
    {
        $huruf = Huruf::all();
        return Inertia::render('MengenalHuruf', [
            'huruf' => $huruf
        ]);
    }

    public function mengenal_angka()
    {
        $angka = Angka::all();
        return Inertia::render('MengenalAngka', [
            'angka' => $angka
        ]);
    }

    public function tebak_huruf_angka()
    {
        $array_penentu = ["huruf", "angka"];
        $random_penentu = Arr::random($array_penentu);
        switch ($random_penentu) {
            case "huruf":
                $array_tebakan = [];
                $random_huruf = Huruf::all()->toArray();
                $pick_huruf = Arr::random($random_huruf);
                $huruf = $pick_huruf["content_huruf"];
                $pick_1_array = Arr::random($random_huruf, 2);
                foreach ($pick_1_array as $item1) {
                    $random_pick_1_array = $item1["content_huruf"];
                    array_push($array_tebakan, $random_pick_1_array);
                }
                array_push($array_tebakan, $huruf);
                return Inertia::render('TebakHurufAngka', [
                    'nilaitebak' => $huruf,
                    'tebakan' => $array_tebakan
                ]);
                break;
            case "angka":
                $array_tebakan = [];
                $random_angka = Angka::all()->toArray();
                $pick_angka = Arr::random($random_angka);
                $angka = $pick_angka["content_angka"];
                $pick_1_array = Arr::random($random_angka, 2);
                foreach ($pick_1_array as $item1) {
                    $random_pick_1_array = $item1["content_angka"];
                    array_push($array_tebakan, $random_pick_1_array);
                }
                array_push($array_tebakan, $angka);
                return Inertia::render('TebakHurufAngka', [
                    'nilaitebak' => $angka,
                    'tebakan' => $array_tebakan
                ]);
                break;
        }
    }
}
