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

const modalPetunjuk = () => {
    location.href = "#modal-petunjuk";
}

const Homepage = () => {
    return (
        <>
            <div className="flex justify-center w-full h-screen overscroll-none bg-[url('/assets/test-background2.jpg')] bg-cover text-white text-1sm overscroll-auto bg-contain">

                {/* MODAL PETUNJUK */}
                <div className="modal" id="modal-petunjuk">
                    <div className="modal-box bg-primary-content justify-center items-center content-center">
                        <h3 className="font-bold text-lg justify-center items-center content-center text-center"><b><div className="text-[#50d71e]">PETUNJUK</div></b> </h3>
                        <br />

                        <div className="columns">
                            <p className='font-bold text-sm text-dark text-[#000000]'>Tebak Huruf</p>
                            <p className='font-bold text-sm text-dark text-[#000000]'>
                                Pada permainan tebak huruf ini, terdapat beberapa petunjuk yang bisa dilakukan untuk mengetahui tiap jawaban dari permainan yang ada. seorang anak dapat berinteraksi dengan bentuk buram dari huruf yang akan ditebak, dengan menekan hurufnya maka akan keluar suara dari huruf yang ditebak, sehingga dapat dengan mudah mengetahui huruf apa yang akan ditebak
                            </p>
                        </div>
                        <br />
                        <div className="columns">
                            <p className='font-bold text-sm text-dark text-[#000000]'>Tebak Angka</p>
                            <p className='font-bold text-sm text-dark text-[#000000]'>
                                Pada permainan tebak angka ini, terdapat beberapa petunjuk yang bisa dilakukan untuk mengetahui tiap jawaban dari permainan yang ada. seorang anak dapat berinteraksi dengan bentuk buram dari angka yang akan ditebak, dengan menekan angkanya maka akan keluar suara dari angka yang ditebak, sehingga dapat dengan mudah mengetahui angka apa yang akan ditebak
                            </p>
                        </div>
                        <br />
                        <div className="columns">
                            <p className='font-bold text-sm text-dark text-[#000000]'>Tebak Benda</p>
                            <p className='font-bold text-sm text-dark text-[#000000]'>
                                Pada permainan tebak Benda ini, terdapat beberapa petunjuk yang bisa dilakukan untuk mengetahui tiap jawaban dari permainan yang ada. seorang anak dapat berinteraksi dengan bentuk buram dari Benda yang akan ditebak, dengan menekan Bendanya maka akan keluar suara dari Benda yang ditebak, sehingga dapat dengan mudah mengetahui Benda apa yang akan ditebak
                            </p>
                        </div>
                        {/* <div className="columns">
                            <div className="w-36 mx-auto justify-center items-center content-center">
                                <img src="/assets/benar.jpg" alt="" className="hover:scale-125 hover:opacity-200" />
                            </div>
                        </div> */}

                        <div className="modal-action">
                            <a href="" className="btn">Mengerti</a>
                        </div>
                    </div>
                </div>

                {/* MODAL INFORMASI */}
                <div className="modal" id="modal-informasi">
                    <div className="modal-box bg-primary-content justify-center items-center content-center">
                        <h3 className="font-bold text-lg justify-center items-center content-center text-center"><b><div className="text-[#50d71e]">INFORMASI</div></b> </h3>
                        <br />

                        <div className="columns">
                            <p className='font-bold text-sm text-dark text-[#000000]'>Informasi Pengembang</p>
                            <p className='font-bold text-sm text-dark text-[#000000]'>
                                Aplikasi Game Interaktif <i>Mengenal Angka dan Huruf ini </i>dibuat oleh <b>ANISA SUHARLITA (17 650 046)</b> Mahasiswa Fakultas Teknik Jurusan <b>Teknik Informatika</b> di Universitas Dayanu Ikhsanuddin.
                            </p>
                        </div>
                        <br />
                        {/* <div className="columns">
                            <div className="w-36 mx-auto justify-center items-center content-center">
                                <img src="/assets/benar.jpg" alt="" className="hover:scale-125 hover:opacity-200" />
                            </div>
                        </div> */}

                        <div className="modal-action">
                            <a href="" className="btn">Mengerti</a>
                        </div>
                    </div>
                </div>

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
                            <br />

                            <div className="columns">
                                <div className="w-36 mx-auto justify-center items-center content-center">
                                    <img src="/assets/Petunjuk.png" alt="" className="hover:scale-125 hover:opacity-200" onClick={() => location.href = '#modal-petunjuk'}/>
                                </div>
                            </div>

                            <div className="columns">
                                <div className="w-36 mx-auto justify-center items-center content-center">
                                    <img src="/assets/Informasi.png" alt="" className="hover:scale-125 hover:opacity-200" onClick={() => location.href = '#modal-informasi'} />
                                </div>
                            </div>

                            <div className="columns">
                                <div className="w-36 mx-auto justify-center items-center content-center">
                                    <img src="/assets/Keluar.png" alt="" className="hover:scale-125 hover:opacity-200" onClick={tombolKeluar} />
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
