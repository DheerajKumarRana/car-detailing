import Link from 'next/link';
import Script from 'next/script';

export default function ContactUs() {
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
                        <h1 className="heading fw-bold">Contact Us</h1>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link href="/">Home</Link>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">
                                    Contact Us
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </section>
            {/* #banner end */}

            {/* Contact section */}
            <section className="section py-5 mt-5">
                <div className="b-container">
                    <div className="row g-4 mx-auto">
                        <div className="col-12 col-md-6 col-xl-4">
                            <div
                                className="card h-100 bg-secondary-color p-2 rounded-4"
                                data-aos="fade-right"
                                data-aos-delay="100"
                                data-aos-duration="800"
                            >
                                <div className="card-body mb-0">
                                    <div
                                        className="bg-primary-color rounded-2 align-content-center text-center"
                                        style={{ color: '#111111', width: '70px', height: '70px' }}
                                    >
                                        <i className="bi bi-geo-alt-fill fs-2"></i>
                                    </div>
                                    <h5 className="heading mt-3">Workshop Address</h5>
                                    <p className="text-color-2 fs-5 mt-3 mb-0">
                                        <em>275, Ground Floor, Double Story, Bharat Nagar, Ashok Vihar, Delhi-110052</em>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                            <div
                                className="card h-100 bg-secondary-color p-2 rounded-4"
                                data-aos="fade-up"
                                data-aos-delay="100"
                                data-aos-duration="800"
                            >
                                <div className="card-body mb-0">
                                    <div
                                        className="bg-primary-color rounded-2 align-content-center text-center"
                                        style={{ color: '#111111', width: '70px', height: '70px' }}
                                    >
                                        <i className="bi bi-telephone-fill fs-2"></i>
                                    </div>
                                    <h5 className="heading mt-3">Call Us Anytime</h5>
                                    <em>
                                        <a href="tel:+919711511413" className="text-color-2 text-decoration-none">+91 97115 11413</a><br />
                                        <a href="tel:+918700371129" className="text-color-2 text-decoration-none">+91 87003 71129</a><br />
                                        <a href="tel:+919958126581" className="text-color-2 text-decoration-none">+91 99581 26581</a><br />
                                        <span className="fs-6 mt-2 d-block">Owner: Vinod Kumar</span>
                                    </em>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-xl-4">
                            <div
                                className="card h-100 bg-secondary-color p-2 rounded-4"
                                data-aos="fade-left"
                                data-aos-delay="100"
                                data-aos-duration="800"
                            >
                                <div className="card-body mb-0">
                                    <div
                                        className="bg-primary-color rounded-2 align-content-center text-center"
                                        style={{ color: '#111111', width: '70px', height: '70px' }}
                                    >
                                        <i className="bi bi-envelope-fill fs-2"></i>
                                    </div>
                                    <h5 className="heading mt-3">Send Us Email</h5>
                                    <p className="text-color-2 fs-5 mt-3 mb-0">
                                        <em>info@sunrisedetailing.com</em>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* #contact end */}

            {/* Quotes Section */}
            <section className="section py-5 mb-5">
                <div className="b-container">
                    <div className="row row-cols-1 row-cols-xl-2 g-5 mx-auto">
                        <div className="col order-2 order-xl-1">
                            <div
                                className="success_msg toast align-items-center w-100 shadow-none mb-3 border border-success rounded-pill my-4"
                                role="alert"
                                aria-live="assertive"
                                aria-atomic="true"
                            >
                                <div className="d-flex p-2">
                                    <div className="toast-body d-flex flex-row gap-3 align-items-center text-success">
                                        <i className="bi bi-check-circle-fill text-success"></i>
                                        Your Message Successfully Send.
                                    </div>
                                    <button
                                        type="button"
                                        className="me-2 m-auto bg-transparent border-0 ps-1 pe-0 text-success"
                                        data-bs-dismiss="toast"
                                        aria-label="Close"
                                    >
                                        <i className="bi bi-x-lg"></i>
                                    </button>
                                </div>
                            </div>
                            <div
                                className="error_msg toast align-items-center w-100 shadow-none border-danger mb-3 my-4 border rounded-pill"
                                role="alert"
                                aria-live="assertive"
                                aria-atomic="true"
                            >
                                <div className="d-flex p-2">
                                    <div className="toast-body d-flex flex-row gap-3 align-items-center text-danger">
                                        <i className="bi bi-exclamation-triangle-fill text-danger"></i>
                                        Something Wrong ! Send Form Failed.
                                    </div>
                                    <button
                                        type="button"
                                        className="me-2 m-auto bg-transparent border-0 ps-1 pe-0 text-danger"
                                        data-bs-dismiss="toast"
                                        aria-label="Close"
                                    >
                                        <i className="bi bi-x-lg"></i>
                                    </button>
                                </div>
                            </div>
                            <form className="form needs-validation">
                                <div className="row row-cols-1 row-cols-md-2 g-5 mb-5">
                                    <div className="col">
                                        <label htmlFor="name" className="form-label">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            className="form-control form-control-lg"
                                            placeholder="Enter your name"
                                            aria-label="Name"
                                        />
                                    </div>
                                    <div className="col">
                                        <label htmlFor="email" className="form-label">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            className="form-control form-control-lg"
                                            placeholder="enteryourmail@gmail.com"
                                            aria-label="Email"
                                        />
                                    </div>
                                </div>
                                <div className="row row-cols-1 row-cols-md-2 g-5 mb-5">
                                    <div className="col">
                                        <label htmlFor="phone" className="form-label">
                                            Phone
                                        </label>
                                        <input
                                            type="number"
                                            name="phone"
                                            id="phone"
                                            className="form-control form-control-lg"
                                            placeholder="+91 Enter Mobile no."
                                            aria-label="Phone"
                                        />
                                    </div>
                                    <div className="col">
                                        <label htmlFor="subject" className="form-label">
                                            Subject
                                        </label>
                                        <input
                                            type="text"
                                            name="subject"
                                            id="subject"
                                            className="form-control form-control-lg"
                                            placeholder="Your subject here"
                                            aria-label="Subject"
                                        />
                                    </div>
                                </div>
                                <div className="row mb-5">
                                    <div className="col">
                                        <label htmlFor="message" className="form-label">
                                            Message
                                        </label>
                                        <textarea
                                            className="form-control form-control-lg"
                                            name="message"
                                            id="message"
                                            rows={8}
                                            placeholder="Tell us anything about your lovely car"
                                        ></textarea>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-lg btn-cta-primary w-100 submit_form">
                                    Submit Now
                                </button>
                            </form>
                        </div>
                        <div className="col order-1">
                            <h2 className="heading" data-aos="fade-right" data-aos-delay="100" data-aos-duration="800">
                                <span className="text-primary-color">Get in Touch</span> with Sunrise Detailing
                            </h2>
                            <p className="text-color-2 mt-3">
                                Have questions? Ready to book? We're here to help make your car look amazing.
                            </p>
                            <h5 className="heading mt-4">Business Hours</h5>
                            <p className="text-color-2 mt-2">Monday – sunday: 8:00 AM – 8:00 PM</p>
                            <h4 className="heading mt-4">Why Should Reach Us Out ?</h4>
                            <p className="text-color-2 mt-3">
                                Our professional car detailing and maintenance services help elevate your driving comfort, vehicle
                                appearance, and long-term performance on every journey.
                            </p>
                            <ul className="list-unstyled fs-5 text-color-2">
                                <li className="mb-3">
                                    <i className="bi bi-check-square-fill text-primary-color me-2"></i> Expert Detailing
                                </li>
                                <li className="mb-3">
                                    <i className="bi bi-check-square-fill text-primary-color me-2"></i> Personalized Service
                                </li>
                                <li className="mb-3">
                                    <i className="bi bi-check-square-fill text-primary-color me-2"></i> Experienced Team
                                </li>
                                <li className="mb-3">
                                    <i className="bi bi-check-square-fill text-primary-color me-2"></i> Easy & Fast Booking
                                </li>
                                <li className="mb-3">
                                    <i className="bi bi-check-square-fill text-primary-color me-2"></i> Customer First
                                </li>
                            </ul>
                            <div className="social-box flex-row w-100 mt-5">
                                <h5 className="heading align-content-center">Follow us on social media for detailing tips, before & after transformations, and special promotions!</h5>
                                <Link href="http://www.facebook.com" className="rounded-2" style={{ width: '40px', height: '40px' }}>
                                    <i className="bi bi-facebook fs-5"></i>
                                </Link>
                                <Link href="http://www.youtube.com" className="rounded-2" style={{ width: '40px', height: '40px' }}>
                                    <i className="bi bi-youtube fs-5"></i>
                                </Link>
                                <Link href="http://x.com" className="rounded-2" style={{ width: '40px', height: '40px' }}>
                                    <i className="bi bi-twitter-x fs-5"></i>
                                </Link>
                                <Link href="http://www.instagram.com" className="rounded-2" style={{ width: '40px', height: '40px' }}>
                                    <i className="bi bi-instagram fs-5"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* #quotes end */}

            {/* Map section */}
            <div className="section p-0 m-0">
                <div className="container-fluid p-0 m-0">
                    <div className="row justify-content-center">
                        <div className="col-12 position-relative">
                            <div className="bg-wrapper position-relative overflow-hidden">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.1234567890123!2d-122.4194156846814!3d37.7749292797599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c8c8c8c8c%3A0x8c8c8c8c8c8c8c8c!2s123%20Serenity%20Lane%2C%20Blissfield%2C%20CA%2090210%2C%20United%20States!5e0!3m2!1sen!2sus!4v1631234567890"
                                    className="bg-grayscale"
                                    allowFullScreen
                                    loading="lazy"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* #map end */}
            <Script src="/js/submit-form.js" strategy="lazyOnload" />
        </main>
    );
}
