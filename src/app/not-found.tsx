import Link from 'next/link';

export default function NotFound() {
    return (
        <section
            className="d-flex justify-content-center align-items-center text-center overflow-hidden"
            style={{
                backgroundImage: "url('/images/Place-Holder-1920x1280.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh',
            }}
        >
            <div className="b-container" style={{ padding: '0 15px' }}>
                <div className="row justify-content-center">
                    <div className="col-12 col-xl-8">
                        <img
                            src="/images/Place-Holder-600x400.png"
                            className="h-auto"
                            alt="Error 404"
                            style={{ width: '100%', maxWidth: '600px' }}
                            data-aos="flip-right"
                            data-aos-easing="ease-in-sine"
                            data-aos-delay="500"
                            data-aos-duration="5000"
                        />
                        <h2 className="heading mt-0">
                            Oops! Looks Like This Page Took a <span className="text-primary-color">Wrong Turn!</span>
                        </h2>
                        <Link href="/" className="btn btn-lg btn-cta-primary mt-4 px-5 py-3">
                            Back To Homepage
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
