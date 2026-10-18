import React from "react";
import Image from "next/image";
import { ArrowUpRight, Heart } from "lucide-react";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { siteConfig } from "@/config/site";

export const InstagramGrid: React.FC = () => {
  const posts = [
    {
      image: "/images/products/shirts_black_charcoal.jpg",
      caption: "Drop 01: Tactical pocket cargo utility in Obsidian Black.",
      likes: "142",
    },
    {
      image: "/images/store/store_interior.jpg",
      caption: "Inside our Kavoor showroom. Fresh racks steamed daily.",
      likes: "289",
    },
    {
      image: "/images/products/shirts_maroon_white.jpg",
      caption: "Heritage Crimson Windowpane checks for the weekend.",
      likes: "198",
    },
    {
      image: "/images/products/trousers_cargo_collection.jpg",
      caption: "Heavy twill 6-pocket cargo pants. Four earthy colorways.",
      likes: "315",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
        <div>
          <span className="text-xs uppercase tracking-widest text-pink-500 font-bold flex items-center gap-1.5">
            <InstagramIcon className="w-4 h-4" />
            <span>Follow Our Drops</span>
          </span>
          <h2 className="editorial-headline text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-100 mt-2">
            @{siteConfig.instagram.handle.replace("@", "")}
          </h2>
        </div>

        <a
          href={siteConfig.instagram.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black dark:bg-white text-white dark:text-black text-xs font-bold hover:bg-neutral-800 transition-transform hover:scale-105"
        >
          <span>Follow on Instagram</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {posts.map((post, idx) => (
          <a
            key={idx}
            href={siteConfig.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative aspect-square rounded-3xl overflow-hidden bg-neutral-100 dark:bg-neutral-800 shadow-sm border border-neutral-200/60 dark:border-neutral-800"
          >
            <Image
              src={post.image}
              alt={post.caption}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 text-white">
              <div className="flex justify-end">
                <InstagramIcon className="w-5 h-5 text-pink-400" />
              </div>
              <div>
                <p className="text-xs line-clamp-2 text-neutral-200">{post.caption}</p>
                <div className="flex items-center gap-1 text-[11px] font-bold text-neutral-300 mt-2">
                  <Heart className="w-3 h-3 fill-pink-500 text-pink-500" />
                  <span>{post.likes} likes</span>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
