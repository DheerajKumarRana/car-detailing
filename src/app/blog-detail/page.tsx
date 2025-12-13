import Link from 'next/link';

export default function BlogDetail() {
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
                        <h1 className="heading fw-bold">Blog Detail</h1>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link href="/">Home</Link>
                                </li>
                                <li className="breadcrumb-item" aria-current="page">
                                    Pages
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">
                                    Blog Detail
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </section>
            {/* #banner end */}

            {/* Blog-Detail Section */}
            {/* Blog content */}
            <section className="section py-5 my-5">
                <div className="b-container">
                    <div className="row g-4 mx-auto">
                        <div className="col-12 col-lg-8">
                            <div className="row">
                                <h2 className="heading mb-4">Understanding Mental Health: A Comprehensive Guide</h2>
                                <p className="text-primary-color mb-4">
                                    <i className="bi bi-calendar-fill"></i>&nbsp;15th March 2025 &nbsp;|&nbsp;
                                    <i className="bi bi-person-fill"></i>&nbsp;By Hafsha Jasmine
                                </p>
                                <div className="mb-4">
                                    <img src="/images/Place-Holder-1920x1280.jpg" alt="Blog Cover" className="img-fluid rounded-4" />
                                </div>
                                <p className="text-color-2">
                                    Keeping your car in top shape requires more than just occasional washing. Regular car detailing is
                                    essential to maintain the vehicle’s appearance and value over time. Dirt, dust, and road grime can
                                    accumulate on your car’s surface, causing damage if not cleaned properly. Interior detailing is
                                    equally important, as it helps remove allergens and bacteria that build up inside the cabin.
                                    Professional detailing services use specialized products and techniques to restore your car’s showroom
                                    shine. Waxing and ceramic coating provide extra layers of protection against harsh weather conditions.
                                    A well-detailed car also gives you a sense of pride and confidence while driving. Routine maintenance,
                                    like oil changes and tire rotations, complements detailing to ensure peak performance. Investing in
                                    both detailing and maintenance keeps your vehicle running and looking its best. A clean,
                                    well-maintained car reflects your attention to detail and enhances your overall driving experience.
                                </p>

                                <p className="text-color-2 mb-0">
                                    Car detailing goes beyond aesthetics and contributes to your vehicle’s longevity. Exterior detailing
                                    prevents oxidation, which can lead to fading and paint deterioration over time. Clay bar treatments
                                    remove contaminants that washing alone cannot eliminate. Interior detailing protects your upholstery
                                    and dashboard from cracking and wear caused by sun exposure. Steam cleaning is an effective method for
                                    removing deep-seated dirt from carpets and seats. Using high-quality cleaning products prevents damage
                                    to sensitive surfaces like leather and plastic. Regular waxing helps in repelling water, dust, and
                                    debris, reducing the frequency of washes needed. A polished car surface also improves aerodynamics,
                                    contributing to fuel efficiency. Professional detailing services assess your car’s condition and
                                    provide customized treatments based on its needs. Investing in detailing at least twice a year ensures
                                    your car remains in optimal condition. Preventative care saves money on expensive repairs caused by
                                    neglect.
                                </p>
                                <div className="row g-0 g-md-3 px-2">
                                    <div className="col-12 col-md-6 mt-4 mt-md-0">
                                        <img
                                            src="/images/Place-Holder-1920x1280.jpg"
                                            alt="Blog Detail 1"
                                            className="img-fluid rounded-4 w-100"
                                        />
                                    </div>
                                    <div className="col-12 col-md-6 mt-4 mt-md-0">
                                        <img
                                            src="/images/Place-Holder-1920x1280.jpg"
                                            alt="Blog Detail 2"
                                            className="img-fluid rounded-4 w-100"
                                        />
                                    </div>
                                </div>
                                <p className="text-color-2 mt-4">
                                    In addition to detailing, routine car maintenance is essential for safe and efficient driving.
                                    Checking your engine oil regularly prevents overheating and ensures smooth engine performance. Brake
                                    inspections help identify issues early, reducing the risk of accidents on the road. Tire pressure
                                    monitoring improves fuel efficiency and prevents premature wear. Battery maintenance is crucial,
                                    especially in extreme weather conditions, to avoid unexpected breakdowns. Regular air filter
                                    replacements keep your engine clean and improve overall efficiency. Transmission fluid changes extend
                                    the life of your vehicle’s transmission system. Proper wheel alignment enhances handling and prevents
                                    uneven tire wear. Cooling system checks help regulate engine temperature and prevent overheating
                                    issues. A well-maintained vehicle not only performs better but also increases its resale value.
                                    Following a consistent maintenance schedule saves time and money in the long run.
                                </p>

                                <p className="text-color-2 ">
                                    Many car owners overlook the importance of protecting their vehicle’s exterior. Environmental factors
                                    like UV rays, bird droppings, and acid rain can cause irreversible damage to the paint. Applying
                                    ceramic coating creates a hydrophobic layer that repels water and prevents staining. Paint protection
                                    film (PPF) is another advanced solution that safeguards against scratches and rock chips. Parking in
                                    shaded areas or using a car cover helps reduce sun damage. Regular waxing provides a protective
                                    barrier and enhances the car’s gloss and depth. Washing your car with pH-balanced soap prevents paint
                                    damage and swirl marks. Avoiding automatic car washes with abrasive brushes preserves your car’s
                                    finish. Using microfiber towels for drying minimizes the risk of scratches and streaks. Investing in
                                    professional polishing restores faded paint and removes surface imperfections. Taking proactive
                                    measures to protect your car’s exterior extends its lifespan and maintains its beauty.
                                </p>
                            </div>
                            <hr className="border-2 my-5" />
                            <div className="social-box flex-row w-100 mt-5">
                                <h5 className="heading align-content-center">Share On : </h5>
                                <Link href="http://www.facebook.com" className="rounded-2" style={{ width: '40px', height: '40px' }}>
                                    <i className="bi bi-facebook fs-5"></i>
                                </Link>
                                <Link href="http://x.com" className="rounded-2" style={{ width: '40px', height: '40px' }}>
                                    <i className="bi bi-twitter-x fs-5"></i>
                                </Link>
                                <Link href="http://www.instagram.com" className="rounded-2" style={{ width: '40px', height: '40px' }}>
                                    <i className="bi bi-instagram fs-5"></i>
                                </Link>
                            </div>
                        </div>
                        {/* Recent Posts */}
                        <div className="col-12 col-lg-4">
                            <div className="card bg-secondary-color p-3 rounded-4">
                                <div className="card-body">
                                    <h4 className="heading mb-4">Recent Posts</h4>
                                    <hr className="border-2 mb-4" />
                                    <ul className="list-unstyled font-2">
                                        <li className="mb-3">
                                            <Link href="/blog-detail" className="links-primary text-white">
                                                Essential Car Maintenance Tips for Longevity
                                            </Link>
                                        </li>
                                        <li className="mb-3">
                                            <Link href="/blog-detail" className="links-primary text-white">
                                                Protecting Your Car Paint from Sun Damage
                                            </Link>
                                        </li>
                                        <li className="mb-3">
                                            <Link href="/blog-detail" className="links-primary text-white">
                                                Best Waxing Methods for a Glossy Finish
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/blog-detail" className="links-primary text-white">
                                                How to Keep Your Car Interior Spotless
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* Categories */}
                            <div className="card bg-secondary-color p-3 rounded-4 mt-4 mb-5 mb-lg-0">
                                <div className="card-body">
                                    <h4 className="heading mb-4">Category</h4>
                                    <hr className="border-2 mb-4" />
                                    <ul className="list-unstyled font-2">
                                        <li className="mb-3">
                                            <Link href="/blogs" className="links-primary text-white">
                                                <i className="bi bi-chevron-right"></i> Cleaning
                                            </Link>
                                        </li>
                                        <li className="mb-3">
                                            <Link href="/blogs" className="links-primary text-white">
                                                <i className="bi bi-chevron-right"></i> Maintenance
                                            </Link>
                                        </li>
                                        <li className="mb-3">
                                            <Link href="/blogs" className="links-primary text-white">
                                                <i className="bi bi-chevron-right"></i> Protection
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/blogs" className="links-primary text-white">
                                                <i className="bi bi-chevron-right"></i> Detailing
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* #blog content end */}
            </section>
            {/* #blog-detail end */}
        </main>
    );
}
