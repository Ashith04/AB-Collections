// Auto-generated full catalog containing strictly segregated menswear clothing items
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

export const catalogItems: CatalogItem[] = [
  {
    "id": "ab-001",
    "slug": "dual-tactical-flap-pocket-utility-cotton-shirt-001",
    "name": "Dual Tactical Flap-Pocket Utility Cotton Shirt",
    "category": "Shirts",
    "categorySlug": "shirts",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2022-08-22_20-46-41_2910523006602654161_55023169382.jpg",
    "description": "Structured button-down featuring twin flap chest pockets, epaulette detailing, and rugged modern tailoring.",
    "badge": "Bestseller",
    "fit": "Regular Fit",
    "fabric": "Heavy-Duty Cotton Twill",
    "code": "ABC-SHR-001",
    "inStock": true,
    "tags": [
      "Utility",
      "Cargo Pockets",
      "Durable Twill"
    ]
  },
  {
    "id": "ab-002",
    "slug": "multi-pocket-tactical-cargo-pants-collection-002",
    "name": "Multi-Pocket Tactical Cargo Pants Collection",
    "category": "Pants",
    "categorySlug": "pants",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2022-08-22_20-47-12_2910523262228507796_55023169382.jpg",
    "description": "Engineered multi-pocket utility cargos featuring reinforced stitching, tapered cuffs, and mobility stretch.",
    "badge": "Utility Edit",
    "fit": "Slim Fit",
    "fabric": "Heavy-Duty Cotton Twill",
    "code": "ABC-PNT-002",
    "inStock": true,
    "tags": [
      "Cargo Pants",
      "Tactical Pockets",
      "Tapered Fit",
      "Utility"
    ]
  },
  {
    "id": "ab-003",
    "slug": "dual-tactical-flap-pocket-utility-cotton-shirt-003",
    "name": "Dual Tactical Flap-Pocket Utility Cotton Shirt",
    "category": "Shirts",
    "categorySlug": "shirts",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2022-08-25_11-49-49_2912427122187072644_55023169382.jpg",
    "description": "Structured button-down featuring twin flap chest pockets, epaulette detailing, and rugged modern tailoring.",
    "badge": "Bestseller",
    "fit": "Regular Fit",
    "fabric": "Heavy-Duty Cotton Twill",
    "code": "ABC-SHR-003",
    "inStock": true,
    "tags": [
      "Utility",
      "Cargo Pockets",
      "Durable Twill"
    ]
  },
  {
    "id": "ab-004",
    "slug": "vintage-acid-wash-denim-trucker-jacket-jeans-pairing-004",
    "name": "Vintage Acid-Wash Denim Trucker Jacket & Jeans Pairing",
    "category": "Outfits",
    "categorySlug": "outfits",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2022-08-26_00-01-24_2912795336403359058_55023169382.jpg",
    "description": "Classic 90s acid-wash trucker silhouette matched with durable straight-leg denim for iconic layering.",
    "badge": "Outerwear Ensemble",
    "fit": "Regular Fit",
    "fabric": "Acid-Wash Denim",
    "code": "ABC-OUTFIT-004",
    "inStock": true,
    "tags": [
      "Denim Jacket",
      "Acid Wash",
      "Full Denim Look",
      "Ensemble"
    ]
  },
  {
    "id": "ab-005",
    "slug": "tailored-windowpane-grid-check-poplin-shirt-005",
    "name": "Tailored Windowpane Grid Check Poplin Shirt",
    "category": "Shirts",
    "categorySlug": "shirts",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2022-08-26_22-58-20_2913488366529835596_55023169382.jpg",
    "description": "Classic button-down crafted with crisp geometric checks for timeless sophistication and polished ease.",
    "badge": "New Arrival",
    "fit": "Relaxed Fit",
    "fabric": "Combed Cotton Poplin",
    "code": "ABC-SHR-005",
    "inStock": true,
    "tags": [
      "Grid Check",
      "Button-Down",
      "Crisp Cotton"
    ]
  },
  {
    "id": "ab-006",
    "slug": "drawstring-slub-linen-cotton-chinos-palette-006",
    "name": "Drawstring Slub Linen & Cotton Chinos Palette",
    "category": "Pants",
    "categorySlug": "pants",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2022-08-30_13-27-39_2916100239027852388_55023169382.jpg",
    "description": "Lightweight, breathable linen-blend trousers featuring elasticated drawstring waist and crisp relaxed drape.",
    "badge": "Summer Essential",
    "fit": "Relaxed Fit",
    "fabric": "Slub Linen & Cotton Blend",
    "code": "ABC-PNT-006",
    "inStock": true,
    "tags": [
      "Linen Chinos",
      "Drawstring Waist",
      "Breathable",
      "Resort Casual"
    ]
  },
  {
    "id": "ab-007",
    "slug": "mandarin-collar-striped-linen-casual-shirt-collection-007",
    "name": "Mandarin Collar Striped Linen Casual Shirt Collection",
    "category": "Shirts",
    "categorySlug": "shirts",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2022-08-30_21-35-17_2916345674741272961_55023169382.jpg",
    "description": "Clean band-collar silhouette tailored in yarn-dyed stripes offering effortless coastal sophistication.",
    "badge": "Signature Cut",
    "fit": "Regular Fit",
    "fabric": "Pure Breathable Linen",
    "code": "ABC-SHR-007",
    "inStock": true,
    "tags": [
      "Mandarin Collar",
      "Band Collar",
      "Vertical Stripes",
      "Resort Linen"
    ]
  },
  {
    "id": "ab-008",
    "slug": "athleisure-zip-up-sports-jacket-track-layering-ensemble-008",
    "name": "Athleisure Zip-Up Sports Jacket & Track Layering Ensemble",
    "category": "Outfits",
    "categorySlug": "outfits",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2022-09-09_11-01-19_2923274342364882795_55023169382.jpg",
    "description": "Streamlined athletic zip-up jackets styled for lightweight morning fitness and evening urban layering.",
    "badge": "Athleisure Ensemble",
    "fit": "Slim Fit",
    "fabric": "Performance Track Poly-Spandex",
    "code": "ABC-OUTFIT-008",
    "inStock": true,
    "tags": [
      "Track Jacket",
      "Sports Layer",
      "Athleisure",
      "Coordinated"
    ]
  },
  {
    "id": "ab-009",
    "slug": "contemporary-tailored-spread-collar-casual-shirt-009",
    "name": "Contemporary Tailored Spread-Collar Casual Shirt",
    "category": "Shirts",
    "categorySlug": "shirts",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2022-09-09_16-46-20_2923448000391882996_55023169382.jpg",
    "description": "Impeccable cut tailored for versatile smart-casual transitions and breathable all-day wear.",
    "badge": "Essential",
    "fit": "Slim Fit",
    "fabric": "Fine Combed Cotton Sateen",
    "code": "ABC-SHR-009",
    "inStock": true,
    "tags": [
      "Spread Collar",
      "Smart Casual",
      "Tailored Cut"
    ]
  },
  {
    "id": "ab-010",
    "slug": "contemporary-tailored-spread-collar-casual-shirt-010",
    "name": "Contemporary Tailored Spread-Collar Casual Shirt",
    "category": "Shirts",
    "categorySlug": "shirts",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2022-09-09_23-41-31_2923656967043777083_55023169382.jpg",
    "description": "Impeccable cut tailored for versatile smart-casual transitions and breathable all-day wear.",
    "badge": "Essential",
    "fit": "Slim Fit",
    "fabric": "Fine Combed Cotton Sateen",
    "code": "ABC-SHR-010",
    "inStock": true,
    "tags": [
      "Spread Collar",
      "Smart Casual",
      "Tailored Cut"
    ]
  },
  {
    "id": "ab-011",
    "slug": "minimalist-graphic-chest-print-crewneck-tee-011",
    "name": "Minimalist Graphic Chest-Print Crewneck Tee",
    "category": "T-Shirts",
    "categorySlug": "t-shirts",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2022-09-10_12-52-16_2924054961588176687_55023169382_3.jpg",
    "description": "Relaxed fit tee with a clean, versatile chest print and ultra-soft breathable feel.",
    "badge": "Bestseller",
    "fit": "Regular Fit",
    "fabric": "Soft-Washed Combed Cotton",
    "code": "ABC-TSH-011",
    "inStock": true,
    "tags": [
      "Everyday Tee",
      "Graphic Detail",
      "Breathable"
    ]
  },
  {
    "id": "ab-012",
    "slug": "minimalist-graphic-chest-print-crewneck-tee-012",
    "name": "Minimalist Graphic Chest-Print Crewneck Tee",
    "category": "T-Shirts",
    "categorySlug": "t-shirts",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2022-09-10_12-52-16_2924054961588227747_55023169382_1.jpg",
    "description": "Relaxed fit tee with a clean, versatile chest print and ultra-soft breathable feel.",
    "badge": "Bestseller",
    "fit": "Regular Fit",
    "fabric": "Soft-Washed Combed Cotton",
    "code": "ABC-TSH-012",
    "inStock": true,
    "tags": [
      "Everyday Tee",
      "Graphic Detail",
      "Breathable"
    ]
  },
  {
    "id": "ab-013",
    "slug": "minimalist-graphic-chest-print-crewneck-tee-013",
    "name": "Minimalist Graphic Chest-Print Crewneck Tee",
    "category": "T-Shirts",
    "categorySlug": "t-shirts",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2022-09-10_12-52-16_2924054961596595492_55023169382_2.jpg",
    "description": "Relaxed fit tee with a clean, versatile chest print and ultra-soft breathable feel.",
    "badge": "Bestseller",
    "fit": "Regular Fit",
    "fabric": "Soft-Washed Combed Cotton",
    "code": "ABC-TSH-013",
    "inStock": true,
    "tags": [
      "Everyday Tee",
      "Graphic Detail",
      "Breathable"
    ]
  },
  {
    "id": "ab-014",
    "slug": "pastel-botanical-motif-resort-casual-shirt-014",
    "name": "Pastel Botanical Motif Resort Casual Shirt",
    "category": "Shirts",
    "categorySlug": "shirts",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2022-09-25_16-01-34_2935021878419299385_55023169382.jpg",
    "description": "Artful floral motif tailored in breathable cotton sateen for subtle statement styling.",
    "badge": "Trending",
    "fit": "Slim Fit",
    "fabric": "Soft-Finish Cotton Sateen",
    "code": "ABC-SHR-014",
    "inStock": true,
    "tags": [
      "Floral Print",
      "Resort Casual",
      "Slim Silhouette"
    ]
  },
  {
    "id": "ab-015",
    "slug": "pastel-botanical-motif-resort-casual-shirt-015",
    "name": "Pastel Botanical Motif Resort Casual Shirt",
    "category": "Shirts",
    "categorySlug": "shirts",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2022-09-25_16-02-38_2935022415365622601_55023169382.jpg",
    "description": "Artful floral motif tailored in breathable cotton sateen for subtle statement styling.",
    "badge": "Trending",
    "fit": "Slim Fit",
    "fabric": "Soft-Finish Cotton Sateen",
    "code": "ABC-SHR-015",
    "inStock": true,
    "tags": [
      "Floral Print",
      "Resort Casual",
      "Slim Silhouette"
    ]
  },
  {
    "id": "ab-016",
    "slug": "contemporary-spread-collar-woven-casual-shirt-016",
    "name": "Contemporary Spread-Collar Woven Casual Shirt",
    "category": "Shirts",
    "categorySlug": "shirts",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2022-09-29_13-23-18_2937841321318949847_55023169382.jpg",
    "description": "Refined button-down crafted for timeless elegance and effortless weekday layering.",
    "fit": "Regular Fit",
    "fabric": "Yarn-Dyed Pure Cotton",
    "code": "ABC-SHR-016",
    "inStock": true,
    "tags": [
      "Woven Cotton",
      "Spread Collar",
      "Versatile"
    ]
  },
  {
    "id": "ab-017",
    "slug": "contemporary-spread-collar-woven-casual-shirt-017",
    "name": "Contemporary Spread-Collar Woven Casual Shirt",
    "category": "Shirts",
    "categorySlug": "shirts",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2022-09-29_13-23-41_2937841512017207401_55023169382.jpg",
    "description": "Refined button-down crafted for timeless elegance and effortless weekday layering.",
    "fit": "Regular Fit",
    "fabric": "Yarn-Dyed Pure Cotton",
    "code": "ABC-SHR-017",
    "inStock": true,
    "tags": [
      "Woven Cotton",
      "Spread Collar",
      "Versatile"
    ]
  },
  {
    "id": "ab-018",
    "slug": "contemporary-spread-collar-woven-casual-shirt-018",
    "name": "Contemporary Spread-Collar Woven Casual Shirt",
    "category": "Shirts",
    "categorySlug": "shirts",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2022-09-29_15-43-27_2937911859353528582_55023169382.jpg",
    "description": "Refined button-down crafted for timeless elegance and effortless weekday layering.",
    "fit": "Regular Fit",
    "fabric": "Yarn-Dyed Pure Cotton",
    "code": "ABC-SHR-018",
    "inStock": true,
    "tags": [
      "Woven Cotton",
      "Spread Collar",
      "Versatile"
    ]
  },
  {
    "id": "ab-019",
    "slug": "textured-mock-neck-fine-knit-tee-019",
    "name": "Textured Mock-Neck Fine Knit Tee",
    "category": "T-Shirts",
    "categorySlug": "t-shirts",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2022-10-07_12-12-07_2943603697520690414_55023169382.jpg",
    "description": "Contemporary high-neck knit silhouette with geometric intarsia detail for elevated layering.",
    "badge": "New Arrival",
    "fit": "Slim Fit",
    "fabric": "Intarsia Stretch Knit",
    "code": "ABC-TSH-019",
    "inStock": true,
    "tags": [
      "Mock Neck",
      "Fine Knit",
      "Smart Casual"
    ]
  },
  {
    "id": "ab-020",
    "slug": "textured-mock-neck-fine-knit-tee-020",
    "name": "Textured Mock-Neck Fine Knit Tee",
    "category": "T-Shirts",
    "categorySlug": "t-shirts",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2022-10-07_12-12-28_2943603875140866181_55023169382.jpg",
    "description": "Contemporary high-neck knit silhouette with geometric intarsia detail for elevated layering.",
    "badge": "New Arrival",
    "fit": "Slim Fit",
    "fabric": "Intarsia Stretch Knit",
    "code": "ABC-TSH-020",
    "inStock": true,
    "tags": [
      "Mock Neck",
      "Fine Knit",
      "Smart Casual"
    ]
  },
  {
    "id": "ab-021",
    "slug": "textured-mock-neck-fine-knit-tee-021",
    "name": "Textured Mock-Neck Fine Knit Tee",
    "category": "T-Shirts",
    "categorySlug": "t-shirts",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2022-10-07_12-12-48_2943604042158081069_55023169382.jpg",
    "description": "Contemporary high-neck knit silhouette with geometric intarsia detail for elevated layering.",
    "badge": "New Arrival",
    "fit": "Slim Fit",
    "fabric": "Intarsia Stretch Knit",
    "code": "ABC-TSH-021",
    "inStock": true,
    "tags": [
      "Mock Neck",
      "Fine Knit",
      "Smart Casual"
    ]
  },
  {
    "id": "ab-022",
    "slug": "textured-mock-neck-fine-knit-tee-022",
    "name": "Textured Mock-Neck Fine Knit Tee",
    "category": "T-Shirts",
    "categorySlug": "t-shirts",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2022-10-07_16-37-21_2943737197812850121_55023169382.jpg",
    "description": "Contemporary high-neck knit silhouette with geometric intarsia detail for elevated layering.",
    "badge": "New Arrival",
    "fit": "Slim Fit",
    "fabric": "Intarsia Stretch Knit",
    "code": "ABC-TSH-022",
    "inStock": true,
    "tags": [
      "Mock Neck",
      "Fine Knit",
      "Smart Casual"
    ]
  },
  {
    "id": "ab-023",
    "slug": "u-s-polo-assn-vintage-straight-fit-denim-jeans-stack-023",
    "name": "U.S. Polo Assn Vintage Straight-Fit Denim Jeans Stack",
    "category": "Pants",
    "categorySlug": "pants",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2022-10-19_17-03-15_2952447538944159200_55023169382.jpg",
    "description": "Timeless 5-pocket denim jeans featuring authentic washed indigos, branded leather patch, and durable hardware.",
    "badge": "Classic Denim",
    "fit": "Regular Fit",
    "fabric": "Authentic Ring-Spun Denim",
    "code": "ABC-PNT-023",
    "inStock": true,
    "tags": [
      "Denim Jeans",
      "Straight Fit",
      "5-Pocket",
      "Vintage Wash"
    ]
  },
  {
    "id": "ab-024",
    "slug": "folded-camouflage-utility-cotton-chino-trousers-024",
    "name": "Folded Camouflage & Utility Cotton Chino Trousers",
    "category": "Pants",
    "categorySlug": "pants",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2022-10-19_17-03-35_2952447711388637475_55023169382.jpg",
    "description": "Sturdy cotton twill trousers tailored with flat front, subtle camo accents, and dependable day-to-night comfort.",
    "badge": "Chino Edit",
    "fit": "Regular Fit",
    "fabric": "Pre-Washed Stretch Cotton Twill",
    "code": "ABC-PNT-024",
    "inStock": true,
    "tags": [
      "Chino Trousers",
      "Flat Front",
      "Camo Utility",
      "Durable"
    ]
  },
  {
    "id": "ab-025",
    "slug": "vertical-block-striped-oxford-button-down-shirt-025",
    "name": "Vertical Block Striped Oxford Button-Down Shirt",
    "category": "Shirts",
    "categorySlug": "shirts",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2022-10-19_17-04-01_2952447924761451035_55023169382.jpg",
    "description": "Contrasting vertical stripes create an elongating profile with pristine boardroom and evening appeal.",
    "badge": "Signature Cut",
    "fit": "Slim Fit",
    "fabric": "Striped Oxford Weave",
    "code": "ABC-SHR-025",
    "inStock": true,
    "tags": [
      "Vertical Stripe",
      "Oxford Cotton",
      "Sharp Tailoring"
    ]
  },
  {
    "id": "ab-026",
    "slug": "vertical-block-striped-oxford-button-down-shirt-026",
    "name": "Vertical Block Striped Oxford Button-Down Shirt",
    "category": "Shirts",
    "categorySlug": "shirts",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2022-10-19_17-19-50_2952455884199784959_55023169382_3.jpg",
    "description": "Contrasting vertical stripes create an elongating profile with pristine boardroom and evening appeal.",
    "badge": "Signature Cut",
    "fit": "Slim Fit",
    "fabric": "Striped Oxford Weave",
    "code": "ABC-SHR-026",
    "inStock": true,
    "tags": [
      "Vertical Stripe",
      "Oxford Cotton",
      "Sharp Tailoring"
    ]
  },
  {
    "id": "ab-027",
    "slug": "vertical-block-striped-oxford-button-down-shirt-027",
    "name": "Vertical Block Striped Oxford Button-Down Shirt",
    "category": "Shirts",
    "categorySlug": "shirts",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2022-10-19_17-19-50_2952455884199888188_55023169382_2.jpg",
    "description": "Contrasting vertical stripes create an elongating profile with pristine boardroom and evening appeal.",
    "badge": "Signature Cut",
    "fit": "Slim Fit",
    "fabric": "Striped Oxford Weave",
    "code": "ABC-SHR-027",
    "inStock": true,
    "tags": [
      "Vertical Stripe",
      "Oxford Cotton",
      "Sharp Tailoring"
    ]
  },
  {
    "id": "ab-028",
    "slug": "vertical-block-striped-oxford-button-down-shirt-028",
    "name": "Vertical Block Striped Oxford Button-Down Shirt",
    "category": "Shirts",
    "categorySlug": "shirts",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2022-10-19_17-19-50_2952455884325757627_55023169382_4.jpg",
    "description": "Contrasting vertical stripes create an elongating profile with pristine boardroom and evening appeal.",
    "badge": "Signature Cut",
    "fit": "Slim Fit",
    "fabric": "Striped Oxford Weave",
    "code": "ABC-SHR-028",
    "inStock": true,
    "tags": [
      "Vertical Stripe",
      "Oxford Cotton",
      "Sharp Tailoring"
    ]
  },
  {
    "id": "ab-029",
    "slug": "vertical-block-striped-oxford-button-down-shirt-029",
    "name": "Vertical Block Striped Oxford Button-Down Shirt",
    "category": "Shirts",
    "categorySlug": "shirts",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2022-10-19_17-19-50_2952455884325776789_55023169382_1.jpg",
    "description": "Contrasting vertical stripes create an elongating profile with pristine boardroom and evening appeal.",
    "badge": "Signature Cut",
    "fit": "Slim Fit",
    "fabric": "Striped Oxford Weave",
    "code": "ABC-SHR-029",
    "inStock": true,
    "tags": [
      "Vertical Stripe",
      "Oxford Cotton",
      "Sharp Tailoring"
    ]
  },
  {
    "id": "ab-030",
    "slug": "terracotta-plaid-hooded-flannel-casual-shirt-030",
    "name": "Terracotta Plaid Hooded Flannel Casual Shirt",
    "category": "Shirts",
    "categorySlug": "shirts",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2022-10-19_17-20-37_2952456283715649560_55023169382.jpg",
    "description": "Rugged brushed cotton check shirt updated with an integrated knit hood and twin flap utility pockets.",
    "badge": "Hooded Staple",
    "fit": "Regular Fit",
    "fabric": "Brushed Cotton Flannel",
    "code": "ABC-SHR-030",
    "inStock": true,
    "tags": [
      "Hooded Shirt",
      "Plaid Flannel",
      "Casual Outerwear",
      "Terracotta"
    ]
  },
  {
    "id": "ab-031",
    "slug": "ochre-plaid-hooded-flannel-casual-shirt-031",
    "name": "Ochre Plaid Hooded Flannel Casual Shirt",
    "category": "Shirts",
    "categorySlug": "shirts",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2022-10-19_17-21-10_2952456555607293376_55023169382.jpg",
    "description": "Vibrant warm yellow and black plaid shirt with soft contrast hood for weekend lounging and rides.",
    "badge": "Hooded Staple",
    "fit": "Regular Fit",
    "fabric": "Brushed Cotton Flannel",
    "code": "ABC-SHR-031",
    "inStock": true,
    "tags": [
      "Hooded Shirt",
      "Plaid Flannel",
      "Ochre Check",
      "Weekend Cut"
    ]
  },
  {
    "id": "ab-032",
    "slug": "monochrome-micro-pattern-jacquard-shirt-032",
    "name": "Monochrome Micro-Pattern Jacquard Shirt",
    "category": "Shirts",
    "categorySlug": "shirts",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2022-11-16_11-09-44_2972563326639681489_55023169382_5.jpg",
    "description": "Understated jacquard weave adding tactile depth and rich luster for celebratory evening occasions.",
    "badge": "Evening Edit",
    "fit": "Slim Fit",
    "fabric": "Tonal Jacquard Cotton",
    "code": "ABC-SHR-032",
    "inStock": true,
    "tags": [
      "Jacquard",
      "Lustrous",
      "Evening"
    ]
  },
  {
    "id": "ab-033",
    "slug": "monochrome-micro-pattern-jacquard-shirt-033",
    "name": "Monochrome Micro-Pattern Jacquard Shirt",
    "category": "Shirts",
    "categorySlug": "shirts",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2022-11-16_11-09-44_2972563326639694858_55023169382_4.jpg",
    "description": "Understated jacquard weave adding tactile depth and rich luster for celebratory evening occasions.",
    "badge": "Evening Edit",
    "fit": "Slim Fit",
    "fabric": "Tonal Jacquard Cotton",
    "code": "ABC-SHR-033",
    "inStock": true,
    "tags": [
      "Jacquard",
      "Lustrous",
      "Evening"
    ]
  },
  {
    "id": "ab-034",
    "slug": "monochrome-micro-pattern-jacquard-shirt-034",
    "name": "Monochrome Micro-Pattern Jacquard Shirt",
    "category": "Shirts",
    "categorySlug": "shirts",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2022-11-16_11-09-44_2972563326656460545_55023169382_2.jpg",
    "description": "Understated jacquard weave adding tactile depth and rich luster for celebratory evening occasions.",
    "badge": "Evening Edit",
    "fit": "Slim Fit",
    "fabric": "Tonal Jacquard Cotton",
    "code": "ABC-SHR-034",
    "inStock": true,
    "tags": [
      "Jacquard",
      "Lustrous",
      "Evening"
    ]
  },
  {
    "id": "ab-035",
    "slug": "monochrome-micro-pattern-jacquard-shirt-035",
    "name": "Monochrome Micro-Pattern Jacquard Shirt",
    "category": "Shirts",
    "categorySlug": "shirts",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2022-11-16_11-09-44_2972563326664928569_55023169382_6.jpg",
    "description": "Understated jacquard weave adding tactile depth and rich luster for celebratory evening occasions.",
    "badge": "Evening Edit",
    "fit": "Slim Fit",
    "fabric": "Tonal Jacquard Cotton",
    "code": "ABC-SHR-035",
    "inStock": true,
    "tags": [
      "Jacquard",
      "Lustrous",
      "Evening"
    ]
  },
  {
    "id": "ab-036",
    "slug": "monochrome-micro-pattern-jacquard-shirt-036",
    "name": "Monochrome Micro-Pattern Jacquard Shirt",
    "category": "Shirts",
    "categorySlug": "shirts",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2022-11-16_11-09-44_2972563326849392427_55023169382_1.jpg",
    "description": "Understated jacquard weave adding tactile depth and rich luster for celebratory evening occasions.",
    "badge": "Evening Edit",
    "fit": "Slim Fit",
    "fabric": "Tonal Jacquard Cotton",
    "code": "ABC-SHR-036",
    "inStock": true,
    "tags": [
      "Jacquard",
      "Lustrous",
      "Evening"
    ]
  },
  {
    "id": "ab-037",
    "slug": "monochrome-micro-pattern-jacquard-shirt-037",
    "name": "Monochrome Micro-Pattern Jacquard Shirt",
    "category": "Shirts",
    "categorySlug": "shirts",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2022-11-16_11-09-44_2972563326849493749_55023169382_3.jpg",
    "description": "Understated jacquard weave adding tactile depth and rich luster for celebratory evening occasions.",
    "badge": "Evening Edit",
    "fit": "Slim Fit",
    "fabric": "Tonal Jacquard Cotton",
    "code": "ABC-SHR-037",
    "inStock": true,
    "tags": [
      "Jacquard",
      "Lustrous",
      "Evening"
    ]
  },
  {
    "id": "ab-038",
    "slug": "wild-studio-slim-fit-artisanal-printed-shirts-collection-038",
    "name": "Wild Studio Slim-Fit Artisanal Printed Shirts Collection",
    "category": "Shirts",
    "categorySlug": "shirts",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2022-11-17_18-33-30_2973511457178935447_55023169382.jpg",
    "description": "Curated stack of geometric, floral, and newspaper montage prints tailored for high-fashion statements.",
    "badge": "Artisan Edit",
    "fit": "Slim Fit",
    "fabric": "Wild Studio Digital Sateen",
    "code": "ABC-SHR-038",
    "inStock": true,
    "tags": [
      "Wild Studio",
      "Printed Shirts",
      "Artisanal",
      "Slim Fit"
    ]
  },
  {
    "id": "ab-039",
    "slug": "pinstripe-smart-casual-button-down-shirt-039",
    "name": "Pinstripe Smart Casual Button-Down Shirt",
    "category": "Shirts",
    "categorySlug": "shirts",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2022-11-19_08-37-58_2974661268603907699_55023169382_3.jpg",
    "description": "Clean fine stripes bring an immaculate tailored aesthetic to weekday and social wardrobes.",
    "fit": "Slim Fit",
    "fabric": "Fine Yarn-Dyed Cotton",
    "code": "ABC-SHR-039",
    "inStock": true,
    "tags": [
      "Pinstripe",
      "Office Casual",
      "Breathable"
    ]
  },
  {
    "id": "ab-040",
    "slug": "pinstripe-smart-casual-button-down-shirt-040",
    "name": "Pinstripe Smart Casual Button-Down Shirt",
    "category": "Shirts",
    "categorySlug": "shirts",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2022-11-19_08-37-58_2974661268612156184_55023169382_4.jpg",
    "description": "Clean fine stripes bring an immaculate tailored aesthetic to weekday and social wardrobes.",
    "fit": "Slim Fit",
    "fabric": "Fine Yarn-Dyed Cotton",
    "code": "ABC-SHR-040",
    "inStock": true,
    "tags": [
      "Pinstripe",
      "Office Casual",
      "Breathable"
    ]
  },
  {
    "id": "ab-041",
    "slug": "pinstripe-smart-casual-button-down-shirt-041",
    "name": "Pinstripe Smart Casual Button-Down Shirt",
    "category": "Shirts",
    "categorySlug": "shirts",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2022-11-19_08-37-58_2974661268612278177_55023169382_2.jpg",
    "description": "Clean fine stripes bring an immaculate tailored aesthetic to weekday and social wardrobes.",
    "fit": "Slim Fit",
    "fabric": "Fine Yarn-Dyed Cotton",
    "code": "ABC-SHR-041",
    "inStock": true,
    "tags": [
      "Pinstripe",
      "Office Casual",
      "Breathable"
    ]
  },
  {
    "id": "ab-042",
    "slug": "pinstripe-smart-casual-button-down-shirt-042",
    "name": "Pinstripe Smart Casual Button-Down Shirt",
    "category": "Shirts",
    "categorySlug": "shirts",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2022-11-19_08-37-58_2974661268729665444_55023169382_5.jpg",
    "description": "Clean fine stripes bring an immaculate tailored aesthetic to weekday and social wardrobes.",
    "fit": "Slim Fit",
    "fabric": "Fine Yarn-Dyed Cotton",
    "code": "ABC-SHR-042",
    "inStock": true,
    "tags": [
      "Pinstripe",
      "Office Casual",
      "Breathable"
    ]
  },
  {
    "id": "ab-043",
    "slug": "pinstripe-smart-casual-button-down-shirt-043",
    "name": "Pinstripe Smart Casual Button-Down Shirt",
    "category": "Shirts",
    "categorySlug": "shirts",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2022-11-19_08-37-58_2974661268771556991_55023169382_1.jpg",
    "description": "Clean fine stripes bring an immaculate tailored aesthetic to weekday and social wardrobes.",
    "fit": "Slim Fit",
    "fabric": "Fine Yarn-Dyed Cotton",
    "code": "ABC-SHR-043",
    "inStock": true,
    "tags": [
      "Pinstripe",
      "Office Casual",
      "Breathable"
    ]
  },
  {
    "id": "ab-044",
    "slug": "heritage-lumberjack-plaid-flap-pocket-shirt-044",
    "name": "Heritage Lumberjack Plaid Flap Pocket Shirt",
    "category": "Shirts",
    "categorySlug": "shirts",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2022-11-25_19-18-12_2979332162618056852_55023169382_2.jpg",
    "description": "Warm brushed cotton plaid featuring double utility chest flaps for rugged charm.",
    "badge": "Bestseller",
    "fit": "Regular Fit",
    "fabric": "Brushed Cotton Flannel",
    "code": "ABC-SHR-044",
    "inStock": true,
    "tags": [
      "Plaid Flannel",
      "Twin Pockets",
      "Autumn Staple"
    ]
  },
  {
    "id": "ab-045",
    "slug": "heritage-lumberjack-plaid-flap-pocket-shirt-045",
    "name": "Heritage Lumberjack Plaid Flap Pocket Shirt",
    "category": "Shirts",
    "categorySlug": "shirts",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2022-11-25_19-18-12_2979332162618067524_55023169382_4.jpg",
    "description": "Warm brushed cotton plaid featuring double utility chest flaps for rugged charm.",
    "badge": "Bestseller",
    "fit": "Regular Fit",
    "fabric": "Brushed Cotton Flannel",
    "code": "ABC-SHR-045",
    "inStock": true,
    "tags": [
      "Plaid Flannel",
      "Twin Pockets",
      "Autumn Staple"
    ]
  },
  {
    "id": "ab-046",
    "slug": "heritage-lumberjack-plaid-flap-pocket-shirt-046",
    "name": "Heritage Lumberjack Plaid Flap Pocket Shirt",
    "category": "Shirts",
    "categorySlug": "shirts",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2022-11-25_19-18-12_2979332162626267967_55023169382_3.jpg",
    "description": "Warm brushed cotton plaid featuring double utility chest flaps for rugged charm.",
    "badge": "Bestseller",
    "fit": "Regular Fit",
    "fabric": "Brushed Cotton Flannel",
    "code": "ABC-SHR-046",
    "inStock": true,
    "tags": [
      "Plaid Flannel",
      "Twin Pockets",
      "Autumn Staple"
    ]
  },
  {
    "id": "ab-047",
    "slug": "heritage-lumberjack-plaid-flap-pocket-shirt-047",
    "name": "Heritage Lumberjack Plaid Flap Pocket Shirt",
    "category": "Shirts",
    "categorySlug": "shirts",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2022-11-25_19-18-12_2979332162626269170_55023169382_1.jpg",
    "description": "Warm brushed cotton plaid featuring double utility chest flaps for rugged charm.",
    "badge": "Bestseller",
    "fit": "Regular Fit",
    "fabric": "Brushed Cotton Flannel",
    "code": "ABC-SHR-047",
    "inStock": true,
    "tags": [
      "Plaid Flannel",
      "Twin Pockets",
      "Autumn Staple"
    ]
  },
  {
    "id": "ab-048",
    "slug": "garment-dyed-classic-oxford-button-down-shirt-048",
    "name": "Garment-Dyed Classic Oxford Button-Down Shirt",
    "category": "Shirts",
    "categorySlug": "shirts",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2022-11-26_19-37-13_2980066509474088599_55023169382_2.jpg",
    "description": "Classic button-down crafted for timeless sophistication in versatile seasonal tones.",
    "badge": "Essential",
    "fit": "Regular Fit",
    "fabric": "Garment-Dyed Oxford Cotton",
    "code": "ABC-SHR-048",
    "inStock": true,
    "tags": [
      "Garment Dyed",
      "Oxford Cotton",
      "Timeless"
    ]
  },
  {
    "id": "ab-049",
    "slug": "garment-dyed-classic-oxford-button-down-shirt-049",
    "name": "Garment-Dyed Classic Oxford Button-Down Shirt",
    "category": "Shirts",
    "categorySlug": "shirts",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2022-11-26_19-37-13_2980066509683825219_55023169382_1.jpg",
    "description": "Classic button-down crafted for timeless sophistication in versatile seasonal tones.",
    "badge": "Essential",
    "fit": "Regular Fit",
    "fabric": "Garment-Dyed Oxford Cotton",
    "code": "ABC-SHR-049",
    "inStock": true,
    "tags": [
      "Garment Dyed",
      "Oxford Cotton",
      "Timeless"
    ]
  },
  {
    "id": "ab-050",
    "slug": "highland-tartan-check-point-collar-shirt-050",
    "name": "Highland Tartan Check Point-Collar Shirt",
    "category": "Shirts",
    "categorySlug": "shirts",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2022-11-28_17-08-47_2981441357756208338_55023169382.jpg",
    "description": "Refined tartan checked shirt tailored with a neat point collar and crisp drape.",
    "fit": "Regular Fit",
    "fabric": "High-Count Tartan Poplin",
    "code": "ABC-SHR-050",
    "inStock": true,
    "tags": [
      "Tartan Check",
      "Smart Casual",
      "Point Collar"
    ]
  },
  {
    "id": "ab-051",
    "slug": "highland-tartan-check-point-collar-shirt-051",
    "name": "Highland Tartan Check Point-Collar Shirt",
    "category": "Shirts",
    "categorySlug": "shirts",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2022-11-28_17-24-36_2981449316707911188_55023169382.jpg",
    "description": "Refined tartan checked shirt tailored with a neat point collar and crisp drape.",
    "fit": "Regular Fit",
    "fabric": "High-Count Tartan Poplin",
    "code": "ABC-SHR-051",
    "inStock": true,
    "tags": [
      "Tartan Check",
      "Smart Casual",
      "Point Collar"
    ]
  },
  {
    "id": "ab-052",
    "slug": "highland-tartan-check-point-collar-shirt-052",
    "name": "Highland Tartan Check Point-Collar Shirt",
    "category": "Shirts",
    "categorySlug": "shirts",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2022-11-28_17-24-48_2981449413864858595_55023169382.jpg",
    "description": "Refined tartan checked shirt tailored with a neat point collar and crisp drape.",
    "fit": "Regular Fit",
    "fabric": "High-Count Tartan Poplin",
    "code": "ABC-SHR-052",
    "inStock": true,
    "tags": [
      "Tartan Check",
      "Smart Casual",
      "Point Collar"
    ]
  },
  {
    "id": "ab-053",
    "slug": "pinstripe-smart-casual-button-down-shirt-053",
    "name": "Pinstripe Smart Casual Button-Down Shirt",
    "category": "Shirts",
    "categorySlug": "shirts",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2022-11-29_17-01-18_2982162361038649932_55023169382.jpg",
    "description": "Clean fine stripes bring an immaculate tailored aesthetic to weekday and social wardrobes.",
    "fit": "Slim Fit",
    "fabric": "Fine Yarn-Dyed Cotton",
    "code": "ABC-SHR-053",
    "inStock": true,
    "tags": [
      "Pinstripe",
      "Office Casual",
      "Breathable"
    ]
  },
  {
    "id": "ab-054",
    "slug": "pinstripe-smart-casual-button-down-shirt-054",
    "name": "Pinstripe Smart Casual Button-Down Shirt",
    "category": "Shirts",
    "categorySlug": "shirts",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2022-11-29_17-14-31_2982169020116876148_55023169382_3.jpg",
    "description": "Clean fine stripes bring an immaculate tailored aesthetic to weekday and social wardrobes.",
    "fit": "Slim Fit",
    "fabric": "Fine Yarn-Dyed Cotton",
    "code": "ABC-SHR-054",
    "inStock": true,
    "tags": [
      "Pinstripe",
      "Office Casual",
      "Breathable"
    ]
  },
  {
    "id": "ab-055",
    "slug": "pinstripe-smart-casual-button-down-shirt-055",
    "name": "Pinstripe Smart Casual Button-Down Shirt",
    "category": "Shirts",
    "categorySlug": "shirts",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2022-11-29_17-14-31_2982169020116903497_55023169382_1.jpg",
    "description": "Clean fine stripes bring an immaculate tailored aesthetic to weekday and social wardrobes.",
    "fit": "Slim Fit",
    "fabric": "Fine Yarn-Dyed Cotton",
    "code": "ABC-SHR-055",
    "inStock": true,
    "tags": [
      "Pinstripe",
      "Office Casual",
      "Breathable"
    ]
  },
  {
    "id": "ab-056",
    "slug": "pinstripe-smart-casual-button-down-shirt-056",
    "name": "Pinstripe Smart Casual Button-Down Shirt",
    "category": "Shirts",
    "categorySlug": "shirts",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2022-11-29_17-14-31_2982169020116922813_55023169382_2.jpg",
    "description": "Clean fine stripes bring an immaculate tailored aesthetic to weekday and social wardrobes.",
    "fit": "Slim Fit",
    "fabric": "Fine Yarn-Dyed Cotton",
    "code": "ABC-SHR-056",
    "inStock": true,
    "tags": [
      "Pinstripe",
      "Office Casual",
      "Breathable"
    ]
  },
  {
    "id": "ab-057",
    "slug": "pinstripe-smart-casual-button-down-shirt-057",
    "name": "Pinstripe Smart Casual Button-Down Shirt",
    "category": "Shirts",
    "categorySlug": "shirts",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2022-11-29_17-14-31_2982169020293135536_55023169382_4.jpg",
    "description": "Clean fine stripes bring an immaculate tailored aesthetic to weekday and social wardrobes.",
    "fit": "Slim Fit",
    "fabric": "Fine Yarn-Dyed Cotton",
    "code": "ABC-SHR-057",
    "inStock": true,
    "tags": [
      "Pinstripe",
      "Office Casual",
      "Breathable"
    ]
  },
  {
    "id": "ab-058",
    "slug": "artisanal-block-printed-relaxed-casual-shirt-058",
    "name": "Artisanal Block-Printed Relaxed Casual Shirt",
    "category": "Shirts",
    "categorySlug": "shirts",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2022-12-21_11-12-27_2997931849222160546_55023169382.jpg",
    "description": "Handcrafted motif patterns in rich tonal shades tailored for effortless leisure.",
    "badge": "Resort Cut",
    "fit": "Regular Fit",
    "fabric": "Printed Poplin Cotton",
    "code": "ABC-SHR-058",
    "inStock": true,
    "tags": [
      "Printed Shirt",
      "Resort Casual",
      "Soft Poplin"
    ]
  },
  {
    "id": "ab-059",
    "slug": "urban-essential-solid-crew-tee-059",
    "name": "Urban Essential Solid Crew Tee",
    "category": "T-Shirts",
    "categorySlug": "t-shirts",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2023-01-03_20-38-02_3007638597164375839_55023169382.jpg",
    "description": "Relaxed fit tee with a clean, versatile look crafted for effortless daily comfort.",
    "badge": "Essential",
    "fit": "Regular Fit",
    "fabric": "100% Breathable Cotton",
    "code": "ABC-TSH-059",
    "inStock": true,
    "tags": [
      "Essential",
      "All-Day Wear",
      "Soft Touch"
    ]
  },
  {
    "id": "ab-060",
    "slug": "urban-essential-solid-crew-tee-060",
    "name": "Urban Essential Solid Crew Tee",
    "category": "T-Shirts",
    "categorySlug": "t-shirts",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2023-01-12_13-21-21_3013941794162248642_55023169382.jpg",
    "description": "Relaxed fit tee with a clean, versatile look crafted for effortless daily comfort.",
    "badge": "Essential",
    "fit": "Regular Fit",
    "fabric": "100% Breathable Cotton",
    "code": "ABC-TSH-060",
    "inStock": true,
    "tags": [
      "Essential",
      "All-Day Wear",
      "Soft Touch"
    ]
  },
  {
    "id": "ab-061",
    "slug": "artisanal-abstract-digital-printed-shirt-061",
    "name": "Artisanal Abstract Digital Printed Shirt",
    "category": "Shirts",
    "categorySlug": "shirts",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2023-01-18_21-17-38_3018530169498320845_55023169382_2.jpg",
    "description": "Dynamic monochrome and vibrant prints tailored for fashionable summer styling.",
    "badge": "Artisan Series",
    "fit": "Slim Fit",
    "fabric": "Digital Printed Sateen",
    "code": "ABC-SHR-061",
    "inStock": true,
    "tags": [
      "Abstract Print",
      "Digital Motif",
      "Expressive"
    ]
  },
  {
    "id": "ab-062",
    "slug": "artisanal-abstract-digital-printed-shirt-062",
    "name": "Artisanal Abstract Digital Printed Shirt",
    "category": "Shirts",
    "categorySlug": "shirts",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2023-01-18_21-17-38_3018530169506599033_55023169382_1.jpg",
    "description": "Dynamic monochrome and vibrant prints tailored for fashionable summer styling.",
    "badge": "Artisan Series",
    "fit": "Slim Fit",
    "fabric": "Digital Printed Sateen",
    "code": "ABC-SHR-062",
    "inStock": true,
    "tags": [
      "Abstract Print",
      "Digital Motif",
      "Expressive"
    ]
  },
  {
    "id": "ab-063",
    "slug": "artisanal-abstract-digital-printed-shirt-063",
    "name": "Artisanal Abstract Digital Printed Shirt",
    "category": "Shirts",
    "categorySlug": "shirts",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2023-01-18_21-17-38_3018530169741420853_55023169382_3.jpg",
    "description": "Dynamic monochrome and vibrant prints tailored for fashionable summer styling.",
    "badge": "Artisan Series",
    "fit": "Slim Fit",
    "fabric": "Digital Printed Sateen",
    "code": "ABC-SHR-063",
    "inStock": true,
    "tags": [
      "Abstract Print",
      "Digital Motif",
      "Expressive"
    ]
  },
  {
    "id": "ab-064",
    "slug": "big-bash-contrast-stitch-straight-cut-denim-jeans-in-raw-deep-indigo-064",
    "name": "Big Bash Contrast Stitch & Straight-Cut Denim Jeans in Raw Deep Indigo",
    "category": "Pants",
    "categorySlug": "pants",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2023-03-18_06-40-09_3060850284784774845_55023169382_1.jpg",
    "description": "Premium denim crafted with contrast topstitching, ergonomic knee articulation, and soft hand-feel.",
    "badge": "Denim Edit",
    "fit": "Slim Fit",
    "fabric": "Artisan Stonewashed Denim",
    "code": "ABC-PNT-064",
    "inStock": true,
    "tags": [
      "Denim Jeans",
      "Contrast Stitch",
      "Slim Straight",
      "Daily Denim"
    ]
  },
  {
    "id": "ab-065",
    "slug": "big-bash-contrast-stitch-straight-cut-denim-jeans-in-acid-tint-blue-065",
    "name": "Big Bash Contrast Stitch & Straight-Cut Denim Jeans in Acid Tint Blue",
    "category": "Pants",
    "categorySlug": "pants",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2023-03-18_06-40-09_3060850284792947809_55023169382_2.jpg",
    "description": "Premium denim crafted with contrast topstitching, ergonomic knee articulation, and soft hand-feel.",
    "badge": "Denim Edit",
    "fit": "Slim Fit",
    "fabric": "Artisan Stonewashed Denim",
    "code": "ABC-PNT-065",
    "inStock": true,
    "tags": [
      "Denim Jeans",
      "Contrast Stitch",
      "Slim Straight",
      "Daily Denim"
    ]
  },
  {
    "id": "ab-066",
    "slug": "big-bash-contrast-stitch-straight-cut-denim-jeans-in-light-indigo-wash-066",
    "name": "Big Bash Contrast Stitch & Straight-Cut Denim Jeans in Light Indigo Wash",
    "category": "Pants",
    "categorySlug": "pants",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2023-03-18_06-40-09_3060850284793129613_55023169382_4.jpg",
    "description": "Premium denim crafted with contrast topstitching, ergonomic knee articulation, and soft hand-feel.",
    "badge": "Denim Edit",
    "fit": "Slim Fit",
    "fabric": "Artisan Stonewashed Denim",
    "code": "ABC-PNT-066",
    "inStock": true,
    "tags": [
      "Denim Jeans",
      "Contrast Stitch",
      "Slim Straight",
      "Daily Denim"
    ]
  },
  {
    "id": "ab-067",
    "slug": "big-bash-contrast-stitch-straight-cut-denim-jeans-in-medium-stonewash-067",
    "name": "Big Bash Contrast Stitch & Straight-Cut Denim Jeans in Medium Stonewash",
    "category": "Pants",
    "categorySlug": "pants",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2023-03-18_06-40-09_3060850284801313022_55023169382_3.jpg",
    "description": "Premium denim crafted with contrast topstitching, ergonomic knee articulation, and soft hand-feel.",
    "badge": "Denim Edit",
    "fit": "Slim Fit",
    "fabric": "Artisan Stonewashed Denim",
    "code": "ABC-PNT-067",
    "inStock": true,
    "tags": [
      "Denim Jeans",
      "Contrast Stitch",
      "Slim Straight",
      "Daily Denim"
    ]
  },
  {
    "id": "ab-068",
    "slug": "big-bash-contrast-stitch-straight-cut-denim-jeans-in-charcoal-vintage-068",
    "name": "Big Bash Contrast Stitch & Straight-Cut Denim Jeans in Charcoal Vintage",
    "category": "Pants",
    "categorySlug": "pants",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2023-03-18_06-40-09_3060850284801519021_55023169382_5.jpg",
    "description": "Premium denim crafted with contrast topstitching, ergonomic knee articulation, and soft hand-feel.",
    "badge": "Denim Edit",
    "fit": "Slim Fit",
    "fabric": "Artisan Stonewashed Denim",
    "code": "ABC-PNT-068",
    "inStock": true,
    "tags": [
      "Denim Jeans",
      "Contrast Stitch",
      "Slim Straight",
      "Daily Denim"
    ]
  },
  {
    "id": "ab-069",
    "slug": "solid-slub-linen-resort-casual-shirt-069",
    "name": "Solid Slub Linen Resort Casual Shirt",
    "category": "Shirts",
    "categorySlug": "shirts",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2023-03-20_18-36-41_3062660479676459883_55023169382_5.jpg",
    "description": "Lightweight slub linen woven in fresh vibrant pastels for sunlit coastal comfort.",
    "badge": "Summer Essential",
    "fit": "Slim Fit",
    "fabric": "Breathable Slub Linen-Cotton",
    "code": "ABC-SHR-069",
    "inStock": true,
    "tags": [
      "Slub Linen",
      "Resort Wear",
      "Breathable"
    ]
  },
  {
    "id": "ab-070",
    "slug": "solid-slub-linen-resort-casual-shirt-070",
    "name": "Solid Slub Linen Resort Casual Shirt",
    "category": "Shirts",
    "categorySlug": "shirts",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2023-03-20_18-36-41_3062660479676566125_55023169382_4.jpg",
    "description": "Lightweight slub linen woven in fresh vibrant pastels for sunlit coastal comfort.",
    "badge": "Summer Essential",
    "fit": "Slim Fit",
    "fabric": "Breathable Slub Linen-Cotton",
    "code": "ABC-SHR-070",
    "inStock": true,
    "tags": [
      "Slub Linen",
      "Resort Wear",
      "Breathable"
    ]
  },
  {
    "id": "ab-071",
    "slug": "solid-slub-linen-resort-casual-shirt-071",
    "name": "Solid Slub Linen Resort Casual Shirt",
    "category": "Shirts",
    "categorySlug": "shirts",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2023-03-20_18-36-41_3062660479684861692_55023169382_1.jpg",
    "description": "Lightweight slub linen woven in fresh vibrant pastels for sunlit coastal comfort.",
    "badge": "Summer Essential",
    "fit": "Slim Fit",
    "fabric": "Breathable Slub Linen-Cotton",
    "code": "ABC-SHR-071",
    "inStock": true,
    "tags": [
      "Slub Linen",
      "Resort Wear",
      "Breathable"
    ]
  },
  {
    "id": "ab-072",
    "slug": "solid-slub-linen-resort-casual-shirt-072",
    "name": "Solid Slub Linen Resort Casual Shirt",
    "category": "Shirts",
    "categorySlug": "shirts",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2023-03-20_18-36-41_3062660479684902053_55023169382_2.jpg",
    "description": "Lightweight slub linen woven in fresh vibrant pastels for sunlit coastal comfort.",
    "badge": "Summer Essential",
    "fit": "Slim Fit",
    "fabric": "Breathable Slub Linen-Cotton",
    "code": "ABC-SHR-072",
    "inStock": true,
    "tags": [
      "Slub Linen",
      "Resort Wear",
      "Breathable"
    ]
  },
  {
    "id": "ab-073",
    "slug": "solid-slub-linen-resort-casual-shirt-073",
    "name": "Solid Slub Linen Resort Casual Shirt",
    "category": "Shirts",
    "categorySlug": "shirts",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2023-03-20_18-36-41_3062660479835869305_55023169382_6.jpg",
    "description": "Lightweight slub linen woven in fresh vibrant pastels for sunlit coastal comfort.",
    "badge": "Summer Essential",
    "fit": "Slim Fit",
    "fabric": "Breathable Slub Linen-Cotton",
    "code": "ABC-SHR-073",
    "inStock": true,
    "tags": [
      "Slub Linen",
      "Resort Wear",
      "Breathable"
    ]
  },
  {
    "id": "ab-074",
    "slug": "solid-slub-linen-resort-casual-shirt-074",
    "name": "Solid Slub Linen Resort Casual Shirt",
    "category": "Shirts",
    "categorySlug": "shirts",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2023-03-20_18-36-41_3062660479877777205_55023169382_3.jpg",
    "description": "Lightweight slub linen woven in fresh vibrant pastels for sunlit coastal comfort.",
    "badge": "Summer Essential",
    "fit": "Slim Fit",
    "fabric": "Breathable Slub Linen-Cotton",
    "code": "ABC-SHR-074",
    "inStock": true,
    "tags": [
      "Slub Linen",
      "Resort Wear",
      "Breathable"
    ]
  },
  {
    "id": "ab-075",
    "slug": "mandala-geometric-swirl-printed-shirt-075",
    "name": "Mandala Geometric Swirl Printed Shirt",
    "category": "Shirts",
    "categorySlug": "shirts",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2023-05-23_11-50-45_3108841814291652359_55023169382.jpg",
    "description": "Intricate kaleidoscope motifs create a vibrant, modern touch for celebratory outings.",
    "fit": "Slim Fit",
    "fabric": "Combed Cotton Sateen",
    "code": "ABC-SHR-075",
    "inStock": true,
    "tags": [
      "Mandala Print",
      "Festive Casual",
      "Soft Drape"
    ]
  },
  {
    "id": "ab-076",
    "slug": "mandala-geometric-swirl-printed-shirt-076",
    "name": "Mandala Geometric Swirl Printed Shirt",
    "category": "Shirts",
    "categorySlug": "shirts",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2023-05-23_11-54-29_3108843689867144619_55023169382_2.jpg",
    "description": "Intricate kaleidoscope motifs create a vibrant, modern touch for celebratory outings.",
    "fit": "Slim Fit",
    "fabric": "Combed Cotton Sateen",
    "code": "ABC-SHR-076",
    "inStock": true,
    "tags": [
      "Mandala Print",
      "Festive Casual",
      "Soft Drape"
    ]
  },
  {
    "id": "ab-077",
    "slug": "mandala-geometric-swirl-printed-shirt-077",
    "name": "Mandala Geometric Swirl Printed Shirt",
    "category": "Shirts",
    "categorySlug": "shirts",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2023-05-23_11-54-29_3108843690026388606_55023169382_1.jpg",
    "description": "Intricate kaleidoscope motifs create a vibrant, modern touch for celebratory outings.",
    "fit": "Slim Fit",
    "fabric": "Combed Cotton Sateen",
    "code": "ABC-SHR-077",
    "inStock": true,
    "tags": [
      "Mandala Print",
      "Festive Casual",
      "Soft Drape"
    ]
  },
  {
    "id": "ab-078",
    "slug": "mandala-geometric-swirl-printed-shirt-078",
    "name": "Mandala Geometric Swirl Printed Shirt",
    "category": "Shirts",
    "categorySlug": "shirts",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2023-05-23_11-54-29_3108843690034791651_55023169382_3.jpg",
    "description": "Intricate kaleidoscope motifs create a vibrant, modern touch for celebratory outings.",
    "fit": "Slim Fit",
    "fabric": "Combed Cotton Sateen",
    "code": "ABC-SHR-078",
    "inStock": true,
    "tags": [
      "Mandala Print",
      "Festive Casual",
      "Soft Drape"
    ]
  },
  {
    "id": "ab-079",
    "slug": "zara-comfort-stretch-tailored-cotton-chinos-in-olive-khaki-079",
    "name": "Zara Comfort-Stretch Tailored Cotton Chinos in Olive Khaki",
    "category": "Pants",
    "categorySlug": "pants",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2023-07-06_20-22-15_3140989392416274608_55023169382_1.jpg",
    "description": "Modern European cut trousers engineered with 2% elastane for flexibility and sleek boardroom-to-dinner polish.",
    "badge": "Smart Casual",
    "fit": "Slim Fit",
    "fabric": "Sateen Comfort-Stretch Cotton",
    "code": "ABC-PNT-079",
    "inStock": true,
    "tags": [
      "Cotton Trousers",
      "Stretch Chinos",
      "Slim Silhouette",
      "Polished"
    ]
  },
  {
    "id": "ab-080",
    "slug": "zara-comfort-stretch-tailored-cotton-chinos-in-slate-grey-080",
    "name": "Zara Comfort-Stretch Tailored Cotton Chinos in Slate Grey",
    "category": "Pants",
    "categorySlug": "pants",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2023-07-06_20-22-15_3140989392424587540_55023169382_3.jpg",
    "description": "Modern European cut trousers engineered with 2% elastane for flexibility and sleek boardroom-to-dinner polish.",
    "badge": "Smart Casual",
    "fit": "Slim Fit",
    "fabric": "Sateen Comfort-Stretch Cotton",
    "code": "ABC-PNT-080",
    "inStock": true,
    "tags": [
      "Cotton Trousers",
      "Stretch Chinos",
      "Slim Silhouette",
      "Polished"
    ]
  },
  {
    "id": "ab-081",
    "slug": "zara-comfort-stretch-tailored-cotton-chinos-in-warm-biscuit-tan-081",
    "name": "Zara Comfort-Stretch Tailored Cotton Chinos in Warm Biscuit Tan",
    "category": "Pants",
    "categorySlug": "pants",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2023-07-06_20-22-15_3140989392567344360_55023169382_2.jpg",
    "description": "Modern European cut trousers engineered with 2% elastane for flexibility and sleek boardroom-to-dinner polish.",
    "badge": "Smart Casual",
    "fit": "Slim Fit",
    "fabric": "Sateen Comfort-Stretch Cotton",
    "code": "ABC-PNT-081",
    "inStock": true,
    "tags": [
      "Cotton Trousers",
      "Stretch Chinos",
      "Slim Silhouette",
      "Polished"
    ]
  },
  {
    "id": "ab-082",
    "slug": "four-squares-denim-polo-club-multi-tone-polo-tee-082",
    "name": "Four Squares Denim Polo Club Multi-Tone Polo Tee",
    "category": "T-Shirts",
    "categorySlug": "t-shirts",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2023-08-07_18-49-06_3164135332152978430_55023169382.jpg",
    "description": "Classic sports-luxe piqué polo featuring dual-tone contrast sleeves and refined collar tipping.",
    "badge": "Bestseller",
    "fit": "Regular Fit",
    "fabric": "Combed Cotton Piqué",
    "code": "ABC-TSH-082",
    "inStock": true,
    "tags": [
      "Polo Tee",
      "Colorblock",
      "Smart Casual",
      "Combed Cotton"
    ]
  },
  {
    "id": "ab-083",
    "slug": "gp-432-distressed-slim-fit-stretch-denim-jeans-in-raw-dark-blue-083",
    "name": "GP/432 Distressed Slim-Fit Stretch Denim Jeans in Raw Dark Blue",
    "category": "Pants",
    "categorySlug": "pants",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2023-08-21_18-23-51_3174269485812996855_55023169382_6.jpg",
    "description": "Hand-whiskered and subtly distressed denim jeans designed for an effortless streetwear edge and snug flexibility.",
    "badge": "Bestseller",
    "fit": "Slim Fit",
    "fabric": "Power-Stretch Denim",
    "code": "ABC-PNT-083",
    "inStock": true,
    "tags": [
      "Distressed Jeans",
      "Power Stretch",
      "Whiskered Denim",
      "Streetwear"
    ]
  },
  {
    "id": "ab-084",
    "slug": "gp-432-distressed-slim-fit-stretch-denim-jeans-in-tonal-stonewash-084",
    "name": "GP/432 Distressed Slim-Fit Stretch Denim Jeans in Tonal Stonewash",
    "category": "Pants",
    "categorySlug": "pants",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2023-08-21_18-23-51_3174269485821339107_55023169382_4.jpg",
    "description": "Hand-whiskered and subtly distressed denim jeans designed for an effortless streetwear edge and snug flexibility.",
    "badge": "Bestseller",
    "fit": "Slim Fit",
    "fabric": "Power-Stretch Denim",
    "code": "ABC-PNT-084",
    "inStock": true,
    "tags": [
      "Distressed Jeans",
      "Power Stretch",
      "Whiskered Denim",
      "Streetwear"
    ]
  },
  {
    "id": "ab-085",
    "slug": "gp-432-distressed-slim-fit-stretch-denim-jeans-in-distressed-sky-blue-085",
    "name": "GP/432 Distressed Slim-Fit Stretch Denim Jeans in Distressed Sky Blue",
    "category": "Pants",
    "categorySlug": "pants",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2023-08-21_18-23-51_3174269485821414579_55023169382_3.jpg",
    "description": "Hand-whiskered and subtly distressed denim jeans designed for an effortless streetwear edge and snug flexibility.",
    "badge": "Bestseller",
    "fit": "Slim Fit",
    "fabric": "Power-Stretch Denim",
    "code": "ABC-PNT-085",
    "inStock": true,
    "tags": [
      "Distressed Jeans",
      "Power Stretch",
      "Whiskered Denim",
      "Streetwear"
    ]
  },
  {
    "id": "ab-086",
    "slug": "gp-432-distressed-slim-fit-stretch-denim-jeans-in-faded-ice-wash-086",
    "name": "GP/432 Distressed Slim-Fit Stretch Denim Jeans in Faded Ice Wash",
    "category": "Pants",
    "categorySlug": "pants",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2023-08-21_18-23-51_3174269485821449084_55023169382_1.jpg",
    "description": "Hand-whiskered and subtly distressed denim jeans designed for an effortless streetwear edge and snug flexibility.",
    "badge": "Bestseller",
    "fit": "Slim Fit",
    "fabric": "Power-Stretch Denim",
    "code": "ABC-PNT-086",
    "inStock": true,
    "tags": [
      "Distressed Jeans",
      "Power Stretch",
      "Whiskered Denim",
      "Streetwear"
    ]
  },
  {
    "id": "ab-087",
    "slug": "gp-432-distressed-slim-fit-stretch-denim-jeans-in-vintage-whiskered-indigo-087",
    "name": "GP/432 Distressed Slim-Fit Stretch Denim Jeans in Vintage Whiskered Indigo",
    "category": "Pants",
    "categorySlug": "pants",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2023-08-21_18-23-51_3174269485955480969_55023169382_2.jpg",
    "description": "Hand-whiskered and subtly distressed denim jeans designed for an effortless streetwear edge and snug flexibility.",
    "badge": "Bestseller",
    "fit": "Slim Fit",
    "fabric": "Power-Stretch Denim",
    "code": "ABC-PNT-087",
    "inStock": true,
    "tags": [
      "Distressed Jeans",
      "Power Stretch",
      "Whiskered Denim",
      "Streetwear"
    ]
  },
  {
    "id": "ab-088",
    "slug": "gp-432-distressed-slim-fit-stretch-denim-jeans-in-midnight-black-088",
    "name": "GP/432 Distressed Slim-Fit Stretch Denim Jeans in Midnight Black",
    "category": "Pants",
    "categorySlug": "pants",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2023-08-21_18-23-51_3174269485972331085_55023169382_5.jpg",
    "description": "Hand-whiskered and subtly distressed denim jeans designed for an effortless streetwear edge and snug flexibility.",
    "badge": "Bestseller",
    "fit": "Slim Fit",
    "fabric": "Power-Stretch Denim",
    "code": "ABC-PNT-088",
    "inStock": true,
    "tags": [
      "Distressed Jeans",
      "Power Stretch",
      "Whiskered Denim",
      "Streetwear"
    ]
  },
  {
    "id": "ab-089",
    "slug": "resort-geometric-print-vacation-camp-collar-shirt-089",
    "name": "Resort Geometric Print Vacation Camp-Collar Shirt",
    "category": "Shirts",
    "categorySlug": "shirts",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2023-09-05_12-14-30_3184955215631515674_55023169382_1.jpg",
    "description": "Cuban-inspired lightweight printed shirt designed for breezy weekend relaxation.",
    "badge": "Trending",
    "fit": "Relaxed Fit",
    "fabric": "Silky Rayon Twill",
    "code": "ABC-SHR-089",
    "inStock": true,
    "tags": [
      "Resort Print",
      "Camp Collar",
      "Breezy"
    ]
  },
  {
    "id": "ab-090",
    "slug": "resort-geometric-print-vacation-camp-collar-shirt-090",
    "name": "Resort Geometric Print Vacation Camp-Collar Shirt",
    "category": "Shirts",
    "categorySlug": "shirts",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2023-09-05_12-14-30_3184955215799342668_55023169382_2.jpg",
    "description": "Cuban-inspired lightweight printed shirt designed for breezy weekend relaxation.",
    "badge": "Trending",
    "fit": "Relaxed Fit",
    "fabric": "Silky Rayon Twill",
    "code": "ABC-SHR-090",
    "inStock": true,
    "tags": [
      "Resort Print",
      "Camp Collar",
      "Breezy"
    ]
  },
  {
    "id": "ab-091",
    "slug": "resort-geometric-print-vacation-camp-collar-shirt-091",
    "name": "Resort Geometric Print Vacation Camp-Collar Shirt",
    "category": "Shirts",
    "categorySlug": "shirts",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2023-09-05_12-14-30_3184955215807667656_55023169382_3.jpg",
    "description": "Cuban-inspired lightweight printed shirt designed for breezy weekend relaxation.",
    "badge": "Trending",
    "fit": "Relaxed Fit",
    "fabric": "Silky Rayon Twill",
    "code": "ABC-SHR-091",
    "inStock": true,
    "tags": [
      "Resort Print",
      "Camp Collar",
      "Breezy"
    ]
  },
  {
    "id": "ab-092",
    "slug": "resort-geometric-print-vacation-camp-collar-shirt-092",
    "name": "Resort Geometric Print Vacation Camp-Collar Shirt",
    "category": "Shirts",
    "categorySlug": "shirts",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2023-09-05_13-09-44_3184983018816935339_55023169382.jpg",
    "description": "Cuban-inspired lightweight printed shirt designed for breezy weekend relaxation.",
    "badge": "Trending",
    "fit": "Relaxed Fit",
    "fabric": "Silky Rayon Twill",
    "code": "ABC-SHR-092",
    "inStock": true,
    "tags": [
      "Resort Print",
      "Camp Collar",
      "Breezy"
    ]
  },
  {
    "id": "ab-093",
    "slug": "buttercup-textured-shirt-cargo-jogger-ensemble-with-boots-093",
    "name": "Buttercup Textured Shirt & Cargo Jogger Ensemble with Boots",
    "category": "Outfits",
    "categorySlug": "outfits",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2023-09-10_18-37-41_3188771960582315469_55023169382.jpg",
    "description": "Rugged utility meets effortless charm in this curated shirt, cargo pants, and leather boot pairing.",
    "badge": "Model Lookbook",
    "fit": "Regular Fit",
    "fabric": "Textured Linen & Multi-Pocket Twill",
    "code": "ABC-OUTFIT-093",
    "inStock": true,
    "tags": [
      "Utility Cargo",
      "Boots Styling",
      "Complete Look",
      "Editorial"
    ]
  },
  {
    "id": "ab-094",
    "slug": "clean-minimal-oversized-boxy-tee-094",
    "name": "Clean Minimal Oversized Boxy Tee",
    "category": "T-Shirts",
    "categorySlug": "t-shirts",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2023-09-17_13-08-50_3193679870386594146_55023169382.jpg",
    "description": "Relaxed streetwear tee tailored with dropped shoulders and a crisp, pristine drape.",
    "badge": "Streetwear Edit",
    "fit": "Oversized",
    "fabric": "Heavyweight Combed Jersey",
    "code": "ABC-TSH-094",
    "inStock": true,
    "tags": [
      "Oversized Fit",
      "Boxy Cut",
      "Drop Shoulder",
      "Streetwear"
    ]
  },
  {
    "id": "ab-095",
    "slug": "urban-streetwear-graphic-tee-terracotta-trousers-ensemble-095",
    "name": "Urban Streetwear Graphic Tee & Terracotta Trousers Ensemble",
    "category": "Outfits",
    "categorySlug": "outfits",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2024-06-16_09-47-41_3391442408841720724_55023169382_1.jpg",
    "description": "A fashion-forward pairing blending casual graphic tee energy with sharp terracotta tailored trousers.",
    "badge": "Model Lookbook",
    "fit": "Relaxed Fit",
    "fabric": "Cotton Tee & Pleated Twill",
    "code": "ABC-OUTFIT-095",
    "inStock": true,
    "tags": [
      "Streetwear Look",
      "Terracotta",
      "Pleated Trousers",
      "Coordinated Set"
    ]
  },
  {
    "id": "ab-096",
    "slug": "urban-streetwear-graphic-tee-terracotta-trousers-ensemble-096",
    "name": "Urban Streetwear Graphic Tee & Terracotta Trousers Ensemble",
    "category": "Outfits",
    "categorySlug": "outfits",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2024-06-16_09-47-41_3391442408841814770_55023169382_3.jpg",
    "description": "A fashion-forward pairing blending casual graphic tee energy with sharp terracotta tailored trousers.",
    "badge": "Model Lookbook",
    "fit": "Relaxed Fit",
    "fabric": "Cotton Tee & Pleated Twill",
    "code": "ABC-OUTFIT-096",
    "inStock": true,
    "tags": [
      "Streetwear Look",
      "Terracotta",
      "Pleated Trousers",
      "Coordinated Set"
    ]
  },
  {
    "id": "ab-097",
    "slug": "urban-streetwear-graphic-tee-terracotta-trousers-ensemble-097",
    "name": "Urban Streetwear Graphic Tee & Terracotta Trousers Ensemble",
    "category": "Outfits",
    "categorySlug": "outfits",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2024-06-16_09-47-41_3391442408841841243_55023169382_2.jpg",
    "description": "A fashion-forward pairing blending casual graphic tee energy with sharp terracotta tailored trousers.",
    "badge": "Model Lookbook",
    "fit": "Relaxed Fit",
    "fabric": "Cotton Tee & Pleated Twill",
    "code": "ABC-OUTFIT-097",
    "inStock": true,
    "tags": [
      "Streetwear Look",
      "Terracotta",
      "Pleated Trousers",
      "Coordinated Set"
    ]
  },
  {
    "id": "ab-098",
    "slug": "urban-streetwear-graphic-tee-terracotta-trousers-ensemble-098",
    "name": "Urban Streetwear Graphic Tee & Terracotta Trousers Ensemble",
    "category": "Outfits",
    "categorySlug": "outfits",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2024-06-16_09-47-41_3391442408992905825_55023169382_4.jpg",
    "description": "A fashion-forward pairing blending casual graphic tee energy with sharp terracotta tailored trousers.",
    "badge": "Model Lookbook",
    "fit": "Relaxed Fit",
    "fabric": "Cotton Tee & Pleated Twill",
    "code": "ABC-OUTFIT-098",
    "inStock": true,
    "tags": [
      "Streetwear Look",
      "Terracotta",
      "Pleated Trousers",
      "Coordinated Set"
    ]
  },
  {
    "id": "ab-099",
    "slug": "authentic-heavyweight-stretch-denim-jeans-in-washed-cobalt-099",
    "name": "Authentic Heavyweight Stretch Denim Jeans in Washed Cobalt",
    "category": "Pants",
    "categorySlug": "pants",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2024-10-05_10-07-44_3471902605426708026_55023169382_1.jpg",
    "description": "Substantial authentic denim engineered for longevity, retaining its clean silhouette wash after wash.",
    "badge": "New Arrival",
    "fit": "Regular Fit",
    "fabric": "Heavyweight 12.5oz Denim",
    "code": "ABC-PNT-099",
    "inStock": true,
    "tags": [
      "Heavyweight Denim",
      "Classic Cut",
      "Durable Wash",
      "Essential Jeans"
    ]
  },
  {
    "id": "ab-100",
    "slug": "authentic-heavyweight-stretch-denim-jeans-in-charcoal-rinse-100",
    "name": "Authentic Heavyweight Stretch Denim Jeans in Charcoal Rinse",
    "category": "Pants",
    "categorySlug": "pants",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2024-10-05_10-07-44_3471902605435156489_55023169382_2.jpg",
    "description": "Substantial authentic denim engineered for longevity, retaining its clean silhouette wash after wash.",
    "badge": "New Arrival",
    "fit": "Regular Fit",
    "fabric": "Heavyweight 12.5oz Denim",
    "code": "ABC-PNT-100",
    "inStock": true,
    "tags": [
      "Heavyweight Denim",
      "Classic Cut",
      "Durable Wash",
      "Essential Jeans"
    ]
  },
  {
    "id": "ab-101",
    "slug": "authentic-heavyweight-stretch-denim-jeans-in-classic-indigo-101",
    "name": "Authentic Heavyweight Stretch Denim Jeans in Classic Indigo",
    "category": "Pants",
    "categorySlug": "pants",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2024-10-05_10-07-44_3471902605451727171_55023169382_3.jpg",
    "description": "Substantial authentic denim engineered for longevity, retaining its clean silhouette wash after wash.",
    "badge": "New Arrival",
    "fit": "Regular Fit",
    "fabric": "Heavyweight 12.5oz Denim",
    "code": "ABC-PNT-101",
    "inStock": true,
    "tags": [
      "Heavyweight Denim",
      "Classic Cut",
      "Durable Wash",
      "Essential Jeans"
    ]
  },
  {
    "id": "ab-102",
    "slug": "authentic-heavyweight-stretch-denim-jeans-in-deep-azure-102",
    "name": "Authentic Heavyweight Stretch Denim Jeans in Deep Azure",
    "category": "Pants",
    "categorySlug": "pants",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2024-10-05_10-07-44_3471902605594536782_55023169382_4.jpg",
    "description": "Substantial authentic denim engineered for longevity, retaining its clean silhouette wash after wash.",
    "badge": "New Arrival",
    "fit": "Regular Fit",
    "fabric": "Heavyweight 12.5oz Denim",
    "code": "ABC-PNT-102",
    "inStock": true,
    "tags": [
      "Heavyweight Denim",
      "Classic Cut",
      "Durable Wash",
      "Essential Jeans"
    ]
  },
  {
    "id": "ab-103",
    "slug": "retro-textured-knit-stripe-polo-tee-in-espresso-brown-103",
    "name": "Retro Textured Knit Stripe Polo Tee in Espresso Brown",
    "category": "T-Shirts",
    "categorySlug": "t-shirts",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2025-01-22_15-10-37_3551055606770934224_55023169382_4.jpg",
    "description": "Vintage-inspired vertical textured polo knit tailored for an effortlessly sharp weekend aesthetic.",
    "badge": "Trending",
    "fit": "Regular Fit",
    "fabric": "Textured Jacquard Cotton Knit",
    "code": "ABC-TSH-103",
    "inStock": true,
    "tags": [
      "Textured Knit",
      "Polo Collar",
      "Weekend Wear"
    ]
  },
  {
    "id": "ab-104",
    "slug": "retro-textured-knit-stripe-polo-tee-in-sage-olive-104",
    "name": "Retro Textured Knit Stripe Polo Tee in Sage Olive",
    "category": "T-Shirts",
    "categorySlug": "t-shirts",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2025-01-22_15-10-37_3551055606905124760_55023169382_1.jpg",
    "description": "Vintage-inspired vertical textured polo knit tailored for an effortlessly sharp weekend aesthetic.",
    "badge": "Bestseller",
    "fit": "Regular Fit",
    "fabric": "Textured Jacquard Cotton Knit",
    "code": "ABC-TSH-104",
    "inStock": true,
    "tags": [
      "Textured Knit",
      "Polo Collar",
      "Weekend Wear"
    ]
  },
  {
    "id": "ab-105",
    "slug": "retro-textured-knit-stripe-polo-tee-in-sky-cerulean-105",
    "name": "Retro Textured Knit Stripe Polo Tee in Sky Cerulean",
    "category": "T-Shirts",
    "categorySlug": "t-shirts",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2025-01-22_15-10-37_3551055606938770548_55023169382_6.jpg",
    "description": "Vintage-inspired vertical textured polo knit tailored for an effortlessly sharp weekend aesthetic.",
    "badge": "Trending",
    "fit": "Regular Fit",
    "fabric": "Textured Jacquard Cotton Knit",
    "code": "ABC-TSH-105",
    "inStock": true,
    "tags": [
      "Textured Knit",
      "Polo Collar",
      "Weekend Wear"
    ]
  },
  {
    "id": "ab-106",
    "slug": "retro-textured-knit-stripe-polo-tee-in-dusty-rose-106",
    "name": "Retro Textured Knit Stripe Polo Tee in Dusty Rose",
    "category": "T-Shirts",
    "categorySlug": "t-shirts",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2025-01-22_15-10-37_3551055606955484057_55023169382_3.jpg",
    "description": "Vintage-inspired vertical textured polo knit tailored for an effortlessly sharp weekend aesthetic.",
    "badge": "Bestseller",
    "fit": "Regular Fit",
    "fabric": "Textured Jacquard Cotton Knit",
    "code": "ABC-TSH-106",
    "inStock": true,
    "tags": [
      "Textured Knit",
      "Polo Collar",
      "Weekend Wear"
    ]
  },
  {
    "id": "ab-107",
    "slug": "retro-textured-knit-stripe-polo-tee-in-chalk-cream-107",
    "name": "Retro Textured Knit Stripe Polo Tee in Chalk Cream",
    "category": "T-Shirts",
    "categorySlug": "t-shirts",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2025-01-22_15-10-37_3551055606972237284_55023169382_5.jpg",
    "description": "Vintage-inspired vertical textured polo knit tailored for an effortlessly sharp weekend aesthetic.",
    "badge": "Trending",
    "fit": "Regular Fit",
    "fabric": "Textured Jacquard Cotton Knit",
    "code": "ABC-TSH-107",
    "inStock": true,
    "tags": [
      "Textured Knit",
      "Polo Collar",
      "Weekend Wear"
    ]
  },
  {
    "id": "ab-108",
    "slug": "retro-textured-knit-stripe-polo-tee-in-deep-plum-108",
    "name": "Retro Textured Knit Stripe Polo Tee in Deep Plum",
    "category": "T-Shirts",
    "categorySlug": "t-shirts",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2025-01-22_15-10-37_3551055606989116795_55023169382_2.jpg",
    "description": "Vintage-inspired vertical textured polo knit tailored for an effortlessly sharp weekend aesthetic.",
    "badge": "Bestseller",
    "fit": "Regular Fit",
    "fabric": "Textured Jacquard Cotton Knit",
    "code": "ABC-TSH-108",
    "inStock": true,
    "tags": [
      "Textured Knit",
      "Polo Collar",
      "Weekend Wear"
    ]
  },
  {
    "id": "ab-109",
    "slug": "sun-faded-ombre-dip-dyed-linen-casual-shirt-109",
    "name": "Sun-Faded Ombre Dip-Dyed Linen Casual Shirt",
    "category": "Shirts",
    "categorySlug": "shirts",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2026-06-11_13-02-59_3917002681814075810_4277973606_1.jpg",
    "description": "Gradient dip-dyed linen shirt delivering effortless coastal vibes and supreme airflow.",
    "badge": "Model Feature",
    "fit": "Relaxed Fit",
    "fabric": "Garment-Washed Ombre Linen",
    "code": "ABC-SHR-109",
    "inStock": true,
    "tags": [
      "Ombre Dye",
      "Pure Linen",
      "Coastal Cool"
    ]
  },
  {
    "id": "ab-110",
    "slug": "sun-faded-ombre-dip-dyed-linen-casual-shirt-110",
    "name": "Sun-Faded Ombre Dip-Dyed Linen Casual Shirt",
    "category": "Shirts",
    "categorySlug": "shirts",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2026-06-11_13-02-59_3917002691544853477_4277973606_2.jpg",
    "description": "Gradient dip-dyed linen shirt delivering effortless coastal vibes and supreme airflow.",
    "badge": "Model Feature",
    "fit": "Relaxed Fit",
    "fabric": "Garment-Washed Ombre Linen",
    "code": "ABC-SHR-110",
    "inStock": true,
    "tags": [
      "Ombre Dye",
      "Pure Linen",
      "Coastal Cool"
    ]
  },
  {
    "id": "ab-111",
    "slug": "sun-faded-ombre-dip-dyed-linen-casual-shirt-111",
    "name": "Sun-Faded Ombre Dip-Dyed Linen Casual Shirt",
    "category": "Shirts",
    "categorySlug": "shirts",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2026-06-11_13-02-59_3917002695604811673_4277973606_3.jpg",
    "description": "Gradient dip-dyed linen shirt delivering effortless coastal vibes and supreme airflow.",
    "badge": "Model Feature",
    "fit": "Relaxed Fit",
    "fabric": "Garment-Washed Ombre Linen",
    "code": "ABC-SHR-111",
    "inStock": true,
    "tags": [
      "Ombre Dye",
      "Pure Linen",
      "Coastal Cool"
    ]
  },
  {
    "id": "ab-112",
    "slug": "sun-faded-ombre-dip-dyed-linen-casual-shirt-112",
    "name": "Sun-Faded Ombre Dip-Dyed Linen Casual Shirt",
    "category": "Shirts",
    "categorySlug": "shirts",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2026-06-11_13-02-59_3917002700998670694_4277973606_4.jpg",
    "description": "Gradient dip-dyed linen shirt delivering effortless coastal vibes and supreme airflow.",
    "badge": "Model Feature",
    "fit": "Relaxed Fit",
    "fabric": "Garment-Washed Ombre Linen",
    "code": "ABC-SHR-112",
    "inStock": true,
    "tags": [
      "Ombre Dye",
      "Pure Linen",
      "Coastal Cool"
    ]
  },
  {
    "id": "ab-113",
    "slug": "textured-linen-button-down-tonal-drawstring-trousers-113",
    "name": "Textured Linen Button-Down & Tonal Drawstring Trousers",
    "category": "Outfits",
    "categorySlug": "outfits",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2026-07-29_19-46-58_3951992887380927302_55023169382.jpg",
    "description": "A coordinated ensemble blending comfort with sharp tailoring for sunlit events.",
    "badge": "Coordinated Set",
    "fit": "Regular Fit",
    "fabric": "Linen Shirt & Cotton Trousers",
    "code": "ABC-OUTFIT-113",
    "inStock": true,
    "tags": [
      "Coordinated Set",
      "Pre-Styled",
      "Smart Casual",
      "Full Outfit"
    ]
  },
  {
    "id": "ab-114",
    "slug": "sky-blue-oxford-shirt-sand-beige-pleated-bottoms-114",
    "name": "Sky Blue Oxford Shirt & Sand Beige Pleated Bottoms",
    "category": "Outfits",
    "categorySlug": "outfits",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2026-07-30_18-29-47_3952678560119236080_55023169382.jpg",
    "description": "Effortlessly polished pairing of crisp blue shirting and relaxed neutral chinos.",
    "badge": "Coordinated Set",
    "fit": "Regular Fit",
    "fabric": "Linen Shirt & Cotton Trousers",
    "code": "ABC-OUTFIT-114",
    "inStock": true,
    "tags": [
      "Coordinated Set",
      "Pre-Styled",
      "Smart Casual",
      "Full Outfit"
    ]
  },
  {
    "id": "ab-115",
    "slug": "burberry-striped-shirt-tailored-obsidian-trousers-115",
    "name": "Burberry Striped Shirt & Tailored Obsidian Trousers",
    "category": "Outfits",
    "categorySlug": "outfits",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2026-07-31_17-48-50_3953384454922477528_55023169382.jpg",
    "description": "A sophisticated duo balancing heritage stripes with sleek dark trousers.",
    "badge": "Coordinated Set",
    "fit": "Regular Fit",
    "fabric": "Linen Shirt & Cotton Trousers",
    "code": "ABC-OUTFIT-115",
    "inStock": true,
    "tags": [
      "Coordinated Set",
      "Pre-Styled",
      "Smart Casual",
      "Full Outfit"
    ]
  },
  {
    "id": "ab-116",
    "slug": "olive-geometric-printed-shirt-crisp-white-chinos-116",
    "name": "Olive Geometric Printed Shirt & Crisp White Chinos",
    "category": "Outfits",
    "categorySlug": "outfits",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2026-08-02_17-25-55_3954816174486110051_55023169382.jpg",
    "description": "Sharp modern contrast blending vibrant olive motifs with clean summer whites.",
    "badge": "Coordinated Set",
    "fit": "Regular Fit",
    "fabric": "Linen Shirt & Cotton Trousers",
    "code": "ABC-OUTFIT-116",
    "inStock": true,
    "tags": [
      "Coordinated Set",
      "Pre-Styled",
      "Smart Casual",
      "Full Outfit"
    ]
  },
  {
    "id": "ab-117",
    "slug": "pastel-coral-linen-shirt-caramel-tailored-trousers-117",
    "name": "Pastel Coral Linen Shirt & Caramel Tailored Trousers",
    "category": "Outfits",
    "categorySlug": "outfits",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2026-08-03_19-37-12_3955613230045697812_55023169382.jpg",
    "description": "Harmonious summer hues uniting a breathable linen shirt with sleek bottoms.",
    "badge": "Coordinated Set",
    "fit": "Regular Fit",
    "fabric": "Linen Shirt & Cotton Trousers",
    "code": "ABC-OUTFIT-117",
    "inStock": true,
    "tags": [
      "Coordinated Set",
      "Pre-Styled",
      "Smart Casual",
      "Full Outfit"
    ]
  },
  {
    "id": "ab-118",
    "slug": "forest-green-casual-shirt-khaki-slim-trousers-118",
    "name": "Forest Green Casual Shirt & Khaki Slim Trousers",
    "category": "Outfits",
    "categorySlug": "outfits",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2026-08-06_11-48-40_3957548519995537850_55023169382.jpg",
    "description": "Earth-toned coordinated set offering rugged refinement and sharp lines.",
    "badge": "Coordinated Set",
    "fit": "Regular Fit",
    "fabric": "Linen Shirt & Cotton Trousers",
    "code": "ABC-OUTFIT-118",
    "inStock": true,
    "tags": [
      "Coordinated Set",
      "Pre-Styled",
      "Smart Casual",
      "Full Outfit"
    ]
  },
  {
    "id": "ab-119",
    "slug": "navy-windowpane-shirt-cream-linen-trousers-119",
    "name": "Navy Windowpane Shirt & Cream Linen Trousers",
    "category": "Outfits",
    "categorySlug": "outfits",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2026-08-07_20-31-15_3958539571401399904_55023169382.jpg",
    "description": "Timeless nautical elegance pairing structured checks with lightweight linen.",
    "badge": "Coordinated Set",
    "fit": "Regular Fit",
    "fabric": "Linen Shirt & Cotton Trousers",
    "code": "ABC-OUTFIT-119",
    "inStock": true,
    "tags": [
      "Coordinated Set",
      "Pre-Styled",
      "Smart Casual",
      "Full Outfit"
    ]
  },
  {
    "id": "ab-120",
    "slug": "mustard-slub-shirt-charcoal-slim-chinos-120",
    "name": "Mustard Slub Shirt & Charcoal Slim Chinos",
    "category": "Outfits",
    "categorySlug": "outfits",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2026-08-08_18-20-45_3959198668450875358_55023169382.jpg",
    "description": "Warm vibrant tones balanced with versatile charcoal trousers for evening dining.",
    "badge": "Coordinated Set",
    "fit": "Regular Fit",
    "fabric": "Linen Shirt & Cotton Trousers",
    "code": "ABC-OUTFIT-120",
    "inStock": true,
    "tags": [
      "Coordinated Set",
      "Pre-Styled",
      "Smart Casual",
      "Full Outfit"
    ]
  },
  {
    "id": "ab-121",
    "slug": "textured-linen-button-down-tonal-drawstring-trousers-121",
    "name": "Textured Linen Button-Down & Tonal Drawstring Trousers",
    "category": "Outfits",
    "categorySlug": "outfits",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2026-08-09_20-08-29_3959976301389768157_55023169382.jpg",
    "description": "A coordinated ensemble blending comfort with sharp tailoring for sunlit events.",
    "badge": "Coordinated Set",
    "fit": "Regular Fit",
    "fabric": "Linen Shirt & Cotton Trousers",
    "code": "ABC-OUTFIT-121",
    "inStock": true,
    "tags": [
      "Coordinated Set",
      "Pre-Styled",
      "Smart Casual",
      "Full Outfit"
    ]
  },
  {
    "id": "ab-122",
    "slug": "sky-blue-oxford-shirt-sand-beige-pleated-bottoms-122",
    "name": "Sky Blue Oxford Shirt & Sand Beige Pleated Bottoms",
    "category": "Outfits",
    "categorySlug": "outfits",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2026-08-10_19-04-24_3960670156508967997_55023169382.jpg",
    "description": "Effortlessly polished pairing of crisp blue shirting and relaxed neutral chinos.",
    "badge": "Coordinated Set",
    "fit": "Regular Fit",
    "fabric": "Linen Shirt & Cotton Trousers",
    "code": "ABC-OUTFIT-122",
    "inStock": true,
    "tags": [
      "Coordinated Set",
      "Pre-Styled",
      "Smart Casual",
      "Full Outfit"
    ]
  },
  {
    "id": "ab-123",
    "slug": "burberry-striped-shirt-tailored-obsidian-trousers-123",
    "name": "Burberry Striped Shirt & Tailored Obsidian Trousers",
    "category": "Outfits",
    "categorySlug": "outfits",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2026-08-13_17-38-25_3962801064611538159_55023169382.jpg",
    "description": "A sophisticated duo balancing heritage stripes with sleek dark trousers.",
    "badge": "Coordinated Set",
    "fit": "Regular Fit",
    "fabric": "Linen Shirt & Cotton Trousers",
    "code": "ABC-OUTFIT-123",
    "inStock": true,
    "tags": [
      "Coordinated Set",
      "Pre-Styled",
      "Smart Casual",
      "Full Outfit"
    ]
  },
  {
    "id": "ab-124",
    "slug": "olive-geometric-printed-shirt-crisp-white-chinos-124",
    "name": "Olive Geometric Printed Shirt & Crisp White Chinos",
    "category": "Outfits",
    "categorySlug": "outfits",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2026-08-15_19-47-00_3964315863010861953_55023169382.jpg",
    "description": "Sharp modern contrast blending vibrant olive motifs with clean summer whites.",
    "badge": "Coordinated Set",
    "fit": "Regular Fit",
    "fabric": "Linen Shirt & Cotton Trousers",
    "code": "ABC-OUTFIT-124",
    "inStock": true,
    "tags": [
      "Coordinated Set",
      "Pre-Styled",
      "Smart Casual",
      "Full Outfit"
    ]
  },
  {
    "id": "ab-125",
    "slug": "pastel-coral-linen-shirt-caramel-tailored-trousers-125",
    "name": "Pastel Coral Linen Shirt & Caramel Tailored Trousers",
    "category": "Outfits",
    "categorySlug": "outfits",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2026-08-17_17-17-39_3965690809633104302_55023169382.jpg",
    "description": "Harmonious summer hues uniting a breathable linen shirt with sleek bottoms.",
    "badge": "Coordinated Set",
    "fit": "Regular Fit",
    "fabric": "Linen Shirt & Cotton Trousers",
    "code": "ABC-OUTFIT-125",
    "inStock": true,
    "tags": [
      "Coordinated Set",
      "Pre-Styled",
      "Smart Casual",
      "Full Outfit"
    ]
  },
  {
    "id": "ab-126",
    "slug": "forest-green-casual-shirt-khaki-slim-trousers-126",
    "name": "Forest Green Casual Shirt & Khaki Slim Trousers",
    "category": "Outfits",
    "categorySlug": "outfits",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2026-08-20_18-29-26_3967899950791382005_55023169382.jpg",
    "description": "Earth-toned coordinated set offering rugged refinement and sharp lines.",
    "badge": "Coordinated Set",
    "fit": "Regular Fit",
    "fabric": "Linen Shirt & Cotton Trousers",
    "code": "ABC-OUTFIT-126",
    "inStock": true,
    "tags": [
      "Coordinated Set",
      "Pre-Styled",
      "Smart Casual",
      "Full Outfit"
    ]
  },
  {
    "id": "ab-127",
    "slug": "navy-windowpane-shirt-cream-linen-trousers-127",
    "name": "Navy Windowpane Shirt & Cream Linen Trousers",
    "category": "Outfits",
    "categorySlug": "outfits",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2026-08-21_17-42-54_3968599653696374766_55023169382.jpg",
    "description": "Timeless nautical elegance pairing structured checks with lightweight linen.",
    "badge": "Coordinated Set",
    "fit": "Regular Fit",
    "fabric": "Linen Shirt & Cotton Trousers",
    "code": "ABC-OUTFIT-127",
    "inStock": true,
    "tags": [
      "Coordinated Set",
      "Pre-Styled",
      "Smart Casual",
      "Full Outfit"
    ]
  },
  {
    "id": "ab-128",
    "slug": "mustard-slub-shirt-charcoal-slim-chinos-128",
    "name": "Mustard Slub Shirt & Charcoal Slim Chinos",
    "category": "Outfits",
    "categorySlug": "outfits",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2026-08-27_18-16-18_3972968012076456319_55023169382.jpg",
    "description": "Warm vibrant tones balanced with versatile charcoal trousers for evening dining.",
    "badge": "Coordinated Set",
    "fit": "Regular Fit",
    "fabric": "Linen Shirt & Cotton Trousers",
    "code": "ABC-OUTFIT-128",
    "inStock": true,
    "tags": [
      "Coordinated Set",
      "Pre-Styled",
      "Smart Casual",
      "Full Outfit"
    ]
  },
  {
    "id": "ab-129",
    "slug": "textured-linen-button-down-tonal-drawstring-trousers-129",
    "name": "Textured Linen Button-Down & Tonal Drawstring Trousers",
    "category": "Outfits",
    "categorySlug": "outfits",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2026-08-28_19-15-24_3973717665365057987_55023169382.jpg",
    "description": "A coordinated ensemble blending comfort with sharp tailoring for sunlit events.",
    "badge": "Coordinated Set",
    "fit": "Regular Fit",
    "fabric": "Linen Shirt & Cotton Trousers",
    "code": "ABC-OUTFIT-129",
    "inStock": true,
    "tags": [
      "Coordinated Set",
      "Pre-Styled",
      "Smart Casual",
      "Full Outfit"
    ]
  },
  {
    "id": "ab-130",
    "slug": "sky-blue-oxford-shirt-sand-beige-pleated-bottoms-130",
    "name": "Sky Blue Oxford Shirt & Sand Beige Pleated Bottoms",
    "category": "Outfits",
    "categorySlug": "outfits",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2026-08-29_18-21-07_3974420418457349018_55023169382.jpg",
    "description": "Effortlessly polished pairing of crisp blue shirting and relaxed neutral chinos.",
    "badge": "Coordinated Set",
    "fit": "Regular Fit",
    "fabric": "Linen Shirt & Cotton Trousers",
    "code": "ABC-OUTFIT-130",
    "inStock": true,
    "tags": [
      "Coordinated Set",
      "Pre-Styled",
      "Smart Casual",
      "Full Outfit"
    ]
  },
  {
    "id": "ab-131",
    "slug": "burberry-striped-shirt-tailored-obsidian-trousers-131",
    "name": "Burberry Striped Shirt & Tailored Obsidian Trousers",
    "category": "Outfits",
    "categorySlug": "outfits",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2026-09-02_17-31-11_3977292178447603306_55023169382.jpg",
    "description": "A sophisticated duo balancing heritage stripes with sleek dark trousers.",
    "badge": "Coordinated Set",
    "fit": "Regular Fit",
    "fabric": "Linen Shirt & Cotton Trousers",
    "code": "ABC-OUTFIT-131",
    "inStock": true,
    "tags": [
      "Coordinated Set",
      "Pre-Styled",
      "Smart Casual",
      "Full Outfit"
    ]
  },
  {
    "id": "ab-132",
    "slug": "olive-geometric-printed-shirt-crisp-white-chinos-132",
    "name": "Olive Geometric Printed Shirt & Crisp White Chinos",
    "category": "Outfits",
    "categorySlug": "outfits",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2026-09-03_18-19-36_3978040631955822314_55023169382.jpg",
    "description": "Sharp modern contrast blending vibrant olive motifs with clean summer whites.",
    "badge": "Coordinated Set",
    "fit": "Regular Fit",
    "fabric": "Linen Shirt & Cotton Trousers",
    "code": "ABC-OUTFIT-132",
    "inStock": true,
    "tags": [
      "Coordinated Set",
      "Pre-Styled",
      "Smart Casual",
      "Full Outfit"
    ]
  },
  {
    "id": "ab-133",
    "slug": "pastel-coral-linen-shirt-caramel-tailored-trousers-133",
    "name": "Pastel Coral Linen Shirt & Caramel Tailored Trousers",
    "category": "Outfits",
    "categorySlug": "outfits",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2026-09-05_18-44-50_3979504017700926320_55023169382.jpg",
    "description": "Harmonious summer hues uniting a breathable linen shirt with sleek bottoms.",
    "badge": "Coordinated Set",
    "fit": "Regular Fit",
    "fabric": "Linen Shirt & Cotton Trousers",
    "code": "ABC-OUTFIT-133",
    "inStock": true,
    "tags": [
      "Coordinated Set",
      "Pre-Styled",
      "Smart Casual",
      "Full Outfit"
    ]
  },
  {
    "id": "ab-134",
    "slug": "coordinated-linen-shirt-trousers-motion-showcase-134",
    "name": "Coordinated Linen Shirt & Trousers Motion Showcase",
    "category": "Outfits",
    "categorySlug": "outfits",
    "mediaType": "video",
    "mediaUrl": "/catalog/ab_collections_kavoor_2026-09-07_21-09-14_3981022948528008521_55023169382.mp4",
    "description": "A coordinated ensemble in dynamic motion, showcasing natural linen fabric drape and effortless smart-casual charm.",
    "badge": "Motion Reel",
    "fit": "Slim Fit",
    "fabric": "Pure Linen & Cotton Twill",
    "code": "ABC-OUTFIT-134",
    "inStock": true,
    "tags": [
      "Motion Reel",
      "Ensemble",
      "Summer Edit",
      "Model Styling"
    ]
  },
  {
    "id": "ab-135",
    "slug": "editorial-menswear-layering-styling-lookbook-reel-135",
    "name": "Editorial Menswear Layering & Styling Lookbook Reel",
    "category": "Outfits",
    "categorySlug": "outfits",
    "mediaType": "video",
    "mediaUrl": "/catalog/ab_collections_kavoor_2026-09-13_17-55-41_3985270753590532471_45788700626.mp4",
    "description": "Dynamic motion showcase blending relaxed streetwear with clean tailoring for the modern Indian wardrobe.",
    "badge": "Motion Reel",
    "fit": "Relaxed Fit",
    "fabric": "Curated Fabric Blends",
    "code": "ABC-OUTFIT-135",
    "inStock": true,
    "tags": [
      "Motion Reel",
      "Lookbook",
      "Trending",
      "Coordinated Set"
    ]
  },
  {
    "id": "ab-136",
    "slug": "mustard-slub-shirt-charcoal-slim-chinos-136",
    "name": "Mustard Slub Shirt & Charcoal Slim Chinos",
    "category": "Outfits",
    "categorySlug": "outfits",
    "mediaType": "image",
    "mediaUrl": "/catalog/ab_collections_kavoor_2026-09-15_20-11-53_3986794222359220513_55023169382.jpg",
    "description": "Warm vibrant tones balanced with versatile charcoal trousers for evening dining.",
    "badge": "Coordinated Set",
    "fit": "Regular Fit",
    "fabric": "Linen Shirt & Cotton Trousers",
    "code": "ABC-OUTFIT-136",
    "inStock": true,
    "tags": [
      "Coordinated Set",
      "Pre-Styled",
      "Smart Casual",
      "Full Outfit"
    ]
  }
];

export const catalogStats = {
  total: 136,
  tShirts: 17,
  shirts: 66,
  pants: 22,
  outfits: 31,
  videos: 2,
  images: 134,
};
