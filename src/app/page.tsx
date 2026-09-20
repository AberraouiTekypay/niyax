import React from "react";
import Navbar from "@/components/Navbar";
import RegistrationForm from "@/components/RegistrationForm";
import TubVisualizer from "@/components/TubVisualizer";
import ComparisonMatrix from "@/components/ComparisonMatrix";
import BatchVerifier from "@/components/BatchVerifier";
import TriCityMap from "@/components/TriCityMap";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import {
  ShieldCheck,
  Zap,
  Dna,
  Clock,
  Sparkles,
  ArrowRight,
  Flame,
  Award,
  Layers,
  CheckCircle2,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#070709] text-zinc-100 selection:bg-amber-400 selection:text-black relative overflow-hidden bg-grid-pattern">
      {/* Dynamic Ambient Background Glows */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-amber-500/10 via-amber-600/5 to-transparent blur-[140px] pointer-events-none -z-10" />
      <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-sky-500/5 blur-[160px] pointer-events-none -z-10" />

      {/* Navigation */}
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36">
        {/* ===================== HERO SECTION ===================== */}
        <section className="relative pb-16 lg:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Headline & Pitch Column */}
            <div className="lg:col-span-6 space-y-6">
              {/* Batch Pill */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono tracking-wider">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
                <span>BATCH 001 ALLOCATION • 500 NUMBERED TUBS</span>
              </div>

              {/* Master Headline */}
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black tracking-tight text-white uppercase leading-[1.05]">
                THE ABSOLUTE <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500">
                  STANDARD.
                </span>{" "}
                <br />
                ZERO SHORTCUTS.
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-sans max-w-xl">
                The world's purest native whey isolate. Micro-filtered CFM ceramic extraction, 100% non-animal microbial rennet, and zero alcohol-based flavor carriers. Engineered for elite output across Paris, Madrid, and Casablanca.
              </p>

              {/* Rapid Metric Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 font-mono">
                <div className="p-3 rounded-xl bg-zinc-900/80 border border-white/5">
                  <span className="text-xs text-amber-400 block font-bold">26.1g</span>
                  <span className="text-[10px] text-zinc-400 uppercase tracking-wider">Protein/30g</span>
                </div>
                <div className="p-3 rounded-xl bg-zinc-900/80 border border-white/5">
                  <span className="text-xs text-amber-400 block font-bold">&lt; 0.08g</span>
                  <span className="text-[10px] text-zinc-400 uppercase tracking-wider">Lactose</span>
                </div>
                <div className="p-3 rounded-xl bg-zinc-900/80 border border-white/5">
                  <span className="text-xs text-amber-400 block font-bold">100%</span>
                  <span className="text-[10px] text-zinc-400 uppercase tracking-wider">Microbial Rennet</span>
                </div>
                <div className="p-3 rounded-xl bg-zinc-900/80 border border-white/5">
                  <span className="text-xs text-amber-400 block font-bold">0.00%</span>
                  <span className="text-[10px] text-zinc-400 uppercase tracking-wider">Alcohol Carriers</span>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-6 pt-4 text-xs font-mono text-zinc-400 border-t border-white/5">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>ISO-17025 Batch Verified</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-400" />
                  <span>38-Min Gastric Clearance</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-amber-400" />
                  <span>Strict Halal Purity Standard</span>
                </div>
              </div>
            </div>

            {/* Right Early Interest Form Column */}
            <div className="lg:col-span-6">
              <RegistrationForm />
            </div>
          </div>
        </section>

        {/* ===================== LOGO / GYM CREDIBILITY TICKER ===================== */}
        <section className="py-8 border-y border-white/5 my-8">
          <p className="text-center text-[11px] font-mono uppercase tracking-widest text-zinc-500 mb-6">
            Trusted & Field-Tested by Combat Coaches & Elite Athletes In
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 font-mono font-extrabold text-sm sm:text-base text-zinc-500 tracking-wider">
            <span className="hover:text-zinc-300 transition-colors">MMA FACTORY PARIS</span>
            <span className="hover:text-zinc-300 transition-colors">GIMNASIO BARCELÓ MADRID</span>
            <span className="hover:text-zinc-300 transition-colors">OASIS COMBAT CASABLANCA</span>
            <span className="hover:text-zinc-300 transition-colors">CERCLE TISSIER</span>
            <span className="hover:text-zinc-300 transition-colors">EUROFINS CERTIFIED</span>
          </div>
        </section>

        {/* ===================== THREE BIOCHEMICAL PILLARS ===================== */}
        <section id="product-specs" className="py-16 scroll-mt-24">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold">
              The Architecture of Purity
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2">
              Three Pillars of Absolute Performance
            </h2>
            <p className="text-sm text-zinc-400 mt-3">
              We engineered out every industrial shortcut common in commercial sports supplements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Pillar 1 */}
            <div className="glass-card glass-card-hover rounded-2xl p-7 border border-zinc-800 relative">
              <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 mb-6">
                <Dna className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 font-bold block mb-1">
                Extraction Standard
              </span>
              <h3 className="text-xl font-bold text-white font-mono">
                Cold Ceramic Microfiltration (CFM)
              </h3>
              <p className="text-xs text-zinc-300 leading-relaxed mt-3">
                Extracted at low temperatures below 10°C using non-chemical ceramic filtration. We preserve native whey immunoglobulins and lactoferrin while removing 99.8% of lactose and milk fats.
              </p>
              <div className="mt-6 pt-4 border-t border-white/5 text-[11px] font-mono text-zinc-400 flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                <span>Zero heat-induced protein denaturation</span>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="glass-card glass-card-hover rounded-2xl p-7 border border-zinc-800 relative">
              <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 font-bold block mb-1">
                Ethical & Dietary Purity
              </span>
              <h3 className="text-xl font-bold text-white font-mono">
                100% Microbial Rennet & Clean Carriers
              </h3>
              <p className="text-xs text-zinc-300 leading-relaxed mt-3">
                Coagulated strictly with pure fungal cultures (*Mucor miehei*), eliminating animal stomach enzymes. Combined with 0.00% alcohol solvent carriers in our Dutch cocoa extraction.
              </p>
              <div className="mt-6 pt-4 border-t border-white/5 text-[11px] font-mono text-zinc-400 flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                <span>Strict Halal compliance by biological design</span>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="glass-card glass-card-hover rounded-2xl p-7 border border-zinc-800 relative">
              <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 mb-6">
                <Zap className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 font-bold block mb-1">
                Digestive Velocity
              </span>
              <h3 className="text-xl font-bold text-white font-mono">
                DigeZyme® + Zero Sucralose
              </h3>
              <p className="text-xs text-zinc-300 leading-relaxed mt-3">
                Sweetened with fermentation-derived Reb-M Stevia and Thaumatin fruit protein. Enhanced with broad-spectrum non-animal digestive enzymes for 38-minute gastric emptying with zero bloating.
              </p>
              <div className="mt-6 pt-4 border-t border-white/5 text-[11px] font-mono text-zinc-400 flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                <span>Zero gut microbiome disruption</span>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== INTERACTIVE TUB TEARDOWN ===================== */}
        <section className="my-8">
          <TubVisualizer />
        </section>

        {/* ===================== COMPARISON MATRIX ===================== */}
        <ComparisonMatrix />

        {/* ===================== BATCH COA TRANSPARENCY ===================== */}
        <BatchVerifier />

        {/* ===================== TRI-CITY ATHLETE SEEDING ===================== */}
        <TriCityMap />

        {/* ===================== FOUNDER PROTOCOL REWARDS ===================== */}
        <section className="py-16">
          <div className="glass-card rounded-3xl p-8 sm:p-12 border border-amber-500/30 relative overflow-hidden bg-gradient-to-br from-amber-500/5 via-zinc-950/80 to-black">
            <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 blur-[100px] pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-8 space-y-4">
                <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">
                  Batch 001 Early Access Perks
                </span>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  Why Secure Your Founder Position Today?
                </h3>
                <p className="text-sm text-zinc-300 leading-relaxed max-w-2xl">
                  By registering early interest in Batch 001, you join an exclusive group of 500 founding athletes and coaches shaping the future of clean sports nutrition.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-xs font-mono">
                  <div className="p-4 rounded-xl bg-black/50 border border-white/5 space-y-1">
                    <span className="text-amber-400 font-bold block text-sm">20% Lifetime Lock</span>
                    <p className="text-zinc-400 font-sans text-xs">
                      Lock in €44.00/tub (regular €55.00) permanently for all future orders.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-black/50 border border-white/5 space-y-1">
                    <span className="text-amber-400 font-bold block text-sm">Matte Black Stainless Shaker</span>
                    <p className="text-zinc-400 font-sans text-xs">
                      Complimentary 750ml insulated leakproof shaker with your inaugural tub.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-black/50 border border-white/5 space-y-1">
                    <span className="text-amber-400 font-bold block text-sm">Priority Dispatch Window</span>
                    <p className="text-zinc-400 font-sans text-xs">
                      Private 72-hour access window before public inventory goes live.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-black/50 border border-white/5 space-y-1">
                    <span className="text-amber-400 font-bold block text-sm">The Apex Discord Circle</span>
                    <p className="text-zinc-400 font-sans text-xs">
                      Direct access to sports science Q&As, weigh-in protocols, and sparring breakdowns.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col items-center justify-center text-center p-6 rounded-2xl bg-zinc-900/80 border border-zinc-700">
                <Sparkles className="w-8 h-8 text-amber-400 mb-3" />
                <span className="text-xs font-mono uppercase text-zinc-400 block">Initial Allocation</span>
                <span className="text-3xl font-black font-mono text-white my-1">500 Tubs Only</span>
                <p className="text-xs text-zinc-400 mb-6">
                  Zero financial risk. No credit card required.
                </p>
                <a
                  href="#reserve-form"
                  className="w-full py-3.5 px-6 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-bold font-mono text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 cursor-pointer"
                >
                  <span>Claim Priority Pass</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== FAQ SECTION ===================== */}
        <FAQ />
      </main>

      {/* ===================== FOOTER ===================== */}
      <Footer />
    </div>
  );
}
