"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Lock,
  Plus,
  Trash2,
  Edit2,
  CheckCircle,
  AlertCircle,
  Database,
  CreditCard,
  Tag,
  ShieldCheck,
  LogOut,
} from "lucide-react";
import { products as initialProducts, productCategories } from "@/data/products";
import { Product, ProductBadge } from "@/types";

export default function AdminPortalPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [productsList, setProductsList] = useState<Product[]>(initialProducts);
  const [searchFilter, setSearchFilter] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Default demo passcode for store staff
    if (password === "kavoor2026" || password === "admin") {
      setIsAuthenticated(true);
      setErrorMsg("");
    } else {
      setErrorMsg("Incorrect access code. (Hint: 'kavoor2026' or 'admin')");
    }
  };

  const toggleProductBadge = (id: string, currentBadge?: ProductBadge) => {
    const badges: (ProductBadge | undefined)[] = [undefined, "New", "Bestseller", "Few left", "Sale"];
    const currentIdx = badges.indexOf(currentBadge);
    const nextBadge = badges[(currentIdx + 1) % badges.length];

    setProductsList((prev) =>
      prev.map((p) => (p.id === id ? { ...p, badge: nextBadge } : p))
    );
  };

  const deleteProduct = (id: string) => {
    if (confirm("Are you sure you want to remove this product from the local view?")) {
      setProductsList((prev) => prev.filter((p) => p.id !== id));
    }
  };

  const filtered = productsList.filter(
    (p) =>
      p.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
      p.code.toLowerCase().includes(searchFilter.toLowerCase()) ||
      p.category.toLowerCase().includes(searchFilter.toLowerCase())
  );

  if (!isAuthenticated) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-md p-8 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-2xl text-center space-y-6">
          <div className="w-14 h-14 rounded-2xl bg-black dark:bg-white text-white dark:text-black flex items-center justify-center mx-auto shadow-md">
            <Lock className="w-6 h-6" />
          </div>

          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-amber-500 font-bold">
              Kavoor Store Management
            </span>
            <h1 className="editorial-headline text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-neutral-50 mt-1">
              Staff Portal Access
            </h1>
            <p className="text-xs text-neutral-500 mt-2">
              Phase 2 Management Dashboard for AB Collections staff to review articles and toggle stock badges.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4 text-left">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-1.5">
                Staff Passcode
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter passcode (e.g. kavoor2026)"
                className="w-full bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-black text-neutral-900 dark:text-neutral-100"
              />
            </div>

            {errorMsg && (
              <p className="text-xs text-red-500 font-semibold">{errorMsg}</p>
            )}

            <button
              type="submit"
              className="w-full py-3.5 rounded-full bg-black text-white dark:bg-white dark:text-black text-xs font-bold hover:bg-neutral-800 transition-all cursor-pointer"
            >
              Unlock Dashboard
            </button>
          </form>

          <p className="text-[11px] text-neutral-400">
            Passcode: <code className="bg-neutral-100 dark:bg-neutral-800 px-1 py-0.5 rounded font-mono">kavoor2026</code>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 min-h-[80vh]">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-neutral-200 dark:border-neutral-800">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <span className="text-xs uppercase font-mono text-emerald-600 font-bold tracking-wider">
              Staff Portal Active
            </span>
          </div>
          <h1 className="editorial-headline text-3xl sm:text-4xl font-black uppercase tracking-tight text-neutral-900 dark:text-neutral-50 mt-1">
            Catalogue &amp; Inventory Manager
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsAuthenticated(false)}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-neutral-200 dark:border-neutral-700 text-xs font-semibold hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Lock</span>
          </button>
        </div>
      </div>

      {/* Phase 2 Architecture Notice & Roadmap */}
      <div className="my-8 p-6 rounded-3xl bg-neutral-900 text-white border border-neutral-800 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
            <Database className="w-4 h-4" />
            <span>Phase 2 Database Roadmap (Express + MongoDB)</span>
          </div>
          <p className="text-xs text-neutral-300 leading-relaxed">
            The frontend is decoupled through typed data layers (<code className="text-amber-300">src/data/products.ts</code>). In Phase 2, this admin panel directly connects to an Express + MongoDB REST API for persistent SKU tracking and real-time inventory adjustments.
          </p>
        </div>

        <div>
          <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
            <CreditCard className="w-4 h-4" />
            <span>Phase 2 Payment Integration (Razorpay / UPI)</span>
          </div>
          <p className="text-xs text-neutral-300 leading-relaxed">
            Currently optimized for WhatsApp reservation with zero gateway drop-off. Phase 2 scaffold includes documented hooks in <code className="text-amber-300">ReserveContext.tsx</code> to switch from WhatsApp prefill to Razorpay modal checkout.
          </p>
        </div>
      </div>

      {/* Product Management Table */}
      <div className="bg-white dark:bg-neutral-900 rounded-3xl border border-neutral-200 dark:border-neutral-800 overflow-hidden shadow-xl">
        <div className="p-4 sm:p-6 border-b border-neutral-200 dark:border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <input
            type="text"
            value={searchFilter}
            onChange={(e) => setSearchFilter(e.target.value)}
            placeholder="Search by code, name, category..."
            className="bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-full px-4 py-2 text-xs font-medium text-neutral-900 dark:text-neutral-100 w-full sm:w-72 focus:outline-none"
          />
          <span className="text-xs font-semibold text-neutral-500">
            {filtered.length} products loaded
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-neutral-200 dark:border-neutral-800 text-neutral-400 uppercase tracking-wider text-[10px]">
                <th className="py-3.5 px-4">Item</th>
                <th className="py-3.5 px-4">Category</th>
                <th className="py-3.5 px-4">Code</th>
                <th className="py-3.5 px-4">Price</th>
                <th className="py-3.5 px-4">Badge (Click to cycle)</th>
                <th className="py-3.5 px-4">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100 dark:divide-neutral-800 text-neutral-800 dark:text-neutral-200">
              {filtered.map((product) => (
                <tr key={product.id} className="hover:bg-neutral-50 dark:hover:bg-neutral-800/40">
                  <td className="py-3 px-4 flex items-center gap-3">
                    <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-neutral-100 dark:bg-neutral-800 shrink-0">
                      <Image
                        src={product.images[0]}
                        alt={product.name}
                        fill
                        className="object-contain p-1"
                      />
                    </div>
                    <div>
                      <span className="font-bold block line-clamp-1">{product.name}</span>
                      <span className="text-[10px] text-neutral-400">{product.fit}</span>
                    </div>
                  </td>

                  <td className="py-3 px-4 text-neutral-500 font-medium">
                    {product.category}
                  </td>

                  <td className="py-3 px-4 font-mono font-bold text-neutral-700 dark:text-neutral-300">
                    {product.code}
                  </td>

                  <td className="py-3 px-4 font-bold">
                    ₹{product.price.toLocaleString("en-IN")}
                  </td>

                  <td className="py-3 px-4">
                    <button
                      onClick={() => toggleProductBadge(product.id, product.badge)}
                      className={`px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wide uppercase transition-transform hover:scale-105 cursor-pointer ${
                        product.badge === "New"
                          ? "bg-black text-white"
                          : product.badge === "Bestseller"
                          ? "bg-emerald-600 text-white"
                          : product.badge === "Few left"
                          ? "bg-amber-500 text-black"
                          : product.badge === "Sale"
                          ? "bg-red-600 text-white"
                          : "bg-neutral-100 dark:bg-neutral-800 text-neutral-500"
                      }`}
                    >
                      {product.badge || "None (Click to set)"}
                    </button>
                  </td>

                  <td className="py-3 px-4">
                    <button
                      onClick={() => deleteProduct(product.id)}
                      className="p-1.5 text-neutral-400 hover:text-red-500 transition-colors"
                      title="Delete"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
