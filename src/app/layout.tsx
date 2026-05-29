import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";
import AmbientBG from "@/components/bg/AmbientBG";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const grotesk = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "MEHEXA | AI-Powered Exosome Solutions",
    template: "%s | MEHEXA",
  },
  description:
    "AI-engineered exosomes for next-generation therapeutics, regenerative medicine, and cellular communication. The operating system for precision drug delivery.",
  metadataBase: new URL("https://mehexa.bio"),
  manifest: "/site.webmanifest",
  openGraph: {
    title: "MEHEXA | AI-Powered Exosome Solutions",
    description:
      "Natural biocompatible carriers · programmable payloads · AI-driven targeting.",
    type: "website",
    siteName: "MEHEXA",
  },
  twitter: {
    card: "summary_large_image",
    title: "MEHEXA | AI-Powered Exosome Solutions",
    description:
      "Natural biocompatible carriers · programmable payloads · AI-driven targeting.",
  },
};

export const viewport: Viewport = {
  themeColor: "#fafaf9",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${grotesk.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-surface-50 text-ink-100 selection:bg-gold-400 selection:text-navy-900">
        <AmbientBG />
        <SmoothScroll>
          <Navbar />
          <main className="flex-1 relative">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
