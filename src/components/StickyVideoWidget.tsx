"use client";

import { useState } from 'react';
import styles from './StickyVideoWidget.module.css';

interface StickyVideoWidgetProps {
    onOpenModal: () => void;
}

export default function StickyVideoWidget({ onOpenModal }: StickyVideoWidgetProps) {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <div className={styles.widgetContainer}>
            <button
                className={styles.closeButton}
                onClick={() => setIsVisible(false)}
                aria-label="Close widget"
            >
                <i className="bi bi-x-lg"></i>
            </button>
            <div className={styles.videoWrapper}>
                {/* 
                  Using a sample car detailing stock video URL. 
                  In production, replace this string with a local public file e.g., "/videos/promo.mp4" 
                */}
                <video
                    className={styles.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster="/images/hero-bg.jpg" // Fallback image if video fails
                >
                    <source src="/videos/promo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className={styles.overlay}></div>
                <div className={styles.actionArea}>
                    <button onClick={onOpenModal} className={styles.bookButton}>
                        Book Now
                    </button>
                </div>
            </div>
        </div>
    );
}
