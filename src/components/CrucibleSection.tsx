"use client";

import React from "react";
import Image from "next/image";
import { Flame, ShieldCheck, Heart, Zap, ArrowRight } from "lucide-react";

export default function CrucibleSection() {
  return (
    <section className="py-20 relative">
      {/* Visual divider line */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent mb-16" />

      {/* Main Feature 1: The Fighter in Deep Focus */}
      <div className="relative rounded-3xl overflow-hidden border border-zinc-700/80 shadow-2xl shadow-black mb-16">
        <div className="relative w-full h-[520px] sm:h-[580px] lg:h-[640px]">
          <Image
            src="/images/fighter-sweat.jpg"
            alt="Exhausted combat athlete after brutal sparring session"
            fill
            className="object-cover object-center filter brightness-[0.85] contrast-[1.1]"
          />

          {/* Cinematic lighting gradients */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 z-10" />

          {/* Emotional Copy Overlay */}
          <div className="absolute inset-0 z-20 flex flex-col justify-end sm:justify-center p-6 sm:p-12 lg:p-16 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-mono uppercase tracking-widest w-fit mb-4 backdrop-blur-md">
              <Flame className="w-3.5 h-3.5 text-amber-400" />
              <span>THE CRUCIBLE OF PURITY</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-[1.05]">
              PURITY IS NOT BORN IN A LAB. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500">
                IT IS FORGED IN THE 5TH ROUND.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-zinc-300 font-sans leading-relaxed mt-4">
              When your lungs are on fire, your heart rate is 185, and your vision tunnels on the canvas, your body rejects chemical shortcuts. You cannot tolerate synthetic sweeteners that destroy gut flora, or cheap dairy that sits in your stomach like lead.
            </p>

            <p className="text-xs sm:text-sm text-zinc-400 font-mono mt-3">
              <strong>Niyyah (نِيَّة):</strong> Purity of intent. No compromises. No unlisted solvents. Only raw, native amino fuel designed to rehydrate, rebuild, and conquer.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#reserve-form"
                className="px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-mono font-extrabold text-xs uppercase tracking-wider transition-all shadow-lg shadow-amber-500/30 flex items-center gap-2 cursor-pointer"
              >
                <span>Reserve Batch 001 Allocation</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <span className="text-xs font-mono text-zinc-400">
                Limited to 500 Founder Members
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Feature 2: Side-by-Side Athlete Focus & Brand Philosophy */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-5 relative">
          <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden border border-zinc-700/80 shadow-2xl group">
            <Image
              src="/images/athlete-focus.jpg"
              alt="Elite female fighter holding the NiyaX shaker under gym spotlight"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-5 left-5 right-5 z-10 p-4 rounded-xl bg-black/60 backdrop-blur-md border border-white/10">
              <p className="text-xs font-mono text-amber-400 font-bold uppercase">
                PARIS • MADRID • CASABLANCA
              </p>
              <p className="text-xs text-zinc-200 mt-1">
                "Zero nausea during 5-round sparring. Cleanest post-workout gastric clearance I have ever felt."
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-6 lg:pl-4">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold block">
            The Uncompromising Standard
          </span>

          <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-mono">
            For Athletes Who Treat Their Bodies Like a Temple.
          </h3>

          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-sans">
            Commercial sports nutrition is broken. Brands rely on calf stomach enzymes, dissolve flavorings in ethanol and propylene glycol, and mask cheap dairy with artificial sucralose. They count on athletes being too tired to read the fine print.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 font-mono text-xs">
            <div className="p-4 rounded-xl bg-zinc-900/90 border border-zinc-800 space-y-2">
              <span className="text-amber-400 font-bold flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" />
                100% Microbial Rennet
              </span>
              <p className="text-zinc-400 font-sans text-xs">
                Zero bovine/calf stomach coagulants. Pure fungal fermentation (*Mucor miehei*). Strict Halal and ethical purity by biological design.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-zinc-900/90 border border-zinc-800 space-y-2">
              <span className="text-amber-400 font-bold flex items-center gap-2">
                <Zap className="w-4 h-4" />
                Zero Alcohol Carriers
              </span>
              <p className="text-zinc-400 font-sans text-xs">
                Supercritical CO2 roasted cocoa extraction. 0.00% ethyl alcohol, 0% propylene glycol solvents. Rich, authentic dark chocolate.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-zinc-900/90 border border-zinc-800 space-y-2">
              <span className="text-amber-400 font-bold flex items-center gap-2">
                <Heart className="w-4 h-4" />
                Zero Gut Distension
              </span>
              <p className="text-zinc-400 font-sans text-xs">
                Reb-M fermented stevia and katemfe fruit protein (Thaumatin). Eliminates osmotic gas and bloating so you can train immediately.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-zinc-900/90 border border-zinc-800 space-y-2">
              <span className="text-amber-400 font-bold flex items-center gap-2">
                <Flame className="w-4 h-4" />
                38-Min Transit Speed
              </span>
              <p className="text-zinc-400 font-sans text-xs">
                Enhanced with DigeZyme® multi-enzyme core for rapid hydrolysis and instantaneous glycogen replenishment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
