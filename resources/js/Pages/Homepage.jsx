import { Head, Link } from '@inertiajs/react';

const Homepage = () => {
    return (
        <>
            <div className="flex justify-center items-center min-h-screen bg-white text-dark">
                <p>
                    Proses upload Data sedang berlangsung..<br />
                    Silahkan menunggu proses upload hingga selesai.. <br />
                    Call Center : <Link href='https://hostinger.com/'>Hostinger.ID</Link>
                </p>
            </div>
        </>
    )
}

export default Homepage
