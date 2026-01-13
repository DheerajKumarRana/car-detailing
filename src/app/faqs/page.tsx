'use client';

import { useState } from 'react';
import AppointmentModal from '@/components/AppointmentModal';
import Link from 'next/link';

export default function FAQs() {
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
                        <h1 className="heading fw-bold">FAQs</h1>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link href="/">Home</Link>
                                </li>
                                <li className="breadcrumb-item" aria-current="page">
                                    Pages
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">
                                    FAQs
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </section>
            {/* #banner end */}

            {/* FAQs Section */}
            <section className="section py-5 my-5">
                <div className="b-container">
                    <div className="row d-flex align-items-end g-md-5">
                        <div className="col-12 col-xl-4 text-center text-xl-end order-2">
                            <p className="text-color-2">
                                Still Have Questions? Find Your Answers Here! or <button onClick={() => setShowModal(true)} className="btn p-0 text-primary-color text-decoration-underline border-0 bg-transparent">Contact Us</button>
                            </p>
                        </div>
                        <div className="col-12 col-xl-8 text-center text-xl-start order-1 order-xl-2">
                            <h2 className="fw-bolder" data-aos="fade-left" data-aos-delay="100" data-aos-duration="800">
                                Everything You Need to Know About Our <span className="text-primary-color">Detailing Services</span>
                            </h2>
                        </div>
                    </div>

                    <div className="row mt-4 g-md-5">
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
