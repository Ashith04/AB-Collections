"use client";

import React, { useState, useEffect } from "react";
import {
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  Mail,
  Send,
  Navigation,
  CheckCircle2,
} from "lucide-react";
import { siteConfig, isStoreCurrentlyOpen } from "@/config/site";
import { PillButton } from "@/components/ui/PillButton";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [inquiryType, setInquiryType] = useState("Fit & Sizing");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const [storeStatus, setStoreStatus] = useState({
    isOpen: true,
    statusText: "Open Today 10:00 AM – 9:30 PM",
  });

  useEffect(() => {
    setStoreStatus(isStoreCurrentlyOpen());
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedMsg = `*STORE INQUIRY - AB COLLECTIONS KAVOOR*\nName: ${name}\nPhone: ${phone}\nTopic: ${inquiryType}\nMessage: ${message}`;
    const url = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
      formattedMsg
    )}`;
    window.open(url, "_blank");
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs uppercase tracking-[0.25em] font-mono text-neutral-500 dark:text-neutral-400 font-semibold">
          Get in Touch // Kavoor, Mangaluru
        </span>
        <h1 className="editorial-headline text-4xl sm:text-6xl font-black uppercase tracking-tight text-neutral-900 dark:text-neutral-50 mt-2">
          VISIT OR CONNECT
        </h1>
        <p className="text-xs sm:text-sm text-neutral-500 mt-4 max-w-lg mx-auto leading-relaxed">
          Need sizing advice, directions to our Kavoor showroom, or wish to place an in-store hold? Our staff is here to assist.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Direct Contact & Live Hours */}
        <div className="lg:col-span-5 space-y-8">
          <div className="p-8 rounded-3xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-500">
                Live Store Status
              </span>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white dark:bg-black border border-black/5">
                <span
                  className={`w-2 h-2 rounded-full ${
                    storeStatus.isOpen ? "bg-emerald-500 pulse-dot" : "bg-neutral-400"
                  }`}
                />
                <span className="text-neutral-800 dark:text-neutral-200">
                  {storeStatus.statusText}
                </span>
              </div>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-neutral-900 dark:text-white shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-neutral-900 dark:text-neutral-100 block">
                    Showroom Address
                  </span>
                  <span>{siteConfig.contact.address.full}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-neutral-900 dark:text-white shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-neutral-900 dark:text-neutral-100 block">
                    Store Hours
                  </span>
                  <span>{siteConfig.businessHours.display}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-neutral-900 dark:text-white shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-neutral-900 dark:text-neutral-100 block">
                    Phone &amp; WhatsApp Enquiries
                  </span>
                  <div className="flex flex-col gap-1.5 mt-1">
                    <a
                      href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline font-semibold text-neutral-900 dark:text-neutral-100 flex items-center gap-2"
                    >
                      <span>{siteConfig.contact.whatsappDisplay}</span>
                      <span className="text-[10px] font-mono uppercase bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 px-1.5 py-0.5 rounded-full font-bold">WhatsApp</span>
                    </a>
                    {siteConfig.contact.secondaryPhone && (
                      <a
                        href={`tel:${siteConfig.contact.secondaryPhone}`}
                        className="hover:underline text-neutral-600 dark:text-neutral-400 flex items-center gap-2 text-xs font-medium"
                      >
                        <span>{siteConfig.contact.secondaryPhoneDisplay}</span>
                        <span className="text-[10px] font-mono uppercase bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 px-1.5 py-0.5 rounded-full font-bold">Store Call</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-neutral-900 dark:text-white shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-neutral-900 dark:text-neutral-100 block">
                    Email Inquiry
                  </span>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="hover:underline"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Actions using PillButton */}
            <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800 flex flex-wrap gap-3">
              <PillButton
                href={siteConfig.contact.googleMapsDirectionsUrl}
                variant="dark"
                size="md"
                className="flex-1"
              >
                Get Directions
              </PillButton>

              <PillButton
                href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
                variant="emerald"
                size="md"
                className="flex-1"
                icon={<MessageCircle className="w-4 h-4 mr-1 text-white" />}
              >
                WhatsApp Us
              </PillButton>
            </div>
          </div>

          {/* Interactive Map */}
          <div className="rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800 h-64 sm:h-80 shadow-md">
            <iframe
              src={siteConfig.contact.googleMapsEmbedUrl}
              title="AB Collections Kavoor Map"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale contrast-125 dark:invert dark:hue-rotate-180"
            />
          </div>
        </div>

        {/* Right Column: Direct Inquiry Form */}
        <div className="lg:col-span-7">
          <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-xl">
            <h2 className="editorial-headline text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-neutral-100">
              Send an In-Store Inquiry
            </h2>
            <p className="text-xs sm:text-sm text-neutral-500 mt-2">
              Fill out this form and we will connect with you immediately via WhatsApp or phone.
            </p>

            {submitted ? (
              <div className="mt-8 p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-emerald-500 mx-auto" />
                <h3 className="text-base font-bold text-neutral-900 dark:text-neutral-100">
                  Message Dispatched!
                </h3>
                <p className="text-xs text-neutral-600 dark:text-neutral-400">
                  Your inquiry has been opened on WhatsApp. Our Kavoor team will respond shortly.
                </p>
                <button suppressHydrationWarning
                  onClick={() => setSubmitted(false)}
                  className="mt-3 text-xs text-emerald-600 font-bold underline cursor-pointer"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div>
                  <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-neutral-500 mb-1.5">
                    Your Full Name
                  </label>
                  <input suppressHydrationWarning
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-black dark:focus:border-white text-neutral-900 dark:text-neutral-100"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-neutral-500 mb-1.5">
                    Phone / WhatsApp Number
                  </label>
                  <input suppressHydrationWarning
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. +91 98450 12345"
                    className="w-full bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-black dark:focus:border-white text-neutral-900 dark:text-neutral-100"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-neutral-500 mb-1.5">
                    Inquiry Topic
                  </label>
                  <select
                    value={inquiryType}
                    onChange={(e) => setInquiryType(e.target.value)}
                    className="w-full bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-black dark:focus:border-white text-neutral-900 dark:text-neutral-100"
                  >
                    <option value="Fit & Sizing">Fit &amp; Sizing Confirmation</option>
                    <option value="In-Store Hold">Hold an Article for Trial</option>
                    <option value="Stock Inquiry">Check Article Stock in Kavoor</option>
                    <option value="Directions / Visit">Directions / Visiting Details</option>
                    <option value="Other">Other Query</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-neutral-500 mb-1.5">
                    Message / Outfits of Interest
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Mention the product names or codes and sizes you want to try..."
                    className="w-full bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-black dark:focus:border-white text-neutral-900 dark:text-neutral-100 resize-none"
                  />
                </div>

                <button suppressHydrationWarning
                  type="submit"
                  className="w-full group flex items-center justify-between py-3 pl-6 pr-2.5 rounded-full bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 text-xs sm:text-sm font-semibold hover:bg-black dark:hover:bg-neutral-100 transition-all hover:scale-[1.01] shadow-md cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <Send className="w-4 h-4" />
                    <span>Send via WhatsApp Concierge</span>
                  </div>
                  <span className="w-8 h-8 rounded-full bg-white dark:bg-neutral-950 text-neutral-950 dark:text-white flex items-center justify-center shrink-0">
                    <Send className="w-3.5 h-3.5 -ml-0.5" />
                  </span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
