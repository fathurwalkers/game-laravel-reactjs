<?php

namespace App\Http\Controllers;

use App\Models\Angka;
use App\Models\Huruf;
use App\Models\Benda;
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

    public function tebak_huruf()
    {
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
        return Inertia::render('TebakHuruf', [
            'nilaitebak' => $huruf,
            'tebakan' => $array_tebakan
        ]);
    }

    public function tebak_angka()
    {
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
        return Inertia::render('TebakAngka', [
            'nilaitebak' => $angka,
            'tebakan' => $array_tebakan
        ]);
    }

    public function tebak_huruf_angka($value)
    {
        $cek_value = $value;
        switch ($cek_value) {
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

    public function tebak_benda()
    {
        $array_tebakan = [];
        $random_benda = Benda::all()->toArray();
        $pick_benda = Arr::random($random_benda);
        $benda = $pick_benda["content_benda"];
        $pick_1_array = Arr::random($random_benda, 2);
        foreach ($pick_1_array as $item1) {
            $random_pick_1_array = $item1["content_benda"];
            array_push($array_tebakan, $random_pick_1_array);
        }
        array_push($array_tebakan, $benda);
        return Inertia::render('TebakBenda', [
            'nilaitebak' => $benda,
            'tebakan' => $array_tebakan
        ]);
    }
}
