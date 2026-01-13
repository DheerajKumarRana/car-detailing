'use client';

import { useState } from 'react';
import AppointmentModal from '@/components/AppointmentModal';
import Link from 'next/link';

export default function ServiceDetail() {
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
                        <h1 className="heading fw-bold">Service Detail</h1>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link href="/">Home</Link>
                                </li>
                                <li className="breadcrumb-item" aria-current="page">
                                    Services
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">
                                    Service Detail
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </section>
            {/* #banner end */}

            {/* Service-Detail Section */}
            <section className="section py-5 my-5">
                <div className="b-container">
                    <div className="row mx-auto g-5">
                        {/* Services Tabs */}
                        <div className="col-12 col-lg-4 order-2 order-lg-1">
                            <div className="row mx-auto d-flex flex-column">
                                {/* Tabs Option */}
                                <div className="card bg-secondary-color rounded-4 p-2">
                                    <div className="card-body">
                                        <h4 className="heading mb-3">Our Services</h4>
                                        <div className="border-top pt-4">
                                            <Link
                                                href="/service-detail"
                                                className="btn btn-lg btn-cta-secondary w-100 rounded-3 text-start mb-3"
                                            >
                                                Exterior Detailing <i className="bi bi-arrow-right float-end"></i>
                                            </Link>
                                            <Link
                                                href="/service-detail"
                                                className="btn btn-lg btn-cta-secondary w-100 rounded-3 text-start mb-3"
                                            >
                                                Interior Detailing <i className="bi bi-arrow-right float-end"></i>
                                            </Link>
                                            <Link
                                                href="/service-detail"
                                                className="btn btn-lg btn-cta-secondary w-100 rounded-3 text-start mb-3"
                                            >
                                                Paint Correction <i className="bi bi-arrow-right float-end"></i>
                                            </Link>
                                            <Link
                                                href="/service-detail"
                                                className="btn btn-lg btn-cta-secondary w-100 rounded-3 text-start mb-3"
                                            >
                                                Ceramic Coating <i className="bi bi-arrow-right float-end"></i>
                                            </Link>
                                            <Link
                                                href="/service-detail"
                                                className="btn btn-lg btn-cta-secondary w-100 rounded-3 text-start mb-3"
                                            >
                                                Engine Bay Cleaning <i className="bi bi-arrow-right float-end"></i>
                                            </Link>
                                            <Link
                                                href="/service-detail"
                                                className="btn btn-lg btn-cta-secondary w-100 rounded-3 text-start mb-3"
                                            >
                                                Headlight Restoration <i className="bi bi-arrow-right float-end"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                {/* CTA Shortcut */}
                                <div
                                    className="card h-100 position-relative rounded-4 mt-5 overflow-hidden"
                                    style={{
                                        backgroundImage: "url('/images/Place-Holder-1920x1280.jpg')",
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                    }}
                                >
                                    <div className="bg-overlay position-absolute top-0 start-0 w-100 h-100 z-1"></div>
                                    <div className="card-body position-relative z-2 py-5 px-2 text-center">
                                        <h3 className="heading">
                                            Experience the <span className="text-primary-color">Ultimate</span> Car Detailing
                                        </h3>
                                        <p className="card-text mt-3">
                                            Book Your Detailing Today! and get <span className="text-primary-color">30% cut off</span>
                                        </p>
                                        <button onClick={() => setShowModal(true)} className="btn btn-lg btn-cta-primary mt-3">
                                            Book Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-lg-8 order-1">
                            <div className="ratio ratio-16x9">
                                <img
                                    src="/images/Place-Holder-1920x1280.jpg"
                                    alt="Service Detail Cover"
                                    className="img-fluid rounded-4"
                                />
                            </div>
                            <h2 className="heading mt-3">
                                Flawless Finish, Long-Lasting Protection{' '}
                                <span className="text-primary-color">Exterior Detailing at Its Best!</span>
                            </h2>
                            <p className="text-color-2">
                                Experience the ultimate in vehicle care with our Flawless Finish, Long-Lasting Protection – Exterior
                                Detailing at Its Best! Our expert detailing service is designed to restore your car’s original shine
                                while applying premium protective coatings that guard against weather, UV rays, and daily wear. From
                                meticulous washing and polishing to advanced paint protection, we ensure every inch of your vehicle’s
                                exterior looks stunning and stays protected for the long haul. Let your car turn heads with a finish that
                                truly lasts.
                            </p>

                            <div className="row bg-secondary-color mx-auto g-3 pt-3 px-3 pb-4 rounded-4 mt-5">
                                <div className="col-md-6">
                                    <div className="bg-accent-color-2 text-white p-4 rounded-4 h-100">
                                        <h5
                                            className="bg-accent-color heading rounded-3 p-3 mb-4"
                                            style={{ width: '105px', height: '55px' }}
                                        >
                                            Step 1
                                        </h5>
                                        <h6 className="heading">Deep Cleaning & Decontamination</h6>
                                        <p className="text-color-2 mb-0">
                                            Integer lacinia consectetur leo, sed egestas neque lobortis nec. Praesent risus sapien, gravida sit
                                            amet vestibulum mattis.
                                        </p>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="bg-accent-color-2 text-white p-4 rounded-4 h-100">
                                        <h5
                                            className="bg-accent-color heading rounded-3 p-3 mb-4"
                                            style={{ width: '105px', height: '55px' }}
                                        >
                                            Step 2
                                        </h5>
                                        <h6 className="heading">Paint Correction & Swirl Removal</h6>
                                        <p className="text-color-2 mb-0">
                                            Integer lacinia consectetur leo, sed egestas neque lobortis nec. Praesent risus sapien, gravida sit
                                            amet vestibulum mattis.
                                        </p>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="bg-accent-color-2 text-white p-4 rounded-4 h-100">
                                        <h5
                                            className="bg-accent-color heading rounded-3 p-3 mb-4"
                                            style={{ width: '105px', height: '55px' }}
                                        >
                                            Step 3
                                        </h5>
                                        <h6 className="heading">Protective Coating Application</h6>
                                        <p className="text-color-2 mb-0">
                                            Integer lacinia consectetur leo, sed egestas neque lobortis nec. Praesent risus sapien, gravida sit
                                            amet vestibulum mattis.
                                        </p>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="bg-accent-color-2 text-white p-4 rounded-4 h-100">
                                        <h5
                                            className="bg-accent-color heading rounded-3 p-3 mb-4"
                                            style={{ width: '105px', height: '55px' }}
                                        >
                                            Step 4
                                        </h5>
                                        <h6 className="heading">Finishing Touches & Quality Inspection</h6>
                                        <p className="text-color-2 mb-0">
                                            Integer lacinia consectetur leo, sed egestas neque lobortis nec. Praesent risus sapien, gravida sit
                                            amet vestibulum mattis.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <h3 className="heading mt-5">FAQs : Anything about Exterior Detailing</h3>

                            <div className="accordion" id="accordionGeneral">
                                <div className="accordion-item">
                                    <h5 className="accordion-header" id="gen-heading-1">
                                        <button
                                            className="accordion-button"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#gen-collapse-1"
                                            aria-expanded="true"
                                            aria-controls="gen-collapse-1"
                                        >
                                            What is car detailing?
                                        </button>
                                    </h5>
                                    <div
                                        id="gen-collapse-1"
                                        className="accordion-collapse collapse show"
                                        aria-labelledby="gen-heading-1"
                                        data-bs-parent="#accordionGeneral"
                                    >
                                        <div className="accordion-body">
                                            <p>
                                                Car detailing is a deep cleaning process that restores, protects, and enhances both the interior
                                                and exterior of your vehicle, going beyond a regular car wash.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h5 className="accordion-header" id="gen-heading-2">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#gen-collapse-2"
                                            aria-expanded="false"
                                            aria-controls="gen-collapse-2"
                                        >
                                            How often should I get my car detailed?
                                        </button>
                                    </h5>
                                    <div
                                        id="gen-collapse-2"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="gen-heading-2"
                                        data-bs-parent="#accordionGeneral"
                                    >
                                        <div className="accordion-body">
                                            <p>
                                                It depends on your driving habits and environment, but we recommend a full detail every 3–6
                                                months to maintain your car’s condition.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h5 className="accordion-header" id="gen-heading-3">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#gen-collapse-3"
                                            aria-expanded="false"
                                            aria-controls="gen-collapse-3"
                                        >
                                            How long does a car detailing service take?
                                        </button>
                                    </h5>
                                    <div
                                        id="gen-collapse-3"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="gen-heading-3"
                                        data-bs-parent="#accordionGeneral"
                                    >
                                        <div className="accordion-body">
                                            <p>
                                                The time varies depending on the package you choose. A basic detailing takes about 1.5–2 hours,
                                                while a full detailing can take 4–6 hours or more.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h5 className="accordion-header" id="gen-heading-4">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#gen-collapse-4"
                                            aria-expanded="false"
                                            aria-controls="gen-collapse-4"
                                        >
                                            Do you use eco-friendly products?
                                        </button>
                                    </h5>
                                    <div
                                        id="gen-collapse-4"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="gen-heading-4"
                                        data-bs-parent="#accordionGeneral"
                                    >
                                        <div className="accordion-body">
                                            <p>
                                                Yes! We prioritize high-quality, biodegradable, and eco-friendly products that are safe for both
                                                your car and the environment.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h5 className="accordion-header" id="gen-heading-5">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#gen-collapse-5"
                                            aria-expanded="false"
                                            aria-controls="gen-collapse-5"
                                        >
                                            Do I need to make an appointment for a detailing service?
                                        </button>
                                    </h5>
                                    <div
                                        id="gen-collapse-5"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="gen-heading-5"
                                        data-bs-parent="#accordionGeneral"
                                    >
                                        <div className="accordion-body">
                                            <p>
                                                Yes, we recommend booking an appointment to ensure availability and the best service. However, we
                                                do accept walk-ins based on availability.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* #service-detail end */}
            <AppointmentModal show={showModal} onClose={() => setShowModal(false)} />
        </main>
    );
}
