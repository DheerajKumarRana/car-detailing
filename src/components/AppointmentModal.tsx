"use client";

import { useState, useRef, useEffect } from 'react';
import styles from './AppointmentModal.module.css';

interface AppointmentModalProps {
    show: boolean;
    onClose: () => void;
}

type CarType = 'sedan' | 'suv' | 'hatchback';



export default function AppointmentModal({ show, onClose }: AppointmentModalProps) {
    const [selectedCarType, setSelectedCarType] = useState<CarType | ''>('');

    // Reset function for when modal closes
    useEffect(() => {
        if (!show) {
            // Optional: reset fields on close
            setSelectedCarType('');
        }
    }, [show]);

    if (!show) return null;

    const handleCarTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const type = e.target.value as CarType;
        setSelectedCarType(type);
    };

    return (
        <div className={`modal fade show d-block ${styles.modalOverlay}`} tabIndex={-1} role="dialog">
            <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div className={`modal-content ${styles.modalContent}`}>
                    <div className={styles.modalHeader}>
                        <h5 className={styles.modalTitle}>Book Your Appointment</h5>
                        <button
                            type="button"
                            className={styles.closeButton}
                            onClick={onClose}
                            aria-label="Close"
                        >
                            <i className="bi bi-x-lg"></i>
                        </button>
                    </div>
                    <div className={styles.modalBody}>
                        <p className={styles.modalDescription}>
                            Fill out the form below to schedule your premium car detailing service. Select your vehicle type and desired service package.
                        </p>
                        <form>
                            <div className="row g-3"> {/* Adjusted gap for mobile compactness */}
                                {/* Name */}
                                <div className="col-12 col-md-6">
                                    <div className={styles.formGroup}>
                                        <label htmlFor="name" className={styles.label}>Full Name</label>
                                        <div className={styles.inputGroup}>
                                            <i className={`bi bi-person ${styles.inputIcon}`}></i>
                                            <input type="text" className={styles.input} id="name" placeholder="John Doe" required />
                                        </div>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="col-12 col-md-6">
                                    <div className={styles.formGroup}>
                                        <label htmlFor="phone" className={styles.label}>Phone Number</label>
                                        <div className={styles.inputGroup}>
                                            <i className={`bi bi-telephone ${styles.inputIcon}`}></i>
                                            <input type="tel" className={styles.input} id="phone" placeholder="+1 234 567 890" required />
                                        </div>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="col-12">
                                    <div className={styles.formGroup}>
                                        <label htmlFor="email" className={styles.label}>Email Address</label>
                                        <div className={styles.inputGroup}>
                                            <i className={`bi bi-envelope ${styles.inputIcon}`}></i>
                                            <input type="email" className={styles.input} id="email" placeholder="john@example.com" required />
                                        </div>
                                    </div>
                                </div>

                                {/* Service Type */}
                                <div className="col-12 col-md-6">
                                    <div className={styles.formGroup}>
                                        <label htmlFor="service" className={styles.label}>Service Type</label>
                                        <div className={styles.inputGroup}>
                                            <i className={`bi bi-tools ${styles.inputIcon}`}></i>
                                            <select className={styles.select} id="service" required defaultValue="">
                                                <option value="" disabled>Select a Service</option>
                                                <option value="exterior">Exterior Detailing</option>
                                                <option value="interior">Interior Detailing</option>
                                                <option value="full">Full Car Detailing</option>
                                                <option value="coating">Ceramic Coating</option>
                                                <option value="ppf">PPF</option>
                                                <option value="wrap">Wrap</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                {/* Car Type */}
                                <div className="col-12 col-md-6">
                                    <div className={styles.formGroup}>
                                        <label htmlFor="carType" className={styles.label}>Car Type</label>
                                        <div className={styles.inputGroup}>
                                            <i className={`bi bi-car-front ${styles.inputIcon}`}></i>
                                            <select
                                                className={styles.select}
                                                id="carType"
                                                required
                                                value={selectedCarType}
                                                onChange={handleCarTypeChange}
                                            >
                                                <option value="" disabled>Select Car Type</option>
                                                <option value="sedan">Sedan</option>
                                                <option value="suv">SUV</option>
                                                <option value="hatchback">Hatchback</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                {/* Car Brand (Simple Text Input) */}
                                <div className="col-12">
                                    <div className={styles.formGroup}>
                                        <label htmlFor="carBrand" className={styles.label}>Car Name/Brand</label>
                                        <div className={styles.inputGroup}>
                                            <i className={`bi bi-search ${styles.inputIcon}`}></i>
                                            <input
                                                type="text"
                                                className={styles.input}
                                                id="carBrand"
                                                placeholder="e.g. Toyota Corolla, Honda City"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Message */}
                                <div className="col-12">
                                    <div className={styles.formGroup}>
                                        <label htmlFor="message" className={styles.label}>Special Requests</label>
                                        <textarea className={styles.textarea} id="message" rows={2} placeholder="Any specific issues or requests..."></textarea>
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <div className="col-12">
                                    <button type="submit" className={styles.submitButton}>
                                        Confirm Booking <i className="bi bi-arrow-right ms-2"></i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
