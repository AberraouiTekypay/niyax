"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, Shield, Check, Info, Dna, Flame, Layers } from "lucide-react";

interface Hotspot {
  id: string;
  title: string;
  category: string;
  tag: string;
  description: string;
  specs: string[];
  position: { top: string; left: string };
}

const HOTSPOTS: Hotspot[] = [
  {
    id: "cfm",
    title: "Cold Ceramic CFM Isolate 90+",
    category: "EXTRACTION SCIENCE",
    tag: "Native WPI 90%",
    description:
      "Extracted below 10°C using non-chemical ceramic cross-flow membranes. Unlike cheap heat-treated acid-whey, CFM preserves fragile bioactive immunoglobulins and glycomacropeptides.",
    specs: ["26.1g Pure Native Protein / 30g", "<0.08g Trace Lactose", "Zero Denatured Proteins"],
    position: { top: "42%", left: "68%" },
  },
  {
    id: "rennet",
    title: "100% Microbial Fermentation Rennet",
    category: "ETHICAL SANCTITY",
    tag: "Mucor miehei Source",
    description:
      "Coagulated using pure fungal enzyme cultures (*Mucor miehei*) instead of commercial calf/bovine stomach extracts (pepsin/chymosin). Zero animal slaughter byproducts; naturally and strictly Halal by standard of absolute biological cleanliness.",
    specs: ["0% Bovine/Porcine Rennet", "Vegetarian & Halal Verified", "Batch Enzymatic Assay"],
    position: { top: "65%", left: "70%" },
  },
  {
    id: "flavor",
    title: "Supercritical CO2 Dutch Cocoa",
    category: "CLEAN FLAVORING",
    tag: "0.00% Alcohol Carriers",
    description:
      "Most sports flavors dissolve synthetic aromatic chemicals in ethyl alcohol or propylene glycol. NiyaX utilizes solvent-free supercritical CO2 extraction and aqueous encapsulation of organic West African cacao.",
    specs: ["0.00% Ethyl Alcohol", "0.00% Propylene Glycol", "Rich Dark Artisan Profile"],
    position: { top: "52%", left: "55%" },
  },
  {
    id: "sweetener",
    title: "Reb-M & Thaumatin Synergy",
    category: "METABOLIC PURITY",
    tag: "Zero Gut Distension",
    description:
      "Fermented Rebaudioside-M stevia blended with West African katemfe fruit protein (Thaumatin). Eliminates bitter stevia aftertaste without sucralose, acesulfame-K, or sugar alcohols that destroy the gut microbiome.",
    specs: ["0g Sugars & 0 Insulin Spike", "Zero Sucralose or Acesulfame-K", "Zero Osmotic Bloating"],
    position: { top: "78%", left: "52%" },
  },
  {
    id: "shaker",
    title: "Heavyweight Matte-Black Shaker",
    category: "FOUNDER GEAR",
    tag: "Double-Wall Insulated",
    description:
      "Laser-etched stainless steel construction engineered with a silent curved blending element. Keeps your post-training shake ice-cold for 12 hours without plastic leaching or retained odor.",
    specs: ["18/8 Pro Stainless Steel", "Zero BPA / Phthalates", "Included with Founder Protocol"],
    position: { top: "58%", left: "32%" },
  },
];

export default function TubVisualizer() {
  const [activeHotspot, setActiveHotspot] = useState<Hotspot>(HOTSPOTS[0]);

  return (
    <div className="py-12">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold">
          The Anatomy of Perfection
        </span>
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mt-2 uppercase">
          Engineered to the Single Molecule.
        </h2>
        <p className="text-sm sm:text-base text-zinc-400 mt-3">
          Click any technical marker to inspect the biochemical engineering inside the 900g Dark Artisan Chocolate Isolate and custom founder shaker.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
        {/* Cinematic Photography Visualizer Column */}
        <div className="lg:col-span-7 flex flex-col items-center justify-center relative">
          {/* Ambient Glows */}
          <div className="absolute w-80 h-80 bg-amber-500/15 rounded-full blur-[120px] pointer-events-none" />

          {/* Photo Container */}
          <div className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden border border-zinc-700/80 shadow-2xl shadow-black group">
            <Image
              src="/images/hero-tub.jpg"
              alt="NiyaX Apex Whey Isolate and Shaker"
              fill
              priority
              className="object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
            />
            
            {/* Dark Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

            {/* Interactive Hotspot Pulses on the Image */}
            {HOTSPOTS.map((spot) => (
              <button
                key={spot.id}
                onClick={() => setActiveHotspot(spot)}
                style={{ top: spot.position.top, left: spot.position.left }}
                className={`absolute -translate-x-1/2 -translate-y-1/2 z-20 transition-all duration-300 cursor-pointer ${
                  activeHotspot.id === spot.id ? "scale-125" : "hover:scale-110"
                }`}
                aria-label={`View ${spot.title}`}
              >
                <span className="relative flex h-7 w-7 items-center justify-center">
                  <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                    activeHotspot.id === spot.id ? "bg-amber-400" : "bg-white/40"
                  }`}></span>
                  <span className={`relative inline-flex rounded-full h-5 w-5 items-center justify-center text-[10px] font-bold font-mono border ${
                    activeHotspot.id === spot.id
                      ? "bg-amber-400 text-black border-amber-300 shadow-lg shadow-amber-500/50"
                      : "bg-black/80 text-white border-white/60 hover:border-amber-400"
                  }`}>
                    +
                  </span>
                </span>
              </button>
            ))}

            {/* Bottom Caption Pill */}
            <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between px-4 py-2.5 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 text-[11px] font-mono">
              <span className="text-zinc-300">
                ACTIVE FOCUS: <strong className="text-amber-400">{activeHotspot.tag}</strong>
              </span>
              <span className="text-zinc-400 hidden sm:inline">
                LOT: NX-2601-A (30 SERVINGS)
              </span>
            </div>
          </div>

          {/* Quick Hotspot Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-5">
            {HOTSPOTS.map((spot) => (
              <button
                key={spot.id}
                onClick={() => setActiveHotspot(spot)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                  activeHotspot.id === spot.id
                    ? "bg-amber-400 text-black font-bold shadow-md shadow-amber-400/30 scale-105"
                    : "bg-zinc-900/90 text-zinc-400 hover:text-white border border-zinc-800"
                }`}
              >
                {spot.tag}
              </button>
            ))}
          </div>
        </div>

        {/* Detailed Breakdown Card */}
        <div className="lg:col-span-5">
          <div className="glass-card rounded-2xl p-6 sm:p-8 border border-zinc-700/60 shadow-xl relative">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[11px] font-mono uppercase tracking-widest text-amber-400 font-bold">
                {activeHotspot.category}
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-zinc-800 text-[10px] font-mono text-zinc-400 border border-zinc-700">
                ACTIVE PARAMETER
              </span>
            </div>

            <h4 className="text-2xl font-bold text-white tracking-tight font-mono">
              {activeHotspot.title}
            </h4>

            <p className="text-sm text-zinc-300 leading-relaxed mt-3">
              {activeHotspot.description}
            </p>

            <div className="mt-6 pt-6 border-t border-white/10">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-3">
                Laboratory Specifications
              </span>
              <div className="space-y-2">
                {activeHotspot.specs.map((spec, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-black/40 border border-white/5 flex items-center gap-2.5"
                  >
                    <Check className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <span className="text-xs font-mono text-zinc-200">{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-amber-500/5 border border-amber-500/20 flex items-start gap-3">
              <Info className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-zinc-300 leading-normal font-sans">
                <strong>Zero Chemical Interference:</strong> Zero artificial coloring, zero synthetic foaming retardants, zero chemical thickeners, zero alcohol solvent carriers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
