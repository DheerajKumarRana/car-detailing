import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      {/* Hero section */}
      <section
        className="section hero position-relative bg-size-cover bg-position-center bg-repeat-no-repeat py-5"
        style={{ backgroundImage: "url('/images/Place-Holder-1920x1280.jpg')" }}
      >
        <div className="bg-overlay"></div>
        <div className="b-container h-100 position-relative z-2">
          <div className="row">
            <div
              className="col-12 col-xl-8 d-flex flex-column justify-content-start text-center text-xl-start"
              style={{ paddingTop: '23vh' }}
            >
              <h1 className="fw-bolder mb-4" data-aos="fade-right" data-aos-delay="100" data-aos-duration="800">
                Bring Back the New Car Feel with Our Professional Detailing
              </h1>
              <Link
                href="/services"
                className="btn btn-xl btn-cta-primary align-self-center align-self-xl-start mt-4"
              >
                Let's Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* #hero end */}

      {/* Feature Section */}
      <section className="feature position-relative">
        <div className="b-container">
          <div className="row d-flex justify-content-end align-items-end feature-box-wrapper g-0 mx-4">
            <div className="col-12 col-md-6 col-xl-3 p-0">
              <div className="feature-box w-100 rounded-start-4" style={{ backgroundColor: '#303030' }}>
                <h5 className="feature-title">Advanced Detailing Technology</h5>
                <p>
                  Our professional detailing restores your car’s original beauty, leaving it fresh, clean, and like new.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-xl-3 p-0">
              <div className="feature-box w-100" style={{ backgroundColor: '#3F3F3F' }}>
                <h5 className="feature-title">Eco-Friendly Products</h5>
                <p>
                  Experience that brand-new car feeling again with our expert detailing that revitalizes every inch.
                </p>
              </div>
            </div>
            <div className="col-12 col-xl-3 p-0">
              <div className="feature-box w-100 rounded-end-4" style={{ backgroundColor: '#4F4F4F' }}>
                <h5 className="feature-title">Satisfaction Guarantee</h5>
                <p>
                  We bring back your car’s shine, comfort, and cleanliness through professional detailing services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* #feature end */}

      {/* About Section */}
      <section className="section py-5 mt-5">
        <div className="b-container">
          <div className="row justify-content-between">
            <div className="col-12 col-xl-2 text-center text-xl-start mb-4 mb-xl-0">
              <h6 className="text-color-2">ABOUT US</h6>
            </div>
            <div className="col-12 col-xl-10 text-center text-lg-start">
              <div className="row">
                <h2 className="heading" data-aos="fade-right" data-aos-delay="100" data-aos-duration="800">
                  Our Commitment to Providing Premium Car Detailing Services That
                  <span className="text-primary-color">
                    Bring Out the Best in Your Vehicle, Ensuring a Showroom Shine Every Time
                  </span>
                </h2>
              </div>
              <div className="row">
                <div className="col-12 col-xl-3 order-2 order-xl-1">
                  <hr className="hr-style-1 mb-4 border-2" />
                </div>
                <div className="col-12 col-xl-9 order-1 order-xl-2">
                  <p className="text-color-2 mt-5">
                    We are committed to delivering premium car detailing services that bring out the very best in your
                    vehicle. With meticulous attention to every detail, we ensure your car is cleaned, restored, and
                    maintained to the highest standards. Our goal is not just to make your car look clean, but to give
                    it a showroom-quality shine that turns heads. Every service is backed by professional techniques and
                    top-grade products to ensure long-lasting, impressive results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* #about end */}

      {/* Service section */}
      <section className="section py-5 my-5">
        <div className="b-container">
          <h6 className="text-color-2 text-center">OUR TOP SOLUTION</h6>
          <h2 className="heading text-center" data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">
            Comprehensive Car Detailing Solutions for<br />
            A Flawless Finish
          </h2>
          <p className="text-color-2 text-center my-4">
            Experience comprehensive car detailing solutions designed to restore, protect, and enhance your vehicle’s
            appearance. Our expert team ensures every surface is treated with precision, delivering a flawless finish
            that looks and feels like new.
          </p>

          <div className="row justify-content-center">
            <div className="col-12 text-center">
              <img
                src="/images/Place-Holder-900x424.png"
                className="img-fluid"
                alt="Crossover Sports Car Yellow"
                style={{ width: '100%', maxWidth: '900px' }}
              />
            </div>
          </div>

          <div className="row justify-content-center g-4">
            {/* Service Box */}
            <div className="col-12 col-md-6 col-xl-3">
              <div
                className="service-box top-left position-relative h-100"
                data-aos="fade-right"
                data-aos-delay="100"
                data-aos-duration="800"
              >
                <div className="service-icon position-absolute">
                  <i className="bi bi-arrow-right-short"></i>
                </div>
                <div className="p-3"></div>
                <h5 className="heading mt-5">Exterior Detailing</h5>
                <p className="text-color-2 my-4">
                  Thorough cleaning, polishing, and waxing to restore your car’s shine and protect its paint.
                </p>
                <Link href="/service-detail" className="links-primary text-white">
                  Read More
                </Link>
              </div>
            </div>

            <div className="col-12 col-md-6 col-xl-3 pe-xl-4">
              <div
                className="service-box position-relative h-100"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="800"
              >
                <div className="service-icon position-absolute">
                  <i className="bi bi-arrow-right-short"></i>
                </div>
                <div className="p-3"></div>
                <h5 className="heading mt-5">Interior Detailing</h5>
                <p className="text-color-2 my-4">
                  Deep cleaning of seats, carpets, dashboard, and all interior surfaces for a fresh, spotless cabin.
                </p>
                <Link href="/service-detail" className="links-primary text-white">
                  Read More
                </Link>
              </div>
            </div>

            <div className="col-12 col-md-6 col-xl-3 ps-xl-4">
              <div
                className="service-box position-relative h-100"
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-duration="800"
              >
                <div className="service-icon position-absolute">
                  <i className="bi bi-arrow-right-short"></i>
                </div>
                <div className="p-3"></div>
                <h5 className="heading mt-5">Paint Correction</h5>
                <p className="text-color-2 my-4">
                  Removing swirl marks, scratches, and oxidation to bring back a flawless, mirror-like finish.
                </p>
                <Link href="/service-detail" className="links-primary text-white">
                  Read More
                </Link>
              </div>
            </div>

            <div className="col-12 col-md-6 col-xl-3">
              <div
                className="service-box top-right p-4 position-relative h-100"
                data-aos="fade-left"
                data-aos-delay="100"
                data-aos-duration="800"
              >
                <div className="service-icon position-absolute">
                  <i className="bi bi-arrow-right-short"></i>
                </div>
                <div className="p-3"></div>
                <h5 className="heading mt-5">Ceramic Coating</h5>
                <p className="text-color-2 my-4">
                  Long-lasting protection against dirt, UV rays, and water spots while enhancing gloss.
                </p>
                <Link href="/service-detail" className="links-primary text-white">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* #service end */}

      {/* Warranty section */}
      <section className="section py-5 my-5">
        <div className="container-fluid bg-secondary-color rounded-4">
          <div className="b-container warranty">
            <div className="row">
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

      {/* Appointment section */}
      <section className="section py-5 my-5">
        <div className="b-container">
          <div className="row">
            <div className="col-12 col-xl-6">
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

      {/* Testimonial Section */}
      <section className="section reviews position-relative text-white py-5">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover z-n1"
        >
          <source src="/videos/video-background.mp4" type="video/mp4" />
        </video>
        {/* Background Overlay */}
        <div
          className="position-absolute w-100 h-100 top-0 start-0 z-0"
          style={{ background: 'linear-gradient(to top,#111111 50%,#111111 65%, transparent)' }}
        ></div>
        {/* Testimonials Content */}
        <div className="b-container position-relative z-1 my-5">
          <h6 className="text-color-2 text-center pt-4">CUSTOMER REVIEWS</h6>
          <h2 className="heading text-center mt-2" data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">
            Customer <span className="text-primary-color">Experiences</span> That<br />
            Speak For Themselves
          </h2>

          <div className="row g-4 g-xl-5 my-5 pb-5">
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

            <div className="col-12 col-md-6 col-xl-4" data-aos="fade-up" data-aos-delay="500" data-aos-duration="800">
              <div className="d-flex flex-column h-100 gap-4">
                <div className="card p-4">
                  <p>
                    I was blown away by the transformation! From the deep clean of the interior to the shiny, protected
                    exterior, my car looks better than when I first bought it. Truly exceptional work!
                  </p>
                  <div className="d-flex align-items-center mt-4">
                    <img
                      src="/images/Place-Holder-64x64.jpg"
                      alt="Taki Wanabe"
                      className="rounded-circle me-3"
                      width="60"
                      height="60"
                    />
                    <div>
                      <h5 className="mb-0">Taki Wanabe</h5>
                      <small className="text-color-2">Vintage Car Owner</small>
                    </div>
                  </div>
                </div>
                <div className="card p-4">
                  <p>
                    The service here is outstanding. The team took extra care in detailing my car, and the results are
                    nothing short of amazing. I will definitely return for regular maintenance!
                  </p>
                  <div className="d-flex align-items-center mt-auto pt-3">
                    <img
                      src="/images/Place-Holder-64x64.jpg"
                      alt="Hafsha Jasmine"
                      className="rounded-circle me-3"
                      width="60"
                      height="60"
                    />
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
                  <p>
                    This is the best detailing service I’ve ever had. My car looks immaculate, and it feels like I’m
                    driving a completely different vehicle. I’ll be a loyal customer from now on!
                  </p>
                  <div className="d-flex align-items-center mt-auto pt-3">
                    <img
                      src="/images/Place-Holder-64x64.jpg"
                      alt="Akio Mirfaq"
                      className="rounded-circle me-3"
                      width="60"
                      height="60"
                    />
                    <div>
                      <h5 className="mb-0">Akio Mirfaq</h5>
                      <small className="text-color-2">Car Owner</small>
                    </div>
                  </div>
                </div>
                <div className="card p-4">
                  <p>
                    From the moment I walked in, I knew I was in good hands. The staff was knowledgeable and friendly,
                    and they did an incredible job on my car. It’s spotless, inside and out!
                  </p>
                  <div className="d-flex align-items-center mt-auto pt-3">
                    <img
                      src="/images/Place-Holder-64x64.jpg"
                      alt="Olivia Seamo"
                      className="rounded-circle me-3"
                      width="60"
                      height="60"
                    />
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
                  <h4 className="heading mb-0 py-0">Basic</h4>
                  <span className="bg-accent-color text-color-2 rounded-2 py-2 px-3">Estimated Time: 1.5 – 2 Hours</span>
                </div>

                <div className="heading">
                  <h5 className="mt-4">Start With</h5>
                  <h2 className="fw-bolder text-primary-color">$299,99</h2>
                </div>

                <p className="text-color-2 mt-4">Designed for regular maintenance, keeping your car clean and fresh.</p>
                <Link href="/contact-us" className="btn btn-lg btn-cta-primary my-3">
                  Choose This Plan
                </Link>

                <div className="row bg-accent-color rounded-4 mt-4 py-4 px-2">
                  <h4 className="heading">Feature :</h4>
                  <ul className="list-unstyled text-color-2">
                    <li className="mt-3">
                      <i className="bi bi-check-square-fill text-primary-color me-2"></i>Exterior hand wash & wax
                    </li>
                    <li className="mt-3">
                      <i className="bi bi-check-square-fill text-primary-color me-2"></i>Interior vacum & dusting
                    </li>
                    <li className="mt-3">
                      <i className="bi bi-check-square-fill text-primary-color me-2"></i>Windows cleaning (inside & out)
                    </li>
                    <li className="mt-3">
                      <i className="bi bi-check-square-fill text-primary-color me-2"></i>Tire cleaning & shine
                    </li>
                    <li className="mt-3">
                      <i className="bi bi-check-square-fill text-primary-color me-2"></i>Light interior wipe-down
                    </li>
                  </ul>
                </div>

                <p className="text-color-2 mt-4">
                  <strong>Perfect for:</strong> Regular maintenance and keeping your car fresh.
                </p>
              </div>
            </div>
            {/* Premium plan */}
            <div className="col-12 col-md-6 col-xl-4" data-aos="fade-up" data-aos-delay="500" data-aos-duration="800">
              <div className="card bg-secondary-color text-white rounded-4 p-4">
                <div className="d-flex justify-content-between align-items-center">
                  <h4>Premium</h4>
                  <span className="bg-accent-color rounded-2 p-2">Estimated Time: 2 – 3 Hours</span>
                </div>

                <div className="heading">
                  <h5 className="mt-4">Start With</h5>
                  <h2 className="fw-bolder text-primary-color">$499,99</h2>
                </div>

                <p className="text-color-2 mt-4">
                  A deep clean inside and out, perfect for cars needing extra attention.
                </p>
                <Link href="/contact-us" className="btn btn-lg btn-cta-primary my-3">
                  Choose This Plan
                </Link>

                <div className="row bg-accent-color rounded-4 mt-4 py-4 px-2">
                  <h4 className="heading">Feature :</h4>
                  <ul className="list-unstyled text-color-2">
                    <li className="mt-3">
                      <i className="bi bi-check-square-fill text-primary-color me-2"></i>Everything in the Basic Plan
                    </li>
                    <li className="mt-3">
                      <i className="bi bi-check-square-fill text-primary-color me-2"></i>Deep interior cleaning (seats &
                      carpets)
                    </li>
                    <li className="mt-3">
                      <i className="bi bi-check-square-fill text-primary-color me-2"></i>Clay bar treatment for paint
                      smoothness
                    </li>
                    <li className="mt-3">
                      <i className="bi bi-check-square-fill text-primary-color me-2"></i>Engine bay cleaning
                    </li>
                    <li className="mt-3">
                      <i className="bi bi-check-square-fill text-primary-color me-2"></i>High-quality polish & wax
                    </li>
                  </ul>
                </div>

                <p className="text-color-2 mt-4">
                  <strong>Perfect for:</strong> A thorough clean with added protection for your vehicle.
                </p>
              </div>
            </div>
            {/* Ultimate plan */}
            <div className="col-12 col-xl-4" data-aos="fade-left" data-aos-delay="350" data-aos-duration="800">
              <div className="card bg-secondary-color text-white rounded-4 p-4">
                <div className="d-flex justify-content-between align-items-center">
                  <h4>Ultimate</h4>
                  <span className="bg-accent-color rounded-2 p-2">Estimated Time: 4 – 7 Hours</span>
                </div>

                <div className="heading">
                  <h5 className="mt-4">Start With</h5>
                  <h2 className="fw-bolder text-primary-color">$999,99</h2>
                </div>

                <p className="text-color-2 mt-4">
                  Perfect clean like a new car, service for cars needing more extra attention.
                </p>
                <Link href="/contact-us" className="btn btn-lg btn-cta-primary my-3">
                  Choose This Plan
                </Link>

                <div className="row bg-accent-color rounded-4 mt-4 py-4 px-2">
                  <h4 className="heading">Feature :</h4>
                  <ul className="list-unstyled text-color-2">
                    <li className="mt-3">
                      <i className="bi bi-check-square-fill text-primary-color me-2"></i>Everything in the Premium Plan
                    </li>
                    <li className="mt-3">
                      <i className="bi bi-check-square-fill text-primary-color me-2"></i>Paint correction (removes swirl
                      marks & scratches)
                    </li>
                    <li className="mt-3">
                      <i className="bi bi-check-square-fill text-primary-color me-2"></i>Ceramic coating for long-term
                      protection
                    </li>
                    <li className="mt-3">
                      <i className="bi bi-check-square-fill text-primary-color me-2"></i>Leather conditioning & treatment
                    </li>
                    <li className="mt-3">
                      <i className="bi bi-check-square-fill text-primary-color me-2"></i>Headlight restoration
                    </li>
                  </ul>
                </div>

                <p className="text-color-2 mt-4">
                  <strong>Perfect for:</strong> Maximum protection and restoring your car’s showroom shine.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* #pricing end */}

      {/* CTA Section */}
      <section
        className="section position-relative"
        style={{
          backgroundImage: "url('/images/Place-Holder-1920x1280.jpg')",
          backgroundAttachment: 'fixed',
        }}
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
                data-aos-duration="3000"
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
                    {/* ... other items can be added similarly, I'll include a few more for completeness */}
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
                  </div>
                </div>

                {/* SERVICES */}
                <div className="tab-pane fade" id="faq-services" role="tabpanel" aria-labelledby="faq-services-tab">
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
                  </div>
                </div>

                {/* PRICING */}
                <div className="tab-pane fade" id="faq-pricing" role="tabpanel" aria-labelledby="faq-pricing-tab">
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
                            Our pricing depends on the level of service you choose. We offer Basic, Premium, and Ultimate
                            detailing packages to fit different needs and budgets.
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

      {/* Blog Section */}
      <section className="section py-5 my-5">
        <div className="b-container">
          <h6 className="text-color-2 text-center pt-4">BLOGS & ARTICLES</h6>
          <h2 className="heading text-center mt-2" data-aos="fade-up" data-aos-delay="100" data-aos-duration="3000">
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
          </div>
        </div>
      </section>
      {/* #end blogs */}
    </main>
  );
}
