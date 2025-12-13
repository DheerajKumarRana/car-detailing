import Link from 'next/link';

export default function Testimonial() {
    return (
        <main>
            {/* Banner section */}
            <section
                className="section position-relative"
                style={{ backgroundImage: "url('/images/Place-Holder-1920x1280.jpg')", minHeight: '40vh' }}
            >
                <div className="bg-overlay"></div>
                <div className="b-container h-100 position-relative z-2">
                    <div
                        className="d-flex flex-column justify-content-center align-items-center mx-auto text-center text-white gap-4"
                        style={{ maxWidth: '895px' }}
                    >
                        <h1 className="heading fw-bold">Testimonial</h1>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link href="/">Home</Link>
                                </li>
                                <li className="breadcrumb-item" aria-current="page">
                                    Pages
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">
                                    Testimonial
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </section>
            {/* #banner end */}

            {/* Testimonial Section */}
            <section className="section reviews position-relative text-white">
                {/* Testimonials Content */}
                <div className="b-container position-relative z-1">
                    <h6 className="text-color-2 text-center pt-4">CUSTOMER REVIEWS</h6>
                    <h2 className="heading text-center mt-2" data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">
                        Customer <span className="text-primary-color">Experiences</span> That
                        <br />
                        Speak For Themselves
                    </h2>

                    <div className="row g-4 g-xl-5 my-5">
                        {/* Testimonial Cards */}
                        <div className="col-12 col-md-6 col-xl-4" data-aos="fade-right" data-aos-delay="200" data-aos-duration="800">
                            <div className="d-flex flex-column h-100 gap-4">
                                <div className="card p-4">
                                    <p>
                                        Absolutely incredible service! My car looks brand new inside and out. The attention to detail was
                                        phenomenal. I couldn’t be happier with the results. Highly recommend!
                                    </p>
                                    <div className="d-flex align-items-center mt-auto pt-3">
                                        <img
                                            src="/images/Place-Holder-64x64.jpg"
                                            alt="Raul Axios"
                                            className="rounded-circle me-3"
                                            width="60"
                                            height="60"
                                        />
                                        <div>
                                            <h5 className="mb-0">Raul Axios</h5>
                                            <small className="text-color-2">Auto Dealer</small>
                                        </div>
                                    </div>
                                </div>

                                <div className="card p-4">
                                    <p>
                                        I’ve used many car detailing services before, but this one exceeded my expectations. The team was
                                        professional, friendly, and did an amazing job on my vehicle. It looks flawless!
                                    </p>
                                    <div className="d-flex align-items-center mt-auto pt-3">
                                        <img
                                            src="/images/Place-Holder-64x64.jpg"
                                            alt="Ubeid Una"
                                            className="rounded-circle me-3"
                                            width="60"
                                            height="60"
                                        />
                                        <div>
                                            <h5 className="mb-0">Ubeid Una</h5>
                                            <small className="text-color-2">Car Owner</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-xl-4" data-aos="fade-up" data-aos-delay="500" data-aos-duration="800">
                            <div className="d-flex flex-column h-100 gap-4">
                                <div className="card p-4">
                                    <p>
                                        I was blown away by the transformation! From the deep clean of the interior to the shiny, protected
                                        exterior, my car looks better than when I first bought it. Truly exceptional work!
                                    </p>
                                    <div className="d-flex align-items-center mt-4">
                                        <img
                                            src="/images/Place-Holder-64x64.jpg"
                                            alt="Taki Wanabe"
                                            className="rounded-circle me-3"
                                            width="60"
                                            height="60"
                                        />
                                        <div>
                                            <h5 className="mb-0">Taki Wanabe</h5>
                                            <small className="text-color-2">Vintage Car Owner</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="card p-4">
                                    <p>
                                        The service here is outstanding. The team took extra care in detailing my car, and the results are
                                        nothing short of amazing. I will definitely return for regular maintenance!
                                    </p>
                                    <div className="d-flex align-items-center mt-auto pt-3">
                                        <img
                                            src="/images/Place-Holder-64x64.jpg"
                                            alt="Hafsha Jasmine"
                                            className="rounded-circle me-3"
                                            width="60"
                                            height="60"
                                        />
                                        <div>
                                            <h5 className="mb-0">Hafsha Jasmine</h5>
                                            <small className="text-color-2">Auto Dealer</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-xl-4" data-aos="fade-left" data-aos-delay="350" data-aos-duration="800">
                            <div className="d-flex flex-column h-100 gap-4">
                                <div className="card p-4">
                                    <p>
                                        This is the best detailing service I’ve ever had. My car looks immaculate, and it feels like I’m
                                        driving a completely different vehicle. I’ll be a loyal customer from now on!
                                    </p>
                                    <div className="d-flex align-items-center mt-auto pt-3">
                                        <img
                                            src="/images/Place-Holder-64x64.jpg"
                                            alt="Akio Mirfaq"
                                            className="rounded-circle me-3"
                                            width="60"
                                            height="60"
                                        />
                                        <div>
                                            <h5 className="mb-0">Akio Mirfaq</h5>
                                            <small className="text-color-2">Car Owner</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="card p-4">
                                    <p>
                                        From the moment I walked in, I knew I was in good hands. The staff was knowledgeable and friendly,
                                        and they did an incredible job on my car. It’s spotless, inside and out!
                                    </p>
                                    <div className="d-flex align-items-center mt-auto pt-3">
                                        <img
                                            src="/images/Place-Holder-64x64.jpg"
                                            alt="Olivia Seamo"
                                            className="rounded-circle me-3"
                                            width="60"
                                            height="60"
                                        />
                                        <div>
                                            <h5 className="mb-0">Olivia Seamo</h5>
                                            <small className="text-color-2">Car Collector</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* #testimonial end */}

            {/* CTA Section */}
            <section
                className="section position-relative"
                style={{ backgroundImage: "url('/images/Place-Holder-1920x1280.jpg')", backgroundAttachment: 'fixed' }}
            >
                <div className="bg-overlay"></div>
                <div className="b-container position-relative z-2 my-5 my-xl-0">
                    <div
                        className="d-flex flex-column align-items-center mx-auto text-center text-white font-2 gap-4"
                        style={{ maxWidth: '900px' }}
                    >
                        <h2 className="fw-bolder">Your Car’s Best Look Is Just One Detail Away</h2>
                        <h4 className="fw-semibold">
                            Book Your Detailing Today! And Get <span className="text-primary-color">30% Cut Off</span>
                        </h4>
                        <Link href="/contact-us" className="btn btn-lg btn-cta-primary">
                            Booking Now
                        </Link>
                    </div>
                </div>
            </section>
            {/* #cta end */}
        </main>
    );
}
