'use client';

import { useState } from 'react';
import AppointmentModal from '@/components/AppointmentModal';
import Link from 'next/link';

export default function Testimonial() {
    const [showModal, setShowModal] = useState(false);

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
                        Hear From Our Satisfied Customers
                    </h2>

                    <div className="row g-4 g-xl-5 my-5">
                        {/* Testimonial Cards */}
                        <div className="col-12 col-md-6 col-xl-4" data-aos="fade-right" data-aos-delay="200" data-aos-duration="800">
                            <div className="d-flex flex-column h-100 gap-4">
                                <div className="card p-4">
                                    <p>
                                        "I was skeptical about paying for detailing, but Sunrise completely changed my mind. My 5-year-old SUV looks better than the day I bought it. The team was professional, thorough, and genuinely cared about doing great work. Worth every penny!"
                                    </p>
                                    <div className="d-flex align-items-center mt-auto pt-3">
                                        <img
                                            src="/images/Place-Holder-64x64.jpg"
                                            alt="Sahil Shrivastav"
                                            className="rounded-circle me-3"
                                            width="60"
                                            height="60"
                                        />
                                        <div>
                                            <h5 className="mb-0">Sahil Shrivastav</h5>
                                            <small className="text-color-2">Honda CR-V Owner</small>
                                        </div>
                                    </div>
                                </div>

                                <div className="card p-4">
                                    <p>
                                        "As someone who's particular about my car, I've tried several detailing services. Sunrise Detailing is in a league of their own. The paint correction and ceramic coating they did on my BMW is absolutely flawless. Highly recommend!"
                                    </p>
                                    <div className="d-flex align-items-center mt-auto pt-3">
                                        <img
                                            src="/images/Place-Holder-64x64.jpg"
                                            alt="Muskan Kashyap"
                                            className="rounded-circle me-3"
                                            width="60"
                                            height="60"
                                        />
                                        <div>
                                            <h5 className="mb-0">Muskan Kashyap</h5>
                                            <small className="text-color-2">BMW 5 Series Owner</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-xl-4" data-aos="fade-up" data-aos-delay="500" data-aos-duration="800">
                            <div className="d-flex flex-column h-100 gap-4">
                                <div className="card p-4">
                                    <p>
                                        "I brought in my vintage Mustang, and the team treated it like their own. The attention to detail was incredible – they restored the interior, polished the paint to perfection, and even detailed the engine bay. These guys are true professionals."
                                    </p>
                                    <div className="d-flex align-items-center mt-4">
                                        <img
                                            src="/images/Place-Holder-64x64.jpg"
                                            alt="Atul Bhardwaj"
                                            className="rounded-circle me-3"
                                            width="60"
                                            height="60"
                                        />
                                        <div>
                                            <h5 className="mb-0">Atul Bhardwaj</h5>
                                            <small className="text-color-2">1967 Mustang Owner</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="card p-4">
                                    <p>
                                        "Sunrise Detailing transformed my daily driver. The interior smelled like a new car again, and the exterior shine is incredible. The staff was friendly and explained everything they were doing. I'll definitely be back regularly!"
                                    </p>
                                    <div className="d-flex align-items-center mt-auto pt-3">
                                        <img
                                            src="/images/Place-Holder-64x64.jpg"
                                            alt="Jatin Malhotra"
                                            className="rounded-circle me-3"
                                            width="60"
                                            height="60"
                                        />
                                        <div>
                                            <h5 className="mb-0">Jatin Malhotra</h5>
                                            <small className="text-color-2">Toyota Camry Owner</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-xl-4" data-aos="fade-left" data-aos-delay="350" data-aos-duration="800">
                            <div className="d-flex flex-column h-100 gap-4">
                                <div className="card p-4">
                                    <p>
                                        "After years of neglect, my truck needed serious help. Sunrise took on the challenge and delivered amazing results. They removed stains I thought were permanent and brought back the shine. Great service at a fair price!"
                                    </p>
                                    <div className="d-flex align-items-center mt-auto pt-3">
                                        <img
                                            src="/images/Place-Holder-64x64.jpg"
                                            alt="Ajay Hooda"
                                            className="rounded-circle me-3"
                                            width="60"
                                            height="60"
                                        />
                                        <div>
                                            <h5 className="mb-0">Ajay Hooda</h5>
                                            <small className="text-color-2">Ford F-150 Owner</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="card p-4">
                                    <p>
                                        "I've been coming to Sunrise Detailing for over two years now, and they never disappoint. Consistent quality, friendly service, and my Audi always looks showroom-perfect. They've earned a customer for life."
                                    </p>
                                    <div className="d-flex align-items-center mt-auto pt-3">
                                        <img
                                            src="/images/Place-Holder-64x64.jpg"
                                            alt="Arun Kumar"
                                            className="rounded-circle me-3"
                                            width="60"
                                            height="60"
                                        />
                                        <div>
                                            <h5 className="mb-0">Arun Kumar</h5>
                                            <small className="text-color-2">Audi A4 Owner</small>
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
                        <button onClick={() => setShowModal(true)} className="btn btn-lg btn-cta-primary">
                            Booking Now
                        </button>
                    </div>
                </div>
            </section>
            {/* #cta end */}
            {/* #cta end */}

            <AppointmentModal show={showModal} onClose={() => setShowModal(false)} />
        </main>
    );
}
