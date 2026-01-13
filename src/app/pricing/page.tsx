"use client";

import Link from 'next/link';
import { useState } from 'react';
import AppointmentModal from '@/components/AppointmentModal';

export default function Pricing() {
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
                        <h1 className="heading fw-bold">Pricing Plan</h1>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link href="/">Home</Link>
                                </li>
                                <li className="breadcrumb-item" aria-current="page">
                                    Pages
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">
                                    Pricing Plan
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </section>
            {/* #banner end */}

            {/* Pricing Section */}
            <section className="section py-5 my-5">
                <div className="b-container">
                    <div className="row text-center text-lg-start">
                        <div className="col-12 col-xl-7">
                            <h6 className="text-color-2">PRICING PLAN</h6>
                            <h2 className="heading" data-aos="fade-right" data-aos-delay="100" data-aos-duration="800">
                                Choose the Perfect Detailing Package for Your Car
                            </h2>
                        </div>
                        <div className="col-12 col-xl-5 pt-4">
                            <p className="text-color-2">
                                Discover the ideal detailing package tailored to your car’s needs and condition. Whether you’re looking
                                for a quick refresh or a full restoration, our options are designed to deliver exceptional results and
                                long-lasting protection. Let your vehicle shine with the care it truly deserves.
                            </p>
                        </div>
                    </div>
                    <div className="row g-4 mt-5">
                        {/* Basic plan */}
                        <div className="col-12 col-md-6 col-xl-4" data-aos="fade-right" data-aos-delay="100" data-aos-duration="800">
                            <div className="card bg-secondary-color text-white rounded-4 p-4">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h3 >PPF</h3>
                                    {/* <span className="bg-accent-color text-color-2 rounded-2 py-2 px-3">Estimated Time: 1.5 – 2 Hours</span> */}
                                </div>

                                <div className="heading">
                                    <h5 className="mt-4">Start With</h5>
                                    <h4 className="fw-bolder text-primary-color">Rs. 29,000 - 90,000</h4>
                                </div>

                                {/* <p className="text-color-2 mt-4">Designed for regular maintenance, keeping your car clean and fresh.</p> */}
                                {/* <p className="text-color-2 mt-4">Designed for regular maintenance, keeping your car clean and fresh.</p> */}
                                <button onClick={() => setShowModal(true)} className="btn btn-lg btn-cta-primary my-3">
                                    Choose This Plan
                                </button>

                                <div className="row bg-accent-color rounded-4 mt-4 py-4 px-2">
                                    <h4 className="heading">Brands:</h4>
                                    <ul className="list-unstyled text-color-2">
                                        <li className="mt-3">
                                            <i className="bi bi-check-square-fill text-primary-color me-2"></i>Luminar
                                        </li>
                                        <li className="mt-3">
                                            <i className="bi bi-check-square-fill text-primary-color me-2"></i>CeraWare
                                        </li>
                                        <li className="mt-3">
                                            <i className="bi bi-check-square-fill text-primary-color me-2"></i>NAR
                                        </li>
                                        <li className="mt-3">
                                            <i className="bi bi-check-square-fill text-primary-color me-2"></i>USA
                                        </li>
                                        <li className="mt-3">
                                            <i className="bi bi-check-square-fill text-primary-color me-2"></i>Boss PPF
                                        </li>
                                        <li className="mt-3">
                                            <i className="bi bi-check-square-fill text-primary-color me-2"></i>X-PRO
                                        </li>
                                        <li className="mt-3">
                                            <i className="bi bi-check-square-fill text-primary-color me-2"></i>Other
                                        </li>
                                    </ul>
                                </div>

                                <p className="text-color-2 mt-4">
                                    <strong>Uses:</strong> Vehicle wraps allow you to change your car’s appearance while protecting the original paint underneath. Wraps are fully removable and customizable.
                                </p>
                            </div>
                        </div>
                        {/* Premium plan */}
                        <div className="col-12 col-md-6 col-xl-4" data-aos="fade-up" data-aos-delay="500" data-aos-duration="800">
                            <div className="card bg-secondary-color text-white rounded-4 p-4">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h3>Ceramic Coating</h3>
                                    {/* <span className="bg-accent-color rounded-2 p-2">Estimated Time: 2 – 3 Hours</span> */}
                                </div>

                                <div className="heading">
                                    <h5 className="mt-4">Start With</h5>
                                    <h4 className="fw-bolder text-primary-color">Rs.6,999 - 30,000</h4>
                                </div>

                                {/* <p className="text-color-2 mt-4">A deep clean inside and out, perfect for cars needing extra attention.</p> */}
                                {/* <p className="text-color-2 mt-4">A deep clean inside and out, perfect for cars needing extra attention.</p> */}
                                <button onClick={() => setShowModal(true)} className="btn btn-lg btn-cta-primary my-3">
                                    Choose This Plan
                                </button>

                                <div className="row bg-accent-color rounded-4 mt-4 py-4 px-2">
                                    <h4 className="heading">Brands :</h4>
                                    <ul className="list-unstyled text-color-2">
                                        <li className="mt-3">
                                            <i className="bi bi-check-square-fill text-primary-color me-2"></i>Graphine
                                        </li>
                                        <li className="mt-3">
                                            <i className="bi bi-check-square-fill text-primary-color me-2"></i>3M
                                        </li>
                                        <li className="mt-3">
                                            <i className="bi bi-check-square-fill text-primary-color me-2"></i>Meguar

                                        </li>
                                        <li className="mt-3">
                                            <i className="bi bi-check-square-fill text-primary-color me-2"></i>Mahindra
                                        </li>
                                        <li className="mt-3">
                                            <i className="bi bi-check-square-fill text-primary-color me-2"></i>9H
                                        </li><li className="mt-3">
                                            <i className="bi bi-check-square-fill text-primary-color me-2"></i>10H
                                        </li><li className="mt-3">
                                            <i className="bi bi-check-square-fill text-primary-color me-2"></i>12 PRO
                                        </li><li className="mt-3">
                                            <i className="bi bi-check-square-fill text-primary-color me-2"></i>3D Ceramic Coating
                                        </li>
                                    </ul>
                                </div>

                                <p className="text-color-2 mt-4">
                                    <strong>Uses:</strong> “Cars face sun, pollution, dust, rain and bird droppings daily, dulling paint. Ceramic Coating adds a strong protective layer, boosting gloss and preventing oxidation.”
                                </p>
                            </div>
                        </div>
                        {/* Ultimate plan */}
                        <div className="col-12 col-xl-4" data-aos="fade-left" data-aos-delay="350" data-aos-duration="800">
                            <div className="card bg-secondary-color text-white rounded-4 p-4">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h3>Wrap</h3>
                                    {/* <span className="bg-accent-color rounded-2 p-2">Estimated Time: 4 – 7 Hours</span> */}
                                </div>

                                <div className="heading">
                                    <h5 className="mt-4">Start With</h5>
                                    <h4 className="fw-bolder text-primary-color">Rs.24,999- 90,000</h4>
                                </div>

                                {/* <p className="text-color-2 mt-4">
                                    Perfect clean like a new car, service for cars needing more extra attention.
                                </p> */}
                                {/* <p className="text-color-2 mt-4">
                                    Perfect clean like a new car, service for cars needing more extra attention.
                                </p> */}
                                <button onClick={() => setShowModal(true)} className="btn btn-lg btn-cta-primary my-3">
                                    Choose This Plan
                                </button>

                                <div className="row bg-accent-color rounded-4 mt-4 py-4 px-2">
                                    <h4 className="heading">Colors:</h4>
                                    <ul className="list-unstyled text-color-2">
                                        <li className="mt-3">
                                            <i className="bi bi-check-square-fill text-primary-color me-2"></i>Red Black
                                        </li>
                                        <li className="mt-3">
                                            <i className="bi bi-check-square-fill text-primary-color me-2"></i>Red

                                        </li>
                                        <li className="mt-3">
                                            <i className="bi bi-check-square-fill text-primary-color me-2"></i>Yellow
                                        </li>
                                        <li className="mt-3">
                                            <i className="bi bi-check-square-fill text-primary-color me-2"></i>White
                                        </li>
                                        <li className="mt-3">
                                            <i className="bi bi-check-square-fill text-primary-color me-2"></i>Grey
                                        </li>
                                        <li className="mt-3">
                                            <i className="bi bi-check-square-fill text-primary-color me-2"></i>Others
                                        </li>
                                    </ul>
                                </div>

                                <p className="text-color-2 mt-4">
                                    <strong>Uses:</strong> Vehicle wraps allow you to change your car’s appearance while protecting the original paint underneath. Wraps are fully removable and customizable.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* #pricing end */}

            {/* Appointment section */}
            <section className="section bg-secondary-color" style={{ padding: '10vh 0' }}>
                <div className="b-container">
                    <div className="row g-5 mt-0 mt-xl-5 mx-auto">
                        <div className="col-12 col-xl-6 pt-0 mt-0">
                            {/* title */}
                            <h6 className="text-color-2">HOW IT WORKS</h6>
                            <h2 className="heading" data-aos="fade-right" data-aos-delay="100" data-aos-duration="800">
                                Obtain Your Car's History In Just Three Easy Steps.
                            </h2>
                            <div className="mt-4">
                                <button onClick={() => setShowModal(true)} className="btn btn-lg btn-cta-primary">
                                    Let's Get In Touch
                                </button>
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
                                        <div className="accordion-body-2">
                                            <p>
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
                                        <div className="accordion-body-2">
                                            <p>
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
                                        <div className="accordion-body-2">
                                            <p>
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

            {/* FAQs Section */}
            <section className="section py-5 my-5">
                <div className="b-container">
                    <div className="row d-flex align-items-end g-md-5">
                        <div className="col-12 col-xl-4 text-center text-xl-end order-2">
                            <p className="text-color-2">
                                Still Have Questions? Find Your Answers Here! or <span className="text-primary-color">Contact Us</span>
                            </p>
                        </div>
                        <div className="col-12 col-xl-8 text-center text-xl-start order-1 order-xl-2">
                            <h2 className="fw-bolder" data-aos="fade-left" data-aos-delay="100" data-aos-duration="800">
                                Everything You Need to Know About Our <span className="text-primary-color">Detailing Services</span>
                            </h2>
                        </div>
                    </div>

                    <div className="row mt-0 mt-xl-4 g-md-5">
                        {/* Vertical Tabs */}
                        <div className="col-12 col-md-4">
                            <nav className="nav flex-column nav-pills" id="faq-tabs" role="tablist" aria-orientation="vertical">
                                <button
                                    className="nav-link active"
                                    id="faq-general-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#faq-general"
                                    type="button"
                                    role="tab"
                                    aria-controls="faq-general"
                                    aria-selected="true"
                                >
                                    General Questions
                                </button>
                                <button
                                    className="nav-link"
                                    id="faq-services-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#faq-services"
                                    type="button"
                                    role="tab"
                                    aria-controls="faq-services"
                                    aria-selected="false"
                                >
                                    Services & Process Questions
                                </button>
                                <button
                                    className="nav-link"
                                    id="faq-pricing-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#faq-pricing"
                                    type="button"
                                    role="tab"
                                    aria-controls="faq-pricing"
                                    aria-selected="false"
                                >
                                    Pricing & Payment Questions
                                </button>
                            </nav>
                        </div>

                        {/* Tab Content Area */}
                        <div className="col-12 col-md-8">
                            <div
                                className="tab-content"
                                id="faq-tab-content"
                                data-aos="fade-left"
                                data-aos-delay="350"
                                data-aos-duration="800"
                            >
                                {/* GENERAL */}
                                <div
                                    className="tab-pane fade show active"
                                    id="faq-general"
                                    role="tabpanel"
                                    aria-labelledby="faq-general-tab"
                                >
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
                                                        Car detailing is a deep cleaning process that restores, protects, and enhances both the
                                                        interior and exterior of your vehicle, going beyond a regular car wash.
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
                                                        The time varies depending on the package you choose. A basic detailing takes about 1.5–2
                                                        hours, while a full detailing can take 4–6 hours or more.
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
                                                        Yes! We prioritize high-quality, biodegradable, and eco-friendly products that are safe for
                                                        both your car and the environment.
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
                                                        Yes, we recommend booking an appointment to ensure availability and the best service.
                                                        However, we do accept walk-ins based on availability.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* SERVICES */}
                                <div
                                    className="tab-pane fade"
                                    id="faq-services"
                                    role="tabpanel"
                                    aria-labelledby="faq-services-tab"
                                >
                                    <div className="accordion" id="accordionServices">
                                        <div className="accordion-item">
                                            <h5 className="accordion-header" id="ser-heading-1">
                                                <button
                                                    className="accordion-button"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#ser-collapse-1"
                                                    aria-expanded="true"
                                                    aria-controls="ser-collapse-1"
                                                >
                                                    What’s the difference between a car wash and car detailing?
                                                </button>
                                            </h5>
                                            <div
                                                id="ser-collapse-1"
                                                className="accordion-collapse collapse show"
                                                aria-labelledby="ser-heading-1"
                                                data-bs-parent="#accordionServices"
                                            >
                                                <div className="accordion-body">
                                                    <p>
                                                        A car wash is a quick cleaning of the exterior, while detailing is a deep cleaning,
                                                        polishing, and protecting of both the interior and exterior.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="accordion-item">
                                            <h5 className="accordion-header" id="ser-heading-2">
                                                <button
                                                    className="accordion-button collapsed"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#ser-collapse-2"
                                                    aria-expanded="false"
                                                    aria-controls="ser-collapse-2"
                                                >
                                                    Do you offer mobile detailing services?
                                                </button>
                                            </h5>
                                            <div
                                                id="ser-collapse-2"
                                                className="accordion-collapse collapse"
                                                aria-labelledby="ser-heading-2"
                                                data-bs-parent="#accordionServices"
                                            >
                                                <div className="accordion-body">
                                                    <p>
                                                        Yes, we provide mobile detailing for added convenience. We come to your home or workplace
                                                        with all the necessary equipment.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="accordion-item">
                                            <h5 className="accordion-header" id="ser-heading-3">
                                                <button
                                                    className="accordion-button collapsed"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#ser-collapse-3"
                                                    aria-expanded="false"
                                                    aria-controls="ser-collapse-3"
                                                >
                                                    Will detailing remove scratches from my car?
                                                </button>
                                            </h5>
                                            <div
                                                id="ser-collapse-3"
                                                className="accordion-collapse collapse"
                                                aria-labelledby="ser-heading-3"
                                                data-bs-parent="#accordionServices"
                                            >
                                                <div className="accordion-body">
                                                    <p>
                                                        Minor scratches and swirl marks can be removed with our paint correction service, but deep
                                                        scratches may require additional repair work.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="accordion-item">
                                            <h5 className="accordion-header" id="ser-heading-4">
                                                <button
                                                    className="accordion-button collapsed"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#ser-collapse-4"
                                                    aria-expanded="false"
                                                    aria-controls="ser-collapse-4"
                                                >
                                                    Does car detailing include engine cleaning?
                                                </button>
                                            </h5>
                                            <div
                                                id="ser-collapse-4"
                                                className="accordion-collapse collapse"
                                                aria-labelledby="ser-heading-4"
                                                data-bs-parent="#accordionServices"
                                            >
                                                <div className="accordion-body">
                                                    <p>
                                                        Yes, we offer engine bay cleaning as part of our premium and ultimate detailing packages to
                                                        remove dirt and grease buildup.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="accordion-item">
                                            <h5 className="accordion-header" id="ser-heading-5">
                                                <button
                                                    className="accordion-button collapsed"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#ser-collapse-5"
                                                    aria-expanded="false"
                                                    aria-controls="ser-collapse-5"
                                                >
                                                    Can you remove stains and odors from my car’s interior?
                                                </button>
                                            </h5>
                                            <div
                                                id="ser-collapse-5"
                                                className="accordion-collapse collapse"
                                                aria-labelledby="ser-heading-5"
                                                data-bs-parent="#accordionServices"
                                            >
                                                <div className="accordion-body">
                                                    <p>
                                                        Absolutely! We use professional-grade steam cleaning and deodorizing treatments to remove
                                                        tough stains and odors from your seats, carpets, and upholstery.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* PRICING */}
                                <div
                                    className="tab-pane fade"
                                    id="faq-pricing"
                                    role="tabpanel"
                                    aria-labelledby="faq-pricing-tab"
                                >
                                    <div className="accordion" id="accordionPricing">
                                        <div className="accordion-item">
                                            <h5 className="accordion-header" id="pri-heading-1">
                                                <button
                                                    className="accordion-button"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#pri-collapse-1"
                                                    aria-expanded="true"
                                                    aria-controls="pri-collapse-1"
                                                >
                                                    How much does car detailing cost?
                                                </button>
                                            </h5>
                                            <div
                                                id="pri-collapse-1"
                                                className="accordion-collapse collapse show"
                                                aria-labelledby="pri-heading-1"
                                                data-bs-parent="#accordionPricing"
                                            >
                                                <div className="accordion-body">
                                                    <p>
                                                        Our pricing depends on the level of service you choose. We offer Basic, Premium, and
                                                        Ultimate detailing packages to fit different needs and budgets.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="accordion-item">
                                            <h5 className="accordion-header" id="pri-heading-2">
                                                <button
                                                    className="accordion-button collapsed"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#pri-collapse-2"
                                                    aria-expanded="false"
                                                    aria-controls="pri-collapse-2"
                                                >
                                                    Do you offer any discounts or membership plans?
                                                </button>
                                            </h5>
                                            <div
                                                id="pri-collapse-2"
                                                className="accordion-collapse collapse"
                                                aria-labelledby="pri-heading-2"
                                                data-bs-parent="#accordionPricing"
                                            >
                                                <div className="accordion-body">
                                                    <p>
                                                        Yes! We offer loyalty discounts, package deals, and membership plans for regular customers.
                                                        Contact us for more details.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="accordion-item">
                                            <h5 className="accordion-header" id="pri-heading-3">
                                                <button
                                                    className="accordion-button collapsed"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#pri-collapse-3"
                                                    aria-expanded="false"
                                                    aria-controls="pri-collapse-3"
                                                >
                                                    What payment methods do you accept?
                                                </button>
                                            </h5>
                                            <div
                                                id="pri-collapse-3"
                                                className="accordion-collapse collapse"
                                                aria-labelledby="pri-heading-3"
                                                data-bs-parent="#accordionPricing"
                                            >
                                                <div className="accordion-body">
                                                    <p>
                                                        We accept cash, credit/debit cards, mobile payments, and online transfers for your
                                                        convenience.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="accordion-item">
                                            <h5 className="accordion-header" id="pri-heading-4">
                                                <button
                                                    className="accordion-button collapsed"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#pri-collapse-4"
                                                    aria-expanded="false"
                                                    aria-controls="pri-collapse-4"
                                                >
                                                    Do you offer a satisfaction guarantee?
                                                </button>
                                            </h5>
                                            <div
                                                id="pri-collapse-4"
                                                className="accordion-collapse collapse"
                                                aria-labelledby="pri-heading-4"
                                                data-bs-parent="#accordionPricing"
                                            >
                                                <div className="accordion-body">
                                                    <p>
                                                        Yes, we stand by our work. If you’re not satisfied, let us know within 24 hours, and we’ll
                                                        make it right!
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="accordion-item">
                                            <h5 className="accordion-header" id="pri-heading-5">
                                                <button
                                                    className="accordion-button collapsed"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#pri-collapse-5"
                                                    aria-expanded="false"
                                                    aria-controls="pri-collapse-5"
                                                >
                                                    Are there any additional fees for large or excessively dirty vehicles?
                                                </button>
                                            </h5>
                                            <div
                                                id="pri-collapse-5"
                                                className="accordion-collapse collapse"
                                                aria-labelledby="pri-heading-5"
                                                data-bs-parent="#accordionPricing"
                                            >
                                                <div className="accordion-body">
                                                    <p>
                                                        Some larger vehicles (SUVs, trucks, vans) or cars with extreme dirt/stains may require
                                                        extra time and effort, which could result in an additional fee. We’ll always inform you
                                                        upfront.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* #faqs end */}
            {/* <section className="section py-5 my-5">
            </section> */}
            {/* #blog end */}
            <AppointmentModal show={showModal} onClose={() => setShowModal(false)} />
        </main>
    );
}
