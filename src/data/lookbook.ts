export interface LookbookEntry {
  id: string;
  season: string;
  title: string;
  concept: string;
  image: string;
  aspect: "portrait" | "landscape" | "tall";
  tags: string[];
  productSlugs: string[];
  stylingTips: string;
}

export const lookbookItems: LookbookEntry[] = [
  {
    id: "look-01",
    season: "DROP 01 // AUTUMN-WINTER",
    title: "The Utilitarian Dual-Tone",
    concept:
      "Obsidian dual-pocket cargo shirt paired with stone relaxed utility trousers. Finished with minimalist accessories for a street-to-dinner transition.",
    image: "/images/products/shirts_black_charcoal.jpg",
    aspect: "tall",
    tags: ["Tactical Minimal", "Streetwear", "Monochrome"],
    productSlugs: [
      "tactical-cargo-pocket-utility-shirt",
      "tactical-6-pocket-heavy-twill-cargo-pants",
    ],
    stylingTips:
      "Roll sleeves once above the watch wrist, leave the bottom two buttons undone over an ivory drop-shoulder tee.",
  },
  {
    id: "look-02",
    season: "DROP 02 // COASTAL EVENINGS",
    title: "Heritage Crimson Windowpane",
    concept:
      "A tailored crimson windowpane shirt balanced with washed ash grey denim. An understated nod to classic European tailoring fitted for tropical evenings.",
    image: "/images/products/shirts_maroon_white.jpg",
    aspect: "portrait",
    tags: ["Windowpane Plaid", "Tailored Fit", "Evening Wear"],
    productSlugs: [
      "heritage-crimson-windowpane-checked-shirt",
      "comfort-stretch-selvedge-look-indigo-denim",
    ],
    stylingTips:
      "Pair with brown leather loafers and a matching belt for casual celebrations or date nights.",
  },
  {
    id: "look-03",
    season: "DROP 03 // ARCHITECTURAL FIT",
    title: "Tactical Pocket Cargo Assembly",
    concept:
      "Deep olive ripstop trousers with articulated knees and heavy-duty pocket storage. Designed for effortless mobility and a sharp silhouette.",
    image: "/images/products/trousers_cargo_collection.jpg",
    aspect: "portrait",
    tags: ["Cargo Trousers", "Earth Tones", "Functional"],
    productSlugs: ["tactical-6-pocket-heavy-twill-cargo-pants"],
    stylingTips:
      "Tighten the ankle cinch bungee cord for high-top sneakers, or loosen for a relaxed straight stack over retro runners.",
  },
  {
    id: "look-04",
    season: "STORE ATELIER // KAVOOR",
    title: "The AB In-Store Atmosphere",
    concept:
      "Step into our exclusive showroom in Kavoor, Mangaluru. Curated racks, dedicated styling trial rooms, and freshly steamed drops updated weekly.",
    image: "/images/store/store_interior.jpg",
    aspect: "landscape",
    tags: ["Kavoor Atelier", "Store Experience", "Personal Styling"],
    productSlugs: [
      "tactical-cargo-pocket-utility-shirt",
      "heritage-crimson-windowpane-checked-shirt",
    ],
    stylingTips:
      "Visit our store to try on exact fits and discover custom styling advice from our dedicated associates.",
  },
];
