import Link from 'next/link';

export default function AboutUs() {
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
                        <h1 className="heading fw-bold">About Us</h1>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link href="/">Home</Link>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">
                                    About Us
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </section>
            {/* #banner end */}

            {/* About Us */}
            <section className="section py-5 my-5">
                <div className="b-container">
                    <div className="row mx-auto">
                        <div className="col-12 col-xl-9">
                            <h6 className="text-color-2">KNOW US MORE</h6>
                            <h2 className="heading" data-aos="fade-right" data-aos-delay="100" data-aos-duration="800">
                                Enhancing Your <span className="text-primary-color">Driving Experience</span> with Professional Car
                                Detailing & Maintenance
                            </h2>
                        </div>
                        <div className="col-12 col-xl-3 d-flex justify-content-start justify-content-xl-end align-items-xl-end pt-5">
                            <Link href="/contact-us" className="btn btn-lg btn-cta-primary">
                                Let's Get In Touch
                            </Link>
                        </div>
                    </div>

                    <div className="row mt-5 mx-auto">
                        <div className="col-12 col-xl-6 ps-0 pe-4">
                            <p className="text-color-2 mb-5">
                                Experience smoother, more enjoyable driving with expert car detailing and maintenance that keeps your
                                vehicle clean, protected, and running at its best.
                            </p>
                            <div className="step-item d-flex mb-4">
                                <div className="step-number">01</div>
                                <div className="ms-3">
                                    <h5 className="heading mb-1">Passion For Perfection, Commitment To Quality</h5>
                                    <p className="text-color-2">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper
                                        mattis, pulvinar dapibus leo.
                                    </p>
                                </div>
                            </div>
                            <hr className="opacity-50" />
                            <div className="step-item d-flex my-4">
                                <div className="step-number">02</div>
                                <div className="ms-3">
                                    <h5 className="heading mb-1">Bringing New Life To Your Car, One Detail At A Time</h5>
                                    <p className="text-color-2">
                                        Morbi quis sapien commodo, convallis mi quis, pharetra dui. Nam finibus mi ligula, nec consequat
                                        felis pretium vel mauris eget bibendum massa.
                                    </p>
                                </div>
                            </div>
                            <hr className="opacity-50" />
                            <div className="step-item d-flex mt-4">
                                <div className="step-number">03</div>
                                <div className="ms-3">
                                    <h5 className="heading mb-1">Your Car Deserves The Best – We Make It Happen</h5>
                                    <p className="text-color-2">
                                        Integer lacinia consectetur leo, sed egestas neque lobortis nec. Praesent risus sapien, gravida sit
                                        amet vestibulum mattis, venenatis vitae diam.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-xl-6 ps-4 pe-0 mt-5 mt-xl-0">
                            <div className="img-wrapper position-relative mx-auto">
                                <div className="img-ratio-121">
                                    <img
                                        src="/images/Place-Holder-1920x1280.jpg"
                                        alt="Car Detailing and Polishing"
                                        className="w-100 h-100 position-absolute rounded-4"
                                        style={{ inset: 0 }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* #about end */}

            {/* Warranty section */}
            <section className="section py-5 my-5">
                <div className="container-fluid bg-secondary-color rounded-4">
                    <div className="b-container warranty">
                        <div className="row mx-auto">
                            <div
                                className="col-12 col-xl-3 d-flex flex-column text-center text-xl-start mb-4 mb-xl-0"
                                style={{ minHeight: '100%' }}
                            >
                                <h6 className="text-color-2">WHY CHOOSE US?</h6>
                                <div className="mt-auto">
                                    <h1 className="count-up heading text-primary-color display-1" data-count="90">
                                        0%
                                    </h1>
                                    <p className="text-color-2 mt-0 mt-xl-4">
                                        <strong>Many have felt the pleasure</strong> of our service and many have<br />
                                        entrusted their vehicles to us
                                    </p>
                                </div>
                            </div>

                            <div className="col-12 col-xl-9">
                                <div className="row text-center text-xl-start">
                                    <h2 className="heading" data-aos="fade-right" data-aos-delay="100" data-aos-duration="800">
                                        Unmatched Quality, Precision, And<br />
                                        <span className="text-primary-color">Care for Your Car</span>
                                    </h2>
                                </div>
                                <div className="row text-center text-xl-start mt-4">
                                    <div className="col-12 col-xl-2">
                                        <h4 className="heading">Excellence in Every Detail</h4>
                                    </div>
                                    <div className="col-12 col-xl-10">
                                        <p className="text-color-2">
                                            We deliver unmatched quality, precision, and care in every car detailing service we provide. From
                                            meticulous cleaning to expert polishing, every detail is handled with professionalism to ensure
                                            your vehicle looks its absolute best.
                                        </p>
                                    </div>
                                </div>
                                <div className="row mt-5">
                                    <div className="col-12 col-md-6" data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">
                                        <h6 className="text-primary-color fw-medium">01</h6>
                                        <hr className="hr-style-1 my-4 border-2" />
                                        <h5>Professional Expertise</h5>
                                        <p className="text-color-2 my-4">
                                            Our skilled detailers use top-quality products and techniques to ensure the best results for your
                                            vehicle.
                                        </p>
                                    </div>
                                    <div className="col-12 col-md-6" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
                                        <h6 className="text-primary-color fw-medium">02</h6>
                                        <hr className="hr-style-1 my-4 border-2" />
                                        <h5>Premium Quality Products</h5>
                                        <p className="text-color-2 my-4">
                                            We only use high-grade, eco-friendly detailing products that are safe for your car and the
                                            environment.
                                        </p>
                                    </div>
                                    <div className="col-12 col-md-6" data-aos="fade-up" data-aos-delay="300" data-aos-duration="800">
                                        <h6 className="text-primary-color fw-medium">03</h6>
                                        <hr className="hr-style-1 my-4 border-2" />
                                        <h5>Attention To Detail</h5>
                                        <p className="text-color-2 my-4">
                                            We focus on every inch of your vehicle, delivering a flawless finish that exceeds expectations.
                                        </p>
                                    </div>
                                    <div className="col-12 col-md-6" data-aos="fade-up" data-aos-delay="400" data-aos-duration="800">
                                        <h6 className="text-primary-color fw-medium">04</h6>
                                        <hr className="hr-style-1 my-4 border-2" />
                                        <h5>Customer Satisfaction Guaranteed</h5>
                                        <p className="text-color-2 my-4">
                                            We prioritize your satisfaction, offering personalized service and outstanding results every time..
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* #warranty end */}

            {/* Testimonial Section */}
            <section className="section reviews position-relative text-white">
                <div className="b-container position-relative z-1">
                    <h6 className="text-color-2 text-center pt-4">CUSTOMER REVIEWS</h6>
                    <h2 className="heading text-center mt-2" data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">
                        Customer <span className="text-primary-color">Experiences</span> That<br />
                        Speak For Themselves
                    </h2>

                    <div className="row g-4 g-xl-5 my-5 pb-5 mx-auto">
                        {/* Testimonial Cards */}
                        <div className="col-12 col-md-6 col-xl-4" data-aos="fade-right" data-aos-delay="200" data-aos-duration="800">
                            <div className="d-flex flex-column h-100 gap-4">
                                <div className="card p-4">
                                    <p>
                                        Absolutely incredible service! My car looks brand new inside and out. The attention to detail was
                                        phenomenal. I couldn’t be happier with the results. Highly recommend!
                                    </p>
                                    <div className="d-flex align-items-center mt-auto pt-3">
                                        <img
                                            src="/images/Place-Holder-64x64.jpg"
                                            alt="Raul Axios"
                                            className="rounded-circle me-3"
                                            width="60"
                                            height="60"
                                        />
                                        <div>
                                            <h5 className="mb-0">Raul Axios</h5>
                                            <small className="text-color-2">Auto Dealer</small>
                                        </div>
                                    </div>
                                </div>

                                <div className="card p-4">
                                    <p>
                                        I’ve used many car detailing services before, but this one exceeded my expectations. The team was
                                        professional, friendly, and did an amazing job on my vehicle. It looks flawless!
                                    </p>
                                    <div className="d-flex align-items-center mt-auto pt-3">
                                        <img
                                            src="/images/Place-Holder-64x64.jpg"
                                            alt="Ubeid Una"
                                            className="rounded-circle me-3"
                                            width="60"
                                            height="60"
                                        />
                                        <div>
                                            <h5 className="mb-0">Ubeid Una</h5>
                                            <small className="text-color-2">Car Owner</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* ... other testimonials omitted for brevity but should be included if desired */}
                        {/* Including all checks if I can fits blocks */}
                        <div className="col-12 col-md-6 col-xl-4" data-aos="fade-up" data-aos-delay="500" data-aos-duration="800">
                            <div className="d-flex flex-column h-100 gap-4">
                                <div className="card p-4">
                                    <p>I was blown away by the transformation! From the deep clean of the interior to the shiny, protected
                                        exterior, my car looks better than when I first bought it. Truly exceptional work!</p>
                                    <div className="d-flex align-items-center mt-4">
                                        <img src="/images/Place-Holder-64x64.jpg" alt="Taki Wanabe" className="rounded-circle me-3" width="60"
                                            height="60" />
                                        <div>
                                            <h5 className="mb-0">Taki Wanabe</h5>
                                            <small className="text-color-2">Vintage Car Owner</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="card p-4">
                                    <p>The service here is outstanding. The team took extra care in detailing my car, and the results are
                                        nothing short of amazing. I will definitely return for regular maintenance!</p>
                                    <div className="d-flex align-items-center mt-auto pt-3">
                                        <img src="/images/Place-Holder-64x64.jpg" alt="Hafsha Jasmine" className="rounded-circle me-3" width="60"
                                            height="60" />
                                        <div>
                                            <h5 className="mb-0">Hafsha Jasmine</h5>
                                            <small className="text-color-2">Auto Dealer</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-xl-4" data-aos="fade-left" data-aos-delay="350" data-aos-duration="800">
                            <div className="d-flex flex-column h-100 gap-4">
                                <div className="card p-4">
                                    <p>This is the best detailing service I’ve ever had. My car looks immaculate, and it feels like I’m
                                        driving a completely different vehicle. I’ll be a loyal customer from now on!</p>
                                    <div className="d-flex align-items-center mt-auto pt-3">
                                        <img src="/images/Place-Holder-64x64.jpg" alt="Akio Mirfaq" className="rounded-circle me-3" width="60"
                                            height="60" />
                                        <div>
                                            <h5 className="mb-0">Akio Mirfaq</h5>
                                            <small className="text-color-2">Car Owner</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="card p-4">
                                    <p>From the moment I walked in, I knew I was in good hands. The staff was knowledgeable and friendly,
                                        and
                                        they did an incredible job on my car. It’s spotless, inside and out!</p>
                                    <div className="d-flex align-items-center mt-auto pt-3">
                                        <img src="/images/Place-Holder-64x64.jpg" alt="Olivia Seamo" className="rounded-circle me-3" width="60"
                                            height="60" />
                                        <div>
                                            <h5 className="mb-0">Olivia Seamo</h5>
                                            <small className="text-color-2">Car Collector</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* #testimonial end */}

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
                                <Link href="/contact-us" className="btn btn-lg btn-cta-primary">
                                    Let's Get In Touch
                                </Link>
                            </div>
                            {/* #title end */}
                            <div className="accordion mt-5" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button
                                            className="accordion-button px-0"
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
                                            className="accordion-button px-0 collapsed"
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
                                            className="accordion-button px-0 collapsed"
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
                                        alt="Service Station In The Hands Of Master"
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
                                        {/* ... other questions ... */}
                                        <div className="accordion-item">
                                            <h5 className="accordion-header" id="gen-heading-2">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#gen-collapse-2" aria-expanded="false" aria-controls="gen-collapse-2">
                                                    How often should I get my car detailed?
                                                </button>
                                            </h5>
                                            <div id="gen-collapse-2" className="accordion-collapse collapse" aria-labelledby="gen-heading-2"
                                                data-bs-parent="#accordionGeneral">
                                                <div className="accordion-body">
                                                    <p>It depends on your driving habits and environment, but we recommend a full detail every 3–6
                                                        months to maintain your car’s condition.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="accordion-item">
                                            <h5 className="accordion-header" id="gen-heading-3">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#gen-collapse-3" aria-expanded="false" aria-controls="gen-collapse-3">
                                                    How long does a car detailing service take?
                                                </button>
                                            </h5>
                                            <div id="gen-collapse-3" className="accordion-collapse collapse" aria-labelledby="gen-heading-3"
                                                data-bs-parent="#accordionGeneral">
                                                <div className="accordion-body">
                                                    <p>The time varies depending on the package you choose. A basic detailing takes about 1.5–2
                                                        hours,
                                                        while a full detailing can take 4–6 hours or more.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="accordion-item">
                                            <h5 className="accordion-header" id="gen-heading-4">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#gen-collapse-4" aria-expanded="false" aria-controls="gen-collapse-4">
                                                    Do you use eco-friendly products?
                                                </button>
                                            </h5>
                                            <div id="gen-collapse-4" className="accordion-collapse collapse" aria-labelledby="gen-heading-4"
                                                data-bs-parent="#accordionGeneral">
                                                <div className="accordion-body">
                                                    <p>Yes! We prioritize high-quality, biodegradable, and eco-friendly products that are safe for
                                                        both
                                                        your car and the environment.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="accordion-item">
                                            <h5 className="accordion-header" id="gen-heading-5">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#gen-collapse-5" aria-expanded="false" aria-controls="gen-collapse-5">
                                                    Do I need to make an appointment for a detailing service?
                                                </button>
                                            </h5>
                                            <div id="gen-collapse-5" className="accordion-collapse collapse" aria-labelledby="gen-heading-5"
                                                data-bs-parent="#accordionGeneral">
                                                <div className="accordion-body">
                                                    <p>Yes, we recommend booking an appointment to ensure availability and the best service.
                                                        However,
                                                        we do accept walk-ins based on availability.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* SERVICES */}
                                <div className="tab-pane fade" id="faq-services" role="tabpanel" aria-labelledby="faq-services-tab">
                                    <div className="accordion" id="accordionServices">
                                        {/* ... Services items ... */}
                                        <div className="accordion-item">
                                            <h5 className="accordion-header" id="ser-heading-1">
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#ser-collapse-1" aria-expanded="true" aria-controls="ser-collapse-1">
                                                    What’s the difference between a car wash and car detailing?
                                                </button>
                                            </h5>
                                            <div id="ser-collapse-1" className="accordion-collapse collapse show" aria-labelledby="ser-heading-1"
                                                data-bs-parent="#accordionServices">
                                                <div className="accordion-body">
                                                    <p>A car wash is a quick cleaning of the exterior, while detailing is a deep cleaning,
                                                        polishing, and protecting of both the interior and exterior.</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Just one or two more for demo */}
                                    </div>
                                </div>

                                {/* PRICING */}
                                <div className="tab-pane fade" id="faq-pricing" role="tabpanel" aria-labelledby="faq-pricing-tab">
                                    <div className="accordion" id="accordionPricing">
                                        {/* ... Pricing items ... */}
                                        <div className="accordion-item">
                                            <h5 className="accordion-header" id="pri-heading-1">
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#pri-collapse-1" aria-expanded="true" aria-controls="pri-collapse-1">
                                                    How much does car detailing cost?
                                                </button>
                                            </h5>
                                            <div id="pri-collapse-1" className="accordion-collapse collapse show" aria-labelledby="pri-heading-1"
                                                data-bs-parent="#accordionPricing">
                                                <div className="accordion-body">
                                                    <p>Our pricing depends on the level of service you choose. We offer Basic, Premium, and Ultimate
                                                        detailing packages to fit different needs and budgets.</p>
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
                        <Link href="/contact-us" className="btn btn-lg btn-cta-primary">
                            Booking Now
                        </Link>
                    </div>
                </div>
            </section>
            {/* #cta end */}
        </main>
    );
}
