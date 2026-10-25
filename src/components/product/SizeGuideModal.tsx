import React from "react";
import { X, Check } from "lucide-react";

interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  category?: string;
}

export const SizeGuideModal: React.FC<SizeGuideModalProps> = ({
  isOpen,
  onClose,
  category = "Shirts",
}) => {
  if (!isOpen) return null;

  const isTrouser =
    category.toLowerCase().includes("trouser") ||
    category.toLowerCase().includes("jean") ||
    category.toLowerCase().includes("cargo");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white dark:bg-neutral-900 rounded-3xl p-6 sm:p-8 shadow-2xl border border-neutral-200 dark:border-neutral-800">
        <div className="flex items-center justify-between pb-4 border-b border-neutral-100 dark:border-neutral-800">
          <div>
            <h3 className="text-xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
              AB Collections Size & Fit Guide
            </h3>
            <p className="text-xs text-neutral-500 mt-0.5">
              Calibrated for tailored Indian men&apos;s cuts (in inches)
            </p>
          </div>
          <button suppressHydrationWarning
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-500 hover:text-black dark:hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Table */}
        <div className="mt-6 overflow-x-auto">
          {isTrouser ? (
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-neutral-200 dark:border-neutral-800 text-neutral-500 uppercase tracking-wider text-[11px]">
                  <th className="py-3 px-3">Size Tag</th>
                  <th className="py-3 px-3">Waist (Inches)</th>
                  <th className="py-3 px-3">Hip (Inches)</th>
                  <th className="py-3 px-3">Length</th>
                  <th className="py-3 px-3">Recommended Fit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100 dark:divide-neutral-800 text-neutral-800 dark:text-neutral-200">
                <tr>
                  <td className="py-3 px-3 font-bold">S (30)</td>
                  <td className="py-3 px-3">30&quot;</td>
                  <td className="py-3 px-3">37&quot;</td>
                  <td className="py-3 px-3">40&quot;</td>
                  <td className="py-3 px-3 text-neutral-500">Slim / Tapered</td>
                </tr>
                <tr>
                  <td className="py-3 px-3 font-bold">M (32)</td>
                  <td className="py-3 px-3">32&quot;</td>
                  <td className="py-3 px-3">39&quot;</td>
                  <td className="py-3 px-3">40.5&quot;</td>
                  <td className="py-3 px-3 text-neutral-500">Regular / Straight</td>
                </tr>
                <tr>
                  <td className="py-3 px-3 font-bold">L (34)</td>
                  <td className="py-3 px-3">34&quot;</td>
                  <td className="py-3 px-3">41&quot;</td>
                  <td className="py-3 px-3">41&quot;</td>
                  <td className="py-3 px-3 text-neutral-500">Athletic / Relaxed</td>
                </tr>
                <tr>
                  <td className="py-3 px-3 font-bold">XL (36)</td>
                  <td className="py-3 px-3">36&quot;</td>
                  <td className="py-3 px-3">43&quot;</td>
                  <td className="py-3 px-3">41.5&quot;</td>
                  <td className="py-3 px-3 text-neutral-500">Comfort Straight</td>
                </tr>
                <tr>
                  <td className="py-3 px-3 font-bold">XXL (38)</td>
                  <td className="py-3 px-3">38&quot;</td>
                  <td className="py-3 px-3">45&quot;</td>
                  <td className="py-3 px-3">42&quot;</td>
                  <td className="py-3 px-3 text-neutral-500">Relaxed Fit</td>
                </tr>
              </tbody>
            </table>
          ) : (
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-neutral-200 dark:border-neutral-800 text-neutral-500 uppercase tracking-wider text-[11px]">
                  <th className="py-3 px-3">Size Tag</th>
                  <th className="py-3 px-3">Chest (Inches)</th>
                  <th className="py-3 px-3">Shoulder</th>
                  <th className="py-3 px-3">Shirt Length</th>
                  <th className="py-3 px-3">Collar Fit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100 dark:divide-neutral-800 text-neutral-800 dark:text-neutral-200">
                <tr>
                  <td className="py-3 px-3 font-bold">S (38)</td>
                  <td className="py-3 px-3">38&quot; - 39&quot;</td>
                  <td className="py-3 px-3">17.5&quot;</td>
                  <td className="py-3 px-3">28.5&quot;</td>
                  <td className="py-3 px-3 text-neutral-500">15.0&quot;</td>
                </tr>
                <tr>
                  <td className="py-3 px-3 font-bold">M (40)</td>
                  <td className="py-3 px-3">40&quot; - 41&quot;</td>
                  <td className="py-3 px-3">18.2&quot;</td>
                  <td className="py-3 px-3">29.0&quot;</td>
                  <td className="py-3 px-3 text-neutral-500">15.5&quot;</td>
                </tr>
                <tr>
                  <td className="py-3 px-3 font-bold">L (42)</td>
                  <td className="py-3 px-3">42&quot; - 43&quot;</td>
                  <td className="py-3 px-3">19.0&quot;</td>
                  <td className="py-3 px-3">29.5&quot;</td>
                  <td className="py-3 px-3 text-neutral-500">16.0&quot;</td>
                </tr>
                <tr>
                  <td className="py-3 px-3 font-bold">XL (44)</td>
                  <td className="py-3 px-3">44&quot; - 45&quot;</td>
                  <td className="py-3 px-3">19.8&quot;</td>
                  <td className="py-3 px-3">30.0&quot;</td>
                  <td className="py-3 px-3 text-neutral-500">16.5&quot;</td>
                </tr>
                <tr>
                  <td className="py-3 px-3 font-bold">XXL (46)</td>
                  <td className="py-3 px-3">46&quot; - 47&quot;</td>
                  <td className="py-3 px-3">20.5&quot;</td>
                  <td className="py-3 px-3">30.5&quot;</td>
                  <td className="py-3 px-3 text-neutral-500">17.0&quot;</td>
                </tr>
              </tbody>
            </table>
          )}
        </div>

        {/* Store Trial Note */}
        <div className="mt-6 p-4 rounded-2xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-xs text-neutral-700 dark:text-neutral-300 flex items-start gap-3">
          <Check className="w-4 h-4 text-neutral-900 dark:text-white shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-neutral-900 dark:text-neutral-100">
              Complimentary In-Store Fitting in Kavoor:
            </span>{" "}
            Unsure of your size? Reserve your preferred two sizes on WhatsApp and try both in our dedicated trial rooms before finalizing your purchase.
          </div>
        </div>
      </div>
    </div>
  );
};
