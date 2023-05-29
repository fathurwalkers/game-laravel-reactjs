import { Head, Link } from '@inertiajs/react';

const tombolKeluar = () => {
    console.log('terklik!');
    location.href = route('homepage');
}

let statusTombolPetunjuk = true;
let statusTombolPetunjukHuruf = true;
let statusTombolPetunjukAngka = true;
let statusTombolPetunjukBenda = true;
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
const clickBenda = (params) => {
    tombolPlayerBenda(params);
}
const tombolPlayerBenda = (params) => {
    let sourceaudio = "assets/audio/" + params + ".mp3";
    // let sourceaudio = audio;
    let audioBenda = new Audio(sourceaudio);
    console.log(statusTombolPetunjuk);
    console.log(sourceaudio);
    console.log(audioBenda);
    if (statusTombolPetunjukBenda == true) {
        statusTombolPetunjukBenda = false;
        audioBenda.play();
        console.log(statusTombolPetunjukBenda);
    } else {
        statusTombolPetunjukBenda = true;
        audioBenda.pause();
        audioBenda.currentTime = 0;
        console.log(statusTombolPetunjukBenda);
    }
}

const cekTebakan = (props1, props2) => {
    console.log(props1);
    console.log(props2);
    if (props1 == props2) {
        console.log(true)
        location.href = "#my-modal-1";
        let sourceAudioJawaban = "assets/audio/sound-benar.mp3";
        let audiojawaban = new Audio(sourceAudioJawaban);
        audiojawaban.play();
    } else {
        console.log(false)
        location.href = "#my-modal-2";
        let sourceAudioJawaban = "assets/audio/sound-salah.mp3";
        let audiojawaban = new Audio(sourceAudioJawaban);
        audiojawaban.play();
    }
    // location.href = "#my-modal-2";
    // setTimeout('', 10000);
    // location.href = route('tebak-huruf-angka');
}

const Homepage = (props) => {
    console.log(props.nilaitebak)
    return (
        <>

            <div className="modal" id="my-modal-1">
                <div className="modal-box bg-primary-content justify-center items-center content-center">
                    <h3 className="font-bold text-lg justify-center items-center content-center text-center"><b>Jawaban <div className="text-[#50d71e]">Benar</div></b> </h3>
                    <br />
                    <div className="columns">
                        <div className="w-36 mx-auto justify-center items-center content-center">
                            <img src="/assets/benar.jpg" alt="" className="hover:scale-125 hover:opacity-200" />
                        </div>
                    </div>
                    <div className="modal-action">
                        <a href={route('tebak-benda')} className="btn">Yay!</a>
                    </div>
                </div>
            </div>

            <div className="modal" id="my-modal-2">
                <div className="modal-box bg-primary-content">
                    <h3 className="font-bold text-lg justify-center items-center content-center text-center"><b>Jawaban <div className="text-[#50d71e]">Salah</div></b> </h3>
                    <br />
                    <div className="columns">
                        <div className="w-36 mx-auto justify-center items-center content-center">
                            <img src="/assets/salah.jpg" alt="" className="hover:scale-125 hover:opacity-200" />
                        </div>
                    </div>
                    <div className="modal-action">
                        <a href="#" className="btn">Yay!</a>
                    </div>
                </div>
            </div>

            <div className="flex justify-center w-full h-screen bg-cover bg-no-repeat overscroll-none bg-[url('/assets/play3.jpg')] text-white text-1sm overscroll-auto">

                <div className="card">
                    <div className="card-body">

                        <div className="columns flex justify-center outline-dashed rounded-md border-2 border-sky-500">
                            <p className='center flex justify-center text-black outline-white-600 text-2xl'>
                                <b>&nbsp; Tebak Benda &nbsp; </b>
                            </p>
                        </div>

                        <br />

                        <div className="container ">

                            <div className="columns">
                                <div className="w-24 blur-sm brightness-50 mx-auto justify-center items-center content-center">
                                    <img src={"/assets/" + props.nilaitebak + ".png"} alt="" className="opacity-50 hover:scale-125 hover:opacity-200" onClick={() => clickBenda(props.nilaitebak)}/>
                                </div>
                            </div>

                            <br />

                            <div class="grid grid-cols-3 gap-3">

                                {props.tebakan ? props.tebakan.map((data, i) => {
                                    return (
                                        <div className="flex center justify-center items-center">
                                            <div key={i}>
                                                <img src={"/assets/" + data + ".png"} alt=""
                                                    className="hover:scale-125 hover:opacity-150 w-18 h-18 flex center justify-center items-center"
                                                    onClick={() => cekTebakan(data, props.nilaitebak)} htmlFor="my-modal-3" />
                                                    <h3 className="font-bold text-lg justify-center items-center content-center text-center"><b>
                                                        {data}
                                                        </b> </h3>
                                            </div>
                                        </div>
                                    )
                                }) : "KOSONG"}

                            </div>

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
