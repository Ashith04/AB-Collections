// Auto-generated dedicated events, festivals, sale posters, and showroom tours.
// Cleanly segregated from the core clothing catalog as requested.

export interface EventItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  type: 'poster' | 'showroom' | 'video';
  mediaType: 'image' | 'video';
  mediaUrl: string;
  date: string;
  badge: string;
  description: string;
  highlights: string[];
}

export const eventItems: EventItem[] = [
  {
    "id": "ab-event-2022-08-22",
    "slug": "flagship-showroom-grand-interior-display-wall",
    "title": "Flagship Showroom Grand Interior & Display Wall",
    "category": "Showroom Interior",
    "type": "showroom",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2022-08-22_20-48-10_2910523753541080837_55023169382.jpg",
    "date": "Store Walkthrough",
    "badge": "Kavoor Flagship",
    "description": "A glimpse inside the modern Kavoor boutique featuring dedicated display aisles, structured shelving, and curated menswear racks.",
    "highlights": [
      "140+ Active Designs",
      "Air Conditioned Showroom",
      "Above Union Bank",
      "Personal Styling Assistance"
    ]
  },
  {
    "id": "ab-event-2022-09-29",
    "slug": "autumn-fresh-arrivals-shelving-showcase",
    "title": "Autumn Fresh Arrivals & Shelving Showcase",
    "category": "Showroom Interior",
    "type": "showroom",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2022-09-29_16-42-03_2937941355444531753_55023169382.jpg",
    "date": "New Season Stock",
    "badge": "Store Gallery",
    "description": "Floor-to-ceiling shelving featuring hand-folded linen shirts, smart-casual checks, and premium cotton staples organized by color tone.",
    "highlights": [
      "Color Coordinated Stacks",
      "Pure Cotton & Linen",
      "Instant Sizing Support",
      "Bespoke Experience"
    ]
  },
  {
    "id": "ab-event-2022-09-29",
    "slug": "store-checkout-gallery-contemporary-menswear",
    "title": "Store Checkout Gallery & Contemporary Menswear",
    "category": "Showroom Interior",
    "type": "showroom",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2022-09-29_16-42-41_2937941675151174496_55023169382.jpg",
    "date": "Store Gallery",
    "badge": "Kavoor Flagship",
    "description": "Modern storefront styling space and collection lounge welcoming shoppers to browse new menswear arrivals.",
    "highlights": [
      "Spacious Boutique Space",
      "Trial Fitting Rooms",
      "Easy Parking Access",
      "Open 7 Days a Week"
    ]
  },
  {
    "id": "ab-event-2022-10-18",
    "slug": "diwali-big-sale-40-off-on-shirt-pant",
    "title": "Diwali Big Sale — 40% Off on Shirt & Pant",
    "category": "Festive Offer Poster",
    "type": "poster",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2022-10-18_22-36-00_2951890246771202031_55023169382.jpg",
    "date": "Diwali Festive Season",
    "badge": "40% OFF Special",
    "description": "Exclusive festival mega campaign offering flat 40% off across premium casual shirts and tailored trousers at AB Collections Kavoor.",
    "highlights": [
      "Flat 40% Off",
      "Shirt & Pant Ensembles",
      "In-Store Festive Offer",
      "Kavoor Tower Flagship"
    ]
  },
  {
    "id": "ab-event-2022-10-24",
    "slug": "happy-diwali-festival-of-lights-celebration",
    "title": "Happy Diwali — Festival of Lights Celebration",
    "category": "Festival Greeting Poster",
    "type": "poster",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2022-10-24_10-30-30_2955873741251724664_55023169382.jpg",
    "date": "Diwali Celebration",
    "badge": "Festival Greeting",
    "description": "Festive community greeting and holiday celebrations presented in collaboration with Hair Spray Unisex Saloon and AB Collections Kavoor.",
    "highlights": [
      "Festival of Lights",
      "Festive Menswear Edit",
      "Celebration & Style",
      "Mangalore Community"
    ]
  },
  {
    "id": "ab-event-2022-11-17",
    "slug": "flagship-store-video-walkthrough-menswear-tour",
    "title": "Flagship Store Video Walkthrough & Menswear Tour",
    "category": "Showroom Video Reel",
    "type": "video",
    "mediaType": "video",
    "mediaUrl": "/catalog/ab_collections_kavoor_2022-11-17_18-47-18_2973518204380336778_55023169382.mp4",
    "date": "Store Video Reel",
    "badge": "Video Walkthrough",
    "description": "Dynamic in-store video walkthrough highlighting seasonal casual staples, tailored silhouettes, and in-store menswear displays.",
    "highlights": [
      "High-Energy Store Reel",
      "Active Stock Walkthrough",
      "Casual & Smart Edits",
      "Instagram Exclusive"
    ]
  }
];

export const eventStats = {
  total: 6,
  posters: 2,
  showrooms: 3,
  videos: 1,
};
