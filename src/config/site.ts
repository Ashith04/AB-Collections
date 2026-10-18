export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  url: string;
  ogImage: string;
  instagram: {
    handle: string;
    url: string;
  };
  contact: {
    phone: string;
    phoneDisplay: string;
    whatsappNumber: string; // international format without + or spaces e.g. 919876543210
    whatsappDisplay: string;
    email: string;
    address: {
      street: string;
      area: string;
      city: string;
      state: string;
      pincode: string;
      country: string;
      full: string;
    };
    googleMapsEmbedUrl: string;
    googleMapsDirectionsUrl: string;
  };
  businessHours: {
    days: string;
    open: string; // 24-hr format e.g. "10:00"
    close: string; // 24-hr format e.g. "21:30"
    display: string;
    sundayHours: string;
  };
  features: {
    freeInStoreTrial: boolean;
    whatsappReservation: boolean;
    sameDayHold: boolean;
  };
  announcement: {
    enabled: boolean;
    text: string;
    linkText?: string;
    linkUrl?: string;
  };
  socialLinks: {
    instagram: string;
    facebook: string;
    youtube?: string;
  };
  analytics: {
    googleAnalyticsId: string; // Replace with actual G-XXXXXXXXXX in production
  };
  seo: {
    keywords: string[];
  };
}

export const siteConfig: SiteConfig = {
  name: "AB Collections",
  tagline: "The Fit of Everyday Style",
  description:
    "Kavoor's premier men's exclusive fashion destination. Curated cargo shirts, tonal checks, structured denim, linen trousers and refined everyday streetwear in Mangaluru.",
  url: "https://abcollections.in",
  ogImage: "/images/store/store_interior.jpg",
  instagram: {
    handle: "@ab_collections_kavoor",
    url: "https://www.instagram.com/ab_collections_kavoor/",
  },
  contact: {
    phone: "+91 77604 68902",
    phoneDisplay: "+91 77604 68902",
    whatsappNumber: "917760468902",
    whatsappDisplay: "+91 77604 68902",
    email: "contact@abcollections.in",
    address: {
      street: "Kavoor Tower, Above Union Bank",
      area: "Kavoor",
      city: "Mangaluru",
      state: "Karnataka",
      pincode: "575015",
      country: "India",
      full: "AB Collections, Kavoor Tower, Above Union Bank, Kavoor, Mangaluru, Karnataka 575015",
    },
    googleMapsEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15555.275525539744!2d74.839818!3d12.919246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35a0928014e7b%3A0x67db206c9a304561!2sKavoor%2C%20Mangaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000",
    googleMapsDirectionsUrl:
      "https://maps.google.com/?q=Kavoor+Tower+Kavoor+Mangaluru+Karnataka",
  },
  businessHours: {
    days: "Monday – Sunday",
    open: "10:00",
    close: "21:30",
    display: "10:00 AM – 9:30 PM (All 7 Days)",
    sundayHours: "10:30 AM – 9:00 PM",
  },
  features: {
    freeInStoreTrial: true,
    whatsappReservation: true,
    sameDayHold: true,
  },
  announcement: {
    enabled: true,
    text: "✨ Festival Edit & New Slim-Fit Drop In Store Now — Reserve on WhatsApp or Visit Us in Kavoor!",
    linkText: "Explore Shop",
    linkUrl: "/shop",
  },
  socialLinks: {
    instagram: "https://www.instagram.com/ab_collections_kavoor/",
    facebook: "https://facebook.com/abcollectionskavoor", // [PLACEHOLDER]
  },
  analytics: {
    googleAnalyticsId: "G-PLACEHOLDER01", // [PLACEHOLDER]
  },
  seo: {
    keywords: [
      "men's clothing Kavoor",
      "AB Collections Mangalore",
      "men's exclusive store Mangaluru",
      "cargo shirts Mangalore",
      "stylish shirts Kavoor",
      "slim fit jeans Mangaluru",
      "best men wear shop in Kavoor",
      "linen trousers men Mangalore",
      "casual shirts Mangaluru",
      "Kavoor clothing store",
    ],
  },
};

/**
 * Utility to check if store is currently open based on local IST hours
 */
export function isStoreCurrentlyOpen(): { isOpen: boolean; statusText: string } {
  try {
    const now = new Date();
    // Convert to IST (UTC + 5:30)
    const utc = now.getTime() + now.getTimezoneOffset() * 60000;
    const istTime = new Date(utc + 3600000 * 5.5);
    const hour = istTime.getHours();
    const minute = istTime.getMinutes();
    const currentMins = hour * 60 + minute;

    const openMins = 10 * 60; // 10:00 AM
    const closeMins = 21 * 60 + 30; // 9:30 PM

    if (currentMins >= openMins && currentMins < closeMins) {
      return { isOpen: true, statusText: "Open Now • Closes 9:30 PM" };
    } else {
      return { isOpen: false, statusText: "Closed Now • Opens 10:00 AM" };
    }
  } catch {
    return { isOpen: true, statusText: "Open Today 10 AM – 9:30 PM" };
  }
}
