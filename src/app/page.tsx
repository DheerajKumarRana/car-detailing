import Link from 'next/link';
import TestimonialsCarousel from '../components/TestimonialsCarousel';
import HeroSlider from '../components/HeroSlider';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      {/* Hero section */}
      {/* Hero section */}
      {/* Hero section */}
      <HeroSlider>
        <div className="b-container h-100 position-relative z-2">
          <div className="row">
            <div
              className="col-12 col-xl-8 d-flex flex-column justify-content-start text-center text-xl-start hero-content"
            >
              <h1 className="fw-bolder mb-4" data-aos="fade-right" data-aos-delay="100" data-aos-duration="800">
                Experience the Sunrise Difference – Where Every Detail Shines
              </h1>
              <p className="fs-5 mb-4" data-aos="fade-right" data-aos-delay="200" data-aos-duration="800">
                Professional car detailing services that restore your vehicle's beauty from sunrise to sunset. We don't just clean cars, we bring them back to life.
              </p>
              <Link
                href="/services"
                className="btn btn-xl btn-cta-primary align-self-center align-self-xl-start mt-4"
              >
                Let's Get Started
              </Link>
            </div>
          </div>
        </div>
      </HeroSlider>
      {/* #hero end */}
      {/* #hero end */}

      {/* Feature Section */}
      <section className="feature position-relative">
        <div className="b-container">
          <div className="row d-flex justify-content-end align-items-end feature-box-wrapper g-3 g-xl-0 mx-xl-4 mx-0">
            <div className="col-12 col-md-6 col-xl-3 p-0 mb-3 mb-xl-0">
              <div className="feature-box w-100 rounded-4 rounded-xl-end-0 rounded-xl-start-4" style={{ backgroundColor: '#303030' }}>
                <h5 className="feature-title">Certified Detailing Experts</h5>
                <p>
                  Our team of certified professionals uses industry-leading techniques and premium products to ensure your vehicle receives showroom-quality treatment every time.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-xl-3 p-0 mb-3 mb-xl-0">
              <div className="feature-box w-100 rounded-4 rounded-xl-0" style={{ backgroundColor: '#3F3F3F' }}>
                <h5 className="feature-title">Eco-Conscious Care</h5>
                <p>
                  We believe in protecting your car and the planet. Our eco-friendly products deliver outstanding results while minimizing environmental impact.
                </p>
              </div>
            </div>
            <div className="col-12 col-xl-3 p-0">
              <div className="feature-box w-100 rounded-4 rounded-xl-start-0 rounded-xl-end-4" style={{ backgroundColor: '#4F4F4F' }}>
                <h5 className="feature-title">100% Satisfaction Promise</h5>
                <p>
                  Your satisfaction is our priority. If you're not completely happy with our service, we'll make it right – guaranteed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* #feature end */}

      {/* Pricing Section */}
      <section className="section py-5 my-5">
        <div className="b-container">
          <div className="row text-center text-xl-start">
            <div className="col-12 col-xl-6">
              <h6 className="text-color-2">OUR SERVICES</h6>
              <h2 className="heading" data-aos="fade-right" data-aos-delay="100" data-aos-duration="800">
                Comprehensive Detailing Solutions Tailored to Your Needs
              </h2>
            </div>
            <div className="col-12 col-xl-6 pt-4">
              <p className="text-color-2">
                Discover the ideal detailing package tailored to your car’s needs and condition. Whether you’re looking
                for a quick refresh or a full restoration, our options are designed to deliver exceptional results and
                long-lasting protection. Let your vehicle shine with the care it truly deserves.
              </p>
            </div>
          </div>
          <div className="row g-4 mt-5">
            {/* Service 1: Exterior */}
            <div className="col-12 col-md-6 col-xl-4" data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">
              <div
                className="service-box w-100 p-4 rounded-4 position-relative"
                style={{ backgroundImage: "url('/images/Place-Holder-400x400.jpg')" }}
              >
                <div className="bg-overlay rounded-4 opacity-50"></div>
                <div className="position-relative z-1 text-white">
                  <div className="service-icon d-flex justify-content-center align-items-center rounded-2 bg-primary-color text-white fs-2 mb-4">
                    <i className="bi bi-car-front-fill text-black"></i>
                  </div>
                  <h4 className="heading">Exterior Detailing</h4>
                  <p className="mt-3">
                    Exterior Detailing is a deep-cleaning and correction process designed to restore shine, smoothness, and protection to your vehicle’s paint.
                  </p>
                  <Link href="/services" className="icon-link icon-link-hover link-opacity-50-hover text-white text-decoration-none stretched-link">
                    Read More <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            {/* Service 2: Interior */}
            <div className="col-12 col-md-6 col-xl-4" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
              <div
                className="service-box w-100 p-4 rounded-4 position-relative"
                style={{ backgroundImage: "url('/images/Place-Holder-400x400.jpg')" }}
              >
                <div className="bg-overlay rounded-4 opacity-50"></div>
                <div className="position-relative z-1 text-white">
                  <div className="service-icon d-flex justify-content-center align-items-center rounded-2 bg-primary-color text-white fs-2 mb-4">
                    <i className="bi bi-person-bounding-box text-black"></i>
                  </div>
                  <h4 className="heading">Interior Detailing</h4>
                  <p className="mt-3">
                    Interior Detailing restores cleanliness, comfort, and hygiene by deep-cleaning every interior surface.
                  </p>
                  <Link href="/services" className="icon-link icon-link-hover link-opacity-50-hover text-white text-decoration-none stretched-link">
                    Read More <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            {/* Service 3: Ceramic Coating */}
            <div className="col-12 col-md-6 col-xl-4" data-aos="fade-up" data-aos-delay="300" data-aos-duration="800">
              <div
                className="service-box w-100 p-4 rounded-4 position-relative"
                style={{ backgroundImage: "url('/images/Place-Holder-400x400.jpg')" }}
              >
                <div className="bg-overlay rounded-4 opacity-50"></div>
                <div className="position-relative z-1 text-white">
                  <div className="service-icon d-flex justify-content-center align-items-center rounded-2 bg-primary-color text-white fs-2 mb-4">
                    <i className="bi bi-gem text-black"></i>
                  </div>
                  <h4 className="heading">Ceramic Coating</h4>
                  <p className="mt-3">
                    Ceramic Coating creates a strong, semi-permanent protective layer that bonds with your vehicle’s paint, enhancing gloss while safeguarding the surface.
                  </p>
                  <Link href="/services" className="icon-link icon-link-hover link-opacity-50-hover text-white text-decoration-none stretched-link">
                    Read More <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            {/* Service 4: PPF (Existing) */}
            <div className="col-12 col-md-6 col-xl-4" data-aos="fade-up" data-aos-delay="400" data-aos-duration="800">
              <div
                className="service-box w-100 p-4 rounded-4 position-relative"
                style={{ backgroundImage: "url('/images/Place-Holder-400x400.jpg')" }}
              >
                <div className="bg-overlay rounded-4 opacity-50"></div>
                <div className="position-relative z-1 text-white">
                  <div className="service-icon d-flex justify-content-center align-items-center rounded-2 bg-primary-color text-white fs-2 mb-4">
                    <i className="bi bi-shield-check text-black"></i>
                  </div>
                  <h4 className="heading">Paint Protection Film</h4>
                  <p className="mt-3">
                    Shield your vehicle against rock chips, scratches, and road debris with our self-healing PPF invisible layer.
                  </p>
                  <Link href="/services" className="icon-link icon-link-hover link-opacity-50-hover text-white text-decoration-none stretched-link">
                    Read More <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            {/* Service 5: Wraps */}
            <div className="col-12 col-md-6 col-xl-4" data-aos="fade-up" data-aos-delay="500" data-aos-duration="800">
              <div
                className="service-box w-100 p-4 rounded-4 position-relative"
                style={{ backgroundImage: "url('/images/Place-Holder-400x400.jpg')" }}
              >
                <div className="bg-overlay rounded-4 opacity-50"></div>
                <div className="position-relative z-1 text-white">
                  <div className="service-icon d-flex justify-content-center align-items-center rounded-2 bg-primary-color text-white fs-2 mb-4">
                    <i className="bi bi-palette text-black"></i>
                  </div>
                  <h4 className="heading">Premium Vehicle Wraps</h4>
                  <p className="mt-3">
                    Vehicle wraps allow you to change your car’s appearance while protecting the original paint underneath.
                  </p>
                  <Link href="/services" className="icon-link icon-link-hover link-opacity-50-hover text-white text-decoration-none stretched-link">
                    Read More <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            {/* Service 6: Rubbing & Polishing */}
            <div className="col-12 col-md-6 col-xl-4" data-aos="fade-up" data-aos-delay="600" data-aos-duration="800">
              <div
                className="service-box w-100 p-4 rounded-4 position-relative"
                style={{ backgroundImage: "url('/images/Place-Holder-400x400.jpg')" }}
              >
                <div className="bg-overlay rounded-4 opacity-50"></div>
                <div className="position-relative z-1 text-white">
                  <div className="service-icon d-flex justify-content-center align-items-center rounded-2 bg-primary-color text-white fs-2 mb-4">
                    <i className="bi bi-stars text-black"></i>
                  </div>
                  <h4 className="heading">Rubbing & Polishing</h4>
                  <p className="mt-3">
                    Rubbing & Polishing is a paint correction process that removes surface imperfections and restores gloss.
                  </p>
                  <Link href="/services" className="icon-link icon-link-hover link-opacity-50-hover text-white text-decoration-none stretched-link">
                    Read More <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            {/* Service 7: Nano & Teflon */}
            <div className="col-12 col-md-6 col-xl-4" data-aos="fade-up" data-aos-delay="700" data-aos-duration="800">
              <div
                className="service-box w-100 p-4 rounded-4 position-relative"
                style={{ backgroundImage: "url('/images/Place-Holder-400x400.jpg')" }}
              >
                <div className="bg-overlay rounded-4 opacity-50"></div>
                <div className="position-relative z-1 text-white">
                  <div className="service-icon d-flex justify-content-center align-items-center rounded-2 bg-primary-color text-white fs-2 mb-4">
                    <i className="bi bi-droplet-half text-black"></i>
                  </div>
                  <h4 className="heading">Nano & Teflon Coating</h4>
                  <p className="mt-3">
                    Nano and Teflon coatings provide a protective layer that enhances shine while offering basic resistance against dust, water spots, and UV rays.
                  </p>
                  <Link href="/services" className="icon-link icon-link-hover link-opacity-50-hover text-white text-decoration-none stretched-link">
                    Read More <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            {/* Service 8: Glass Coating */}
            <div className="col-12 col-md-6 col-xl-4" data-aos="fade-up" data-aos-delay="800" data-aos-duration="800">
              <div
                className="service-box w-100 p-4 rounded-4 position-relative"
                style={{ backgroundImage: "url('/images/Place-Holder-400x400.jpg')" }}
              >
                <div className="bg-overlay rounded-4 opacity-50"></div>
                <div className="position-relative z-1 text-white">
                  <div className="service-icon d-flex justify-content-center align-items-center rounded-2 bg-primary-color text-white fs-2 mb-4">
                    <i className="bi bi-eyeglasses text-black"></i>
                  </div>
                  <h4 className="heading">Glass Coating</h4>
                  <p className="mt-3">
                    Glass Coating creates a water-repellent layer that keeps your windshield and windows clean and clear.
                  </p>
                  <Link href="/services" className="icon-link icon-link-hover link-opacity-50-hover text-white text-decoration-none stretched-link">
                    Read More <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>



      {/* Warranty section */}
      <section className="section py-5 my-5">
        <div className="container-fluid bg-secondary-color rounded-4">
          <div className="b-container warranty">
            <div className="row">
              <div
                className="col-12 col-xl-3 d-flex flex-column text-center text-xl-start mb-4 mb-xl-0"
                style={{ minHeight: '100%' }}
              >
                <h6 className="text-color-2">Why Choose Sunrise Detailing</h6>
                <div className="mt-auto">
                  <h1 className="count-up heading text-primary-color display-1" data-count="95">
                    0%
                  </h1>
                  <p className="text-color-2 mt-0 mt-xl-4">
                    <strong>95% of Our Clients Return for Regular Service</strong><br />
                    Many have experienced the Sunrise Detailing difference, and they trust us to keep their vehicles looking their absolute best.
                  </p>
                </div>
              </div>

              <div className="col-12 col-xl-9">
                <div className="row text-center text-xl-start">
                  <h2 className="heading" data-aos="fade-right" data-aos-delay="100" data-aos-duration="800">
                    Excellence, Expertise, and <br />
                    <span className="text-primary-color">Exceptional Care</span>
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
                    <h5>Certified Detailing Professionals</h5>
                    <p className="text-color-2 my-4">
                      Our team is professionally trained and certified in advanced detailing techniques. We stay current with industry innovations to provide you with the highest quality service available.
                    </p>
                  </div>
                  <div className="col-12 col-md-6" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
                    <h6 className="text-primary-color fw-medium">02</h6>
                    <hr className="hr-style-1 my-4 border-2" />
                    <h5>Premium Products & Equipment</h5>
                    <p className="text-color-2 my-4">
                      We invest in the best so you get the best. From pH-balanced shampoos to professional-grade polishers and ceramic coatings, every product we use is chosen for performance and safety.
                    </p>
                  </div>
                  <div className="col-12 col-md-6" data-aos="fade-up" data-aos-delay="300" data-aos-duration="800">
                    <h6 className="text-primary-color fw-medium">03</h6>
                    <hr className="hr-style-1 my-4 border-2" />
                    <h5>Meticulous Attention to Detail</h5>
                    <p className="text-color-2 my-4">
                      We don't cut corners or rush through jobs. Every vehicle receives our complete focus, ensuring no spot is missed and every surface is treated with care and precision.
                    </p>
                  </div>
                  <div className="col-12 col-md-6" data-aos="fade-up" data-aos-delay="400" data-aos-duration="800">
                    <h6 className="text-primary-color fw-medium">04</h6>
                    <hr className="hr-style-1 my-4 border-2" />
                    <h5>Transparent & Fair Pricing</h5>
                    <p className="text-color-2 my-4">
                      No surprises, no hidden fees. We provide clear pricing, honest recommendations, and packages designed to fit different needs and budgets without compromising quality.
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
                Get Your Car Detailed in Three Simple Steps
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
                        Choose your preferred service package and schedule a convenient time online, by phone, or in person. We'll send you a confirmation with everything you need to know before your appointment.
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
                      02. We Work Our Magic
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
                        Drop off your vehicle and let our expert team get to work. Using professional techniques and premium products, we'll meticulously clean, restore, and protect every surface. Relax knowing your car is in skilled hands.
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
                      03. Drive Away Impressed
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
                        Pick up your beautifully detailed vehicle and enjoy that incredible feeling of driving something that looks, feels, and smells brand new. We're confident you'll love the results – and we're here whenever you need us again.
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
            Hear From Our Satisfied Customers
          </h2>


          <div className="mt-5 pb-5" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
            <TestimonialsCarousel />
          </div>
        </div>
      </section>

      {/* #testimonial end */}


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
      {/* <section className="section py-5 my-5">
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
      </section> */}
      {/* #end blogs */}
    </main >
  );
}
