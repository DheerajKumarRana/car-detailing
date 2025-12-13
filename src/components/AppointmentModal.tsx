"use client";

import { useState, useRef, useEffect } from 'react';
import styles from './AppointmentModal.module.css';

interface AppointmentModalProps {
    show: boolean;
    onClose: () => void;
}

type CarType = 'sedan' | 'suv' | 'truck' | 'van' | 'luxury';

const carBrands: Record<CarType, string[]> = {
    sedan: [
        "Maruti Suzuki", "Tata Motors", "Hyundai", "Honda", "Toyota", "Skoda", "Volkswagen",
        "Renault", "Nissan", "Kia", "MG Motor", "Citroën", "Fiat", "Ford", "Chevrolet",
        "Opel", "Hindustan Motors", "Premier Automobiles", "BYD", "Suzuki"
    ].sort(),
    suv: [
        "Mahindra", "Tata Motors", "Maruti Suzuki", "Toyota", "Hyundai", "Kia", "Jeep",
        "MG Motor", "Skoda", "Volkswagen", "Renault", "Nissan", "Honda", "Citroën",
        "Isuzu", "Force Motors", "Ford", "BYD", "Lexus", "Land Rover", "Volvo", "Suzuki"
    ].sort(),
    truck: [
        "Ashok Leyland", "Tata Motors", "Mahindra", "Eicher", "BharatBenz", "Volvo Trucks",
        "Scania", "Force Motors", "Isuzu", "SML Isuzu", "AMW"
    ].sort(),
    van: [
        "Maruti Suzuki", "Force Motors", "Tata Motors", "Mahindra", "Toyota", "Nissan",
        "Renault", "Mercedes-Benz"
    ].sort(),
    luxury: [
        "Mercedes-Benz", "BMW", "Audi", "Volvo", "Jaguar", "Land Rover", "Porsche",
        "Lexus", "Mini", "Rolls-Royce", "Lamborghini", "Ferrari", "Bentley",
        "Aston Martin", "Maserati", "Bugatti", "McLaren", "Tesla"
    ].sort()
};

export default function AppointmentModal({ show, onClose }: AppointmentModalProps) {
    const [selectedCarType, setSelectedCarType] = useState<CarType | ''>('');
    const [selectedBrand, setSelectedBrand] = useState<string>('');
    const [brandSearch, setBrandSearch] = useState<string>('');
    const [showBrandDropdown, setShowBrandDropdown] = useState<boolean>(false);

    // Reset function for when modal closes
    useEffect(() => {
        if (!show) {
            // Optional: reset fields on close
            // setSelectedCarType('');
            // setSelectedBrand('');
            // setBrandSearch('');
        }
    }, [show]);

    if (!show) return null;

    const handleCarTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const type = e.target.value as CarType;
        setSelectedCarType(type);
        setSelectedBrand('');
        setBrandSearch('');
    };

    const handleBrandSelect = (brand: string) => {
        setSelectedBrand(brand);
        setBrandSearch(brand);
        setShowBrandDropdown(false);
    };

    // Filter brands
    const filteredBrands = selectedCarType
        ? carBrands[selectedCarType].filter(brand =>
            brand.toLowerCase().includes(brandSearch.toLowerCase())
        )
        : [];

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
                                                <option value="paint">Paint Correction</option>
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
                                                <option value="suv">SUV / Crossover</option>
                                                <option value="truck">Truck / Pickup</option>
                                                <option value="van">Van / Minivan</option>
                                                <option value="luxury">Luxury / Sports Car</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                {/* Car Brand (Searchable Dropdown) */}
                                <div className="col-12">
                                    <div className={styles.formGroup}>
                                        <label htmlFor="carBrand" className={styles.label}>Car Brand</label>
                                        <div className={`${styles.inputGroup} ${styles.dropdownContainer}`}>
                                            <i className={`bi bi-search ${styles.inputIcon}`}></i>
                                            <input
                                                type="text"
                                                className={styles.input}
                                                id="carBrand"
                                                placeholder={selectedCarType ? "Search or select brand..." : "Please select a Car Type first"}
                                                disabled={!selectedCarType}
                                                value={brandSearch}
                                                onChange={(e) => {
                                                    setBrandSearch(e.target.value);
                                                    setShowBrandDropdown(true);
                                                    if (e.target.value === '') setSelectedBrand('');
                                                }}
                                                onFocus={() => setShowBrandDropdown(true)}
                                                // Blur handling needs care to not close before click
                                                onBlur={() => setTimeout(() => setShowBrandDropdown(false), 200)}
                                                autoComplete="off"
                                                required
                                            />

                                            {/* Dropdown List */}
                                            {showBrandDropdown && selectedCarType && filteredBrands.length > 0 && (
                                                <div className={styles.dropdownList}>
                                                    {filteredBrands.map((brand, index) => (
                                                        <div
                                                            key={index}
                                                            className={styles.dropdownItem}
                                                            onClick={() => handleBrandSelect(brand)}
                                                        >
                                                            {brand}
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
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
