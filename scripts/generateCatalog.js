const fs = require('fs');
const path = require('path');

const catalogDir = path.join(__dirname, '../public/catalog');
const files = fs.readdirSync(catalogDir).sort();

const catalogItems = files.map((file, idx) => {
  const ext = path.extname(file).toLowerCase();
  const isVideo = ext === '.mp4';
  const num = String(idx + 1).padStart(3, '0');
  const id = `ab-${num}`;

  // Classification logic
  let category = 'Shirts';
  let categorySlug = 'shirts';
  let fit = 'Regular Fit';
  let badge = undefined;
  let name = '';
  let description = '';
  let fabric = '100% Premium Cotton';
  let tags = [];

  const isTee =
    file.includes('2022-09-10') ||
    file.includes('2022-10-07') ||
    file.includes('2023-01-03') ||
    file.includes('2023-01-12') ||
    file.includes('2025-01-22') ||
    file.includes('2023-09-17');

  const isOutfit =
    isVideo ||
    file.includes('2022-08-22_20-47-12') ||
    file.includes('2022-08-22_20-48-10') ||
    file.includes('2022-08-26_00-01-24') ||
    file.includes('2022-08-30_13-27-39') ||
    file.includes('2022-08-30_21-35-17') ||
    file.includes('2022-09-09_11-01-19') ||
    file.includes('2022-09-29_16-42') ||
    file.includes('2022-10-18_22-36-00') ||
    file.includes('2022-10-19_17-03') ||
    file.includes('2023-03-18') ||
    file.includes('2023-07-06') ||
    file.includes('2023-08-07') ||
    file.includes('2023-08-21') ||
    file.includes('2023-09-10') ||
    file.includes('2024-06-16') ||
    file.includes('2024-10-05') ||
    file.includes('2026-07-29') ||
    file.includes('2026-07-30') ||
    file.includes('2026-07-31') ||
    file.includes('2026-08-02') ||
    file.includes('2026-08-03') ||
    file.includes('2026-08-06') ||
    file.includes('2026-08-07') ||
    file.includes('2026-08-08') ||
    file.includes('2026-08-09') ||
    file.includes('2026-08-10') ||
    file.includes('2026-08-13') ||
    file.includes('2026-08-15') ||
    file.includes('2026-08-17') ||
    file.includes('2026-08-20') ||
    file.includes('2026-08-21') ||
    file.includes('2026-08-27') ||
    file.includes('2026-08-28') ||
    file.includes('2026-08-29') ||
    file.includes('2026-09-02') ||
    file.includes('2026-09-03') ||
    file.includes('2026-09-05') ||
    file.includes('2026-09-15');

  if (isTee) {
    category = 'T-Shirts';
    categorySlug = 't-shirts';
  } else if (isOutfit) {
    category = 'Outfits';
    categorySlug = 'outfits';
  } else {
    category = 'Shirts';
    categorySlug = 'shirts';
  }

  // Specific content generator based on file features
  if (isVideo) {
    badge = 'Reel Showcase';
    if (file.includes('2022-11-17')) {
      name = 'Flagship Store Garment Showcase Reel';
      description = 'Dynamic showcase highlighting seasonal casual staples, tailored silhouettes, and in-store menswear.';
      fabric = 'Curated Fabric Selection';
      fit = 'Regular Fit';
      tags = ['Video Reel', 'Store Walkthrough', 'Trending'];
    } else if (file.includes('2026-09-07')) {
      name = 'Coordinated Linen & Trouser Motion Showcase';
      description = 'A coordinated ensemble in dynamic motion, showcasing natural fabric drape and effortless smart-casual charm.';
      fabric = 'Pure Linen & Cotton Twill';
      fit = 'Slim Fit';
      tags = ['Motion Reel', 'Ensemble', 'Summer Edit'];
    } else {
      name = 'New Season Wardrobe Styling Motion Reel';
      description = 'Editorial motion showcase blending relaxed streetwear with clean tailoring for the modern Indian wardrobe.';
      fabric = 'Premium Woven Cottons';
      fit = 'Relaxed Fit';
      tags = ['Motion Reel', 'New Season', 'Style Inspo'];
    }
  } else if (category === 'T-Shirts') {
    if (file.includes('2025-01-22')) {
      fit = 'Regular Fit';
      fabric = 'Textured Jacquard Cotton Knit';
      badge = idx % 2 === 0 ? 'Trending' : 'Bestseller';
      const colors = ['Espresso Brown', 'Sage Olive', 'Sky Cerulean', 'Dusty Rose', 'Chalk Cream', 'Deep Plum'];
      const c = colors[idx % colors.length];
      name = `Retro Textured Knit Stripe Polo Tee in ${c}`;
      description = 'Vintage-inspired vertical textured polo knit for an effortlessly sharp weekend aesthetic.';
      tags = ['Textured Knit', 'Polo Collar', 'Weekend Wear'];
    } else if (file.includes('2022-09-10')) {
      fit = 'Regular Fit';
      fabric = 'Soft-Washed Combed Cotton';
      badge = 'Bestseller';
      name = 'Minimalist Graphic Crewneck Tee';
      description = 'Relaxed fit tee with a clean, versatile look and ultra-soft breathable feel.';
      tags = ['Everyday Tee', 'Graphic Detail', 'Breathable'];
    } else if (file.includes('2022-10-07')) {
      fit = 'Slim Fit';
      fabric = 'Intarsia Stretch Knit';
      badge = 'New';
      name = 'Textured Mock-Neck Fine Knit Tee';
      description = 'Contemporary high-neck knit silhouette with geometric intarsia detail for elevated layering.';
      tags = ['Mock Neck', 'Fine Knit', 'Smart Casual'];
    } else if (file.includes('2023-09-17')) {
      fit = 'Oversized';
      fabric = 'Heavyweight Combed Jersey';
      badge = 'Streetwear Edit';
      name = 'Clean Minimal Oversized Boxy Tee';
      description = 'Relaxed streetwear tee tailored with dropped shoulders and a crisp, pristine drape.';
      tags = ['Oversized Fit', 'Boxy Cut', 'Drop Shoulder'];
    } else {
      fit = 'Regular Fit';
      fabric = '100% Breathable Cotton';
      name = 'Urban Essential Solid Crew Tee';
      description = 'Relaxed fit tee with a clean, versatile look crafted for effortless daily comfort.';
      tags = ['Essential', 'All-Day Wear', 'Soft Touch'];
    }
  } else if (category === 'Shirts') {
    if (file.includes('2022-08-22') || file.includes('2022-08-25')) {
      fit = 'Regular Fit';
      fabric = 'Heavy-Duty Cotton Twill';
      badge = 'Bestseller';
      name = 'Dual Tactical Pocket Utility Shirt';
      description = 'Structured button-down featuring twin flap chest pockets and rugged modern detailing.';
      tags = ['Utility', 'Cargo Pockets', 'Durable Twill'];
    } else if (file.includes('2022-08-26')) {
      fit = 'Relaxed Fit';
      fabric = 'Combed Cotton Poplin';
      badge = 'New Arrival';
      name = 'Tailored Windowpane Grid Check Shirt';
      description = 'Classic button-down crafted for timeless sophistication and polished ease.';
      tags = ['Grid Check', 'Button-Down', 'Crisp Cotton'];
    } else if (file.includes('2022-09-25')) {
      fit = 'Slim Fit';
      fabric = 'Soft-Finish Cotton Sateen';
      badge = 'Trending';
      name = 'Pastel Botanical Print Casual Shirt';
      description = 'Artful floral motif tailored in breathable cotton for subtle statement styling.';
      tags = ['Floral Print', 'Resort Casual', 'Slim Silhouette'];
    } else if (file.includes('2022-10-19')) {
      fit = 'Slim Fit';
      fabric = 'Striped Oxford Weave';
      badge = 'Signature Cut';
      name = 'Vertical Block Striped Oxford Shirt';
      description = 'Contrasting vertical stripes create an elongating profile with pristine boardroom appeal.';
      tags = ['Vertical Stripe', 'Oxford Cotton', 'Sharp Tailoring'];
    } else if (file.includes('2022-11-16')) {
      fit = 'Slim Fit';
      fabric = 'Tonal Jacquard Cotton';
      badge = 'Evening Edit';
      name = 'Monochrome Micro-Pattern Jacquard Shirt';
      description = 'Understated jacquard weave adding tactile depth and rich luster for evening occasions.';
      tags = ['Jacquard', 'Lustrous', 'Evening'];
    } else if (file.includes('2022-11-19') || file.includes('2022-11-29')) {
      fit = 'Slim Fit';
      fabric = 'Fine Yarn-Dyed Cotton';
      name = 'Pinstripe Smart Casual Button-Down';
      description = 'Clean fine stripes bring an immaculate tailored aesthetic to weekday wardrobes.';
      tags = ['Pinstripe', 'Office Casual', 'Breathable'];
    } else if (file.includes('2022-11-25')) {
      fit = 'Regular Fit';
      fabric = 'Brushed Cotton Flannel';
      badge = 'Bestseller';
      name = 'Heritage Lumberjack Plaid Flap Shirt';
      description = 'Warm brushed cotton plaid featuring double utility chest flaps for rugged charm.';
      tags = ['Plaid Flannel', 'Twin Pockets', 'Autumn Staple'];
    } else if (file.includes('2022-11-26')) {
      fit = 'Regular Fit';
      fabric = 'Garment-Dyed Oxford Cotton';
      badge = 'Essential';
      name = 'Garment-Dyed Classic Oxford Button-Down';
      description = 'Classic button-down crafted for timeless sophistication in versatile seasonal tones.';
      tags = ['Garment Dyed', 'Oxford Cotton', 'Timeless'];
    } else if (file.includes('2022-11-28')) {
      fit = 'Regular Fit';
      fabric = 'High-Count Tartan Poplin';
      name = 'Highland Check Point-Collar Shirt';
      description = 'Refined tartan checked shirt tailored with a neat point collar and crisp drape.';
      tags = ['Tartan Check', 'Smart Casual', 'Point Collar'];
    } else if (file.includes('2023-01-18')) {
      fit = 'Slim Fit';
      fabric = 'Digital Printed Sateen';
      badge = 'Artisan Series';
      name = 'Artisanal Abstract Printed Shirt';
      description = 'Dynamic monochrome and vibrant prints tailored for fashionable summer styling.';
      tags = ['Abstract Print', 'Digital Motif', 'Expressive'];
    } else if (file.includes('2023-03-20')) {
      fit = 'Slim Fit';
      fabric = 'Breathable Slub Linen-Cotton';
      badge = 'Summer Essential';
      name = 'Solid Slub Linen Resort Shirt';
      description = 'Lightweight slub linen woven in fresh vibrant pastels for sunlit comfort.';
      tags = ['Slub Linen', 'Resort Wear', 'Breathable'];
    } else if (file.includes('2023-05-23')) {
      fit = 'Slim Fit';
      fabric = 'Combed Cotton Sateen';
      name = 'Mandala Geometric Swirl Print Shirt';
      description = 'Intricate kaleidoscope motifs create a vibrant, modern touch for celebratory outings.';
      tags = ['Mandala Print', 'Festive Casual', 'Soft Drape'];
    } else if (file.includes('2023-09-05')) {
      fit = 'Relaxed Fit';
      fabric = 'Silky Rayon Twill';
      badge = 'Trending';
      name = 'Resort Geometric Print Vacation Shirt';
      description = 'Cuban-inspired lightweight printed shirt designed for breezy weekend relaxation.';
      tags = ['Resort Print', 'Camp Collar', 'Breezy'];
    } else if (file.includes('2026-06-11')) {
      fit = 'Relaxed Fit';
      fabric = 'Garment-Washed Ombre Linen';
      badge = 'Model Feature';
      name = 'Sun-Faded Ombre Linen Casual Shirt';
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
    // Full Outfits
    fit = 'Regular Fit';
    if (file.includes('2026-07') || file.includes('2026-08') || file.includes('2026-09')) {
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
      tags = ['Coordinated Set', 'Pre-Styled', 'Smart Casual'];
    } else if (file.includes('2024-06-16')) {
      badge = 'Model Lookbook';
      fit = 'Relaxed Fit';
      fabric = 'Cotton Tee & Pleated Twill';
      name = 'Urban Streetwear Graphic Tee & Terracotta Trousers';
      description = 'A coordinated ensemble blending comfort with sharp tailoring in warm terracotta tones.';
      tags = ['Streetwear Look', 'Terracotta', 'Pleated Trousers'];
    } else if (file.includes('2023-09-10')) {
      badge = 'Model Lookbook';
      fit = 'Regular Fit';
      fabric = 'Textured Linen & Multi-Pocket Twill';
      name = 'Buttercup Textured Shirt & Cargo Jogger Ensemble';
      description = 'Rugged utility meets effortless charm in this curated shirt, cargo pants, and boots look.';
      tags = ['Utility Cargo', 'Boots Styling', 'Complete Look'];
    } else if (file.includes('2022-08-26_00-01-24')) {
      badge = 'Outerwear';
      fit = 'Regular Fit';
      fabric = 'Acid-Wash Denim';
      name = 'Vintage Acid-Wash Denim Jacket & Jeans Pairing';
      description = 'Classic 90s acid-wash trucker silhouette matched with durable denim for iconic layering.';
      tags = ['Denim Jacket', 'Acid Wash', 'Rugged Layer'];
    } else if (file.includes('2022-08-22_20-47-12') || file.includes('2022-08-30_13-27-39')) {
      badge = 'Bottomwear Palette';
      fit = 'Slim Fit';
      fabric = 'Stretch Cotton & Linen';
      name = 'Multi-Pocket Tactical Cargo & Linen Trouser Collection';
      description = 'Essential bottomwear options engineered for all-day mobility and immaculate drape.';
      tags = ['Cargo Pants', 'Linen Trousers', 'Bottomwear Edit'];
    } else if (file.includes('2022-10-18_22-36-00')) {
      badge = 'Festive Showcase';
      fit = 'Regular Fit';
      fabric = 'Multi-Garment Selection';
      name = 'Festive Menswear Curated Wardrobe Campaign';
      description = 'A complete festival-ready ensemble showcasing our finest shirts and tailored trousers.';
      tags = ['Festive', 'Shirt & Pant Combo', 'AB Kavoor Special'];
    } else if (file.includes('2022-10-19_17-03') || file.includes('2023-03-18') || file.includes('2023-07-06') || file.includes('2023-08-21') || file.includes('2024-10-05')) {
      badge = 'Denim Collection';
      fit = 'Slim Fit';
      fabric = 'Premium Stretch Denim';
      name = 'Tailored Stretch Denim Jeans & Casual Shirt Set';
      description = 'Durable authentic denim washes paired for effortless weekend and travel versatility.';
      tags = ['Stretch Denim', 'Slim Fit Jeans', 'Weekend Styling'];
    } else if (file.includes('2022-08-22_20-48-10') || file.includes('2022-09-29')) {
      badge = 'Store Collection';
      fit = 'Regular Fit';
      fabric = 'Full Store Selection';
      name = 'Flagship Store Curated Menswear Collection';
      description = 'Explore the complete AB Collections showroom edit crafted specifically for South Indian style.';
      tags = ['Store Collection', 'In-Store Exclusive', 'Full Wardrobe'];
    } else {
      badge = 'Curated Look';
      fit = 'Regular Fit';
      fabric = 'Cotton & Linen Blend';
      name = 'Complete Tailored Shirt & Tonal Pant Ensemble';
      description = 'A coordinated ensemble blending comfort with sharp tailoring for modern elegance.';
      tags = ['Full Outfit', 'Color Harmony', 'Stylist Pick'];
    }
  }

  // Generate code and slug
  const prefix = categorySlug === 't-shirts' ? 'ABC-TSH' : categorySlug === 'shirts' ? 'ABC-SHR' : 'ABC-OUTFIT';
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

const tsContent = `// Auto-generated full catalog containing all 142 items from main media folder
// Categorized into T-Shirts, Shirts, and Outfits with elegant, fashion-forward descriptions.
// Prices intentionally omitted as per requirement.

export interface CatalogItem {
  id: string;
  slug: string;
  name: string;
  category: 'T-Shirts' | 'Shirts' | 'Outfits';
  categorySlug: 't-shirts' | 'shirts' | 'outfits';
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
  tShirts: ${catalogItems.filter(i => i.category === 'T-Shirts').length},
  shirts: ${catalogItems.filter(i => i.category === 'Shirts').length},
  outfits: ${catalogItems.filter(i => i.category === 'Outfits').length},
  videos: ${catalogItems.filter(i => i.mediaType === 'video').length},
  images: ${catalogItems.filter(i => i.mediaType === 'image').length},
};
`;

fs.writeFileSync(path.join(__dirname, '../src/data/catalog.ts'), tsContent, 'utf-8');
console.log('Successfully wrote src/data/catalog.ts with ' + catalogItems.length + ' items.');
