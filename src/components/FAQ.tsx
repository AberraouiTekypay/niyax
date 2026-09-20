"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

const FAQS: FAQItem[] = [
  {
    q: "Why does traditional commercial whey protein trigger gut bloat and cramping?",
    a: "Commercial whey proteins cut costs by using high-heat acid-whey or ion-exchange processing, which denatures delicate dairy proteins into hard-to-digest aggregates. Additionally, standard brands pack formulas with artificial sweeteners (sucralose, acesulfame-K) that disrupt gut microbiota, along with soy lecithin and chemical anti-foaming agents. NiyaX uses cold ceramic cross-flow microfiltration (<10°C), keeps lactose under 0.08g, and incorporates DigeZyme® multi-enzymes for 38-minute gastric clearance.",
  },
  {
    q: "What is microbial rennet, and why is it critical for both athletic purity and Halal compliance?",
    a: "Rennet is the coagulating enzyme used to separate curds from liquid whey. Traditional industrial dairy relies on animal rennet harvested from the stomach lining of slaughtered calves or cattle. NiyaX strictly utilizes 100% microbial rennet produced via pure fungal fermentation of *Mucor miehei*. This eliminates animal digestive enzymes and slaughter byproducts, guaranteeing that NiyaX is naturally and strictly Halal by standard of absolute biological cleanliness.",
  },
  {
    q: "Why do standard chocolate proteins contain alcohol flavor carriers, and how does NiyaX solve this?",
    a: "Over 90% of industrial chocolate and vanilla flavorings suspend synthetic aroma molecules in solvent carriers like ethanol (ethyl alcohol) or propylene glycol. While manufacturers claim trace amounts evaporate, solvent residue remains. NiyaX utilizes supercritical CO2 extraction and gentle aqueous/MCT encapsulation of pure West African roasted cocoa, resulting in certified 0.00% alcohol solvent content.",
  },
  {
    q: "How does this Early Interest waitlist work? Am I charged today?",
    a: "Zero payment is collected today. Reserving your allocation registers your verified position in the Batch 001 queue (limited to 500 numbered tubs). You will receive an early dispatch pass 72 hours before public launch, locking in your 20% Founder Discount for life.",
  },
  {
    q: "What are the specific perks of 'The Protocol' subscription option?",
    a: "Athletes who select 'The Protocol' lock in a permanent 20% discount on every future delivery, receive a complimentary matte-black insulated stainless steel shaker with Batch 001, and gain direct access to our private athlete Telegram/Discord community featuring UFC/ADCC coaches and sports scientists.",
  },
  {
    q: "What are the estimated shipping timelines for Paris, Madrid, and Casablanca?",
    a: "Batch 001 units are dispatched directly from our regional fulfillment centers: suburban Paris for French orders (24h Chronopost), Madrid hub for Iberian orders (24h SEUR/Correos Express), and our Casablanca facility for Moroccan orders (same-day in Casablanca, 24h nationwide).",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <div id="faq" className="py-16 scroll-mt-24">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold flex items-center justify-center gap-1.5">
          <HelpCircle className="w-4 h-4" />
          Technical Clarity
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2">
          Frequently Asked Questions
        </h2>
        <p className="text-sm text-zinc-400 mt-3">
          Detailed answers on raw material extraction, enzyme chemistry, and founder allocation mechanics.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-3">
        {FAQS.map((faq, idx) => (
          <div
            key={idx}
            className="rounded-xl border border-zinc-800 glass-card overflow-hidden transition-colors hover:border-zinc-700"
          >
            <button
              onClick={() => toggle(idx)}
              className="w-full p-5 text-left flex items-center justify-between gap-4 font-mono text-sm font-semibold text-zinc-200 hover:text-white cursor-pointer"
            >
              <span>{faq.q}</span>
              <ChevronDown
                className={`w-4 h-4 text-amber-400 transition-transform duration-300 flex-shrink-0 ${
                  openIdx === idx ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIdx === idx && (
              <div className="px-5 pb-5 text-xs text-zinc-400 leading-relaxed font-sans border-t border-white/5 pt-4">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
