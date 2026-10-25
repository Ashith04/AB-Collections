const fs = require('fs');
const path = require('path');

const catalogDir = path.join(__dirname, '../public/catalog');
const files = fs.readdirSync(catalogDir).sort();

// Dedicated event / showroom poster patterns
const eventFiles = [
  {
    pattern: '2022-10-18_22-36-00',
    title: 'Diwali Big Sale — 40% Off on Shirt & Pant',
    category: 'Festive Offer Poster',
    type: 'poster',
    date: 'Diwali Festive Season',
    badge: '40% OFF Special',
    description: 'Exclusive festival mega campaign offering flat 40% off across premium casual shirts and tailored trousers at AB Collections Kavoor.',
    highlights: ['Flat 40% Off', 'Shirt & Pant Ensembles', 'In-Store Festive Offer', 'Kavoor Tower Flagship']
  },
  {
    pattern: '2022-10-24_10-30-30',
    title: 'Happy Diwali — Festival of Lights Celebration',
    category: 'Festival Greeting Poster',
    type: 'poster',
    date: 'Diwali Celebration',
    badge: 'Festival Greeting',
    description: 'Festive community greeting and holiday celebrations presented in collaboration with Hair Spray Unisex Saloon and AB Collections Kavoor.',
    highlights: ['Festival of Lights', 'Festive Menswear Edit', 'Celebration & Style', 'Mangalore Community']
  },
  {
    pattern: '2022-08-22_20-48-10',
    title: 'Flagship Showroom Grand Interior & Display Wall',
    category: 'Showroom Interior',
    type: 'showroom',
    date: 'Store Walkthrough',
    badge: 'Kavoor Flagship',
    description: 'A glimpse inside the modern Kavoor boutique featuring dedicated display aisles, structured shelving, and curated menswear racks.',
    highlights: ['140+ Active Designs', 'Air Conditioned Showroom', 'Above Union Bank', 'Personal Styling Assistance']
  },
  {
    pattern: '2022-09-29_16-42-03',
    title: 'Autumn Fresh Arrivals & Shelving Showcase',
    category: 'Showroom Interior',
    type: 'showroom',
    date: 'New Season Stock',
    badge: 'Store Gallery',
    description: 'Floor-to-ceiling shelving featuring hand-folded linen shirts, smart-casual checks, and premium cotton staples organized by color tone.',
    highlights: ['Color Coordinated Stacks', 'Pure Cotton & Linen', 'Instant Sizing Support', 'Bespoke Experience']
  },
  {
    pattern: '2022-09-29_16-42-41',
    title: 'Store Checkout Gallery & Contemporary Menswear',
    category: 'Showroom Interior',
    type: 'showroom',
    date: 'Store Gallery',
    badge: 'Kavoor Flagship',
    description: 'Modern storefront styling space and collection lounge welcoming shoppers to browse new menswear arrivals.',
    highlights: ['Spacious Boutique Space', 'Trial Fitting Rooms', 'Easy Parking Access', 'Open 7 Days a Week']
  },
  {
    pattern: '2022-11-17_18-47-18',
    title: 'Flagship Store Video Walkthrough & Menswear Tour',
    category: 'Showroom Video Reel',
    type: 'video',
    date: 'Store Video Reel',
    badge: 'Video Walkthrough',
    description: 'Dynamic in-store video walkthrough highlighting seasonal casual staples, tailored silhouettes, and in-store menswear displays.',
    highlights: ['High-Energy Store Reel', 'Active Stock Walkthrough', 'Casual & Smart Edits', 'Instagram Exclusive']
  }
];

const pantsPatterns = [
  '2022-08-22_20-47-12',
  '2022-08-30_13-27-39',
  '2022-10-19_17-03-15',
  '2022-10-19_17-03-35',
  '2023-03-18',
  '2023-07-06',
  '2023-08-21',
  '2024-10-05'
];

const tShirtPatterns = [
  '2022-09-10',
  '2022-10-07',
  '2023-01-03',
  '2023-01-12',
  '2023-08-07_18-49-06',
  '2023-09-17',
  '2025-01-22'
];

const outfitPatterns = [
  '2022-08-26_00-01-24',
  '2022-09-09_11-01-19',
  '2023-09-10_18-37-41',
  '2024-06-16',
  '2026-07',
  '2026-08',
  '2026-09-02',
  '2026-09-03',
  '2026-09-05',
  '2026-09-07',
  '2026-09-13',
  '2026-09-15'
];

// 1. Separate clothing items from events
const clothingFiles = [];
const eventItems = [];

files.forEach((file) => {
  const eventConfig = eventFiles.find((e) => file.includes(e.pattern));
  if (eventConfig) {
    const isVideo = path.extname(file).toLowerCase() === '.mp4';
    eventItems.push({
      id: `ab-event-${file.split('_')[3] || 'promo'}`,
      slug: eventConfig.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
      title: eventConfig.title,
      category: eventConfig.category,
      type: isVideo ? 'video' : eventConfig.type,
      mediaType: isVideo ? 'video' : 'image',
      mediaUrl: `/catalog/${file}`,
      date: eventConfig.date,
      badge: eventConfig.badge,
      description: eventConfig.description,
      highlights: eventConfig.highlights
    });
  } else {
    clothingFiles.push(file);
  }
});

// 2. Classify clothing items strictly into T-Shirts, Shirts, Pants, and Outfits
const catalogItems = clothingFiles.map((file, idx) => {
  const ext = path.extname(file).toLowerCase();
  const isVideo = ext === '.mp4';
  const num = String(idx + 1).padStart(3, '0');
  const id = `ab-${num}`;

  let category = 'Shirts';
  let categorySlug = 'shirts';
  let fit = 'Regular Fit';
  let badge = undefined;
  let name = '';
  let description = '';
  let fabric = '100% Premium Cotton';
  let tags = [];

  const isTee = tShirtPatterns.some((p) => file.includes(p));
  const isPants = pantsPatterns.some((p) => file.includes(p));
  const isOutfit = outfitPatterns.some((p) => file.includes(p));

  if (isTee) {
    category = 'T-Shirts';
    categorySlug = 't-shirts';
  } else if (isPants) {
    category = 'Pants';
    categorySlug = 'pants';
  } else if (isOutfit) {
    category = 'Outfits';
    categorySlug = 'outfits';
  } else {
    category = 'Shirts';
    categorySlug = 'shirts';
  }

  // --- Specific Metadata Generation ---
  if (category === 'T-Shirts') {
    if (file.includes('2025-01-22')) {
      fit = 'Regular Fit';
      fabric = 'Textured Jacquard Cotton Knit';
      badge = idx % 2 === 0 ? 'Trending' : 'Bestseller';
      const colors = ['Espresso Brown', 'Sage Olive', 'Sky Cerulean', 'Dusty Rose', 'Chalk Cream', 'Deep Plum'];
      const c = colors[idx % colors.length];
      name = `Retro Textured Knit Stripe Polo Tee in ${c}`;
      description = 'Vintage-inspired vertical textured polo knit tailored for an effortlessly sharp weekend aesthetic.';
      tags = ['Textured Knit', 'Polo Collar', 'Weekend Wear'];
    } else if (file.includes('2023-08-07_18-49-06')) {
      fit = 'Regular Fit';
      fabric = 'Combed Cotton Piqué';
      badge = 'Bestseller';
      name = 'Four Squares Denim Polo Club Multi-Tone Polo Tee';
      description = 'Classic sports-luxe piqué polo featuring dual-tone contrast sleeves and refined collar tipping.';
      tags = ['Polo Tee', 'Colorblock', 'Smart Casual', 'Combed Cotton'];
    } else if (file.includes('2023-09-17')) {
      fit = 'Oversized';
      fabric = 'Heavyweight Combed Jersey';
      badge = 'Streetwear Edit';
      name = 'Clean Minimal Oversized Boxy Tee';
      description = 'Relaxed streetwear tee tailored with dropped shoulders and a crisp, pristine drape.';
      tags = ['Oversized Fit', 'Boxy Cut', 'Drop Shoulder', 'Streetwear'];
    } else if (file.includes('2022-09-10')) {
      fit = 'Regular Fit';
      fabric = 'Soft-Washed Combed Cotton';
      badge = 'Bestseller';
      name = 'Minimalist Graphic Chest-Print Crewneck Tee';
      description = 'Relaxed fit tee with a clean, versatile chest print and ultra-soft breathable feel.';
      tags = ['Everyday Tee', 'Graphic Detail', 'Breathable'];
    } else if (file.includes('2022-10-07')) {
      fit = 'Slim Fit';
      fabric = 'Intarsia Stretch Knit';
      badge = 'New Arrival';
      name = 'Textured Mock-Neck Fine Knit Tee';
      description = 'Contemporary high-neck knit silhouette with geometric intarsia detail for elevated layering.';
      tags = ['Mock Neck', 'Fine Knit', 'Smart Casual'];
    } else {
      fit = 'Regular Fit';
      fabric = '100% Breathable Cotton';
      badge = 'Essential';
      name = 'Urban Essential Solid Crew Tee';
      description = 'Relaxed fit tee with a clean, versatile look crafted for effortless daily comfort.';
      tags = ['Essential', 'All-Day Wear', 'Soft Touch'];
    }
  } else if (category === 'Pants') {
    if (file.includes('2022-08-22_20-47-12')) {
      fit = 'Slim Fit';
      fabric = 'Heavy-Duty Cotton Twill';
      badge = 'Utility Edit';
      name = 'Multi-Pocket Tactical Cargo Pants Collection';
      description = 'Engineered multi-pocket utility cargos featuring reinforced stitching, tapered cuffs, and mobility stretch.';
      tags = ['Cargo Pants', 'Tactical Pockets', 'Tapered Fit', 'Utility'];
    } else if (file.includes('2022-08-30_13-27-39')) {
      fit = 'Relaxed Fit';
      fabric = 'Slub Linen & Cotton Blend';
      badge = 'Summer Essential';
      name = 'Drawstring Slub Linen & Cotton Chinos Palette';
      description = 'Lightweight, breathable linen-blend trousers featuring elasticated drawstring waist and crisp relaxed drape.';
      tags = ['Linen Chinos', 'Drawstring Waist', 'Breathable', 'Resort Casual'];
    } else if (file.includes('2022-10-19_17-03-15')) {
      fit = 'Regular Fit';
      fabric = 'Authentic Ring-Spun Denim';
      badge = 'Classic Denim';
      name = 'U.S. Polo Assn Vintage Straight-Fit Denim Jeans Stack';
      description = 'Timeless 5-pocket denim jeans featuring authentic washed indigos, branded leather patch, and durable hardware.';
      tags = ['Denim Jeans', 'Straight Fit', '5-Pocket', 'Vintage Wash'];
    } else if (file.includes('2022-10-19_17-03-35')) {
      fit = 'Regular Fit';
      fabric = 'Pre-Washed Stretch Cotton Twill';
      badge = 'Chino Edit';
      name = 'Folded Camouflage & Utility Cotton Chino Trousers';
      description = 'Sturdy cotton twill trousers tailored with flat front, subtle camo accents, and dependable day-to-night comfort.';
      tags = ['Chino Trousers', 'Flat Front', 'Camo Utility', 'Durable'];
    } else if (file.includes('2023-03-18')) {
      fit = 'Slim Fit';
      fabric = 'Artisan Stonewashed Denim';
      badge = 'Denim Edit';
      const washes = ['Light Indigo Wash', 'Medium Stonewash', 'Charcoal Vintage', 'Raw Deep Indigo', 'Acid Tint Blue'];
      const w = washes[idx % washes.length];
      name = `Big Bash Contrast Stitch & Straight-Cut Denim Jeans in ${w}`;
      description = 'Premium denim crafted with contrast topstitching, ergonomic knee articulation, and soft hand-feel.';
      tags = ['Denim Jeans', 'Contrast Stitch', 'Slim Straight', 'Daily Denim'];
    } else if (file.includes('2023-07-06')) {
      fit = 'Slim Fit';
      fabric = 'Sateen Comfort-Stretch Cotton';
      badge = 'Smart Casual';
      const colors = ['Olive Khaki', 'Slate Grey', 'Warm Biscuit Tan'];
      const c = colors[idx % colors.length];
      name = `Zara Comfort-Stretch Tailored Cotton Chinos in ${c}`;
      description = 'Modern European cut trousers engineered with 2% elastane for flexibility and sleek boardroom-to-dinner polish.';
      tags = ['Cotton Trousers', 'Stretch Chinos', 'Slim Silhouette', 'Polished'];
    } else if (file.includes('2023-08-21')) {
      fit = 'Slim Fit';
      fabric = 'Power-Stretch Denim';
      badge = 'Bestseller';
      const washes = ['Distressed Sky Blue', 'Faded Ice Wash', 'Vintage Whiskered Indigo', 'Midnight Black', 'Raw Dark Blue', 'Tonal Stonewash'];
      const w = washes[idx % washes.length];
      name = `GP/432 Distressed Slim-Fit Stretch Denim Jeans in ${w}`;
      description = 'Hand-whiskered and subtly distressed denim jeans designed for an effortless streetwear edge and snug flexibility.';
      tags = ['Distressed Jeans', 'Power Stretch', 'Whiskered Denim', 'Streetwear'];
    } else if (file.includes('2024-10-05')) {
      fit = 'Regular Fit';
      fabric = 'Heavyweight 12.5oz Denim';
      badge = 'New Arrival';
      const washes = ['Classic Indigo', 'Deep Azure', 'Washed Cobalt', 'Charcoal Rinse'];
      const w = washes[idx % washes.length];
      name = `Authentic Heavyweight Stretch Denim Jeans in ${w}`;
      description = 'Substantial authentic denim engineered for longevity, retaining its clean silhouette wash after wash.';
      tags = ['Heavyweight Denim', 'Classic Cut', 'Durable Wash', 'Essential Jeans'];
    } else {
      fit = 'Slim Fit';
      fabric = 'Premium Stretch Cotton';
      badge = 'Bottomwear';
      name = 'Tailored Modern Fit Casual Trousers';
      description = 'Versatile men’s bottomwear engineered with clean lines, comfortable rise, and all-day flexibility.';
      tags = ['Trousers', 'Casual Bottoms', 'Stretch Comfort'];
    }
  } else if (category === 'Shirts') {
    if (file.includes('2022-08-22') || file.includes('2022-08-25')) {
      fit = 'Regular Fit';
      fabric = 'Heavy-Duty Cotton Twill';
      badge = 'Bestseller';
      name = 'Dual Tactical Flap-Pocket Utility Cotton Shirt';
      description = 'Structured button-down featuring twin flap chest pockets, epaulette detailing, and rugged modern tailoring.';
      tags = ['Utility', 'Cargo Pockets', 'Durable Twill'];
    } else if (file.includes('2022-08-26')) {
      fit = 'Relaxed Fit';
      fabric = 'Combed Cotton Poplin';
      badge = 'New Arrival';
      name = 'Tailored Windowpane Grid Check Poplin Shirt';
      description = 'Classic button-down crafted with crisp geometric checks for timeless sophistication and polished ease.';
      tags = ['Grid Check', 'Button-Down', 'Crisp Cotton'];
    } else if (file.includes('2022-08-30')) {
      fit = 'Regular Fit';
      fabric = 'Pure Breathable Linen';
      badge = 'Signature Cut';
      name = 'Mandarin Collar Striped Linen Casual Shirt Collection';
      description = 'Clean band-collar silhouette tailored in yarn-dyed stripes offering effortless coastal sophistication.';
      tags = ['Mandarin Collar', 'Band Collar', 'Vertical Stripes', 'Resort Linen'];
    } else if (file.includes('2022-09-09_16-46-20') || file.includes('2022-09-09_23-41-31')) {
      fit = 'Slim Fit';
      fabric = 'Fine Combed Cotton Sateen';
      badge = 'Essential';
      name = 'Contemporary Tailored Spread-Collar Casual Shirt';
      description = 'Impeccable cut tailored for versatile smart-casual transitions and breathable all-day wear.';
      tags = ['Spread Collar', 'Smart Casual', 'Tailored Cut'];
    } else if (file.includes('2022-09-25')) {
      fit = 'Slim Fit';
      fabric = 'Soft-Finish Cotton Sateen';
      badge = 'Trending';
      name = 'Pastel Botanical Motif Resort Casual Shirt';
      description = 'Artful floral motif tailored in breathable cotton sateen for subtle statement styling.';
      tags = ['Floral Print', 'Resort Casual', 'Slim Silhouette'];
    } else if (file.includes('2022-09-29')) {
      fit = 'Regular Fit';
      fabric = 'Yarn-Dyed Pure Cotton';
      name = 'Contemporary Spread-Collar Woven Casual Shirt';
      description = 'Refined button-down crafted for timeless elegance and effortless weekday layering.';
      tags = ['Woven Cotton', 'Spread Collar', 'Versatile'];
    } else if (file.includes('2022-10-19_17-04-01') || file.includes('2022-10-19_17-19-50')) {
      fit = 'Slim Fit';
      fabric = 'Striped Oxford Weave';
      badge = 'Signature Cut';
      name = 'Vertical Block Striped Oxford Button-Down Shirt';
      description = 'Contrasting vertical stripes create an elongating profile with pristine boardroom and evening appeal.';
      tags = ['Vertical Stripe', 'Oxford Cotton', 'Sharp Tailoring'];
    } else if (file.includes('2022-10-19_17-20-37')) {
      fit = 'Regular Fit';
      fabric = 'Brushed Cotton Flannel';
      badge = 'Hooded Staple';
      name = 'Terracotta Plaid Hooded Flannel Casual Shirt';
      description = 'Rugged brushed cotton check shirt updated with an integrated knit hood and twin flap utility pockets.';
      tags = ['Hooded Shirt', 'Plaid Flannel', 'Casual Outerwear', 'Terracotta'];
    } else if (file.includes('2022-10-19_17-21-10')) {
      fit = 'Regular Fit';
      fabric = 'Brushed Cotton Flannel';
      badge = 'Hooded Staple';
      name = 'Ochre Plaid Hooded Flannel Casual Shirt';
      description = 'Vibrant warm yellow and black plaid shirt with soft contrast hood for weekend lounging and rides.';
      tags = ['Hooded Shirt', 'Plaid Flannel', 'Ochre Check', 'Weekend Cut'];
    } else if (file.includes('2022-11-16')) {
      fit = 'Slim Fit';
      fabric = 'Tonal Jacquard Cotton';
      badge = 'Evening Edit';
      name = 'Monochrome Micro-Pattern Jacquard Shirt';
      description = 'Understated jacquard weave adding tactile depth and rich luster for celebratory evening occasions.';
      tags = ['Jacquard', 'Lustrous', 'Evening'];
    } else if (file.includes('2022-11-17_18-33-30')) {
      fit = 'Slim Fit';
      fabric = 'Wild Studio Digital Sateen';
      badge = 'Artisan Edit';
      name = 'Wild Studio Slim-Fit Artisanal Printed Shirts Collection';
      description = 'Curated stack of geometric, floral, and newspaper montage prints tailored for high-fashion statements.';
      tags = ['Wild Studio', 'Printed Shirts', 'Artisanal', 'Slim Fit'];
    } else if (file.includes('2022-11-19') || file.includes('2022-11-29')) {
      fit = 'Slim Fit';
      fabric = 'Fine Yarn-Dyed Cotton';
      name = 'Pinstripe Smart Casual Button-Down Shirt';
      description = 'Clean fine stripes bring an immaculate tailored aesthetic to weekday and social wardrobes.';
      tags = ['Pinstripe', 'Office Casual', 'Breathable'];
    } else if (file.includes('2022-11-25')) {
      fit = 'Regular Fit';
      fabric = 'Brushed Cotton Flannel';
      badge = 'Bestseller';
      name = 'Heritage Lumberjack Plaid Flap Pocket Shirt';
      description = 'Warm brushed cotton plaid featuring double utility chest flaps for rugged charm.';
      tags = ['Plaid Flannel', 'Twin Pockets', 'Autumn Staple'];
    } else if (file.includes('2022-11-26')) {
      fit = 'Regular Fit';
      fabric = 'Garment-Dyed Oxford Cotton';
      badge = 'Essential';
      name = 'Garment-Dyed Classic Oxford Button-Down Shirt';
      description = 'Classic button-down crafted for timeless sophistication in versatile seasonal tones.';
      tags = ['Garment Dyed', 'Oxford Cotton', 'Timeless'];
    } else if (file.includes('2022-11-28')) {
      fit = 'Regular Fit';
      fabric = 'High-Count Tartan Poplin';
      name = 'Highland Tartan Check Point-Collar Shirt';
      description = 'Refined tartan checked shirt tailored with a neat point collar and crisp drape.';
      tags = ['Tartan Check', 'Smart Casual', 'Point Collar'];
    } else if (file.includes('2022-12-21')) {
      fit = 'Regular Fit';
      fabric = 'Printed Poplin Cotton';
      badge = 'Resort Cut';
      name = 'Artisanal Block-Printed Relaxed Casual Shirt';
      description = 'Handcrafted motif patterns in rich tonal shades tailored for effortless leisure.';
      tags = ['Printed Shirt', 'Resort Casual', 'Soft Poplin'];
    } else if (file.includes('2023-01-18')) {
      fit = 'Slim Fit';
      fabric = 'Digital Printed Sateen';
      badge = 'Artisan Series';
      name = 'Artisanal Abstract Digital Printed Shirt';
      description = 'Dynamic monochrome and vibrant prints tailored for fashionable summer styling.';
      tags = ['Abstract Print', 'Digital Motif', 'Expressive'];
    } else if (file.includes('2023-03-20')) {
      fit = 'Slim Fit';
      fabric = 'Breathable Slub Linen-Cotton';
      badge = 'Summer Essential';
      name = 'Solid Slub Linen Resort Casual Shirt';
      description = 'Lightweight slub linen woven in fresh vibrant pastels for sunlit coastal comfort.';
      tags = ['Slub Linen', 'Resort Wear', 'Breathable'];
    } else if (file.includes('2023-05-23')) {
      fit = 'Slim Fit';
      fabric = 'Combed Cotton Sateen';
      name = 'Mandala Geometric Swirl Printed Shirt';
      description = 'Intricate kaleidoscope motifs create a vibrant, modern touch for celebratory outings.';
      tags = ['Mandala Print', 'Festive Casual', 'Soft Drape'];
    } else if (file.includes('2023-09-05')) {
      fit = 'Relaxed Fit';
      fabric = 'Silky Rayon Twill';
      badge = 'Trending';
      name = 'Resort Geometric Print Vacation Camp-Collar Shirt';
      description = 'Cuban-inspired lightweight printed shirt designed for breezy weekend relaxation.';
      tags = ['Resort Print', 'Camp Collar', 'Breezy'];
    } else if (file.includes('2026-06-11')) {
      fit = 'Relaxed Fit';
      fabric = 'Garment-Washed Ombre Linen';
      badge = 'Model Feature';
      name = 'Sun-Faded Ombre Dip-Dyed Linen Casual Shirt';
      description = 'Gradient dip-dyed linen shirt delivering effortless coastal vibes and supreme airflow.';
      tags = ['Ombre Dye', 'Pure Linen', 'Coastal Cool'];
    } else {
      fit = 'Regular Fit';
      fabric = '100% Combed Cotton';
      name = 'Contemporary Tailored Casual Shirt';
      description = 'Classic button-down crafted for timeless sophistication and all-day versatility.';
      tags = ['Casual Shirt', 'Cotton Comfort', 'Versatile'];
    }
  } else {
    // category === 'Outfits' (Strictly coordinated ensembles)
    fit = 'Regular Fit';
    if (isVideo) {
      badge = 'Motion Reel';
      if (file.includes('2026-09-07')) {
        name = 'Coordinated Linen Shirt & Trousers Motion Showcase';
        description = 'A coordinated ensemble in dynamic motion, showcasing natural linen fabric drape and effortless smart-casual charm.';
        fabric = 'Pure Linen & Cotton Twill';
        fit = 'Slim Fit';
        tags = ['Motion Reel', 'Ensemble', 'Summer Edit', 'Model Styling'];
      } else {
        name = 'Editorial Menswear Layering & Styling Lookbook Reel';
        description = 'Dynamic motion showcase blending relaxed streetwear with clean tailoring for the modern Indian wardrobe.';
        fabric = 'Curated Fabric Blends';
        fit = 'Relaxed Fit';
        tags = ['Motion Reel', 'Lookbook', 'Trending', 'Coordinated Set'];
      }
    } else if (file.includes('2022-08-26_00-01-24')) {
      badge = 'Outerwear Ensemble';
      fit = 'Regular Fit';
      fabric = 'Acid-Wash Denim';
      name = 'Vintage Acid-Wash Denim Trucker Jacket & Jeans Pairing';
      description = 'Classic 90s acid-wash trucker silhouette matched with durable straight-leg denim for iconic layering.';
      tags = ['Denim Jacket', 'Acid Wash', 'Full Denim Look', 'Ensemble'];
    } else if (file.includes('2022-09-09_11-01-19')) {
      badge = 'Athleisure Ensemble';
      fit = 'Slim Fit';
      fabric = 'Performance Track Poly-Spandex';
      name = 'Athleisure Zip-Up Sports Jacket & Track Layering Ensemble';
      description = 'Streamlined athletic zip-up jackets styled for lightweight morning fitness and evening urban layering.';
      tags = ['Track Jacket', 'Sports Layer', 'Athleisure', 'Coordinated'];
    } else if (file.includes('2023-09-10_18-37-41')) {
      badge = 'Model Lookbook';
      fit = 'Regular Fit';
      fabric = 'Textured Linen & Multi-Pocket Twill';
      name = 'Buttercup Textured Shirt & Cargo Jogger Ensemble with Boots';
      description = 'Rugged utility meets effortless charm in this curated shirt, cargo pants, and leather boot pairing.';
      tags = ['Utility Cargo', 'Boots Styling', 'Complete Look', 'Editorial'];
    } else if (file.includes('2024-06-16')) {
      badge = 'Model Lookbook';
      fit = 'Relaxed Fit';
      fabric = 'Cotton Tee & Pleated Twill';
      name = 'Urban Streetwear Graphic Tee & Terracotta Trousers Ensemble';
      description = 'A fashion-forward pairing blending casual graphic tee energy with sharp terracotta tailored trousers.';
      tags = ['Streetwear Look', 'Terracotta', 'Pleated Trousers', 'Coordinated Set'];
    } else {
      // 2026-07 to 2026-09 daily styled outfit pairings
      badge = 'Coordinated Set';
      fabric = 'Linen Shirt & Cotton Trousers';
      const sets = [
        ['Textured Linen Button-Down & Tonal Drawstring Trousers', 'A coordinated ensemble blending comfort with sharp tailoring for sunlit events.'],
        ['Sky Blue Oxford Shirt & Sand Beige Pleated Bottoms', 'Effortlessly polished pairing of crisp blue shirting and relaxed neutral chinos.'],
        ['Burberry Striped Shirt & Tailored Obsidian Trousers', 'A sophisticated duo balancing heritage stripes with sleek dark trousers.'],
        ['Olive Geometric Printed Shirt & Crisp White Chinos', 'Sharp modern contrast blending vibrant olive motifs with clean summer whites.'],
        ['Pastel Coral Linen Shirt & Caramel Tailored Trousers', 'Harmonious summer hues uniting a breathable linen shirt with sleek bottoms.'],
        ['Forest Green Casual Shirt & Khaki Slim Trousers', 'Earth-toned coordinated set offering rugged refinement and sharp lines.'],
        ['Navy Windowpane Shirt & Cream Linen Trousers', 'Timeless nautical elegance pairing structured checks with lightweight linen.'],
        ['Mustard Slub Shirt & Charcoal Slim Chinos', 'Warm vibrant tones balanced with versatile charcoal trousers for evening dining.']
      ];
      const selected = sets[idx % sets.length];
      name = selected[0];
      description = selected[1];
      tags = ['Coordinated Set', 'Pre-Styled', 'Smart Casual', 'Full Outfit'];
    }
  }

  // Generate code and slug
  const prefix =
    categorySlug === 't-shirts' ? 'ABC-TSH' :
    categorySlug === 'shirts' ? 'ABC-SHR' :
    categorySlug === 'pants' ? 'ABC-PNT' :
    'ABC-OUTFIT';
  const code = `${prefix}-${num}`;
  const slug = `${name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}-${num}`;

  return {
    id,
    slug,
    name,
    category,
    categorySlug,
    mediaType: isVideo ? 'video' : 'image',
    mediaUrl: `/catalog/${file}`,
    description,
    badge,
    fit,
    fabric,
    code,
    inStock: true,
    tags
  };
});

// Output catalog.ts
const catalogTsContent = `// Auto-generated full catalog containing strictly segregated menswear clothing items
// Strictly organized: T-Shirts (tees/polos only), Shirts (button-downs only),
// Pants (trousers/jeans/cargos only), and Outfits (coordinated ensembles).
// Event & festival posters are excluded here and maintained in src/data/events.ts.

export interface CatalogItem {
  id: string;
  slug: string;
  name: string;
  category: 'T-Shirts' | 'Shirts' | 'Pants' | 'Outfits';
  categorySlug: 't-shirts' | 'shirts' | 'pants' | 'outfits';
  mediaType: 'image' | 'video';
  mediaUrl: string;
  description: string;
  badge?: string;
  fit: string;
  fabric: string;
  code: string;
  inStock: boolean;
  tags: string[];
}

export const catalogItems: CatalogItem[] = ${JSON.stringify(catalogItems, null, 2)};

export const catalogStats = {
  total: ${catalogItems.length},
  tShirts: ${catalogItems.filter((i) => i.category === 'T-Shirts').length},
  shirts: ${catalogItems.filter((i) => i.category === 'Shirts').length},
  pants: ${catalogItems.filter((i) => i.category === 'Pants').length},
  outfits: ${catalogItems.filter((i) => i.category === 'Outfits').length},
  videos: ${catalogItems.filter((i) => i.mediaType === 'video').length},
  images: ${catalogItems.filter((i) => i.mediaType === 'image').length},
};
`;

// Output events.ts
const eventsTsContent = `// Auto-generated dedicated events, festivals, sale posters, and showroom tours.
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

export const eventItems: EventItem[] = ${JSON.stringify(eventItems, null, 2)};

export const eventStats = {
  total: ${eventItems.length},
  posters: ${eventItems.filter((e) => e.type === 'poster').length},
  showrooms: ${eventItems.filter((e) => e.type === 'showroom').length},
  videos: ${eventItems.filter((e) => e.type === 'video').length},
};
`;

fs.writeFileSync(path.join(__dirname, '../src/data/catalog.ts'), catalogTsContent, 'utf-8');
console.log('Successfully wrote src/data/catalog.ts with ' + catalogItems.length + ' items:');
console.log(' - T-Shirts: ' + catalogItems.filter((i) => i.category === 'T-Shirts').length);
console.log(' - Shirts: ' + catalogItems.filter((i) => i.category === 'Shirts').length);
console.log(' - Pants: ' + catalogItems.filter((i) => i.category === 'Pants').length);
console.log(' - Outfits: ' + catalogItems.filter((i) => i.category === 'Outfits').length);

fs.writeFileSync(path.join(__dirname, '../src/data/events.ts'), eventsTsContent, 'utf-8');
console.log('Successfully wrote src/data/events.ts with ' + eventItems.length + ' event items.');
