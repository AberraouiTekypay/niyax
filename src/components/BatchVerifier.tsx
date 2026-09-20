"use client";

import React, { useState } from "react";
import { ShieldCheck, Search, FileText, CheckCircle2, Award, Download, ExternalLink } from "lucide-react";

export default function BatchVerifier() {
  const [lotInput, setLotInput] = useState("NX-2601-A");
  const [searched, setSearched] = useState(true);

  const sampleLots: { [key: string]: any } = {
    "NX-2601-A": {
      lotNumber: "NX-2601-A",
      productionDate: "September 2026",
      facility: "Normandy CFM Dairy Facility #FR-76-A (France)",
      testingLab: "Eurofins Scientific & ISO-17025 Analytical Laboratory",
      status: "VERIFIED COMPLIANT",
      specs: [
        { parameter: "Protein (Dry Matter Basis)", result: "91.2%", standard: "Min. 90.0%", status: "PASS" },
        { parameter: "Lactose Content", result: "0.07 g / 30g", standard: "Max. 0.20 g", status: "PASS" },
        { parameter: "Rennet Coagulation Source", result: "100% Mucor miehei (Fungal)", standard: "0% Bovine/Porcine", status: "PASS" },
        { parameter: "Alcohol Solvent Screening (Ethanol)", result: "< 0.0001% (Non-Detected)", standard: "0.00%", status: "PASS" },
        { parameter: "Propylene Glycol Carrier Screening", result: "< 0.0001% (Non-Detected)", standard: "0.00%", status: "PASS" },
        { parameter: "Lead (Pb) Heavy Metal Scan", result: "< 0.005 ppm", standard: "EU Limit: < 0.20 ppm", status: "PASS" },
        { parameter: "Cadmium (Cd) Heavy Metal Scan", result: "< 0.002 ppm", standard: "EU Limit: < 0.10 ppm", status: "PASS" },
        { parameter: "Microbiological Purity (Salmonella)", result: "Negative / 25g", standard: "Negative", status: "PASS" },
      ],
    },
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearched(true);
  };

  const currentReport = sampleLots[lotInput.trim().toUpperCase()] || sampleLots["NX-2601-A"];

  return (
    <div id="batch-verifier" className="py-16 scroll-mt-24">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold flex items-center justify-center gap-1.5">
          <ShieldCheck className="w-4 h-4" />
          Radical Transparency Engine
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2">
          Verify Every Single Tub Batch
        </h2>
        <p className="text-sm text-zinc-400 mt-3">
          Every container of NiyaX features a lot-specific QR code linked to independent ISO-accredited lab assays. Test data is never hidden behind corporate walls.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Search Bar */}
        <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3 mb-8">
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input
              type="text"
              value={lotInput}
              onChange={(e) => setLotInput(e.target.value)}
              placeholder="Enter Lot Number (e.g. NX-2601-A)"
              className="w-full min-h-[50px] pl-11 pr-4 rounded-xl bg-zinc-900 border border-zinc-700 text-white font-mono text-sm placeholder-zinc-500 focus:outline-none focus:border-amber-400 transition-colors"
            />
          </div>
          <button
            type="submit"
            className="min-h-[50px] px-6 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-mono font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Scan Assay</span>
          </button>
        </form>

        {/* Certificate Display */}
        {searched && (
          <div className="glass-card rounded-2xl p-6 sm:p-8 border border-amber-500/20 shadow-2xl relative overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-amber-400 font-bold tracking-widest">
                    CERTIFICATE OF ANALYSIS (CoA)
                  </span>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-mono border border-emerald-500/30">
                    {currentReport.status}
                  </span>
                </div>
                <h3 className="text-2xl font-bold font-mono text-white mt-1">
                  LOT BATCH: {currentReport.lotNumber}
                </h3>
                <p className="text-xs text-zinc-400 font-mono mt-0.5">
                  Extracted: {currentReport.facility} • Tested: {currentReport.productionDate}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <div className="text-right hidden sm:block">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase block">Auditing Laboratory</span>
                  <span className="text-xs font-mono text-zinc-300 font-semibold">Eurofins / ISO-17025</span>
                </div>
                <div className="w-10 h-10 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center text-amber-400">
                  <Award className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Assay Results Table */}
            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-left font-mono text-xs">
                <thead>
                  <tr className="text-zinc-500 uppercase border-b border-white/5 pb-2">
                    <th className="py-2.5">Analytical Parameter</th>
                    <th className="py-2.5">Lab Test Result</th>
                    <th className="py-2.5">Safety Reference Standard</th>
                    <th className="py-2.5 text-right">Assay Result</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {currentReport.specs.map((item: any, idx: number) => (
                    <tr key={idx} className="hover:bg-white/[0.02]">
                      <td className="py-3 text-zinc-200 font-medium">{item.parameter}</td>
                      <td className="py-3 text-amber-300 font-bold">{item.result}</td>
                      <td className="py-3 text-zinc-400">{item.standard}</td>
                      <td className="py-3 text-right">
                        <span className="inline-flex items-center gap-1 text-emerald-400 font-bold">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-zinc-500 gap-3">
              <span>Cryptographic Batch Hash: 0x9f8b...271c (Immutable Record)</span>
              <span className="text-zinc-400">100% Free of Doping / WADA Prohibited Substances</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
