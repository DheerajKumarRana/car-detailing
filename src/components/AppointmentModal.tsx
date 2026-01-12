"use client";

import { useState, useEffect } from 'react';
import styles from './AppointmentModal.module.css';

interface AppointmentModalProps {
    show: boolean;
    onClose: () => void;
}

type CarType = 'sedan' | 'suv' | 'hatchback';
type ServiceType = 'exterior' | 'interior' | 'full' | 'coating' | 'ppf' | 'wrap' | '';

const PPF_BRANDS = ['Luminar', 'CeraWare', 'NAR', 'USA', 'Boss PPF', 'X-PRO'];
const COATING_BRANDS = ['Graphine', '3M', 'Meguar', 'Mahindra', '9H', '10H', '12 PRO', '3D Ceramic Coating'];
const WRAP_COLORS = ['Red Black', 'Red', 'Yellow', 'White', 'Grey', 'Others'];

export default function AppointmentModal({ show, onClose }: AppointmentModalProps) {
    const [selectedCarType, setSelectedCarType] = useState<CarType | ''>('');
    const [selectedService, setSelectedService] = useState<ServiceType>('');
    const [selectedBrand, setSelectedBrand] = useState<string>('');

    // Reset function for when modal closes
    useEffect(() => {
        if (!show) {
            setSelectedCarType('');
            setSelectedService('');
            setSelectedBrand('');
        }
    }, [show]);

    // Reset brand when service changes
    useEffect(() => {
        setSelectedBrand('');
    }, [selectedService]);

    if (!show) return null;

    const handleCarTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const type = e.target.value as CarType;
        setSelectedCarType(type);
    };

    const handleServiceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const service = e.target.value as ServiceType;
        setSelectedService(service);
    };

    const getBrandOptions = () => {
        if (selectedService === 'ppf') return PPF_BRANDS;
        if (selectedService === 'coating') return COATING_BRANDS;
        if (selectedService === 'wrap') return WRAP_COLORS;
        return [];
    };

    const brandOptions = getBrandOptions();
    const isBrandDisabled = brandOptions.length === 0;
    const brandLabel = selectedService === 'wrap' ? 'Select Color' : 'Select Brand';

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
                            <div className="row g-3">
                                {/* Name */}
                                <div className="col-12 col-md-6">
                                    <div className={styles.formGroup}>
                                        <label htmlFor="name" className={styles.label}>Full Name</label>
                                        <div className={styles.inputGroup}>
                                            <i className={`bi bi-person ${styles.inputIcon}`}></i>
                                            <input type="text" className={styles.input} id="name" placeholder="Enter your name" required />
                                        </div>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="col-12 col-md-6">
                                    <div className={styles.formGroup}>
                                        <label htmlFor="phone" className={styles.label}>Phone Number</label>
                                        <div className={styles.inputGroup}>
                                            <i className={`bi bi-telephone ${styles.inputIcon}`}></i>
                                            <input type="tel" className={styles.input} id="phone" placeholder="+91 Enter Mobile no." required />
                                        </div>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="col-12">
                                    <div className={styles.formGroup}>
                                        <label htmlFor="email" className={styles.label}>Email Address</label>
                                        <div className={styles.inputGroup}>
                                            <i className={`bi bi-envelope ${styles.inputIcon}`}></i>
                                            <input type="email" className={styles.input} id="email" placeholder="enteryourmail@gmail.com" required />
                                        </div>
                                    </div>
                                </div>

                                {/* Row: Service Type + Brand */}
                                {/* Service Type */}
                                <div className="col-12 col-md-6">
                                    <div className={styles.formGroup}>
                                        <label htmlFor="service" className={styles.label}>Service Type</label>
                                        <div className={styles.inputGroup}>
                                            <i className={`bi bi-tools ${styles.inputIcon}`}></i>
                                            <select
                                                className={styles.select}
                                                id="service"
                                                required
                                                value={selectedService}
                                                onChange={handleServiceChange}
                                            >
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

                                {/* Brand / Color Selection */}
                                <div className="col-12 col-md-6">
                                    <div className={styles.formGroup}>
                                        <label htmlFor="brand" className={styles.label}>{brandLabel}</label>
                                        <div className={styles.inputGroup}>
                                            <i className={`bi bi-tag ${styles.inputIcon}`}></i>
                                            <select
                                                className={styles.select}
                                                id="brand"
                                                disabled={isBrandDisabled}
                                                value={selectedBrand}
                                                onChange={(e) => setSelectedBrand(e.target.value)}
                                            >
                                                <option value="" disabled>
                                                    {isBrandDisabled ? 'Not available for this service' : `Select ${brandLabel}`}
                                                </option>
                                                {brandOptions.map((brand) => (
                                                    <option key={brand} value={brand}>{brand}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                {/* Row: Car Type + Car Name */}
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

                                {/* Car Brand (Simple Text Input) - Now half width */}
                                <div className="col-12 col-md-6">
                                    <div className={styles.formGroup}>
                                        <label htmlFor="carBrand" className={styles.label}>Car Name/Brand</label>
                                        <div className={styles.inputGroup}>
                                            <i className={`bi bi-search ${styles.inputIcon}`}></i>
                                            <input
                                                type="text"
                                                className={styles.input}
                                                id="carBrand"
                                                placeholder="e.g. Toyota Corolla"
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
