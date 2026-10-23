import HomePage from "@/app/page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | AB Collections Kavoor",
  description:
    "Explore AB Collections in Kavoor, Mangaluru. Men's exclusive fashion destination featuring tactical cargo shirts, tailored windowpane checks, evening satin jacquards, and linen trousers.",
};

export default function HomeRoute() {
  return <HomePage />;
}
