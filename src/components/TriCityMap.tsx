"use client";

import React, { useState } from "react";
import { MapPin, Shield, Star, Users } from "lucide-react";

interface CityHub {
  city: string;
  country: string;
  flag: string;
  keyGyms: string[];
  coachQuote: string;
  coachName: string;
  role: string;
}

const HUBS: CityHub[] = [
  {
    city: "Paris",
    country: "France",
    flag: "🇫🇷",
    keyGyms: ["MMA Factory (Paris 12)", "Cercle Tissier (Vincennes)", "Platinium Hybrid MMA"],
    coachQuote:
      "When my fighters are cutting weight to make 70kg, every gram of water and every minute of digestion counts. Standard whey sits in the stomach like lead. NiyaX clears the gut in under 40 minutes with zero bloat.",
    coachName: "Coach Tarik B.",
    role: "Head Conditioning Coach, Pro MMA Camp Paris",
  },
  {
    city: "Madrid",
    country: "Spain",
    flag: "🇪🇸",
    keyGyms: ["Gimnasio Barceló", "Lotus Club BJJ Madrid", "Metropolitano Fight Hub"],
    coachQuote:
      "Our jiu-jitsu black belts roll 5 rounds of 10 minutes every afternoon. If your protein contains sucralose or artificial junk, you feel nauseous on the mats. NiyaX is the cleanest isolate I have tested in 15 years.",
    coachName: "Prof. Mateo R.",
    role: "BJJ 3rd Degree Black Belt, Madrid",
  },
  {
    city: "Casablanca",
    country: "Morocco",
    flag: "🇲🇦",
    keyGyms: ["Oasis Combat Center", "Racine Fight Academy", "BFIT Club Anfa"],
    coachQuote:
      "For athletes who demand ethical sanctity alongside elite Olympic-grade performance, NiyaX is a revelation. Microbial rennet, zero alcohol flavor carriers, pure European CFM. Zero compromise.",
    coachName: "Youssef E.",
    role: "Olympic Lifting & Combat Performance Specialist, Casablanca",
  },
];

export default function TriCityMap() {
  const [activeCity, setActiveCity] = useState(HUBS[0]);

  return (
    <div id="tri-city" className="py-16 scroll-mt-24">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold flex items-center justify-center gap-1.5">
          <Users className="w-4 h-4" />
          The Tri-City Mat Seed
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2">
          Seeded Across Paris, Madrid & Casablanca
        </h2>
        <p className="text-sm text-zinc-400 mt-3">
          NiyaX was battle-tested in the locker rooms of champion combat sports academies before a single tub was released to the public.
        </p>
      </div>

      {/* City Switcher */}
      <div className="grid grid-cols-3 gap-3 max-w-2xl mx-auto mb-8">
        {HUBS.map((hub) => (
          <button
            key={hub.city}
            onClick={() => setActiveCity(hub)}
            className={`p-3 sm:p-4 rounded-xl text-center font-mono transition-all cursor-pointer border ${
              activeCity.city === hub.city
                ? "bg-amber-400 text-black font-bold border-amber-400 shadow-lg shadow-amber-400/20 scale-102"
                : "bg-zinc-900/80 text-zinc-300 border-zinc-800 hover:border-zinc-700"
            }`}
          >
            <span className="text-xl sm:text-2xl block mb-1">{hub.flag}</span>
            <span className="text-xs sm:text-sm font-bold uppercase block">{hub.city}</span>
            <span className={`text-[10px] hidden sm:block ${activeCity.city === hub.city ? "text-black/80" : "text-zinc-500"}`}>
              {hub.country}
            </span>
          </button>
        ))}
      </div>

      {/* Active Hub Card */}
      <div className="max-w-4xl mx-auto glass-card rounded-2xl p-6 sm:p-8 border border-zinc-700/60 shadow-xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Gym Hubs */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2 text-amber-400 font-mono text-xs uppercase tracking-wider">
              <MapPin className="w-4 h-4" />
              <span>Locker Room Partner Hubs</span>
            </div>
            <div className="space-y-2">
              {activeCity.keyGyms.map((gym, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-lg bg-zinc-900/90 border border-white/5 text-xs font-mono text-zinc-200 flex items-center justify-between"
                >
                  <span>{gym}</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                </div>
              ))}
            </div>
            <p className="text-[11px] font-mono text-zinc-500">
              NFC-enabled rapid refill dispensers installed inside coach corners.
            </p>
          </div>

          {/* Coach Testimonial */}
          <div className="md:col-span-7 border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-8">
            <div className="flex items-center gap-1 text-amber-400 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <blockquote className="text-sm sm:text-base text-zinc-200 italic leading-relaxed">
              "{activeCity.coachQuote}"
            </blockquote>
            <div className="mt-4 pt-4 border-t border-white/5">
              <p className="text-sm font-bold text-white font-mono">{activeCity.coachName}</p>
              <p className="text-xs text-amber-400/80 font-mono">{activeCity.role}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
