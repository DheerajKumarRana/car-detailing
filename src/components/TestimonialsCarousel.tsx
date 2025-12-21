"use client";

import React, { useRef } from 'react';
import Image from 'next/image';

const testimonials = [
    {
        id: 1,
        quote: "I was skeptical about paying for detailing, but Sunrise completely changed my mind. My 5-year-old SUV looks better than the day I bought it. The team was professional, thorough, and genuinely cared about doing great work. Worth every penny!",
        name: "Sahil Shrivastav",
        car: "Honda CR-V Owner",
        image: "/images/Place-Holder-64x64.jpg",
    },
    {
        id: 2,
        quote: "I brought in my vintage Mustang, and the team treated it like their own. The attention to detail was incredible – they restored the interior, polished the paint to perfection, and even detailed the engine bay. These guys are true professionals.",
        name: "Atul Bhardwaj",
        car: "1967 Mustang Owner",
        image: "/images/Place-Holder-64x64.jpg",
    },
    {
        id: 3,
        quote: "Sunrise Detailing transformed my daily driver. The interior smelled like a new car again, and the exterior shine is incredible. The staff was friendly and explained everything they were doing. I'll definitely be back regularly!",
        name: "Jatin Malhotra",
        car: "Toyota Camry Owner",
        image: "/images/Place-Holder-64x64.jpg",
    },
    {
        id: 4,
        quote: "After years of neglect, my truck needed serious help. Sunrise took on the challenge and delivered amazing results. They removed stains I thought were permanent and brought back the shine. Great service at a fair price!",
        name: "Ajay Hooda",
        car: "Ford F-150 Owner",
        image: "/images/Place-Holder-64x64.jpg",
    },
    {
        id: 5,
        quote: "I've been coming to Sunrise Detailing for over two years now, and they never disappoint. Consistent quality, friendly service, and my Audi always looks showroom-perfect. They've earned a customer for life.",
        name: "Arun Kumar",
        car: "Audi A4 Owner",
        image: "/images/Place-Holder-64x64.jpg",
    }
];

const TestimonialsCarousel = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const scrollAmount = 400; // Adjust scroll distance as needed
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className="position-relative">

            {/* Scroll Buttons */}
            <div className="d-flex justify-content-end gap-2 mb-3 pe-3">
                <button
                    onClick={() => scroll('left')}
                    className="btn btn-outline-light rounded-circle d-flex align-items-center justify-content-center"
                    style={{ width: '40px', height: '40px', zIndex: 10 }}
                    aria-label="Previous Review"
                >
                    <i className="bi bi-chevron-left"></i>
                </button>
                <button
                    onClick={() => scroll('right')}
                    className="btn btn-outline-light rounded-circle d-flex align-items-center justify-content-center"
                    style={{ width: '40px', height: '40px', zIndex: 10 }}
                    aria-label="Next Review"
                >
                    <i className="bi bi-chevron-right"></i>
                </button>
            </div>

            {/* Carousel Container */}
            <div
                ref={scrollRef}
                className="d-flex overflow-x-auto gap-4 pb-4 px-2 hide-scrollbar"
                style={{ scrollSnapType: 'x mandatory', scrollBehavior: 'smooth' }}
            >
                {testimonials.map((item) => (
                    <div
                        key={item.id}
                        className="card p-4 flex-shrink-0"
                        style={{
                            minWidth: '350px',
                            maxWidth: '400px',
                            scrollSnapAlign: 'start'
                        }}
                    >
                        <div className="d-flex flex-column h-100 justify-content-between">
                            <p className="mb-4">"{item.quote}"</p>
                            <div className="d-flex align-items-center">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="rounded-circle me-3"
                                    width="60"
                                    height="60"
                                />
                                <div>
                                    <h5 className="mb-0 text-white">{item.name}</h5>
                                    <small className="text-color-2">{item.car}</small>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default TestimonialsCarousel;
