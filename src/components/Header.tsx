"use client";

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import AppointmentModal from './AppointmentModal';
import StickyVideoWidget from './StickyVideoWidget';

export default function Header() {
  const [showModal, setShowModal] = useState(false);
  const pathname = usePathname();

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
                  ></button>
                </div>
                <div className="offcanvas-body p-4 p-lg-0 d-flex flex-column flex-lg-row align-items-lg-center">
                  <div className="flex-grow-1 flex-lg-grow-0 mx-auto">
                    <ul className="navbar-nav flex-column flex-lg-row gap-3 gap-lg-4 gap-xl-5 align-items-lg-center">
                      <li className="nav-item border-bottom border-secondary pb-2 border-lg-0 pb-lg-0">
                        <Link className={`nav-link ${isActive('/')} text-white fs-5 fw-medium d-flex justify-content-between align-items-center fs-lg-6 fw-lg-normal justify-content-lg-center`} href="/">
                          Homepage
                          <i className="bi bi-chevron-right fs-6 opacity-50 d-lg-none"></i>
                        </Link>
                      </li>
                      <li className="nav-item border-bottom border-secondary pb-2 border-lg-0 pb-lg-0">
                        <Link className={`nav-link ${isActive('/services')} text-white fs-5 fw-medium d-flex justify-content-between align-items-center fs-lg-6 fw-lg-normal justify-content-lg-center`} href="/services">
                          Services
                          <i className="bi bi-chevron-right fs-6 opacity-50 d-lg-none"></i>
                        </Link>
                      </li>
                      <li className="nav-item dropdown border-bottom border-secondary pb-2 border-lg-0 pb-lg-0">
                        <a
                          className={`nav-link dropdown-toggle text-white fs-5 fw-medium d-flex justify-content-between align-items-center fs-lg-6 fw-lg-normal justify-content-lg-center ${isDropdownActive(['/pricing', '/team'])}`}
                          href="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Pages
                          <i className="bi bi-chevron-down fs-6 opacity-50 d-lg-none"></i>
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <Link className={`dropdown-item ${isActive('/pricing')}`} href="/pricing">
                              Pricing Plan
                            </Link>
                          </li>
                          <li>
                            <Link className={`dropdown-item ${isActive('/team')}`} href="/team">
                              Team
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item border-bottom border-secondary pb-2 border-lg-0 pb-lg-0">
                        <Link className={`nav-link ${isActive('/about-us')} text-white fs-5 fw-medium d-flex justify-content-between align-items-center fs-lg-6 fw-lg-normal justify-content-lg-center`} href="/about-us">
                          About Us
                          <i className="bi bi-chevron-right fs-6 opacity-50 d-lg-none"></i>
                        </Link>
                      </li>
                      <li className="nav-item border-bottom border-secondary pb-2 border-lg-0 pb-lg-0">
                        <Link className={`nav-link ${isActive('/contact-us')} text-white fs-5 fw-medium d-flex justify-content-between align-items-center fs-lg-6 fw-lg-normal justify-content-lg-center`} href="/contact-us">
                          Contact Us
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
                      <a href="#" className="text-white fs-5"><i className="bi bi-instagram"></i></a>
                      <a href="#" className="text-white fs-5"><i className="bi bi-facebook"></i></a>
                      <a href="#" className="text-white fs-5"><i className="bi bi-twitter-x"></i></a>
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
        href="https://wa.me/1234567890" // User should replace this
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
