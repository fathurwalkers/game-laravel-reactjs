import { Head, Link } from '@inertiajs/react';

const tombolKeluar = () => {
    console.log('terklik!');
    // window.open("", "_blank", "");
    window.close();
}
let statusTombolPetunjuk = true;
let audio = new Audio("assets/menu-sound1.mp3");

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

const Homepage = () => {
    return (
        <>
            <div className="flex justify-center w-full h-screen overscroll-none bg-[url('/assets/test-background2.jpg')] bg-cover text-white text-1sm overscroll-auto bg-contain">

                <div className="card">
                    <div className="card-body">

                        <div className="container justify-center items-center">

                            <br />

                            <div className="columns">
                                <p>
                                    <div className="w-62">
                                        <img src="/assets/banner.png" alt="" />
                                    </div>
                                </p>
                            </div>

                            <br />
                            <br />

                            <div className="columns">

                                <div className="flex w-28 mx-auto justify-center items-center content-center">

                                    <img src="/assets/ABC.png" alt="" className="mx-4 hover:scale-125 hover:opacity-200" onClick={() => location.href = 'mengenal-huruf'} />

                                    <img src="/assets/123.png" alt="" className="mx-4 hover:scale-125 hover:opacity-200" onClick={() => location.href = 'mengenal-angka'} />
                                </div>

                            </div>
                            <br />

                            <div className="columns">
                                <div className="flex w-28 mx-auto justify-center items-center content-center">
                                    <img src="/assets/tebak-huruf.png" alt="" className="mx-4 hover:scale-125 hover:opacity-200" onClick={() => location.href = 'tebak-huruf-angka/huruf'} />
                                    <img src="/assets/tebak-angka.png" alt="" className="mx-4 hover:scale-125 hover:opacity-200" onClick={() => location.href = 'tebak-huruf-angka/angka'} />
                                </div>
                            </div>

                            <br />

                            {/* <div className="columns">
                                <div className="flex w-28 mx-auto justify-center items-center content-center">
                                    <img src="/assets/tebak-angka.png" alt="" className="mx-4 hover:scale-125 hover:opacity-200" onClick={() => location.href = 'tebak-huruf-angka/angka'} />
                                </div>
                            </div> */}


                            <div className="columns">
                                <div className="flex w-28 mx-auto justify-center items-center content-center">
                                    <img src="/assets/tebak-benda.png" alt="" className="mx-4 hover:scale-125 hover:opacity-200" onClick={() => location.href = 'tebak-benda'} />
                                </div>
                            </div>


                            {/* <div className="columns">
                                <div className="w-36 mx-auto justify-center items-center content-center">
                                    <img src="/assets/tombol-petunjuk.png" alt="" className="hover:scale-125 hover:opacity-200" />
                                </div>
                            </div> */}
                            <br />
                            <div className="columns">
                                <div className="w-36 mx-auto justify-center items-center content-center">
                                    <img src="/assets/tombol-keluar.png" alt="" className="hover:scale-125 hover:opacity-200" onClick={tombolKeluar} />
                                </div>
                            </div>

                            <br />
                            <div className="columns">
                                <div className="w-12 mx-auto justify-center items-center content-center">
                                    <img src="/assets/player.png" alt="" className="hover:scale-125 hover:opacity-200" onClick={tombolPlayer} />
                                </div>
                            </div>

                        </div>

                    </div>
                </div>


            </div>
        </>
    )
}

export default Homepage
