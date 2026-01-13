'use client';

import { useState } from 'react';
import Link from 'next/link';
import AppointmentModal from '@/components/AppointmentModal';

export default function Team() {
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
                        <h1 className="heading fw-bold">Team</h1>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link href="/">Home</Link>
                                </li>
                                <li className="breadcrumb-item" aria-current="page">
                                    Pages
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">
                                    Team
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </section>
            {/* #banner end */}

            {/* Team Section */}
            <section className="section py-5 my-5">
                <div className="b-container">
                    <div className="row text-center mb-5">
                        <h6 className="text-color-2">OUR TEAMS</h6>
                        <h2 className="heading mt-3" data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">
                            Meet the Car <span className="text-primary-color">Care Enthusiasts</span> Who Bring Out the Best in Your
                            Vehicle
                        </h2>
                    </div>
                    <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4 mx-auto">
                        <div className="col">
                            <div
                                className="card rounded-4 overflow-hidden position-relative"
                                data-aos="fade-right"
                                data-aos-delay="100"
                                data-aos-duration="800"
                            >
                                <div className="img-ratio-113">
                                    <img src="/images/services/ceramic-coating.jpg" alt="Raul Axios" className="img-fluid w-100 h-100 object-fit-cover" />
                                </div>
                                <div className="card-img-overlay d-flex flex-column justify-content-between p-4">
                                    <div className="social-box flex-column">
                                        <Link
                                            href="http://www.facebook.com"
                                            className="rounded-2"
                                            style={{ width: '40px', height: '40px' }}
                                        >
                                            <i className="bi bi-facebook fs-5"></i>
                                        </Link>
                                        <Link href="http://x.com" className="rounded-2" style={{ width: '40px', height: '40px' }}>
                                            <i className="bi bi-twitter-x fs-5"></i>
                                        </Link>
                                        <Link
                                            href="http://www.youtube.com"
                                            className="rounded-2"
                                            style={{ width: '40px', height: '40px' }}
                                        >
                                            <i className="bi bi-youtube fs-5"></i>
                                        </Link>
                                    </div>

                                    <div className="card-team-label text-center rounded-4 px-4 py-3">
                                        <h5 className="heading text-primary-color mb-1">Raul Axios</h5>
                                        <p className="m-0">Founder & Head Detailer</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div
                                className="card rounded-4 overflow-hidden position-relative"
                                data-aos="fade-up"
                                data-aos-delay="100"
                                data-aos-duration="800"
                            >
                                <div className="img-ratio-113">
                                    <img src="/images/services-wide.png" alt="Ubeid Una" className="img-fluid w-100 h-100 object-fit-cover" />
                                </div>
                                <div className="card-img-overlay d-flex flex-column justify-content-between p-4">
                                    <div className="social-box flex-column">
                                        <Link
                                            href="http://www.facebook.com"
                                            className="rounded-2"
                                            style={{ width: '40px', height: '40px' }}
                                        >
                                            <i className="bi bi-facebook fs-5"></i>
                                        </Link>
                                        <Link href="http://x.com" className="rounded-2" style={{ width: '40px', height: '40px' }}>
                                            <i className="bi bi-twitter-x fs-5"></i>
                                        </Link>
                                        <Link
                                            href="http://www.youtube.com"
                                            className="rounded-2"
                                            style={{ width: '40px', height: '40px' }}
                                        >
                                            <i className="bi bi-youtube fs-5"></i>
                                        </Link>
                                    </div>

                                    <div className="card-team-label text-center rounded-4 px-4 py-3">
                                        <h5 className="heading text-primary-color mb-1">Ubeid Una</h5>
                                        <p className="m-0">Customer Relation Manager</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div
                                className="card rounded-4 overflow-hidden position-relative"
                                data-aos="fade-left"
                                data-aos-delay="100"
                                data-aos-duration="800"
                            >
                                <div className="img-ratio-113">
                                    <img src="/images/services/ppf-coating.jpg" alt="Taki Wanabe" className="img-fluid w-100 h-100 object-fit-cover" />
                                </div>
                                <div className="card-img-overlay d-flex flex-column justify-content-between p-4">
                                    <div className="social-box flex-column">
                                        <Link
                                            href="http://www.facebook.com"
                                            className="rounded-2"
                                            style={{ width: '40px', height: '40px' }}
                                        >
                                            <i className="bi bi-facebook fs-5"></i>
                                        </Link>
                                        <Link href="http://x.com" className="rounded-2" style={{ width: '40px', height: '40px' }}>
                                            <i className="bi bi-twitter-x fs-5"></i>
                                        </Link>
                                        <Link
                                            href="http://www.youtube.com"
                                            className="rounded-2"
                                            style={{ width: '40px', height: '40px' }}
                                        >
                                            <i className="bi bi-youtube fs-5"></i>
                                        </Link>
                                    </div>

                                    <div className="card-team-label text-center rounded-4 px-4 py-3">
                                        <h5 className="heading text-primary-color mb-1">Taki Wanabe</h5>
                                        <p className="m-0">Lead Technician & Paint Protection Specialist</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div
                                className="card rounded-4 overflow-hidden position-relative"
                                data-aos="fade-right"
                                data-aos-delay="500"
                                data-aos-duration="800"
                            >
                                <div className="img-ratio-113">
                                    <img src="/images/services/exterior-detailing.jpg" alt="Hafsha Jasmine" className="img-fluid w-100 h-100 object-fit-cover" />
                                </div>
                                <div className="card-img-overlay d-flex flex-column justify-content-between p-4">
                                    <div className="social-box flex-column">
                                        <Link
                                            href="http://www.facebook.com"
                                            className="rounded-2"
                                            style={{ width: '40px', height: '40px' }}
                                        >
                                            <i className="bi bi-facebook fs-5"></i>
                                        </Link>
                                        <Link href="http://x.com" className="rounded-2" style={{ width: '40px', height: '40px' }}>
                                            <i className="bi bi-twitter-x fs-5"></i>
                                        </Link>
                                        <Link
                                            href="http://www.youtube.com"
                                            className="rounded-2"
                                            style={{ width: '40px', height: '40px' }}
                                        >
                                            <i className="bi bi-youtube fs-5"></i>
                                        </Link>
                                    </div>

                                    <div className="card-team-label text-center rounded-4 px-4 py-3">
                                        <h5 className="heading text-primary-color mb-1">Hafsha Jasmine</h5>
                                        <p className="m-0">Marketing & Branding Manager</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div
                                className="card rounded-4 overflow-hidden position-relative"
                                data-aos="fade-up"
                                data-aos-delay="500"
                                data-aos-duration="800"
                            >
                                <div className="img-ratio-113">
                                    <img src="/images/services/interior-detailing.png" alt="Akio Mirfaq" className="img-fluid w-100 h-100 object-fit-cover" />
                                </div>
                                <div className="card-img-overlay d-flex flex-column justify-content-between p-4">
                                    <div className="social-box flex-column">
                                        <Link
                                            href="http://www.facebook.com"
                                            className="rounded-2"
                                            style={{ width: '40px', height: '40px' }}
                                        >
                                            <i className="bi bi-facebook fs-5"></i>
                                        </Link>
                                        <Link href="http://x.com" className="rounded-2" style={{ width: '40px', height: '40px' }}>
                                            <i className="bi bi-twitter-x fs-5"></i>
                                        </Link>
                                        <Link
                                            href="http://www.youtube.com"
                                            className="rounded-2"
                                            style={{ width: '40px', height: '40px' }}
                                        >
                                            <i className="bi bi-youtube fs-5"></i>
                                        </Link>
                                    </div>

                                    <div className="card-team-label text-center rounded-4 px-4 py-3">
                                        <h5 className="heading text-primary-color mb-1">Akio Mirfaq</h5>
                                        <p className="m-0">Interior Detailing Specialist</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div
                                className="card rounded-4 overflow-hidden position-relative"
                                data-aos="fade-left"
                                data-aos-delay="500"
                                data-aos-duration="800"
                            >
                                <div className="img-ratio-113">
                                    <img src="/images/services/rubbing-polishing.jpg" alt="Rizzy Alvarez" className="img-fluid w-100 h-100 object-fit-cover" />
                                </div>
                                <div className="card-img-overlay d-flex flex-column justify-content-between p-4">
                                    <div className="social-box flex-column">
                                        <Link
                                            href="http://www.facebook.com"
                                            className="rounded-2"
                                            style={{ width: '40px', height: '40px' }}
                                        >
                                            <i className="bi bi-facebook fs-5"></i>
                                        </Link>
                                        <Link href="http://x.com" className="rounded-2" style={{ width: '40px', height: '40px' }}>
                                            <i className="bi bi-twitter-x fs-5"></i>
                                        </Link>
                                        <Link
                                            href="http://www.youtube.com"
                                            className="rounded-2"
                                            style={{ width: '40px', height: '40px' }}
                                        >
                                            <i className="bi bi-youtube fs-5"></i>
                                        </Link>
                                    </div>

                                    <div className="card-team-label text-center rounded-4 px-4 py-3">
                                        <h5 className="heading text-primary-color mb-1">Rizzy Alvarez</h5>
                                        <p className="m-0">Mobile Detailing Coordinator</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* #team end */}

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
