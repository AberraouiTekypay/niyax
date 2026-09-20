"use client";

import React, { useState, useEffect } from "react";
import { ShieldCheck, ArrowRight, Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#070709]/85 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/80"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand Mark */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center font-black text-black text-lg tracking-tighter shadow-lg shadow-amber-500/20">
              NX
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-widest text-white uppercase font-mono">
                NIYAX
              </span>
              <span className="text-[9px] uppercase tracking-widest text-amber-400/80 -mt-1 font-mono">
                Performance Lab
              </span>
            </div>
          </div>

          {/* Center Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-mono tracking-wider text-zinc-400">
            <button
              onClick={() => scrollToSection("the-standard")}
              className="hover:text-amber-400 transition-colors uppercase cursor-pointer"
            >
              The Standard
            </button>
            <button
              onClick={() => scrollToSection("product-specs")}
              className="hover:text-amber-400 transition-colors uppercase cursor-pointer"
            >
              Specifications
            </button>
            <button
              onClick={() => scrollToSection("batch-verifier")}
              className="hover:text-amber-400 transition-colors uppercase cursor-pointer flex items-center gap-1.5"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              Batch CoA Lookup
            </button>
            <button
              onClick={() => scrollToSection("tri-city")}
              className="hover:text-amber-400 transition-colors uppercase cursor-pointer"
            >
              Tri-City Hubs
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="hover:text-amber-400 transition-colors uppercase cursor-pointer"
            >
              FAQ
            </button>
          </nav>

          {/* Right Action */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-[11px] font-mono text-amber-300">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
              BATCH 001 ALLOCATION
            </div>

            <button
              onClick={() => scrollToSection("reserve-form")}
              className="group relative inline-flex items-center justify-center px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-black bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/25 active:scale-95 cursor-pointer"
            >
              <span>Reserve Early Access</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={() => scrollToSection("reserve-form")}
              className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-black bg-amber-400 rounded-md"
            >
              Reserve
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-400 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0a0d] border-b border-white/10 px-6 py-6 flex flex-col gap-4 font-mono text-sm tracking-wider">
          <button
            onClick={() => scrollToSection("the-standard")}
            className="text-left text-zinc-300 hover:text-amber-400 py-2 border-b border-white/5"
          >
            THE STANDARD
          </button>
          <button
            onClick={() => scrollToSection("product-specs")}
            className="text-left text-zinc-300 hover:text-amber-400 py-2 border-b border-white/5"
          >
            SPECIFICATIONS & PURITY
          </button>
          <button
            onClick={() => scrollToSection("batch-verifier")}
            className="text-left text-zinc-300 hover:text-amber-400 py-2 border-b border-white/5 flex items-center justify-between"
          >
            <span>BATCH COA LOOKUP</span>
            <ShieldCheck className="w-4 h-4 text-amber-400" />
          </button>
          <button
            onClick={() => scrollToSection("tri-city")}
            className="text-left text-zinc-300 hover:text-amber-400 py-2 border-b border-white/5"
          >
            TRI-CITY HUBS (PARIS / MADRID / CASABLANCA)
          </button>
          <button
            onClick={() => scrollToSection("faq")}
            className="text-left text-zinc-300 hover:text-amber-400 py-2"
          >
            FAQ
          </button>
          <button
            onClick={() => scrollToSection("reserve-form")}
            className="w-full py-3 mt-2 text-center font-bold text-xs uppercase tracking-widest text-black bg-amber-400 rounded-lg"
          >
            RESERVE FOUNDER ALLOCATION
          </button>
        </div>
      )}
    </header>
  );
}
