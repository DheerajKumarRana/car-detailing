import React from 'react';
import styles from './ShopifySection.module.css';

interface Product {
    id: string;
    title: string;
    price: number;
    image: string;
    rating: number;
    reviews: number;
    isLimitedEdition?: boolean;
}

interface ShopifySectionProps {
    headingText?: string;
    descriptionText?: string;
    headingColor?: string;

    // Dynamic sizing props
    headingSizeDesktop?: string; // e.g. '32px'
    headingSizeMobile?: string;  // e.g. '24px'
    descriptionSizeDesktop?: string; // e.g. '16px'
    descriptionSizeMobile?: string;  // e.g. '14px'

    products?: Product[];
}

// Dummy Data
const DUMMY_PRODUCTS: Product[] = [
    {
        id: '1',
        title: 'Women Tshirt',
        price: 599.00,
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        rating: 4.5,
        reviews: 12,
        isLimitedEdition: true,
    },
    {
        id: '2',
        title: 'Men Tshirt',
        price: 599.00,
        image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        rating: 4.5,
        reviews: 8,
    },
    {
        id: '3',
        title: 'Men Tshirt',
        price: 599.00,
        image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        rating: 4.5,
        reviews: 45,
        isLimitedEdition: true,
    },
    {
        id: '4',
        title: 'Women Tshirt',
        price: 599.00,
        image: 'https://images.unsplash.com/photo-1503341455253-b2e72333dbdb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        rating: 4.5,
        reviews: 23,
    },
    // Repeat for 2nd row simulation
    {
        id: '5',
        title: 'Women Tshirt',
        price: 599.00,
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        rating: 4.5,
        reviews: 12,
        isLimitedEdition: true,
    },
    {
        id: '6',
        title: 'Men Tshirt',
        price: 599.00,
        image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        rating: 4.5,
        reviews: 8,
    },
    {
        id: '7',
        title: 'Men Tshirt',
        price: 599.00,
        image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        rating: 4.5,
        reviews: 45,
        isLimitedEdition: true,
    },
    {
        id: '8',
        title: 'Women Tshirt',
        price: 599.00,
        image: 'https://images.unsplash.com/photo-1503341455253-b2e72333dbdb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        rating: 4.5,
        reviews: 23,
    },
];

const ShopifySection: React.FC<ShopifySectionProps> = ({
    headingText = "Explore Our Collection",
    descriptionText = "Lorem ipsum dolor sit amet consectetur. Est tellus nunc varius dictum tristique.",
    headingColor = "#000000",
    headingSizeDesktop = "32px",
    headingSizeMobile = "24px",
    descriptionSizeDesktop = "16px",
    descriptionSizeMobile = "14px",
    products = DUMMY_PRODUCTS,
}) => {

    return (
        <section className={styles.container}>
            <div className={styles.header}>
                <h2
                    className={styles.heading}
                    style={{
                        color: headingColor,
                        // Using CSS variables for responsive font sizing logic would be ideal, 
                        // but for simplicity with inline styles we use clamp() or media queries. 
                        // To support distinct mobile/desktop props strictly, we can use a CSS variable approach:

                    } as React.CSSProperties}
                >
                    <span className="desktop-only" style={{ fontSize: headingSizeDesktop, display: 'none' }}>{headingText}</span>
                    {/* 
               A better approach for truly dynamic responsive styles via props 
               is setting CSS variables on the container.
            */}
                    {headingText}
                </h2>

                {/* We will apply the dynamic sizes using a style block or CSS variables for cleanliness */}
                <style jsx>{`
          .${styles.heading} {
            font-size: ${headingSizeMobile};
          }
          .${styles.description} {
            font-size: ${descriptionSizeMobile};
          }
          @media (min-width: 768px) {
            .${styles.heading} {
              font-size: ${headingSizeDesktop};
            }
            .${styles.description} {
              font-size: ${descriptionSizeDesktop};
            }
          }
        `}</style>

                <p className={styles.description}>
                    {descriptionText}
                </p>
            </div>

            <div className={styles.grid}>
                {products.map((product) => (
                    <div key={product.id} className={styles.card}>
                        <div className={styles.imageContainer}>
                            {product.isLimitedEdition && (
                                <span className={styles.badge}>Limited Edition</span>
                            )}
                            <img
                                src={product.image}
                                alt={product.title}
                                className={styles.productImage}
                            />
                            <button className={styles.wishlistBtn} aria-label="Add to Wishlist">
                                {/* Heart Icon SVG */}
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                </svg>
                            </button>
                        </div>

                        <div className={styles.info}>
                            <div className={styles.titleRow}>
                                <h3 className={styles.title}>{product.title}</h3>
                                <span className={styles.price}>₹{product.price.toFixed(2)}</span>
                            </div>
                            <div className={styles.rating}>
                                {/* Star Icon SVG */}
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <svg key={star} width="12" height="12" viewBox="0 0 24 24" fill={star <= Math.round(product.rating) ? "#FFA500" : "none"} stroke="#FFA500" strokeWidth="2" className={styles.star}>
                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                    </svg>
                                ))}
                                <span>{product.rating}</span>
                            </div>
                        </div>

                        <button className={styles.addToCartBtn}>
                            {/* Bag Icon SVG */}
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                                <line x1="3" y1="6" x2="21" y2="6"></line>
                                <path d="M16 10a4 4 0 0 1-8 0"></path>
                            </svg>
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ShopifySection;
