import Link from 'next/link';

export default function Services() {
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
                        <h1 className="heading fw-bold">Our Services</h1>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link href="/">Home</Link>
                                </li>
                                <li className="breadcrumb-item" aria-current="page">
                                    Services
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">
                                    Our Services
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </section>
            {/* #banner end */}

            {/* Services Section */}
            <section className="section py-5 my-5">
                <div className="b-container">
                    <div className="row mx-auto text-center mb-5">
                        <h6 className="text-color-2">OUR SOLUTIONS</h6>
                        <h2 className="heading mt-3" data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">
                            Comprehensive Car Detailing Solutions for a Flawless Finish
                        </h2>
                        <p className="text-color-2 mt-3">
                            Drive with confidence and style through expert car care solutions that bring out the best in your vehicle’s
                            appearance and condition.
                        </p>
                    </div>

                    <div className="row mx-auto row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
                        <div className="col">
                            <div
                                className="card group-card rounded-4 overflow-hidden position-relative"
                                data-aos="fade-right"
                                data-aos-delay="100"
                                data-aos-duration="800"
                            >
                                <div className="img-ratio-113">
                                    <img
                                        src="/images/Place-Holder-1920x1280.jpg"
                                        alt="Exterior Detailing"
                                        className="img-fluid opacity-75 w-100 h-100 object-fit-cover"
                                    />
                                </div>

                                <div className="card-img-overlay flex-column justify-content-between p-4">
                                    <h4 className="heading text-primary-color">01.</h4>

                                    <div className="card-service-label rounded-4 px-4 py-3">
                                        <h5 className="heading text-primary-color mb-3">Exterior Detailing</h5>
                                        <Link href="/service-detail" className="links-primary text-white d-inline-block mb-3">
                                            Read More <i className="bi bi-arrow-right-circle-fill"></i>
                                        </Link>
                                        <p className="card-text m-0">
                                            Thorough cleaning, polishing, and waxing to restore your car’s shine and protect its paint.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div
                                className="card group-card rounded-4 overflow-hidden position-relative"
                                data-aos="fade-up"
                                data-aos-delay="100"
                                data-aos-duration="800"
                            >
                                <div className="img-ratio-113">
                                    <img
                                        src="/images/Place-Holder-1920x1280.jpg"
                                        alt="Interior Detailing"
                                        className="img-fluid opacity-75 w-100 h-100 object-fit-cover"
                                    />
                                </div>

                                <div className="card-img-overlay flex-column justify-content-between p-4">
                                    <h4 className="heading text-primary-color">02.</h4>

                                    <div className="card-service-label rounded-4 px-4 py-3">
                                        <h5 className="heading text-primary-color mb-3">Interior Detailing</h5>
                                        <Link href="/service-detail" className="links-primary text-white d-inline-block mb-3">
                                            Read More <i className="bi bi-arrow-right-circle-fill"></i>
                                        </Link>
                                        <p className="card-text m-0">
                                            Deep cleaning of seats, carpets, dashboard, and all interior surfaces for a fresh, spotless cabin.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div
                                className="card group-card rounded-4 overflow-hidden position-relative"
                                data-aos="fade-left"
                                data-aos-delay="100"
                                data-aos-duration="800"
                            >
                                <div className="img-ratio-113">
                                    <img
                                        src="/images/Place-Holder-1920x1280.jpg"
                                        alt="Paint Correction"
                                        className="img-fluid opacity-75 w-100 h-100 object-fit-cover"
                                    />
                                </div>

                                <div className="card-img-overlay flex-column justify-content-between p-4">
                                    <h4 className="heading text-primary-color">03.</h4>

                                    <div className="card-service-label rounded-4 px-4 py-3">
                                        <h5 className="heading text-primary-color mb-3">Paint Correction</h5>
                                        <Link href="/service-detail" className="links-primary text-white d-inline-block mb-3">
                                            Read More <i className="bi bi-arrow-right-circle-fill"></i>
                                        </Link>
                                        <p className="card-text m-0">
                                            Deep cleaning of seats, carpets, dashboard, and all interior surfaces for a fresh, spotless cabin.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div
                                className="card group-card rounded-4 overflow-hidden position-relative"
                                data-aos="fade-right"
                                data-aos-delay="500"
                                data-aos-duration="800"
                            >
                                <div className="img-ratio-113">
                                    <img
                                        src="/images/Place-Holder-1920x1280.jpg"
                                        alt="Ceramic Coating"
                                        className="img-fluid opacity-75 w-100 h-100 object-fit-cover"
                                    />
                                </div>

                                <div className="card-img-overlay flex-column justify-content-between p-4">
                                    <h4 className="heading text-primary-color">04.</h4>

                                    <div className="card-service-label rounded-4 px-4 py-3">
                                        <h5 className="heading text-primary-color mb-3">Ceramic Coating</h5>
                                        <Link href="/service-detail" className="links-primary text-white d-inline-block mb-3">
                                            Read More <i className="bi bi-arrow-right-circle-fill"></i>
                                        </Link>
                                        <p className="card-text m-0">
                                            Long-lasting protection against dirt, UV rays, and water spots while enhancing gloss.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div
                                className="card group-card rounded-4 overflow-hidden position-relative"
                                data-aos="fade-up"
                                data-aos-delay="500"
                                data-aos-duration="800"
                            >
                                <div className="img-ratio-113">
                                    <img
                                        src="/images/Place-Holder-1920x1280.jpg"
                                        alt="Engine Bay Cleaning"
                                        className="img-fluid opacity-75 w-100 h-100 object-fit-cover"
                                    />
                                </div>

                                <div className="card-img-overlay flex-column justify-content-between p-4">
                                    <h4 className="heading text-primary-color">05.</h4>

                                    <div className="card-service-label rounded-4 px-4 py-3">
                                        <h5 className="heading text-primary-color mb-3">Engine Bay Cleaning</h5>
                                        <Link href="/service-detail" className="links-primary text-white d-inline-block mb-3">
                                            Read More <i className="bi bi-arrow-right-circle-fill"></i>
                                        </Link>
                                        <p className="card-text m-0">
                                            Safe and detailed cleaning of the engine bay to improve appearance and longevity.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div
                                className="card group-card rounded-4 overflow-hidden position-relative"
                                data-aos="fade-left"
                                data-aos-delay="100"
                                data-aos-duration="800"
                            >
                                <div className="img-ratio-113">
                                    <img
                                        src="/images/Place-Holder-1920x1280.jpg"
                                        alt="Headlight Restoration"
                                        className="img-fluid opacity-75 w-100 h-100 object-fit-cover"
                                    />
                                </div>

                                <div className="card-img-overlay flex-column justify-content-between p-4">
                                    <h4 className="heading text-primary-color">06.</h4>

                                    <div className="card-service-label rounded-4 px-4 py-3">
                                        <h5 className="heading text-primary-color mb-3">Headlight Restoration</h5>
                                        <Link href="/service-detail" className="links-primary text-white d-inline-block mb-3">
                                            Read More <i className="bi bi-arrow-right-circle-fill"></i>
                                        </Link>
                                        <p className="card-text m-0">
                                            Removing oxidation and yellowing to restore clarity and improve night visibility.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* #services end */}

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

            {/* Appointment section */}
            <section className="section py-5 my-5">
                <div className="b-container">
                    <div className="row mx-auto">
                        <div className="col-12 col-xl-6">
                            {/* title */}
                            <h6 className="text-color-2">HOW IT WORKS</h6>
                            <h2 className="heading" data-aos="fade-right" data-aos-delay="100" data-aos-duration="800">
                                Obtain Your Car's History In Just Three Easy Steps.
                            </h2>
                            <div className="mt-4">
                                <Link href="/contact-us" className="btn btn-lg btn-cta-primary">
                                    Let's Get In Touch
                                </Link>
                            </div>
                            {/* #title end */}
                            <div className="accordion mt-5" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button
                                            className="accordion-button"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseOne"
                                            aria-expanded="true"
                                            aria-controls="collapseOne"
                                        >
                                            01.&nbsp;Book Your Appointment
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseOne"
                                        className="accordion-collapse collapse show"
                                        aria-labelledby="headingOne"
                                        data-bs-parent="#accordionExample"
                                    >
                                        <div className="accordion-body ps-0 ps-xl-5">
                                            <p className="ms-0 ms-xl-5">
                                                Choose the detailing service that best fits your needs and schedule an appointment at your
                                                convenience. You can book online, call us, or visit our location. We’ll confirm your booking and
                                                provide any necessary preparation details.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseTwo"
                                            aria-expanded="false"
                                            aria-controls="collapseTwo"
                                        >
                                            02. We Detail Your Car
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseTwo"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="headingTwo"
                                        data-bs-parent="#accordionExample"
                                    >
                                        <div className="accordion-body ps-0 ps-xl-5">
                                            <p className="ms-0 ms-xl-5">
                                                Our professional detailers will carefully clean, restore, and protect your vehicle using
                                                high-quality products and advanced techniques. From deep interior cleaning to exterior polishing
                                                and paint protection, we ensure every inch of your car looks flawless.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseThree"
                                            aria-expanded="false"
                                            aria-controls="collapseThree"
                                        >
                                            03. Enjoy the Shine
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseThree"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="headingThree"
                                        data-bs-parent="#accordionExample"
                                    >
                                        <div className="accordion-body ps-0 ps-xl-5">
                                            <p className="ms-0 ms-xl-5">
                                                Once the detailing is complete, your car will be spotless, refreshed, and protected. Pick up
                                                your vehicle or enjoy our delivery service (if available), and drive away with confidence,
                                                knowing your car looks as good as new.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-xl-6 mt-5 mt-xl-0">
                            <div className="img-wrapper position-relative mx-auto">
                                <div className="img-ratio-121">
                                    <img
                                        src="/images/Place-Holder-1920x1280.jpg"
                                        alt="Car Grille and Headlight"
                                        className="w-100 h-100 position-absolute rounded-4"
                                        style={{ inset: 0 }}
                                    />
                                </div>
                                <div
                                    className=" position-absolute info-lb-overlay"
                                    data-aos="fade-up"
                                    data-aos-delay="100"
                                    data-aos-duration="800"
                                >
                                    <div className="d-flex flex-row text-white p-4 align-items-center">
                                        <h4 className="mb-2">
                                            <em>
                                                “Your car deserves more than a quick wash. Our detailing services are designed to go the extra
                                                mile, restoring its beauty and protecting it from the elements, so it continues to turn heads
                                                wherever you go.”
                                            </em>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* #appointment end */}
        </main>
    );
}
