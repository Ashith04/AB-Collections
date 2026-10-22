import type { Metadata } from "next";
import { Suspense } from "react";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { WishlistProvider } from "@/context/WishlistContext";
import { ReserveProvider } from "@/context/ReserveContext";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloating } from "@/components/layout/WhatsAppFloating";
import { BrandPreloader } from "@/components/layout/BrandPreloader";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "AB Collections | Men's Exclusive Clothing Store • Kavoor, Mangaluru",
    template: "%s | AB Collections Kavoor",
  },
  description:
    "Explore AB Collections in Kavoor, Mangaluru. Men's exclusive fashion destination featuring tactical cargo shirts, tailored windowpane checks, evening satin jacquards, and linen trousers.",
  keywords: siteConfig.seo.keywords,
  authors: [{ name: "AB Collections" }],
  creator: "AB Collections Kavoor",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    title: "AB Collections | Men's Exclusive Clothing • Kavoor, Mangaluru",
    description:
      "Exclusive men's clothing store in Kavoor, Mangaluru. Browse cargo shirts, slim-fit jeans, and premium formals. Reserve outfits on WhatsApp for in-store trial.",
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "AB Collections Kavoor Store Interior",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AB Collections | Men's Exclusive Fashion • Kavoor",
    description:
      "Exclusive men's clothing store in Kavoor, Mangaluru. Browse cargo shirts, tailored checks, and evening satin.",
    images: [siteConfig.ogImage],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // LocalBusiness structured data JSON-LD
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "ClothingStore",
    name: siteConfig.name,
    image: `${siteConfig.url}/images/store/store_interior.jpg`,
    "@id": siteConfig.url,
    url: siteConfig.url,
    telephone: siteConfig.contact.phone,
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address.street,
      addressLocality: siteConfig.contact.address.area,
      addressRegion: siteConfig.contact.address.city,
      postalCode: siteConfig.contact.address.pincode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 12.9192,
      longitude: 74.8398,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "10:00",
        closes: "21:30",
      },
    ],
    sameAs: [
      siteConfig.socialLinks.instagram,
      siteConfig.socialLinks.facebook,
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-neutral-900 antialiased selection:bg-neutral-950 selection:text-white">
        <BrandPreloader />
        <WishlistProvider>
          <ReserveProvider>
            <AnnouncementBar />
            <Suspense fallback={<div className="h-16" />}>
              <Navbar />
            </Suspense>
            <main className="flex-1">{children}</main>
            <Footer />
            <WhatsAppFloating />
          </ReserveProvider>
        </WishlistProvider>
      </body>
    </html>
  );
}
