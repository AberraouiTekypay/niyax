import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NiyaX | The Clean-Label Human Performance Standard",
  description: "Micro-filtered CFM native whey isolate, 100% microbial rennet, zero alcohol flavor carriers, zero artificial sweeteners. The world's purest protein standard across Paris, Madrid, and Casablanca.",
  keywords: [
    "clean protein",
    "microbial rennet whey",
    "CFM whey isolate",
    "alcohol-free flavoring",
    "halal protein isolate",
    "combat sports nutrition",
    "biohacking protein",
    "NiyaX"
  ],
  authors: [{ name: "NiyaX Performance Lab" }],
  openGraph: {
    title: "NiyaX | The Clean-Label Human Performance Standard",
    description: "Zero shortcuts. Uncompromised output. Cold ceramic microfiltration with 100% non-animal microbial rennet.",
    url: "https://niyax.com",
    siteName: "NiyaX Performance",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NiyaX | Pure Performance Standard",
    description: "Cold microfiltered whey isolate engineered without chemical compromises.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} dark`}>
      <body className="bg-[#070709] text-zinc-100 min-h-screen selection:bg-amber-500 selection:text-black font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
