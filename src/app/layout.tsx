import type { Metadata } from "next";
// import "./globals.css";
// We are using template CSS instead of default globals
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Axemobile - Car Detailing Service",
  description: "Car Detailing Service & Car Repair Template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        {/* Animation On Scroll (AOS) */}
        <link rel="stylesheet" href="/css/vendor/aos.css" />
        {/* GLightbox Preview */}
        <link rel="stylesheet" href="/css/vendor/glightbox.min.css" />
        {/* Bootstrap Icons CSS */}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
        {/* Custom CSS */}
        <link rel="stylesheet" href="/css/style.css" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />

        {/* Scripts */}
        <Script src="/js/vendor/jquery.min.js" strategy="beforeInteractive" />
        <Script src="/js/vendor/aos.js" strategy="afterInteractive" />
        <Script src="/js/vendor/bootstrap.bundle.min.js" strategy="afterInteractive" />
        <Script src="/js/script-counter.js" strategy="lazyOnload" />
        <Script src="/js/script.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
