'use client';

import { useState } from 'react';
import AppointmentModal from '@/components/AppointmentModal';
import Link from 'next/link';

export default function Services() {
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


                    <div className="d-flex flex-column gap-5">
                        {/* Service 1: Exterior Detailing */}
                        <div className="row g-4 align-items-center" data-aos="fade-up">
                            <div className="col-12 col-xl-6">
                                <div className="img-wrapper rounded-4 overflow-hidden position-relative">
                                    <div className="img-ratio-portrait">
                                        <img src="/images/services/exterior-detailing.jpg" alt="Exterior Detailing" className="w-100 h-100 object-fit-cover position-absolute top-0 start-0" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-xl-6">
                                <h3 className="heading mb-2">Exterior Detailing – Complete Paint Rejuvenation</h3>
                                <h5 className="text-primary-color mb-3">Restore the True Beauty of Your Car’s Exterior</h5>
                                <p className="text-color-2 mb-4">
                                    Daily driving exposes your car to dust, road grime, pollution, and contaminants that a normal wash cannot remove. Exterior Detailing is a deep-cleaning and correction process designed to restore shine, smoothness, and protection to your vehicle’s paint.
                                </p>
                                <h5 className="heading fs-6 mb-2">Why Choose Sunrise Detailing for Exterior Detailing?</h5>
                                <p className="text-color-2 mb-4">
                                    We follow a systematic, professional detailing process using premium products and safe techniques. Every step is designed to clean, correct, and protect your car without damaging the paint.
                                </p>
                                <h5 className="heading fs-6 mb-3">Exterior Detailing Includes:</h5>
                                <ul className="list-unstyled text-color-2">
                                    <li className="mb-2"><i className="bi bi-check-circle-fill text-primary-color me-2"></i>Foam Wash & Hand Wash</li>
                                    <li className="mb-2"><i className="bi bi-check-circle-fill text-primary-color me-2"></i>Clay Bar Decontamination</li>
                                    <li className="mb-2"><i className="bi bi-check-circle-fill text-primary-color me-2"></i>Paint Rubbing & Detailing</li>
                                    <li className="mb-2"><i className="bi bi-check-circle-fill text-primary-color me-2"></i>Compounding</li>
                                    <li className="mb-2"><i className="bi bi-check-circle-fill text-primary-color me-2"></i>Teflon / Ceramic Protection</li>
                                </ul>
                                <h5 className="heading fs-6 mt-3 mb-3">Benefits of Exterior Detailing:</h5>
                                <ul className="list-unstyled text-color-2">
                                    <li className="mb-2"><i className="bi bi-check-circle-fill text-primary-color me-2"></i>Removes embedded dirt & contaminants</li>
                                    <li className="mb-2"><i className="bi bi-check-circle-fill text-primary-color me-2"></i>Eliminates oxidation & dullness</li>
                                    <li className="mb-2"><i className="bi bi-check-circle-fill text-primary-color me-2"></i>Enhances paint smoothness & shine</li>
                                    <li className="mb-2"><i className="bi bi-check-circle-fill text-primary-color me-2"></i>Prepares paint for ceramic or PPF</li>
                                    <li className="mb-2"><i className="bi bi-check-circle-fill text-primary-color me-2"></i>Extends paint life</li>
                                </ul>
                            </div>
                        </div>

                        {/* Service 2: Interior Detailing */}
                        <div className="row g-4 align-items-center flex-xl-row-reverse" data-aos="fade-up">
                            <div className="col-12 col-xl-6">
                                <div className="img-wrapper rounded-4 overflow-hidden position-relative">
                                    <div className="img-ratio-portrait">
                                        <img src="/images/services/interior-detailing.png" alt="Interior Detailing" className="w-100 h-100 object-fit-cover position-absolute top-0 start-0" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-xl-6">
                                <h3 className="heading mb-2">Interior Detailing – Deep Cleaning & Hygiene Care</h3>
                                <h5 className="text-primary-color mb-3">A Fresh, Clean & Comfortable Cabin Experience</h5>
                                <p className="text-color-2 mb-4">
                                    Your car’s interior accumulates dust, stains, bacteria, and odors over time. Interior Detailing restores cleanliness, comfort, and hygiene by deep-cleaning every interior surface.
                                </p>
                                <h5 className="heading fs-6 mb-2">Why Choose Sunrise Detailing for Interior Detailing?</h5>
                                <p className="text-color-2 mb-4">
                                    We use specialized equipment and safe cleaning solutions that are effective yet gentle on fabric, leather, and plastic surfaces. Our team ensures detailed attention to every corner of your car’s cabin.
                                </p>
                                <h5 className="heading fs-6 mb-3">Interior Detailing Includes:</h5>
                                <ul className="list-unstyled text-color-2">
                                    <li className="mb-2"><i className="bi bi-check-circle-fill text-primary-color me-2"></i>Interior Dry Cleaning</li>
                                    <li className="mb-2"><i className="bi bi-check-circle-fill text-primary-color me-2"></i>Seat & Upholstery Cleaning</li>
                                    <li className="mb-2"><i className="bi bi-check-circle-fill text-primary-color me-2"></i>Dashboard & Panel Cleaning</li>
                                    <li className="mb-2"><i className="bi bi-check-circle-fill text-primary-color me-2"></i>Carpet & Floor Mat Cleaning</li>
                                    <li className="mb-2"><i className="bi bi-check-circle-fill text-primary-color me-2"></i>Odor Removal Treatment</li>
                                </ul>
                                <h5 className="heading fs-6 mt-3 mb-3">Benefits of Interior Detailing:</h5>
                                <ul className="list-unstyled text-color-2">
                                    <li className="mb-2"><i className="bi bi-check-circle-fill text-primary-color me-2"></i>Removes stains, dust & allergens</li>
                                    <li className="mb-2"><i className="bi bi-check-circle-fill text-primary-color me-2"></i>Eliminates bad odors</li>
                                    <li className="mb-2"><i className="bi bi-check-circle-fill text-primary-color me-2"></i>Improves cabin hygiene</li>
                                    <li className="mb-2"><i className="bi bi-check-circle-fill text-primary-color me-2"></i>Restores interior look & comfort</li>
                                    <li className="mb-2"><i className="bi bi-check-circle-fill text-primary-color me-2"></i>Safe for fabric, leather & plastics</li>
                                </ul>
                            </div>
                        </div>

                        {/* Service 3: Ceramic Coating */}
                        <div className="row g-4 align-items-center" data-aos="fade-up">
                            <div className="col-12 col-xl-6">
                                <div className="img-wrapper rounded-4 overflow-hidden position-relative">
                                    <div className="img-ratio-portrait">
                                        <img src="/images/services/ceramic-coating.jpg" alt="Ceramic Coating" className="w-100 h-100 object-fit-cover position-absolute top-0 start-0" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-xl-6">
                                <h3 className="heading mb-2">Ceramic Coating – Long-Lasting Gloss & Protection</h3>
                                <h5 className="text-primary-color mb-3">Advanced Protection for a Brilliant, Glossy Finish</h5>
                                <p className="text-color-2 mb-4">
                                    Your car is constantly exposed to sunlight, pollution, dust, rain, bird droppings, and harsh environmental elements. Over time, these factors dull your paint and cause oxidation. Ceramic Coating creates a strong, semi-permanent protective layer that bonds with your vehicle’s paint, enhancing gloss while safeguarding the surface.
                                </p>
                                <h5 className="heading fs-6 mb-2">Why Choose Sunrise Detailing for Ceramic Coating?</h5>
                                <p className="text-color-2 mb-4">
                                    At Sunrise Detailing, we focus on precision and preparation. Before applying ceramic coating, our experts perform professional paint correction to remove swirl marks and imperfections. We use trusted, high-quality ceramic coatings applied by trained technicians to ensure maximum durability, gloss, and performance.
                                </p>
                                <h5 className="heading fs-6 mb-3">Ceramic Coating Options:</h5>
                                <ul className="list-unstyled text-color-2">
                                    <li className="mb-2"><i className="bi bi-check-circle-fill text-primary-color me-2"></i>Single-Layer Ceramic Coating</li>
                                    <li className="mb-2"><i className="bi bi-check-circle-fill text-primary-color me-2"></i>Multi-Layer Ceramic Coating</li>
                                    <li className="mb-2"><i className="bi bi-check-circle-fill text-primary-color me-2"></i>Graphene Ceramic Coating</li>
                                    <li className="mb-2"><i className="bi bi-check-circle-fill text-primary-color me-2"></i>9H / 10H / 12H Ceramic Protection</li>
                                </ul>
                                <div className="mt-3">
                                    <strong className="text-white">Durability:</strong> <span className="text-color-2">1 to 3 Years (depending on package & maintenance)</span>
                                </div>
                                <h5 className="heading fs-6 mt-3 mb-3">Benefits of Ceramic Coating at Sunrise Detailing:</h5>
                                <ul className="list-unstyled text-color-2">
                                    <li className="mb-2"><i className="bi bi-check-circle-fill text-primary-color me-2"></i>Deep, mirror-like gloss enhancement</li>
                                    <li className="mb-2"><i className="bi bi-check-circle-fill text-primary-color me-2"></i>Hydrophobic surface repels water, dirt & grime</li>
                                    <li className="mb-2"><i className="bi bi-check-circle-fill text-primary-color me-2"></i>UV protection prevents fading & oxidation</li>
                                    <li className="mb-2"><i className="bi bi-check-circle-fill text-primary-color me-2"></i>Reduces swirl marks & light scratches</li>
                                    <li className="mb-2"><i className="bi bi-check-circle-fill text-primary-color me-2"></i>Easier washing & low maintenance</li>
                                    <li className="mb-2"><i className="bi bi-check-circle-fill text-primary-color me-2"></i>Enhances overall paint durability</li>
                                </ul>
                            </div>
                        </div>

                        {/* Service 4: PPF (Existing) */}
                        <div className="row g-4 align-items-center flex-xl-row-reverse" data-aos="fade-up">
                            <div className="col-12 col-xl-6">
                                <div className="img-wrapper rounded-4 overflow-hidden position-relative">
                                    <div className="img-ratio-portrait">
                                        <img src="/images/services/ppf-coating.jpg" alt="Paint Protection Film" className="w-100 h-100 object-fit-cover position-absolute top-0 start-0" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-xl-6">
                                <h3 className="heading mb-2">Paint Protection Film (PPF)</h3>
                                <h5 className="text-primary-color mb-3">5 to 7 Year Warranty - The Ultimate Defense</h5>
                                <p className="text-color-2 mb-4">
                                    Your car's paint faces constant threats from the road. Our self-healing PPF shields your vehicle against rock chips, scratches, and road debris with an invisible layer of premium protection.
                                </p>
                                <h5 className="heading fs-6 mb-3">Coverage Options:</h5>
                                <ul className="list-unstyled text-color-2 mb-4">
                                    <li className="mb-2"><i className="bi bi-shield-check text-primary-color me-2"></i>Full Front (Bumper, Hood, Fenders, Mirrors)</li>
                                    <li className="mb-2"><i className="bi bi-shield-check text-primary-color me-2"></i>Full Vehicle Coverage</li>
                                    <li className="mb-2"><i className="bi bi-shield-check text-primary-color me-2"></i>Wear & Tear Package (Door Cups, Edges, Trunk Ledge)</li>
                                </ul>
                                <h5 className="heading fs-6 mb-3">Warranty:</h5>
                                <p className="text-color-2">
                                    Does not yellow, peel, or crack. Backed by a 5 to 7-year manufacturer warranty.
                                </p>
                            </div>
                        </div>

                        {/* Service 5: Premium Vehicle Wraps */}
                        <div className="row g-4 align-items-center" data-aos="fade-up">
                            <div className="col-12 col-xl-6">
                                <div className="img-wrapper rounded-4 overflow-hidden position-relative">
                                    <div className="img-ratio-portrait">
                                        <img src="/images/services-wide.png" alt="Premium Vehicle Wraps" className="w-100 h-100 object-fit-cover position-absolute top-0 start-0" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-xl-6">
                                <h3 className="heading mb-2">Premium Vehicle Wraps – Style & Protection</h3>
                                <h5 className="text-primary-color mb-3">Transform Your Car Without Repainting</h5>
                                <p className="text-color-2 mb-4">
                                    Vehicle wraps allow you to change your car’s appearance while protecting the original paint underneath. Wraps are fully removable and customizable.
                                </p>
                                <h5 className="heading fs-6 mb-2">Why Choose Sunrise Detailing for Vehicle Wraps?</h5>
                                <p className="text-color-2 mb-4">
                                    We use high-quality vinyl wraps and precision installation techniques to deliver a flawless finish with long-lasting results.
                                </p>
                                <h5 className="heading fs-6 mb-3">Wrap Options Available:</h5>
                                <ul className="list-unstyled text-color-2">
                                    <li className="mb-2"><i className="bi bi-palette-fill text-primary-color me-2"></i>Red & Black</li>
                                    <li className="mb-2"><i className="bi bi-palette-fill text-primary-color me-2"></i>Red</li>
                                    <li className="mb-2"><i className="bi bi-palette-fill text-primary-color me-2"></i>Yellow</li>
                                    <li className="mb-2"><i className="bi bi-palette-fill text-primary-color me-2"></i>White</li>
                                    <li className="mb-2"><i className="bi bi-palette-fill text-primary-color me-2"></i>Grey</li>
                                    <li className="mb-2"><i className="bi bi-palette-fill text-primary-color me-2"></i>Custom Colors</li>
                                </ul>
                                <h5 className="heading fs-6 mt-3 mb-3">Benefits of Vehicle Wraps:</h5>
                                <ul className="list-unstyled text-color-2">
                                    <li className="mb-2"><i className="bi bi-check-circle-fill text-primary-color me-2"></i>Protects original paint</li>
                                    <li className="mb-2"><i className="bi bi-check-circle-fill text-primary-color me-2"></i>Fully removable & reversible</li>
                                    <li className="mb-2"><i className="bi bi-check-circle-fill text-primary-color me-2"></i>Unique, premium appearance</li>
                                    <li className="mb-2"><i className="bi bi-check-circle-fill text-primary-color me-2"></i>Cost-effective alternative to repainting</li>
                                </ul>
                            </div>
                        </div>

                        {/* Service 6: Rubbing & Polishing */}
                        <div className="row g-4 align-items-center flex-xl-row-reverse" data-aos="fade-up">
                            <div className="col-12 col-xl-6">
                                <div className="img-wrapper rounded-4 overflow-hidden position-relative">
                                    <div className="img-ratio-portrait">
                                        <img src="/images/services/rubbing-polishing.jpg" alt="Rubbing & Polishing" className="w-100 h-100 object-fit-cover position-absolute top-0 start-0" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-xl-6">
                                <h3 className="heading mb-2">Car Rubbing & Polishing – Paint Correction Service</h3>
                                <h5 className="text-primary-color mb-3">Bring Back the Showroom Shine</h5>
                                <p className="text-color-2 mb-4">
                                    Swirl marks, scratches, and oxidation reduce your car’s shine over time. Rubbing & Polishing is a paint correction process that removes surface imperfections and restores gloss.
                                </p>
                                <h5 className="heading fs-6 mb-2">Why Choose Sunrise Detailing for Rubbing & Polishing?</h5>
                                <p className="text-color-2 mb-4">
                                    Our technicians assess your paint condition and use machine polishing techniques that correct imperfections safely without unnecessary paint removal.
                                </p>
                                <h5 className="heading fs-6 mb-3">Rubbing & Polishing Includes:</h5>
                                <ul className="list-unstyled text-color-2">
                                    <li className="mb-2"><i className="bi bi-check-circle-fill text-primary-color me-2"></i>Paint Rubbing</li>
                                    <li className="mb-2"><i className="bi bi-check-circle-fill text-primary-color me-2"></i>Machine Polishing</li>
                                    <li className="mb-2"><i className="bi bi-check-circle-fill text-primary-color me-2"></i>Gloss Enhancement</li>
                                </ul>
                                <h5 className="heading fs-6 mt-3 mb-3">Benefits:</h5>
                                <ul className="list-unstyled text-color-2">
                                    <li className="mb-2"><i className="bi bi-check-circle-fill text-primary-color me-2"></i>Removes swirl marks & light scratches</li>
                                    <li className="mb-2"><i className="bi bi-check-circle-fill text-primary-color me-2"></i>Restores paint clarity & depth</li>
                                    <li className="mb-2"><i className="bi bi-check-circle-fill text-primary-color me-2"></i>Improves smoothness & shine</li>
                                    <li className="mb-2"><i className="bi bi-check-circle-fill text-primary-color me-2"></i>Ideal before ceramic coating</li>
                                </ul>
                            </div>
                        </div>

                        {/* Service 7: Nano & Teflon Coating */}
                        <div className="row g-4 align-items-center" data-aos="fade-up">
                            <div className="col-12 col-xl-6">
                                <div className="img-wrapper rounded-4 overflow-hidden position-relative">
                                    <div className="img-ratio-portrait">
                                        <img src="/images/services-wide.png" alt="Nano & Teflon Coating" className="w-100 h-100 object-fit-cover position-absolute top-0 start-0" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-xl-6">
                                <h3 className="heading mb-2">Nano & Teflon Coating – Affordable Paint Protection</h3>
                                <h5 className="text-primary-color mb-3">Entry-Level Protection with Visible Results</h5>
                                <p className="text-color-2 mb-4">
                                    Nano and Teflon coatings provide a protective layer that enhances shine while offering basic resistance against dust, water spots, and UV rays.
                                </p>
                                <h5 className="heading fs-6 mb-2">Why Choose Sunrise Detailing for Nano & Teflon Coating?</h5>
                                <p className="text-color-2 mb-4">
                                    We use quality nano and Teflon products applied by trained professionals to ensure even coverage and reliable short-term protection.
                                </p>
                                <div className="mt-3">
                                    <strong className="text-white">Durability:</strong> <span className="text-color-2">3 to 6 Months</span>
                                </div>
                                <h5 className="heading fs-6 mt-3 mb-3">Benefits:</h5>
                                <ul className="list-unstyled text-color-2">
                                    <li className="mb-2"><i className="bi bi-check-circle-fill text-primary-color me-2"></i>Enhances surface gloss</li>
                                    <li className="mb-2"><i className="bi bi-check-circle-fill text-primary-color me-2"></i>Repels dust & water</li>
                                    <li className="mb-2"><i className="bi bi-check-circle-fill text-primary-color me-2"></i>Protects against UV damage</li>
                                    <li className="mb-2"><i className="bi bi-check-circle-fill text-primary-color me-2"></i>Cost-effective protection option</li>
                                </ul>
                            </div>
                        </div>

                        {/* Service 8: Glass Coating */}
                        <div className="row g-4 align-items-center flex-xl-row-reverse" data-aos="fade-up">
                            <div className="col-12 col-xl-6">
                                <div className="img-wrapper rounded-4 overflow-hidden position-relative">
                                    <div className="img-ratio-portrait">
                                        <img src="/images/services/glass-coating.jpg" alt="Glass Coating" className="w-100 h-100 object-fit-cover position-absolute top-0 start-0" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-xl-6">
                                <h3 className="heading mb-2">Glass Coating – Clear Vision & Safer Driving</h3>
                                <h5 className="text-primary-color mb-3">Improved Visibility in All Weather Conditions</h5>
                                <p className="text-color-2 mb-4">
                                    Rain, dust, and road grime reduce visibility and driving safety. Glass Coating creates a water-repellent layer that keeps your windshield and windows clean and clear.
                                </p>
                                <h5 className="heading fs-6 mb-2">Why Choose Sunrise Detailing for Glass Coating?</h5>
                                <p className="text-color-2 mb-4">
                                    We apply advanced glass coatings that bond with the glass surface, improving clarity and reducing the need for frequent wiper usage.
                                </p>
                                <h5 className="heading fs-6 mb-3">Glass Coating Coverage:</h5>
                                <ul className="list-unstyled text-color-2">
                                    <li className="mb-2"><i className="bi bi-check-circle-fill text-primary-color me-2"></i>Windshield</li>
                                    <li className="mb-2"><i className="bi bi-check-circle-fill text-primary-color me-2"></i>Side Windows</li>
                                    <li className="mb-2"><i className="bi bi-check-circle-fill text-primary-color me-2"></i>Rear Glass</li>
                                </ul>
                                <h5 className="heading fs-6 mt-3 mb-3">Benefits:</h5>
                                <ul className="list-unstyled text-color-2">
                                    <li className="mb-2"><i className="bi bi-check-circle-fill text-primary-color me-2"></i>Water beading & quick runoff</li>
                                    <li className="mb-2"><i className="bi bi-check-circle-fill text-primary-color me-2"></i>Reduced glare during rain & night driving</li>
                                    <li className="mb-2"><i className="bi bi-check-circle-fill text-primary-color me-2"></i>Improved visibility & safety</li>
                                    <li className="mb-2"><i className="bi bi-check-circle-fill text-primary-color me-2"></i>Long-lasting clarity</li>
                                </ul>
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
                        <button onClick={() => setShowModal(true)} className="btn btn-lg btn-cta-primary">
                            Booking Now
                        </button>
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

            <AppointmentModal show={showModal} onClose={() => setShowModal(false)} />
        </main >
    );
}
