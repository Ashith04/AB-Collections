import { notFound } from "next/navigation";
import { products } from "@/data/products";
import { catalogItems } from "@/data/catalog";
import { catalogItemToProduct } from "@/utils/catalogAdapter";
import ProductDetailClient from "./ProductDetailClient";
import type { Metadata } from "next";

function getProductBySlug(slug: string) {
  const fromProducts = products.find((p) => p.slug === slug);
  if (fromProducts) return fromProducts;
  const fromCatalog = catalogItems.find((c) => c.slug === slug);
  if (fromCatalog) return catalogItemToProduct(fromCatalog);
  return null;
}

export function generateStaticParams() {
  const productSlugs = products.map((product) => ({ slug: product.slug }));
  const catalogSlugs = catalogItems.map((item) => ({ slug: item.slug }));
  return [...productSlugs, ...catalogSlugs];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Outfit Not Found | AB Collections",
    };
  }

  return {
    title: `${product.name} | AB Collections Kavoor`,
    description: `${product.name} - ${product.description} Available in Kavoor, Mangaluru. Reserve on WhatsApp.`,
    openGraph: {
      title: `${product.name} | AB Collections`,
      description: product.description,
      images: [{ url: product.images[0] }],
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return <ProductDetailClient product={product} />;
}
