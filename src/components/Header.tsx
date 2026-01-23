"use client";

import Link from 'next/link';
import { useState, useRef } from 'react';
import { usePathname } from 'next/navigation';
import AppointmentModal from './AppointmentModal';
import StickyVideoWidget from './StickyVideoWidget';

export default function Header() {
  const [showModal, setShowModal] = useState(false);
  const pathname = usePathname();
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  const handleLinkClick = () => {
    closeBtnRef.current?.click();
  };

  const isActive = (path: string) => pathname === path ? 'active' : '';
  const isDropdownActive = (paths: string[]) => paths.includes(pathname) ? 'active' : '';

  return (
    <>
      <header className="header header-sticky">
        <div className="b-container">
          <nav className="navbar navbar-expand-lg bg-accent-color" aria-label="Offcanvas navbar large">
            <div className="container-fluid">
              <div className="logo-box">
                <Link className="navbar-brand" href="/">
                  {/* Ensure width/height or use fill for Next.js Image, or just regular img if simpler given the template CSS */}
                  <img src="/images/latest2.png" alt="Main Logo" className="img-fluid" style={{ maxHeight: '60px' }} />
                </Link>
              </div>
              <button
                className="navbar-toggler bg-primary-color"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="offcanvas offcanvas-start text-white w-100"
                tabIndex={-1}
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
                style={{ zIndex: 9999, backgroundColor: '#111111', height: '100vh' }}
              >
                <div className="offcanvas-header" id="offcanvasNavbarLabel">
                  <div className="logo-box">
                    <Link className="navbar-brand" href="/">
                      <img src="/images/latest2.png" alt="Drawer Logo" className="img-fluid" style={{ maxHeight: '50px' }} />
                    </Link>
                  </div>
                  <button
                    type="button"
                    className="btn-close bg-primary-color py-2 px-3 opacity-100"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                    ref={closeBtnRef}
                  ></button>
                </div>
                <div className="offcanvas-body p-4 p-lg-0 d-flex flex-column flex-lg-row align-items-lg-center">
                  <div className="flex-grow-1 flex-lg-grow-0 mx-auto">
                    <ul className="navbar-nav flex-column flex-lg-row gap-3 gap-lg-4 gap-xl-5 align-items-lg-center">
                      <li className="nav-item border-bottom border-secondary pb-2 border-lg-0 pb-lg-0">
                        <Link className={`nav-link ${isActive('/')} text-white fs-5 fw-medium d-flex justify-content-between align-items-center fs-lg-6 fw-lg-normal justify-content-lg-center`} href="/" onClick={handleLinkClick}>
                          Homepage
                          <i className="bi bi-chevron-right fs-6 opacity-50 d-lg-none"></i>
                        </Link>
                      </li>
                      <li className="nav-item border-bottom border-secondary pb-2 border-lg-0 pb-lg-0">
                        <Link className={`nav-link ${isActive('/services')} text-white fs-5 fw-medium d-flex justify-content-between align-items-center fs-lg-6 fw-lg-normal justify-content-lg-center`} href="/services" onClick={handleLinkClick}>
                          Services
                          <i className="bi bi-chevron-right fs-6 opacity-50 d-lg-none"></i>
                        </Link>
                      </li>
                      <li className="nav-item border-bottom border-secondary pb-2 border-lg-0 pb-lg-0">
                        <Link className={`nav-link ${isActive('/pricing')} text-white fs-5 fw-medium d-flex justify-content-between align-items-center fs-lg-6 fw-lg-normal justify-content-lg-center`} href="/pricing" onClick={handleLinkClick}>
                          Pricing Plan
                          <i className="bi bi-chevron-right fs-6 opacity-50 d-lg-none"></i>
                        </Link>
                      </li>
                      <li className="nav-item border-bottom border-secondary pb-2 border-lg-0 pb-lg-0">
                        <Link className={`nav-link ${isActive('/team')} text-white fs-5 fw-medium d-flex justify-content-between align-items-center fs-lg-6 fw-lg-normal justify-content-lg-center`} href="/team" onClick={handleLinkClick}>
                          Our Team
                          <i className="bi bi-chevron-right fs-6 opacity-50 d-lg-none"></i>
                        </Link>
                      </li>
                      <li className="nav-item border-bottom border-secondary pb-2 border-lg-0 pb-lg-0">
                        <Link className={`nav-link ${isActive('/about-us')} text-white fs-5 fw-medium d-flex justify-content-between align-items-center fs-lg-6 fw-lg-normal justify-content-lg-center`} href="/about-us" onClick={handleLinkClick}>
                          About Us
                          <i className="bi bi-chevron-right fs-6 opacity-50 d-lg-none"></i>
                        </Link>
                      </li>

                    </ul>
                  </div>

                  {/* Mobile Footer Area (Hidden on Desktop) */}
                  <div className="mt-auto pt-4 d-lg-none">
                    <button onClick={() => setShowModal(true)} className="btn btn-cta-primary w-100 py-3 rounded-3 fw-bold shadow-sm">
                      Make Appointment
                    </button>
                    <div className="d-flex justify-content-center gap-4 mt-4 opacity-75">
                      <a href="https://www.instagram.com/sunrise_detailing_car_care_?igsh=amcxeTUydTljOHlm" target="_blank" rel="noopener noreferrer" className="text-white fs-5"><i className="bi bi-instagram"></i></a>
                      <a href="https://www.facebook.com/share/185wge3GUS/" target="_blank" rel="noopener noreferrer" className="text-white fs-5"><i className="bi bi-facebook"></i></a>
                      <a href="https://youtube.com/@sunrisedetailingcarcare-v5o?si=NY0-Ib9e_zrcsboO" target="_blank" rel="noopener noreferrer" className="text-white fs-5"><i className="bi bi-youtube"></i></a>
                    </div>
                  </div>

                  {/* Desktop Only Button */}
                  <div className="d-none d-lg-block ms-lg-3">
                    <button onClick={() => setShowModal(true)} className="btn btn-cta-primary">
                      Make Appointment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Appointment Modal */}
      <AppointmentModal show={showModal} onClose={() => setShowModal(false)} />

      {/* Sticky Video Widget */}
      <StickyVideoWidget onOpenModal={() => setShowModal(true)} />

      {/* Sticky WhatsApp Button (Left Bottom) */}
      <a
        href="https://wa.me/918700371129"
        target="_blank"
        rel="noopener noreferrer"
        className="position-fixed z-3 d-flex align-items-center justify-content-center bg-success text-white rounded-circle shadow-lg"
        style={{
          bottom: '30px',
          left: '30px',
          width: '60px',
          height: '60px',
          fontSize: '30px',
          transition: 'transform 0.3s ease'
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <i className="bi bi-whatsapp"></i>
      </a>
    </>
  );
}
