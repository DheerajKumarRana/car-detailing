"use client";

import Link from 'next/link';
import { useState } from 'react';
import AppointmentModal from '@/components/AppointmentModal';

export default function Footer() {
    const [showModal, setShowModal] = useState(false);
    return (
        <footer className="footer-section position-relative bg-secondary-color pt-5">
            {/* CTA Section */}
            <div className="container position-relative z-2 mb-5">
                <div className="cta-box bg-accent-color rounded-4 p-4 p-lg-5 d-flex flex-column flex-lg-row align-items-center justify-content-between text-center text-lg-start">
                    <div className="mb-4 mb-lg-0">
                        <h2 className="heading text-white mb-2">Ready to Transform Your Car?</h2>
                        <p className="text-color-2 fs-5 mb-0">Experience the premium care your vehicle deserves.</p>
                    </div>
                    <div>
                        <button onClick={() => setShowModal(true)} className="btn btn-lg btn-cta-primary">
                            Book Appointment <i className="bi bi-arrow-right ms-2"></i>
                        </button>
                    </div>
                </div>
            </div>

            <div className="b-container position-relative z-1 pt-4 pb-5">
                <div className="row g-4 g-lg-5">
                    {/* Brand Column */}
                    <div className="col-12 col-lg-4 mb-4 mb-lg-0">
                        <div className="footer-logo-box mb-4">
                            <img src="/images/latest2.png" alt="Sunrise Detailing" className="img-fluid" style={{ maxHeight: '80px' }} />
                        </div>
                        <p className="text-color-2 mb-4">
                            Providing Premium Car Detailing Services That Bring Out the Best in Your Vehicle, Ensuring a Showroom Shine Every Time.
                        </p>
                        <div className="social-icons d-flex gap-3">
                            <a href="#" className="social-link" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
                            <a href="#" className="social-link" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
                            <a href="#" className="social-link" aria-label="Twitter"><i className="bi bi-twitter-x"></i></a>
                            <a href="#" className="social-link" aria-label="YouTube"><i className="bi bi-youtube"></i></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="col-6 col-md-4 col-lg-2">
                        <h5 className="heading text-white mb-4">Quick Links</h5>
                        <ul className="list-unstyled footer-links">
                            <li className="mb-3"><Link href="/" className="footer-link">Home</Link></li>
                            <li className="mb-3"><Link href="/about-us" className="footer-link">About Us</Link></li>
                            <li className="mb-3"><Link href="/services" className="footer-link">Services</Link></li>
                            <li className="mb-3"><Link href="/pricing" className="footer-link">Pricing</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="col-6 col-md-4 col-lg-3">
                        <h5 className="heading text-white mb-4">Our Services</h5>
                        <ul className="list-unstyled footer-links">
                            <li className="mb-3"><Link href="/services" className="footer-link">Ceramic Coating</Link></li>
                            <li className="mb-3"><Link href="/services" className="footer-link">Paint Protection Film</Link></li>
                            <li className="mb-3"><Link href="/services" className="footer-link">Deep Interior Cleaning</Link></li>
                            <li className="mb-3"><Link href="/services" className="footer-link">Paint Correction</Link></li>
                            <li className="mb-3"><Link href="/services" className="footer-link">Premium Car Wash</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="col-12 col-md-4 col-lg-3">
                        <h5 className="heading text-white mb-4">Contact Us</h5>
                        <ul className="list-unstyled footer-contact">
                            <li className="mb-4 d-flex">
                                <i className="bi bi-geo-alt-fill text-primary-color me-3 fs-5"></i>
                                <span className="text-color-2">275, Ground Floor, Double Story, Bharat Nagar, Ashok Vihar, Delhi-110052</span>
                            </li>
                            <li className="mb-4 d-flex">
                                <i className="bi bi-telephone-fill text-primary-color me-3 fs-5"></i>
                                <div className="d-flex flex-column">
                                    <a href="tel:+919711511413" className="footer-link text-color-2">+91 97115 11413</a>
                                    <a href="tel:+918700371129" className="footer-link text-color-2">+91 87003 71129</a>
                                </div>
                            </li>
                            <li className="d-flex align-items-center">
                                <i className="bi bi-person-fill text-primary-color me-3 fs-5"></i>
                                <span className="text-color-2">Owner: Vinod Kumar</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <hr className="border-secondary my-5 opacity-25" />

                <div className="row align-items-center">
                    <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        <p className="text-color-2 mb-0 copyright-text">
                            © {new Date().getFullYear()} <span className="text-white fw-bold">Sunrise Detailing</span>. All Rights Reserved.
                        </p>
                    </div>
                    <div className="col-md-6 text-center text-md-end">
                        <p className="text-color-2 mb-0 copyright-text opacity-75">
                            Designed by Widagdos
                        </p>
                    </div>
                </div>
            </div>
            <AppointmentModal show={showModal} onClose={() => setShowModal(false)} />
        </footer>
    );
}
