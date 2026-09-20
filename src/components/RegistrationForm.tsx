"use client";

import React, { useState, useEffect } from "react";
import {
  ShieldCheck,
  Zap,
  CheckCircle2,
  Copy,
  Check,
  Share2,
  Lock,
  Sparkles,
  ArrowRight,
  AlertCircle
} from "lucide-react";

interface SuccessData {
  queueNumber: number;
  referralCode: string;
  founderTier: string;
  lockedDiscount: string;
  message: string;
  alreadyRegistered?: boolean;
}

export default function RegistrationForm() {
  const [tier, setTier] = useState<"protocol_subscription" | "single_batch">("protocol_subscription");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("Paris");
  const [discipline, setDiscipline] = useState("MMA / Combat Sports");
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successData, setSuccessData] = useState<SuccessData | null>(null);
  const [copied, setCopied] = useState(false);

  const [stats, setStats] = useState({
    totalReserved: 142,
    remainingAllocation: 358,
    batchLimit: 500,
  });

  useEffect(() => {
    // Fetch live allocation status
    fetch("/api/waitlist")
      .then((res) => res.json())
      .then((data) => {
        if (data.totalReserved) {
          setStats({
            totalReserved: data.totalReserved,
            remainingAllocation: data.remainingAllocation,
            batchLimit: data.batchLimit,
          });
        }
      })
      .catch(() => {
        // Fallback to default stats
      });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          city,
          discipline,
          tier,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Unable to reserve your allocation. Please try again.");
      }

      setSuccessData(data);
      // Update local allocation display
      setStats((prev) => ({
        ...prev,
        totalReserved: Math.min(prev.batchLimit, prev.totalReserved + 1),
        remainingAllocation: Math.max(0, prev.remainingAllocation - 1),
      }));
    } catch (err: any) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const copyReferral = () => {
    if (!successData?.referralCode) return;
    const url = `${typeof window !== "undefined" ? window.location.origin : ""}?ref=${successData.referralCode}`;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div id="reserve-form" className="relative scroll-mt-28">
      {/* Allocation status bar */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-zinc-900/90 border border-zinc-800 shadow-inner">
        <div className="flex items-center gap-3">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
          </span>
          <div>
            <p className="text-xs font-mono uppercase tracking-wider text-zinc-400">
              Inaugural Batch 001 Allocation
            </p>
            <p className="text-sm font-bold font-mono text-zinc-100">
              <span className="text-amber-400">{stats.totalReserved}</span> / {stats.batchLimit} Founder Slots Claimed
            </p>
          </div>
        </div>

        <div className="w-full sm:w-48 bg-zinc-800/80 rounded-full h-2.5 overflow-hidden border border-white/5">
          <div
            className="bg-gradient-to-r from-amber-500 to-amber-300 h-2.5 rounded-full transition-all duration-1000"
            style={{ width: `${(stats.totalReserved / stats.batchLimit) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Main Card */}
      <div className="glass-card rounded-2xl p-6 sm:p-8 md:p-10 border border-zinc-700/50 shadow-2xl relative overflow-hidden">
        {/* Glow accent */}
        <div className="absolute -top-24 -right-24 w-60 h-60 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        {successData ? (
          /* Success Screen: Founder Certificate */
          <div className="space-y-6 animate-in fade-in zoom-in-95 duration-500">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono uppercase">
              <CheckCircle2 className="w-4 h-4" />
              Allocation Confirmed
            </div>

            <div className="border border-amber-500/30 rounded-xl p-6 bg-gradient-to-b from-amber-500/5 to-transparent relative">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400/80">
                    Official Founder Entry
                  </span>
                  <h3 className="text-3xl font-black font-mono text-white tracking-tight mt-1">
                    QUEUE #{successData.queueNumber}
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1 font-mono">
                    Tier: <span className="text-zinc-200 font-semibold">{successData.founderTier}</span>
                  </p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 font-mono font-bold text-lg">
                  NX
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-2 gap-4 text-xs font-mono">
                <div>
                  <span className="text-zinc-500 uppercase block">Locked Advantage</span>
                  <span className="text-amber-300 font-bold">{successData.lockedDiscount}</span>
                </div>
                <div>
                  <span className="text-zinc-500 uppercase block">Dispatch Priority</span>
                  <span className="text-zinc-200 font-bold">Inaugural Lot 001 Access</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-xs text-zinc-400">
                  Referral Pass: <span className="font-mono text-white font-bold">{successData.referralCode}</span>
                </div>
                <button
                  type="button"
                  onClick={copyReferral}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-mono text-zinc-200 border border-zinc-600 transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Link Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-zinc-400" />
                      <span>Copy Invite Link</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 text-xs text-zinc-400 space-y-2">
              <p className="flex items-center gap-2 text-zinc-300 font-medium">
                <Sparkles className="w-4 h-4 text-amber-400" />
                What happens next?
              </p>
              <p>
                We have recorded your allocation. You will receive a private dispatch alert 72 hours prior to official public release to claim your 900g Dark Artisan Chocolate Isolate at Founder Pricing.
              </p>
              <p className="text-[11px] text-zinc-500">
                A verification record has been dispatched to <strong className="text-zinc-300">{email}</strong>.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setSuccessData(null)}
              className="text-xs text-zinc-500 hover:text-zinc-300 underline font-mono cursor-pointer"
            >
              Register another athlete / coach
            </button>
          </div>
        ) : (
          /* Active Registration Form */
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <span className="text-[11px] font-mono tracking-widest uppercase text-amber-400 font-semibold block mb-1">
                Zero Financial Commitment • Early Interest Waitlist
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                Reserve Your Batch 001 Allocation
              </h3>
              <p className="text-sm text-zinc-400 mt-2">
                We are producing an initial micro-batch of 500 numbered 900g tubs. Register your interest now to lock in founder privileges before general availability.
              </p>
            </div>

            {/* Tier Selector Tabs */}
            <div className="grid grid-cols-2 gap-2 p-1.5 rounded-xl bg-zinc-900 border border-zinc-800">
              <button
                type="button"
                onClick={() => setTier("protocol_subscription")}
                className={`py-3 px-3 rounded-lg text-xs font-mono font-bold transition-all text-center flex flex-col items-center justify-center gap-1 cursor-pointer ${
                  tier === "protocol_subscription"
                    ? "bg-amber-400 text-black shadow-md shadow-amber-500/20"
                    : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                <span className="flex items-center gap-1.5 uppercase">
                  <Zap className="w-3.5 h-3.5" />
                  The Protocol
                </span>
                <span className={`text-[10px] font-normal ${tier === "protocol_subscription" ? "text-black/80" : "text-amber-400"}`}>
                  20% Off For Life • Shaker Included
                </span>
              </button>

              <button
                type="button"
                onClick={() => setTier("single_batch")}
                className={`py-3 px-3 rounded-lg text-xs font-mono font-bold transition-all text-center flex flex-col items-center justify-center gap-1 cursor-pointer ${
                  tier === "single_batch"
                    ? "bg-amber-400 text-black shadow-md shadow-amber-500/20"
                    : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                <span className="uppercase">Single Batch</span>
                <span className={`text-[10px] font-normal ${tier === "single_batch" ? "text-black/80" : "text-zinc-500"}`}>
                  One-Time Reservation Interest
                </span>
              </button>
            </div>

            {/* Error Message */}
            {error && (
              <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 flex items-center gap-2 text-xs text-red-400 font-mono">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{error}</span>
              </div>
            )}

            {/* Input Fields */}
            <div className="space-y-4">
              <div>
                <label htmlFor="athlete-name" className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                  Full Name / Athlete Alias
                </label>
                <input
                  id="athlete-name"
                  type="text"
                  name="name"
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Youssef Hernandez"
                  className="w-full min-h-[48px] px-4 rounded-xl bg-zinc-900/90 border border-zinc-700/80 text-white text-sm placeholder-zinc-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="athlete-email" className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                  Direct Email Address <span className="text-amber-400">*</span>
                </label>
                <input
                  id="athlete-email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  inputMode="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="athlete@gym.com"
                  className="w-full min-h-[48px] px-4 rounded-xl bg-zinc-900/90 border border-zinc-700/80 text-white text-sm placeholder-zinc-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="athlete-city" className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                    Primary Regional Hub
                  </label>
                  <select
                    id="athlete-city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full min-h-[48px] px-4 rounded-xl bg-zinc-900/90 border border-zinc-700/80 text-white text-sm focus:outline-none focus:border-amber-400 transition-colors cursor-pointer"
                  >
                    <option value="Paris">Paris, France (Île-de-France)</option>
                    <option value="Madrid">Madrid, Spain (Iberia)</option>
                    <option value="Casablanca">Casablanca, Morocco (Maghreb)</option>
                    <option value="London">London, United Kingdom</option>
                    <option value="Dubai">Dubai, UAE</option>
                    <option value="Other">Other / International</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="athlete-discipline" className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                    Primary Discipline
                  </label>
                  <select
                    id="athlete-discipline"
                    value={discipline}
                    onChange={(e) => setDiscipline(e.target.value)}
                    className="w-full min-h-[48px] px-4 rounded-xl bg-zinc-900/90 border border-zinc-700/80 text-white text-sm focus:outline-none focus:border-amber-400 transition-colors cursor-pointer"
                  >
                    <option value="MMA / Combat Sports">MMA / Combat Sports</option>
                    <option value="BJJ / Grappling">BJJ / Grappling</option>
                    <option value="Boxing / Muay Thai">Boxing / Muay Thai</option>
                    <option value="CrossFit / Hyrox">CrossFit / Hyrox</option>
                    <option value="Biohacking & Longevity">Biohacking & Longevity</option>
                    <option value="Olympic Weightlifting">Olympic Weightlifting</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Reassurance Banner */}
            <div className="flex items-center gap-2.5 px-4 py-3 rounded-lg bg-zinc-900/50 border border-zinc-800/80 text-xs text-zinc-400">
              <Lock className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <span>
                <strong>Zero payment collected today.</strong> You are reserving an official position in the batch queue.
              </span>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full min-h-[52px] px-6 rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black font-extrabold uppercase font-mono tracking-wider text-sm shadow-xl shadow-amber-500/20 transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
            >
              {loading ? (
                <span className="inline-flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
                  Securing Position...
                </span>
              ) : (
                <>
                  <span>Claim Early Founder Allocation</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
