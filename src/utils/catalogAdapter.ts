import { CatalogItem } from "@/data/catalog";
import { Product, ProductCategory, ProductFit } from "@/types";

export interface AdaptableCatalogItem {
  id: string;
  name: string;
  slug?: string;
  code: string;
  category: string;
  categorySlug?: string;
  mediaUrl: string;
  description?: string;
  fit?: string;
  fabric?: string;
  badge?: string;
  tags?: string[];
  price?: number;
  inStock?: boolean;
}

/**
 * Converts a CatalogItem or InquiryItem into a full Product model so it seamlessly integrates
 * with WishlistContext, ReserveContext, and Product detail views.
 */
export function catalogItemToProduct(item: AdaptableCatalogItem): Product {
  const categoryMap: Record<string, ProductCategory> = {
    "T-Shirts": "T-Shirts",
    "Shirts": "Casual Shirts",
    "Outfits": "Cargo Trousers",
  };

  const validFit: ProductFit =
    item.fit === "Slim Fit" ||
    item.fit === "Regular Fit" ||
    item.fit === "Relaxed Fit" ||
    item.fit === "Oversized"
      ? item.fit
      : "Regular Fit";

  const slug =
    item.slug ||
    item.name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "") +
      "-" +
      item.code.toLowerCase();

  return {
    id: item.id,
    slug,
    name: item.name,
    category: categoryMap[item.category] || "Casual Shirts",
    categorySlug: item.categorySlug || item.category.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
    price: item.price || 1499,
    rating: 4.9,
    reviewsCount: 16,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Obsidian Black", hex: "#171717" },
      { name: "Navy Blue", hex: "#1e3a8a" },
      { name: "Olive", hex: "#4b5320" },
    ],
    images: [item.mediaUrl],
    badge: (item.badge as any) || undefined,
    fit: validFit,
    fabric: item.fabric || "Combed Cotton",
    care: ["Gentle wash with cold water", "Dry in shade", "Warm iron if needed"],
    code: item.code,
    inStock: item.inStock ?? true,
    description: item.description || `${item.name} (${item.code}) available at AB Collections Kavoor.`,
    details: item.tags && item.tags.length > 0 ? item.tags : [item.fit || "Standard Fit", item.fabric || "Premium Fabric"],
  };
}
