import { Head, Link } from '@inertiajs/react';

const Homepage = () => {
    return (
        <>
            <div className="flex justify-center w-full h-screen overscroll-none bg-[url('/assets/test-background1.jpg')] bg-cover text-dark text-1sm overscroll-auto">

                <div className="card">
                    <div className="card-body">

                        <div className="container justify-center items-center">

                            <div className="columns">
                                <p>
                                    <div className="w-60">
                                        <img src="/assets/banner.png" alt="" />
                                    </div>
                                </p>
                            </div>

                            <br />
                            <br />
                            <br />

                            <div className="columns">

                                <div className="flex w-20 mx-auto justify-center items-center content-center">
                                    <img src="/assets/menu-huruf.png" alt="" className="mx-9" />
                                    <img src="/assets/menu-angka.png" alt="" className="mx-9" />
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
