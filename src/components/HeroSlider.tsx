'use client';

import { useState, useEffect } from 'react';

const desktopImages = [
    '/images/banner 1.jpg',
    '/images/banner 2.jpg',
    '/images/banner 3.jpg',
];

const mobileImages = [
    '/images/ban1.jpg',
    '/images/ban 2.jpg',
    '/images/ban 3.jpg',
];

export default function HeroSlider({ children }: { children: React.ReactNode }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-scroll effect
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % desktopImages.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, []);

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % desktopImages.length);
    };

    const goToPrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + desktopImages.length) % desktopImages.length);
    };

    return (
        <section className="hero position-relative py-5 overflow-hidden">
            {/* Background Slider */}
            <div className="position-absolute top-0 start-0 w-100 h-100 z-0">

                {/* Desktop Images */}
                <div className="d-none d-md-block w-100 h-100 position-relative">
                    {desktopImages.map((src, index) => (
                        <div
                            key={`desktop-${index}`}
                            className={`position-absolute top-0 start-0 w-100 h-100 transition-opacity duration-1000`}
                            style={{
                                backgroundImage: `url('${src}')`,
                                backgroundSize: '100% 100%',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                opacity: index === currentIndex ? 1 : 0,
                                transition: 'opacity 1s ease-in-out',
                                zIndex: index === currentIndex ? 1 : 0
                            }}
                        />
                    ))}
                </div>

                {/* Mobile Images */}
                <div className="d-block d-md-none w-100 h-100 position-relative">
                    {mobileImages.map((src, index) => (
                        <div
                            key={`mobile-${index}`}
                            className={`position-absolute top-0 start-0 w-100 h-100`}
                            style={{
                                backgroundImage: `url('${src}')`,
                                backgroundSize: '100% 100%',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                opacity: index === currentIndex ? 1 : 0,
                                transition: 'opacity 1s ease-in-out',
                                zIndex: index === currentIndex ? 1 : 0
                            }}
                        />
                    ))}
                </div>

                <div className="bg-overlay" style={{ zIndex: 2 }}></div>
            </div>

            {/* Content */}
            <div className="position-relative z-2 h-100">
                {children}
            </div>

            {/* Desktop Controls */}
            <div className="d-none d-md-flex position-absolute top-50 w-100 justify-content-between px-4 z-3" style={{ transform: 'translateY(-50%)', pointerEvents: 'none' }}>
                <button
                    onClick={goToPrev}
                    className="btn btn-outline-light rounded-circle d-flex align-items-center justify-content-center p-0"
                    style={{ width: '50px', height: '50px', pointerEvents: 'auto', backgroundColor: 'rgba(0,0,0,0.5)', border: 'none' }}
                    aria-label="Previous Slide"
                >
                    <i className="bi bi-chevron-left fs-4"></i>
                </button>
                <button
                    onClick={goToNext}
                    className="btn btn-outline-light rounded-circle d-flex align-items-center justify-content-center p-0"
                    style={{ width: '50px', height: '50px', pointerEvents: 'auto', backgroundColor: 'rgba(0,0,0,0.5)', border: 'none' }}
                    aria-label="Next Slide"
                >
                    <i className="bi bi-chevron-right fs-4"></i>
                </button>
            </div>
        </section>
    );
}
