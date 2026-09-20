"use client";

import React from "react";
import { ShieldCheck, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-[#050507] py-16 text-zinc-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-amber-400 flex items-center justify-center font-black text-black text-sm">
                NX
              </div>
              <span className="text-lg font-extrabold tracking-widest text-white uppercase">
                NIYAX
              </span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed font-sans max-w-sm">
              The clean-label human performance standard. Micro-filtered CFM native whey isolate, 100% microbial rennet, zero alcohol flavor carriers, zero chemical shortcuts.
            </p>
            <div className="flex items-center gap-4 text-[11px] text-zinc-500">
              <span>PARIS</span> • <span>MADRID</span> • <span>CASABLANCA</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-zinc-200 uppercase font-bold tracking-wider block text-[11px]">
              Scientific Standards
            </span>
            <ul className="space-y-2 text-zinc-400">
              <li><a href="#the-standard" className="hover:text-amber-400 transition-colors">CFM Cold Microfiltration</a></li>
              <li><a href="#the-standard" className="hover:text-amber-400 transition-colors">Microbial Rennet Fermentation</a></li>
              <li><a href="#batch-verifier" className="hover:text-amber-400 transition-colors">Supercritical CO2 Flavoring</a></li>
              <li><a href="#batch-verifier" className="hover:text-amber-400 transition-colors">Eurofins Third-Party HPLC Lab</a></li>
            </ul>
          </div>

          {/* Standards & Certifications */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-zinc-200 uppercase font-bold tracking-wider block text-[11px]">
              Quality Accreditations
            </span>
            <div className="grid grid-cols-2 gap-2 text-[10px]">
              <div className="p-2 rounded bg-zinc-900 border border-white/5 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>ISO-17025 Tested</span>
              </div>
              <div className="p-2 rounded bg-zinc-900 border border-white/5 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>100% Microbial Rennet</span>
              </div>
              <div className="p-2 rounded bg-zinc-900 border border-white/5 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>Zero Alcohol Solvents</span>
              </div>
              <div className="p-2 rounded bg-zinc-900 border border-white/5 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>WADA Compliant Clean</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright & disclaimers */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500">
          <p>© 2026 NiyaX Performance Lab. All rights reserved.</p>
          <p className="text-center sm:text-right">
            Purity of Intent. Absolute in Output.
          </p>
        </div>
      </div>
    </footer>
  );
}
