import Link from 'next/link';
import Script from 'next/script';

export default function Blogs() {
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
                        <h1 className="heading fw-bold">Blogs</h1>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link href="/">Home</Link>
                                </li>
                                <li className="breadcrumb-item" aria-current="page">
                                    Pages
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">
                                    Blogs
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </section>
            {/* #banner end */}

            {/* Blog Section */}
            <section className="section py-5 my-5">
                <div className="b-container">
                    <h6 className="text-color-2 text-center pt-4">BLOGS & ARTICLES</h6>
                    <h2 className="heading text-center mt-2" data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">
                        Expert Tips & Insights for Car Enthusiasts
                    </h2>
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-5 pt-2">
                        <div className="col">
                            <div className="card blogs text-white overflow-hidden rounded-4">
                                <div className="overflow-hidden">
                                    <img
                                        src="/images/Place-Holder-1920x1280.jpg"
                                        className="blogs-cover img-fluid"
                                        alt="The Ultimate Guide To Engine Cleaning"
                                    />
                                </div>
                                <div className="card-body p-4">
                                    <Link href="/blog-detail" className="blogs-title">
                                        <h5 className="fw-bolder">The Ultimate Guide To Engine Cleaning</h5>
                                    </Link>
                                    <div className="d-flex align-items-center gap-4 my-3">
                                        <h6>
                                            <i className="bi bi-person text-primary-color"></i> H. Jasmine
                                        </h6>
                                        <h6>
                                            <i className="bi bi-folder text-primary-color"></i> Cleaning
                                        </h6>
                                    </div>
                                    <p className="card-text text-color mb-2">
                                        Keeping your car in top shape requires more than just occasional washing. Regular car detailing...
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card blogs text-white overflow-hidden rounded-4">
                                <div className="overflow-hidden">
                                    <img
                                        src="/images/Place-Holder-1920x1280.jpg"
                                        className="blogs-cover img-fluid"
                                        alt="Essential Car Maintenance Tips for Longevity"
                                    />
                                </div>
                                <div className="card-body p-4">
                                    <Link href="/blog-detail" className="blogs-title">
                                        <h5 className="fw-bolder">Essential Car Maintenance Tips for Longevity</h5>
                                    </Link>
                                    <div className="d-flex align-items-center fs-5 gap-4 my-3">
                                        <h6>
                                            <i className="bi bi-person text-primary-color"></i> H. Jasmine
                                        </h6>
                                        <h6>
                                            <i className="bi bi-folder text-primary-color"></i> Maintenance
                                        </h6>
                                    </div>
                                    <p className="card-text text-color mb-2">
                                        Keeping your car in top shape requires more than just occasional washing. Regular car detailing...
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card blogs text-white overflow-hidden rounded-4">
                                <div className="overflow-hidden">
                                    <img
                                        src="/images/Place-Holder-1920x1280.jpg"
                                        className="blogs-cover img-fluid"
                                        alt="Protecting Your Car Paint from Sun Damage"
                                    />
                                </div>
                                <div className="card-body p-4">
                                    <Link href="/blog-detail" className="blogs-title">
                                        <h5 className="fw-bolder">Protecting Your Car Paint from Sun Damage</h5>
                                    </Link>
                                    <div className="d-flex align-items-center fs-5 gap-4 my-3">
                                        <h6>
                                            <i className="bi bi-person text-primary-color"></i> H. Jasmine
                                        </h6>
                                        <h6>
                                            <i className="bi bi-folder text-primary-color"></i> Protection
                                        </h6>
                                    </div>
                                    <p className="card-text text-color mb-2">
                                        Keeping your car in top shape requires more than just occasional washing. Regular car detailing...
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card blogs text-white overflow-hidden rounded-4">
                                <div className="overflow-hidden">
                                    <img
                                        src="/images/Place-Holder-1920x1280.jpg"
                                        className="blogs-cover img-fluid"
                                        alt="Best Waxing Methods for a Glossy Finish"
                                    />
                                </div>
                                <div className="card-body p-4">
                                    <Link href="/blog-detail" className="blogs-title">
                                        <h5 className="fw-bolder">Best Waxing Methods for a Glossy Finish</h5>
                                    </Link>
                                    <div className="d-flex align-items-center fs-5 gap-4 my-3">
                                        <h6>
                                            <i className="bi bi-person text-primary-color"></i> H. Jasmine
                                        </h6>
                                        <h6>
                                            <i className="bi bi-folder text-primary-color"></i> Protection
                                        </h6>
                                    </div>
                                    <p className="card-text text-color mb-2">
                                        Keeping your car in top shape requires more than just occasional washing. Regular car detailing...
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card blogs text-white overflow-hidden rounded-4">
                                <div className="overflow-hidden">
                                    <img
                                        src="/images/Place-Holder-1920x1280.jpg"
                                        className="blogs-cover img-fluid"
                                        alt="How to Keep Your Car Interior Spotless"
                                    />
                                </div>
                                <div className="card-body p-4">
                                    <Link href="/blog-detail" className="blogs-title">
                                        <h5 className="fw-bolder">How to Keep Your Car Interior Spotless</h5>
                                    </Link>
                                    <div className="d-flex align-items-center fs-5 gap-4 my-3">
                                        <h6>
                                            <i className="bi bi-person text-primary-color"></i> H. Jasmine
                                        </h6>
                                        <h6>
                                            <i className="bi bi-folder text-primary-color"></i> Maintenance
                                        </h6>
                                    </div>
                                    <p className="card-text text-color mb-2">
                                        Keeping your car in top shape requires more than just occasional washing. Regular car detailing...
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card blogs text-white overflow-hidden rounded-4">
                                <div className="overflow-hidden">
                                    <img
                                        src="/images/Place-Holder-1920x1280.jpg"
                                        className="blogs-cover img-fluid"
                                        alt="Top Car Detailing Tips for Lasting Shine"
                                    />
                                </div>
                                <div className="card-body p-4">
                                    <Link href="/blog-detail" className="blogs-title">
                                        <h5 className="fw-bolder">Top Car Detailing Tips for Lasting Shine</h5>
                                    </Link>
                                    <div className="d-flex align-items-center fs-5 gap-4 my-3">
                                        <h6>
                                            <i className="bi bi-person text-primary-color"></i> H. Jasmine
                                        </h6>
                                        <h6>
                                            <i className="bi bi-folder text-primary-color"></i> Detailing
                                        </h6>
                                    </div>
                                    <p className="card-text text-color mb-2">
                                        Keeping your car in top shape requires more than just occasional washing. Regular car detailing...
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* #end blogs */}

            {/* Subscribe section */}
            <section className="section py-5 my-5">
                <div className="b-container">
                    <div className="row d-flex justify-content-center text-center mx-auto">
                        <div className="col-12 col-xl-9 bg-secondary-color rounded-4 p-5">
                            <h2 className="heading">
                                Subscribe For Our <span className="text-primary-color">Latest</span> Blogs & Articles That Might Help You
                            </h2>
                            <div className="toast-container position-fixed bottom-0 end-0 p-3">
                                <div
                                    id="liveToast"
                                    className="toast success_msg_subscribe text-bg-light"
                                    role="alert"
                                    aria-live="assertive"
                                    aria-atomic="true"
                                >
                                    <div className="d-flex">
                                        <div className="toast-body">
                                            <i className="bi bi-check-circle-fill"></i> Your Subscribe Send Successfully.
                                        </div>
                                        <button type="button" className="btn me-2 m-auto" data-bs-dismiss="toast" aria-label="Close">
                                            <i className="bi bi-x-lg"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <form className="form needs-validation mt-4">
                                <input type="text" name="action" value="subscribe" hidden readOnly />
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="form-control form-control-lg"
                                    placeholder="Your email here"
                                    required
                                />
                                <div className="invalid-feedback text-white">Please provide a valid email format (e.g., user@example.com).</div>
                                <button type="submit" className="btn btn-cta-primary w-100 submit_subscribe mt-4">
                                    Subscribe now
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            {/* #subscribe end */}
            <Script src="/js/submit-form.js" strategy="lazyOnload" />
        </main>
    );
}
