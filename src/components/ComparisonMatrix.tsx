"use client";

import React from "react";
import { Check, X, ShieldAlert, Sparkles } from "lucide-react";

export default function ComparisonMatrix() {
  const rows = [
    {
      metric: "Protein Extraction Protocol",
      niyax: "Cold Ceramic CFM (<10°C Native)",
      commercial: "High-Heat Acid or Ion-Exchange",
      plant: "Chemical Solvent Hexane Extraction",
      advantage: true,
    },
    {
      metric: "Rennet / Coagulation Origin",
      niyax: "100% Microbial Fermentation (Mucor miehei)",
      commercial: "Calf / Bovine Stomach Enzyme Byproducts",
      plant: "Not Applicable (Plant)",
      advantage: true,
    },
    {
      metric: "Flavoring Carrier Solvents",
      niyax: "0.00% Alcohol (Supercritical CO2 / Aqueous)",
      commercial: "Synthetic Ethanol & Propylene Glycol",
      plant: "Synthetic Flavor Carriers",
      advantage: true,
    },
    {
      metric: "Sweetener Architecture",
      niyax: "Reb-M Fermented Stevia + Thaumatin Fruit",
      commercial: "Sucralose, Acesulfame-K, Aspartame",
      plant: "Bitter Reb-A Stevia or Erythritol",
      advantage: true,
    },
    {
      metric: "Gastric Clearance Time",
      niyax: "38 Minutes (Immediate Refuel)",
      commercial: "90 – 120 Minutes (Heavy Gastric Delay)",
      plant: "75 – 95 Minutes (Digestive Drag)",
      advantage: true,
    },
    {
      metric: "Gut Distension / Mat Bloat",
      niyax: "Zero Distension (Sub-0.08g Lactose)",
      commercial: "Common Bloating & Osmotic Gas",
      plant: "Gastrointestinal Cramping (Phytates)",
      advantage: true,
    },
    {
      metric: "Batch Purity Transparency",
      niyax: "Public HPLC Lab CoA on Every Tub QR",
      commercial: "Proprietary Blends / No Batch Testing",
      plant: "Occasional Heavy Metal Contamination",
      advantage: true,
    },
    {
      metric: "Strict Halal & Ethical Compliance",
      niyax: "Guaranteed by Absolute Purity Standard",
      commercial: "Ambiguous (Unknown Animal Rennet Sources)",
      plant: "Generally Compliant",
      advantage: true,
    },
  ];

  return (
    <div id="the-standard" className="py-16 scroll-mt-24">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold">
          The Biological Standard
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2">
          The Molecular Advantage Matrix
        </h2>
        <p className="text-sm text-zinc-400 mt-3">
          Why combat athletes, purists, and biohackers across Europe and North Africa refuse to settle for commercial sports nutrition.
        </p>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-zinc-800 glass-card shadow-2xl">
        <table className="w-full text-left border-collapse min-w-[650px]">
          <thead>
            <tr className="border-b border-zinc-800 bg-zinc-950/80 text-xs font-mono tracking-wider">
              <th className="p-4 sm:p-5 text-zinc-400 font-medium uppercase">Parameter</th>
              <th className="p-4 sm:p-5 bg-amber-500/10 text-amber-300 font-extrabold border-x border-amber-500/20 text-sm uppercase">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  NiyaX Apex Isolate
                </span>
              </th>
              <th className="p-4 sm:p-5 text-zinc-400 font-medium uppercase">Commercial Whey</th>
              <th className="p-4 sm:p-5 text-zinc-400 font-medium uppercase">Plant Proteins</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-800/60 text-xs font-mono">
            {rows.map((row, idx) => (
              <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                <td className="p-4 sm:p-5 text-zinc-300 font-medium">
                  {row.metric}
                </td>
                <td className="p-4 sm:p-5 bg-amber-500/[0.04] border-x border-amber-500/20 font-bold text-white">
                  <span className="flex items-center gap-2 text-amber-300">
                    <Check className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    {row.niyax}
                  </span>
                </td>
                <td className="p-4 sm:p-5 text-zinc-400">
                  <span className="flex items-center gap-2">
                    <X className="w-4 h-4 text-zinc-600 flex-shrink-0" />
                    {row.commercial}
                  </span>
                </td>
                <td className="p-4 sm:p-5 text-zinc-400">
                  {row.plant}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
