import React from "react";
import { ShieldCheck, RefreshCw, Lock, Store } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 min-h-[70vh]">
      <div className="mb-14">
        <span className="text-xs uppercase tracking-[0.25em] text-amber-500 font-bold">
          Legal &amp; Store Policies
        </span>
        <h1 className="editorial-headline text-4xl sm:text-5xl font-black uppercase tracking-tight text-neutral-900 dark:text-neutral-50 mt-2">
          STORE POLICIES &amp; PRIVACY
        </h1>
        <p className="text-xs sm:text-sm text-neutral-500 mt-2">
          Effective Date: October 2026 • AB Collections, Kavoor, Mangaluru
        </p>
      </div>

      <div className="space-y-10 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
        {/* Section 1: In-Store Exchange Policy */}
        <section className="p-8 rounded-3xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 space-y-3">
          <div className="flex items-center gap-2 text-neutral-900 dark:text-neutral-100 font-bold text-base">
            <RefreshCw className="w-5 h-5 text-amber-500" />
            <h2>7-Day In-Store Exchange Policy</h2>
          </div>
          <p>
            We take pride in our garments and want you to feel confident in every piece you purchase. If you need a different size or wish to exchange for another design:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-neutral-600 dark:text-neutral-400">
            <li>Exchanges are accepted within <strong>7 days</strong> of purchase at our Kavoor showroom.</li>
            <li>Items must be in original condition: unworn, unwashed, and with all store tags intact.</li>
            <li>Please present the original store receipt or bill message at the checkout desk.</li>
            <li>Exchanges can be made for any item of equal or higher value by paying the difference.</li>
          </ul>
        </section>

        {/* Section 2: Online Reservation Terms */}
        <section className="p-8 rounded-3xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 space-y-3">
          <div className="flex items-center gap-2 text-neutral-900 dark:text-neutral-100 font-bold text-base">
            <Store className="w-5 h-5 text-amber-500" />
            <h2>WhatsApp Reservation &amp; Hold Guidelines</h2>
          </div>
          <p>
            The reserve list on this website generates a hold inquiry directly with our physical store in Kavoor:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-neutral-600 dark:text-neutral-400">
            <li>No payment is processed on this website. All transactions take place in person at the store.</li>
            <li>Items are held for up to <strong>48 hours</strong> from confirmation. If uncollected, they return to general inventory.</li>
            <li>In-store availability may occasionally fluctuate before a hold message is received. Our associates will confirm immediately.</li>
          </ul>
        </section>

        {/* Section 3: Privacy & Data Protection */}
        <section className="p-8 rounded-3xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 space-y-3">
          <div className="flex items-center gap-2 text-neutral-900 dark:text-neutral-100 font-bold text-base">
            <Lock className="w-5 h-5 text-amber-500" />
            <h2>Customer Privacy Commitment</h2>
          </div>
          <p>
            We respect your privacy. Any name or contact information provided when sending a WhatsApp reservation or store inquiry is used strictly for in-store order coordination and customer assistance. We never sell, lease, or distribute your phone number or information to any third parties.
          </p>
        </section>

        {/* Contact Info */}
        <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800 text-xs text-neutral-500">
          For any clarifications regarding our store policies, please contact us at{" "}
          <a href={`mailto:${siteConfig.contact.email}`} className="text-amber-500 font-medium">
            {siteConfig.contact.email}
          </a>{" "}
          or visit us in Kavoor, Mangaluru.
        </div>
      </div>
    </div>
  );
}
