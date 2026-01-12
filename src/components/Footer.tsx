import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="section py-5" style={{ background: 'linear-gradient(to bottom,#1B1B1B ,#111111)' }}>
            <div className="b-container">
                <div className="row g-4 g-xl-5 mt-5 mx-auto">
                    <div className="col-12 col-xl-4 pe-xl-5 mt-0">
                        <div className="footer-logo-box">
                            <img src="/images/latest2.png" alt="Footer Logo" className="h-100 object-fit-contain d-block" />
                        </div>
                        <p className="mt-4 text-center text-xl-start">
                            Providing Premium Car Detailing Services That Bring Out the Best in Your Vehicle, Ensuring a Showroom
                            Shine Every Time.
                        </p>
                        <Link href="/contact-us" className="btn btn-lg btn-cta-secondary d-block mt-4">
                            Contact Us <i className="bi bi-arrow-right-short"></i>
                        </Link>
                    </div>

                    <div className="col-12 col-md-6 col-xl-4 px-3 px-xl-5 mt-5 mt-xl-0">
                        <h5 className="heading">Navigation</h5>
                        <hr className="border-2" />
                        <ul className="list-unstyled">
                            <li className="mt-3">
                                <Link className="text-color-2 links-primary active" href="/">
                                    Homepage
                                </Link>
                            </li>
                            <li className="mt-3">
                                <Link className="text-color-2 links-primary" href="/services">
                                    Services
                                </Link>
                            </li>
                            <li className="mt-3">
                                <Link className="text-color-2 links-primary" href="/gallery">
                                    Gallery
                                </Link>
                            </li>
                            <li className="mt-3">
                                <Link className="text-color-2 links-primary" href="/faqs">
                                    FAQs
                                </Link>
                            </li>
                            <li className="mt-3">
                                <Link className="text-color-2 links-primary" href="/contact-us">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-12 col-md-6 col-xl-4 px-3 px-xl-5 mt-5 mt-xl-0">
                        <div className="mt-2">
                            <h5 className="heading">Visit Our Office</h5>
                            <hr className="border-2 my-2" />
                            <p className="text-color-2">275, Ground Floor, Double Story, Bharat Nagar, Ashok Vihar, Delhi-110052</p>
                        </div>
                        <div className="mt-5">
                            <h5 className="heading">Contact Info</h5>
                            <hr className="border-2" />
                            <div className="d-flex flex-column gap-1">
                                <a className="links-primary text-color-2 fw-normal" href="tel:+919711511413">
                                    +91 97115 11413
                                </a>
                                <a className="links-primary text-color-2 fw-normal" href="tel:+918700371129">
                                    +91 87003 71129
                                </a>
                                <a className="links-primary text-color-2 fw-normal" href="tel:+919958126581">
                                    +91 99581 26581
                                </a>
                                <span className="text-color-2 fw-normal">Owner: Vinod Kumar</span>
                            </div>
                            <br />
                            {/* <a className="links-primary text-color-2 fw-normal" href="mailto:info@sunrisedetailing.com">
                                info@sunrisedetailing.com
                            </a> */}
                        </div>
                    </div>
                </div>

                <div className="row mt-4 pt-0 pt-xl-5 text-center">
                    <p className="text-color-2">Copyright © 2025 Widagdos. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}
