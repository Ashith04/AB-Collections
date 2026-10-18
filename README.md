# AB Collections – Men's Exclusive Fashion Destination
**Location:** Near Kavoor Junction, Airport Road, Kavoor, Mangaluru, Karnataka 575015  
**Instagram:** [@ab_collections_kavoor](https://www.instagram.com/ab_collections_kavoor/)  

Editorial, high-contrast, minimal fashion web platform custom-tailored for **AB Collections**, a premier men's exclusive clothing destination in Mangaluru.

---

## 1. Project Overview & Aesthetic
Recreation of the editorial, tight-tracked fashion aesthetic inspired by high-end design benchmarks ("Novure"), adapted for real garment flat-lays and in-store Kavoor retail:
- **Neo-Grotesk Typography**: Ultra-bold, tight-tracked headline (`DRESSED.`, letter-spacing: `-0.045em`), index labels (`/01`, `/02`), fine 12–13px supporting copy.
- **Color Architecture**: Crisp high-contrast split: Bright off-white (`#FBFBFB`) transitioning into full-bleed obsidian black (`#0A0A0A`), powered by 4 signature **Colour Stories** (Olive Edit, Amber & Obsidian, Burgundy Noir, Sand & Linen).
- **Surface & Geometry**: Soft curved corners (24–36px), glassmorphism (`backdrop-blur-md`), tinted cards with real flat-lays, floating action pills.
- **Cart-Style WhatsApp Reservation**: Zero payment gateway friction for in-store trials — builds a unified WhatsApp prefilled order with garment codes, sizes, colors, and direct links.

---

## 2. Tech Stack
- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 4 & Vanilla CSS Custom Utilities
- **Icons:** Lucide React
- **Images:** Next.js Image Optimization with local responsive flat-lays
- **State Management:** React Context API (`WishlistContext`, `ReserveContext`) with local storage persistence

---

## 3. Folder Architecture
```
AB-Collections-1/
├── public/
│   ├── images/
│   │   ├── products/          # Real flat-lay apparel images (utility shirts, checks, cargos)
│   │   ├── store/             # Real Kavoor store interior photos
│   │   └── ui/                # UI reference and media
│   ├── favicon.ico
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Global layout with SEO JSON-LD & providers
│   │   ├── page.tsx           # Editorial Home page with live filtering
│   │   ├── shop/
│   │   │   └── page.tsx       # Full catalogue with live multi-filter sidebar & mobile drawer
│   │   ├── product/
│   │   │   └── [slug]/
│   │   │       └── page.tsx   # Detailed product view (swatches, size guide, WhatsApp reserve)
│   │   ├── lookbook/
│   │   │   └── page.tsx       # Masonry gallery & campaign film showcase
│   │   ├── about/
│   │   │   └── page.tsx       # Kavoor story, atelier photos, men-only focus
│   │   ├── contact/
│   │   │   └── page.tsx       # Interactive map, hours, click-to-call, WhatsApp form
│   │   ├── wishlist/
│   │   │   └── page.tsx       # Saved outfits manager with direct reserve moves
│   │   ├── reserve/
│   │   │   └── page.tsx       # Unified cart-style WhatsApp reservation builder
│   │   ├── faq/
│   │   │   └── page.tsx       # Accordion FAQ on fitting, in-store trial, exchange
│   │   ├── privacy/
│   │   │   └── page.tsx       # 7-day in-store exchange policy & reservation guidelines
│   │   ├── admin/
│   │   │   └── page.tsx       # Staff portal (passcode protected) & Phase 2 roadmap
│   │   ├── not-found.tsx      # Editorial 404 page
│   │   └── globals.css        # Neo-grotesk tracking, marquee animations, glassmorphism
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx     # Sticky glass navbar with counts & search overlay trigger
│   │   │   ├── AnnouncementBar.tsx # Top drop notice
│   │   │   ├── Footer.tsx     # Big typography footer with store coordinates
│   │   │   └── WhatsAppFloating.tsx # Floating quick-enquiry trigger with live status
│   │   ├── home/
│   │   │   ├── HeroSection.tsx      # Giant headline + amber panel + mini cards
│   │   │   ├── LiveFilterBar.tsx    # Live category, size, price, color chip filters
│   │   │   ├── ColorStorySection.tsx # /01 Olive, /02 Amber, /03 Burgundy, /04 Sand
│   │   │   ├── DarkBentoSection.tsx # Obsidian bento + store interior + filter pill tabs
│   │   │   ├── MarqueeStrip.tsx     # Continuous animated fashion ticker
│   │   │   ├── ValueProps.tsx       # 4 core pillars
│   │   │   ├── InstagramGrid.tsx    # Links to @ab_collections_kavoor
│   │   │   └── VisitStoreSection.tsx# Live hours, map embed, directions
│   │   ├── product/
│   │   │   ├── ProductCard.tsx      # Flat-lay presentation, star rating, size range
│   │   │   ├── QuickViewModal.tsx   # Instant preview modal with instant WhatsApp reserve
│   │   │   ├── SizeGuideModal.tsx   # Measurements table for shirts and trousers
│   │   │   └── SearchOverlay.tsx    # Fast search overlay with recent searches & tags
│   │   └── ui/
│   │       ├── PillButton.tsx
│   │       └── Badge.tsx
│   ├── config/
│   │   └── site.ts            # Central store config & placeholders
│   ├── data/
│   │   ├── products.ts        # Typed 12-item catalogue across 11 menswear categories
│   │   └── lookbook.ts        # Lookbook archives with styling directives
│   ├── types/
│   │   └── index.ts           # TypeScript interfaces
│   └── context/
│       ├── WishlistContext.tsx
│       └── ReserveContext.tsx
```

---

## 4. Setup & Running Locally
1. Clone or open the repository:
   ```bash
   cd AB-Collections-1
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 5. How to Edit & Add Products
All catalog data is stored in `src/data/products.ts`:
- **Add a new product**: Copy an existing object in `products` array and fill in `id`, `slug`, `name`, `category`, `price`, `sizes`, `colors`, `images`, and `details`.
- **Change prices**: Update `price` and optional `originalPrice`.
- **Set badges**: Set `badge: "New" | "Sale" | "Few left" | "Bestseller"`.
- **Link flat-lay photos**: Place high-res photos in `public/images/products/` and reference the relative path.

---

## 6. Checklist of Placeholders to Replace
All key business placeholders are centralized in [`src/config/site.ts`](file:///c:/Users/ashit.ASUS/Desktop/ABcollection/AB-Collections-1/src/config/site.ts):
- [ ] **WhatsApp Number:** Set `siteConfig.contact.whatsappNumber` to the real WhatsApp business number (format without `+`: e.g. `919845012345`).
- [ ] **Phone Number:** Set `siteConfig.contact.phone` and `phoneDisplay`.
- [ ] **Exact Address:** Update `siteConfig.contact.address.street` and `full` with the building name / landmark near Kavoor Junction.
- [ ] **Google Maps Embed:** Replace `siteConfig.contact.googleMapsEmbedUrl` with your exact Google Business Profile embed URL.
- [ ] **Opening Hours:** Adjust `siteConfig.businessHours` if different from 10:00 AM – 9:30 PM.
- [ ] **Passcode for Staff Portal:** In `src/app/admin/page.tsx`, change `kavoor2026` to your private staff PIN.
- [ ] **Google Analytics:** Add your measurement ID in `siteConfig.analytics.googleAnalyticsId`.

---

## 7. Vercel Deployment
1. Push your repository to GitHub.
2. Sign in to [Vercel](https://vercel.com) and click **Add New Project**.
3. Select your repository `AB-Collections-1`.
4. Leave build settings as default (`next build`).
5. Click **Deploy**. Vercel will provision the project with automated edge caching and HTTPS.

---

## 8. Phase 2 Roadmap
- **MongoDB + Express Backend:** Transition from `src/data/products.ts` to full dynamic database storage with image uploads directly through `/admin`.
- **Online Checkout:** Razorpay / UPI gateway integration with automated SMS & WhatsApp invoice dispatch.
- **Customer Accounts:** Order history and bespoke measurement profiles.
