"use client";

import React, { useState } from "react";
import { Sparkles, Shield, Check, Info, Dna, Flame, Layers } from "lucide-react";

interface Hotspot {
  id: string;
  title: string;
  category: string;
  tag: string;
  description: string;
  specs: string[];
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
  },
  {
    id: "rennet",
    title: "100% Microbial Fermentation Rennet",
    category: "ETHICAL SANCTITY",
    tag: "Mucor miehei Source",
    description:
      "Coagulated using pure fungal enzyme cultures (*Mucor miehei*) instead of commercial calf/bovine stomach extracts (pepsin/chymosin). Zero animal slaughter byproducts; naturally and strictly Halal by standard of absolute biological cleanliness.",
    specs: ["0% Bovine/Porcine Rennet", "Vegetarian & Halal Verified", "Batch Enzymatic Assay"],
  },
  {
    id: "flavor",
    title: "Supercritical CO2 Dutch Cocoa",
    category: "CLEAN FLAVORING",
    tag: "0.00% Alcohol Carriers",
    description:
      "Most sports flavors dissolve synthetic aromatic chemicals in ethyl alcohol or propylene glycol. NiyaX utilizes solvent-free supercritical CO2 extraction and aqueous encapsulation of organic West African cacao.",
    specs: ["0.00% Ethyl Alcohol", "0.00% Propylene Glycol", "Rich Dark Artisan Profile"],
  },
  {
    id: "sweetener",
    title: "Reb-M & Thaumatin Synergy",
    category: "METABOLIC PURITY",
    tag: "Zero Gut Distension",
    description:
      "Fermented Rebaudioside-M stevia blended with West African katemfe fruit protein (Thaumatin). Eliminates bitter stevia aftertaste without sucralose, acesulfame-K, or sugar alcohols that destroy the gut microbiome.",
    specs: ["0g Sugars & 0 Insulin Spike", "Zero Sucralose or Acesulfame-K", "Zero Osmotic Bloating"],
  },
  {
    id: "enzymes",
    title: "DigeZyme® Multi-Enzyme Core",
    category: "GASTRIC VELOCITY",
    tag: "Sub-40 Min Transit",
    description:
      "Broad-spectrum non-animal enzymatic complex (Protease, Lactase, Amylase, Lipase, Cellulase) that rapidly hydrolyzes protein into free-form peptides for instant gastric emptying and rapid muscle protein synthesis.",
    specs: ["38 Min Gastric Clearance", "Immediate Post-Training Refuel", "Zero Heaviness on the Mat"],
  },
];

export default function TubVisualizer() {
  const [activeHotspot, setActiveHotspot] = useState<Hotspot>(HOTSPOTS[0]);

  return (
    <div className="py-12">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold">
          Architectural Teardown
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2">
          Engineered to the Single Molecule.
        </h2>
        <p className="text-sm text-zinc-400 mt-3">
          Click any technical marker to inspect the biochemical engineering inside the 900g Dark Artisan Chocolate Isolate.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
        {/* Visual Mockup Column */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center relative">
          {/* Ambient Glows */}
          <div className="absolute w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 w-60 h-12 bg-amber-400/20 blur-2xl rounded-full pointer-events-none" />

          {/* Tub Container */}
          <div className="relative w-72 sm:w-80 h-96 sm:h-[420px] rounded-3xl p-6 matte-black-gradient border border-zinc-700/60 shadow-2xl shadow-black flex flex-col justify-between overflow-hidden group">
            {/* Top Lid Ring */}
            <div className="w-full h-8 rounded-xl bg-zinc-800/90 border border-zinc-600/50 flex items-center justify-between px-3 shadow-inner">
              <span className="text-[9px] font-mono tracking-widest text-zinc-400">PATENTED SCOOP-LOCK LID</span>
              <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            </div>

            {/* Tub Body Graphic */}
            <div className="my-auto text-center space-y-3 relative z-10">
              <div className="inline-block px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-[10px] font-mono text-amber-300 font-bold tracking-widest">
                CFM CERAMIC NATIVE ISOLATE
              </div>

              <div className="space-y-0.5">
                <h3 className="text-4xl font-black tracking-tighter text-white font-mono">
                  NIYAX
                </h3>
                <p className="text-[10px] uppercase font-mono tracking-widest text-zinc-400">
                  Apex Human Performance
                </p>
              </div>

              <div className="py-2 px-4 rounded-lg bg-black/40 border border-white/5 inline-block">
                <span className="text-xs font-mono text-amber-400 font-bold uppercase block">
                  Dark Artisan Chocolate
                </span>
                <span className="text-[10px] font-mono text-zinc-400">
                  900G • 30 SERVINGS • 26g PROTEIN
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2 text-center pt-2">
                <div className="p-1.5 rounded bg-zinc-900/80 border border-white/5">
                  <span className="text-[9px] font-mono text-zinc-400 block">PROTEIN</span>
                  <span className="text-xs font-bold font-mono text-white">26.1g</span>
                </div>
                <div className="p-1.5 rounded bg-zinc-900/80 border border-white/5">
                  <span className="text-[9px] font-mono text-zinc-400 block">CARBS</span>
                  <span className="text-xs font-bold font-mono text-white">0.6g</span>
                </div>
                <div className="p-1.5 rounded bg-zinc-900/80 border border-white/5">
                  <span className="text-[9px] font-mono text-zinc-400 block">RENNET</span>
                  <span className="text-xs font-bold font-mono text-amber-400">100% MICRO</span>
                </div>
              </div>
            </div>

            {/* Bottom Base & Lot Code */}
            <div className="w-full pt-3 border-t border-white/10 flex items-center justify-between text-[9px] font-mono text-zinc-500">
              <span>LOT: NX-2601-A</span>
              <span className="text-emerald-400">BATCH TESTED: 100% PASS</span>
            </div>
          </div>

          {/* Quick Hotspot Pills below Mockup */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {HOTSPOTS.map((spot) => (
              <button
                key={spot.id}
                onClick={() => setActiveHotspot(spot)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                  activeHotspot.id === spot.id
                    ? "bg-amber-400 text-black font-bold shadow-md shadow-amber-400/30 scale-105"
                    : "bg-zinc-900/80 text-zinc-400 hover:text-white border border-zinc-800"
                }`}
              >
                {spot.tag}
              </button>
            ))}
          </div>
        </div>

        {/* Detailed Breakdown Card */}
        <div className="lg:col-span-6">
          <div className="glass-card rounded-2xl p-6 sm:p-8 border border-zinc-700/60 shadow-xl relative">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[11px] font-mono uppercase tracking-widest text-amber-400 font-bold">
                {activeHotspot.category}
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-zinc-800 text-[10px] font-mono text-zinc-400 border border-zinc-700">
                ACTIVE PARAMETER
              </span>
            </div>

            <h4 className="text-2xl font-bold text-white tracking-tight">
              {activeHotspot.title}
            </h4>

            <p className="text-sm text-zinc-300 leading-relaxed mt-3">
              {activeHotspot.description}
            </p>

            <div className="mt-6 pt-6 border-t border-white/10">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-3">
                Laboratory Specifications
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {activeHotspot.specs.map((spec, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-black/40 border border-white/5 flex items-center gap-2"
                  >
                    <Check className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                    <span className="text-xs font-mono text-zinc-200">{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-amber-500/5 border border-amber-500/20 flex items-start gap-3">
              <Info className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-zinc-300 leading-normal">
                <strong>The NiyaX Biological Standard:</strong> We eliminate all non-essential excipients. No artificial coloring, no synthetic foaming retardants, and no chemical thickeners (xanthan/guar gum).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
