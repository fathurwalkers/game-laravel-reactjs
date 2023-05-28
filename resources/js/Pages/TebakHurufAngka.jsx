import { Head, Link } from '@inertiajs/react';

const tombolKeluar = () => {
    console.log('terklik!');
    location.href = route('homepage');
}

let statusTombolPetunjuk = true;
let statusTombolPetunjukHuruf = true;
let statusTombolPetunjukAngka = true;
let audio = new Audio("assets/menu-sound1.mp3");
// let audio = new Audio("assets/audio/huruf/A.mpeg");
// audio.play();

const tombolPlayer = () => {
    console.log(statusTombolPetunjuk);
    if (statusTombolPetunjuk == true) {
        statusTombolPetunjuk = false;
        audio.play();
        console.log(statusTombolPetunjuk);
    } else {
        statusTombolPetunjuk = true;
        audio.pause();
        audio.currentTime = 0;
        console.log(statusTombolPetunjuk);
    }
}
const clickAngka = (params) => {
    tombolPlayerAngka(params);
}
const tombolPlayerAngka = (params) => {
    let sourceaudio = "assets/audio/angka/"+ params +".mp3";
    // let sourceaudio = audio;
    let audioAngka = new Audio(sourceaudio);
    console.log(statusTombolPetunjuk);
    console.log(sourceaudio);
    console.log(audioAngka);
    if (statusTombolPetunjukAngka == true) {
        statusTombolPetunjukAngka = false;
        audioAngka.play();
        console.log(statusTombolPetunjukAngka);
    } else {
        statusTombolPetunjukAngka = true;
        audioAngka.pause();
        audioAngka.currentTime = 0;
        console.log(statusTombolPetunjukAngka);
    }
}

const Homepage = (props) => {
    console.log(props.nilaitebak)
    return (
        <>
            <div className="flex justify-center w-full h-screen bg-cover bg-no-repeat overscroll-none bg-[url('/assets/play2.jpg')] text-white text-1sm overscroll-auto">

                <div className="card">
                    <div className="card-body">

                        <div className="columns flex justify-center">
                            <p className='center flex justify-center decoration-slate-300 outline-orange-600 text-2xl'>
                                <b>Mengenal Angka</b>
                            </p>
                        </div>
                        <br />
                        <div className="container ">

                            <div class="grid grid-cols-4 gap-4">

                                {props.tebakan ? props.tebakan.map((data, i) => {
                                    return (
                                        <div className="w-10 h-10">
                                            <div key={i}>
                                                <img src={"/assets/" + tebakan + ".png"} alt=""
                                                    className="hover:scale-125 hover:opacity-150 w-10 h-10"
                                                    onClick={() => clickAngka(tebakan)} />
                                            </div>
                                        </div>
                                    )
                                }) : "KOSONG"}

                            </div>

                            <br />

                        </div>

                        {/* <img src="/assets/menu-huruf.png" alt="" className="mx-4 hover:scale-125 hover:opacity-200" /> */}

                    </div>

                    <div className="columns">
                        <div className="w-12 mx-auto justify-center items-center content-center">
                            <img src="/assets/player.png" alt="" className="hover:scale-125 hover:opacity-200" onClick={tombolPlayer} />
                        </div>
                    </div>

                    <br />

                    <div className="columns">
                        <div className="w-36 mx-auto justify-center items-center content-center">
                            <img src="/assets/tombol-keluar.png" alt="" className="hover:scale-125 hover:opacity-200" onClick={tombolKeluar} />
                        </div>
                    </div>

                    <br />

                </div>


            </div>
        </>
    )
}

export default Homepage
