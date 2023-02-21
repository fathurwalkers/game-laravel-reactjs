import { Head, Link } from '@inertiajs/react';

const Homepage = () => {
    return (
        <>
            <div className="flex justify-center items-center min-h-screen bg-black text-dark text-1sm">
                <p>
                    Uploading data..<br />
                    More info click link below <br />
                    Call Center : <Link href='https://hostinger.com/'>Hostinger.ID</Link>
                </p>
            </div>
        </>
    )
}

export default Homepage
