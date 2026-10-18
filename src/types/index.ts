export type ProductCategory =
  | 'All'
  | 'Casual Shirts'
  | 'Cargo Shirts'
  | 'Checked Shirts'
  | 'Mandarin Collar'
  | 'Satin Tonal'
  | 'Printed Shirts'
  | 'T-Shirts'
  | 'Jeans'
  | 'Cargo Trousers'
  | 'Linen Trousers'
  | 'Jackets';

export type ProductFit = 'Slim Fit' | 'Regular Fit' | 'Relaxed Fit' | 'Oversized';

export type ProductBadge = 'New' | 'Sale' | 'Few left' | 'Bestseller';

export type ColorStoryTheme = 'olive' | 'amber' | 'burgundy' | 'navy' | 'sand';

export interface ProductColorVariant {
  name: string;
  hex: string;
  image?: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  categorySlug: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  sizes: ('S' | 'M' | 'L' | 'XL' | 'XXL')[];
  colors: ProductColorVariant[];
  images: string[];
  badge?: ProductBadge;
  colorStory?: ColorStoryTheme;
  fit: ProductFit;
  fabric: string;
  care: string[];
  code: string;
  inStock: boolean;
  description: string;
  details: string[];
  isFeatured?: boolean;
}

export interface ReserveItem {
  id: string; // product.id + '-' + size + '-' + color
  product: Product;
  size: string;
  color: string;
  quantity: number;
  addedAt: number;
}

export interface FilterState {
  category: string;
  sizes: string[];
  colors: string[];
  fits: string[];
  minPrice: number;
  maxPrice: number;
  badge?: string;
  searchQuery: string;
  sortBy: 'featured' | 'newest' | 'price-asc' | 'price-desc' | 'rating';
}

export interface LookbookItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  category: string;
  aspect: 'portrait' | 'square' | 'tall';
  featuredProductSlugs: string[];
}
