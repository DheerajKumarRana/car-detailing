"use client";

import { useState } from 'react';
import styles from './BookingFormSection.module.css';

type CarType = 'sedan' | 'suv' | 'hatchback';
type ServiceType = 'exterior' | 'interior' | 'full' | 'coating' | 'ppf' | 'wrap' | '';

const PPF_BRANDS = ['Luminar', 'CeraWare', 'NAR', 'USA', 'Boss PPF', 'X-PRO'];
const COATING_BRANDS = ['Graphine', '3M', 'Meguar', 'Mahindra', '9H', '10H', '12 PRO', '3D Ceramic Coating'];
const WRAP_COLORS = ['Red Black', 'Red', 'Yellow', 'White', 'Grey', 'Others'];

export default function BookingFormSection() {
    const [selectedCarType, setSelectedCarType] = useState<CarType | ''>('');
    const [selectedService, setSelectedService] = useState<ServiceType>('');
    const [selectedBrand, setSelectedBrand] = useState<string>('');

    const handleCarTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const type = e.target.value as CarType;
        setSelectedCarType(type);
    };

    const handleServiceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const service = e.target.value as ServiceType;
        setSelectedService(service);
        setSelectedBrand(''); // Reset brand when service changes
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
        <section className={styles.section}>
            <div className="b-container">
                <div className={`text-center ${styles.headingWrapper}`}>
                    <p className={styles.subheading}>10 Years of Detailing Excellence</p>
                    <h2 className={styles.heading}>
                        Professional Car Detailing, Ceramic Coating & Paint Protection Services in Delhi Since 2015.
                    </h2>
                </div>

                <div className={styles.formContainer}>
                    <form>
                        <div className="row g-4">
                            {/* Name */}
                            <div className="col-12 col-md-6">
                                <div className={styles.formGroup}>
                                    <label htmlFor="hp-name" className={styles.label}>Full Name</label>
                                    <div className={styles.inputGroup}>
                                        <i className={`bi bi-person ${styles.inputIcon}`}></i>
                                        <input type="text" className={styles.input} id="hp-name" placeholder="Enter your name" required />
                                    </div>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="col-12 col-md-6">
                                <div className={styles.formGroup}>
                                    <label htmlFor="hp-phone" className={styles.label}>Phone Number</label>
                                    <div className={styles.inputGroup}>
                                        <i className={`bi bi-telephone ${styles.inputIcon}`}></i>
                                        <input type="tel" className={styles.input} id="hp-phone" placeholder="+91 Enter Mobile no." required />
                                    </div>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="col-12">
                                <div className={styles.formGroup}>
                                    <label htmlFor="hp-email" className={styles.label}>Email Address</label>
                                    <div className={styles.inputGroup}>
                                        <i className={`bi bi-envelope ${styles.inputIcon}`}></i>
                                        <input type="email" className={styles.input} id="hp-email" placeholder="enteryourmail@gmail.com" required />
                                    </div>
                                </div>
                            </div>

                            {/* Service Type */}
                            <div className="col-12 col-md-6">
                                <div className={styles.formGroup}>
                                    <label htmlFor="hp-service" className={styles.label}>Service Type</label>
                                    <div className={styles.inputGroup}>
                                        <i className={`bi bi-tools ${styles.inputIcon}`}></i>
                                        <select
                                            className={styles.select}
                                            id="hp-service"
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
                                    <label htmlFor="hp-brand" className={styles.label}>{brandLabel}</label>
                                    <div className={styles.inputGroup}>
                                        <i className={`bi bi-tag ${styles.inputIcon}`}></i>
                                        <select
                                            className={styles.select}
                                            id="hp-brand"
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

                            {/* Car Type */}
                            <div className="col-12 col-md-6">
                                <div className={styles.formGroup}>
                                    <label htmlFor="hp-carType" className={styles.label}>Car Type</label>
                                    <div className={styles.inputGroup}>
                                        <i className={`bi bi-car-front ${styles.inputIcon}`}></i>
                                        <select
                                            className={styles.select}
                                            id="hp-carType"
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
                            <div className="col-12 col-md-6">
                                <div className={styles.formGroup}>
                                    <label htmlFor="hp-carBrand" className={styles.label}>Car Name/Brand</label>
                                    <div className={styles.inputGroup}>
                                        <i className={`bi bi-search ${styles.inputIcon}`}></i>
                                        <input
                                            type="text"
                                            className={styles.input}
                                            id="hp-carBrand"
                                            placeholder="e.g. Toyota Corolla"
                                            required
                                        />
                                    </div>
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
        </section>
    );
}
