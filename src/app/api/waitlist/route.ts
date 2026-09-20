import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// In-memory cache for serverless environments (e.g. Vercel)
let memorySubscribers: WaitlistEntry[] = [];

// Storage path for early interest subscribers
const DATA_FILE = path.join(process.cwd(), "data", "waitlist.json");

interface WaitlistEntry {
  id: string;
  name: string;
  email: string;
  city: string;
  discipline: string;
  tier: "protocol_subscription" | "single_batch";
  queueNumber: number;
  referralCode: string;
  timestamp: string;
}

function getExistingSubscribers(): WaitlistEntry[] {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const data = fs.readFileSync(DATA_FILE, "utf-8");
      const list = JSON.parse(data);
      if (Array.isArray(list)) {
        // Merge with memory
        const ids = new Set(list.map(s => s.email.toLowerCase()));
        for (const m of memorySubscribers) {
          if (!ids.has(m.email.toLowerCase())) {
            list.push(m);
          }
        }
        return list;
      }
    }
  } catch {
    // Filesystem might be read-only in Vercel serverless functions
  }
  return memorySubscribers;
}

function saveSubscribers(subscribers: WaitlistEntry[]) {
  memorySubscribers = [...subscribers];
  try {
    const dir = path.dirname(DATA_FILE);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(DATA_FILE, JSON.stringify(subscribers, null, 2), "utf-8");
  } catch {
    // Graceful fallback for read-only lambdas
  }
}

export async function GET() {
  const subscribers = getExistingSubscribers();
  const baseCount = 142; // Seeded initial batch momentum for Batch 001 allocation
  const totalCount = baseCount + subscribers.length;
  
  return NextResponse.json({
    success: true,
    totalReserved: totalCount,
    remainingAllocation: Math.max(0, 500 - totalCount),
    batchLimit: 500,
  });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, city, discipline, tier } = body;

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { success: false, error: "Valid email address is required" },
        { status: 400 }
      );
    }

    const subscribers = getExistingSubscribers();
    const existing = subscribers.find(
      (s) => s.email.toLowerCase() === email.toLowerCase()
    );

    if (existing) {
      return NextResponse.json({
        success: true,
        alreadyRegistered: true,
        queueNumber: existing.queueNumber,
        referralCode: existing.referralCode,
        founderTier: existing.queueNumber <= 250 ? "Alpha Founder (First 250)" : "Beta Priority Member",
        lockedDiscount: "20% Lifetime Founder Allocation Locked",
        message: "You are already registered in the Founder Allocation queue!",
      });
    }

    const baseCount = 142;
    const nextQueueNumber = baseCount + subscribers.length + 1;
    const sanitizedName = (name || "FOUNDER").trim().toUpperCase().replace(/[^A-Z]/g, "").slice(0, 6) || "NX";
    const referralCode = `NX-${sanitizedName}-${Math.floor(100 + Math.random() * 900)}`;

    const newEntry: WaitlistEntry = {
      id: `usr_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      name: name?.trim() || "Anonymous Athlete",
      email: email.trim().toLowerCase(),
      city: city || "Paris",
      discipline: discipline || "Combat Sports",
      tier: tier === "single_batch" ? "single_batch" : "protocol_subscription",
      queueNumber: nextQueueNumber,
      referralCode,
      timestamp: new Date().toISOString(),
    };

    subscribers.push(newEntry);
    saveSubscribers(subscribers);

    return NextResponse.json({
      success: true,
      queueNumber: nextQueueNumber,
      referralCode,
      founderTier: nextQueueNumber <= 250 ? "Alpha Founder (First 250)" : "Beta Priority Member",
      lockedDiscount: "20% Lifetime Founder Allocation Locked",
      message: "Founder allocation confirmed. You will receive priority access before general release.",
    });
  } catch (error) {
    console.error("Waitlist API Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to process registration" },
      { status: 500 }
    );
  }
}
