"use client";

import Link from 'next/link';
import { useState } from 'react';
import AppointmentModal from './AppointmentModal';
import StickyVideoWidget from './StickyVideoWidget';

export default function Header() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <header className="header">
        <div className="b-container">
          <nav className="navbar navbar-expand-lg bg-accent-color" aria-label="Offcanvas navbar large">
            <div className="container-fluid">
              <div className="logo-box">
                <Link className="navbar-brand" href="/">
                  {/* Ensure width/height or use fill for Next.js Image, or just regular img if simpler given the template CSS */}
                  <img src="/images/Main-Logo.png" alt="Main Logo" className="img-fluid" />
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
                className="offcanvas offcanvas-start bg-accent-color"
                tabIndex={-1}
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
              >
                <div className="offcanvas-header" id="offcanvasNavbarLabel">
                  <div className="logo-box">
                    <Link className="navbar-brand" href="/">
                      <img src="/images/Main-Logo.png" alt="Drawer Logo" className="img-fluid" />
                    </Link>
                  </div>
                  <button
                    type="button"
                    className="btn-close bg-primary-color py-2 px-3"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="offcanvas-body">
                  <ul className="navbar-nav mx-auto my-lg-4 gap-lg-2 gap-xl-4">
                    <li className="nav-item">
                      <Link className="nav-link active" aria-current="page" href="/">
                        Homepage
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link" href="/services">
                        Services
                      </Link>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Pages
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <Link className="dropdown-item" href="/pricing">
                            Pricing Plan
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" href="/team">
                            Team
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="/about-us">
                        About Us
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="/contact-us">
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                  <div className="mt-3">
                    <button onClick={() => setShowModal(true)} className="btn btn-lg btn-cta-secondary d-none d-lg-block">
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
