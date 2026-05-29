"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import FrameSequence from "./FrameSequence";

export default function Hero() {
  return (
    <section className="relative">
      <FrameSequence seq="seq1light" scrollHeight={280} tone="light" blend="normal">
        {/* Soft floating ambient blooms */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-[55vw] h-[55vw] rounded-full bg-gold-400/12 blur-[120px]" />
          <div className="absolute -bottom-1/4 -left-1/4 w-[55vw] h-[55vw] rounded-full bg-navy-400/12 blur-[120px]" />
        </div>

        <div className="relative z-10 h-full w-full flex flex-col">
          {/* Top eyebrow */}
          <div className="pt-24 sm:pt-28 lg:pt-32 px-5 sm:px-6 lg:px-10 max-w-7xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="flex items-center gap-3"
            >
              <span className="inline-block w-8 h-px bg-gold-500" />
              <span className="eyebrow">MEHEXA · ExoTech Platform</span>
            </motion.div>
          </div>

          {/* Headline */}
          <div className="flex-1 flex items-center px-5 sm:px-6 lg:px-10 min-h-0">
            <div className="max-w-7xl mx-auto w-full">
              <motion.h1
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="display text-[clamp(2.1rem,5.4vw,5rem)] gradient-text max-w-4xl leading-[1.03]"
              >
                Programming the Future of <span className="gradient-text-gold">Precision</span> Drug Delivery
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.5 }}
                className="mt-5 lg:mt-7 max-w-xl text-ink-200 text-base lg:text-[17px] leading-relaxed"
              >
                AI-engineered exosomes for next-generation therapeutics, regenerative medicine,
                and cellular communication — designed to reach the right target with maximum
                efficiency and minimal side effects.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.7 }}
                className="mt-7 lg:mt-9 flex flex-wrap items-center gap-3"
              >
                <Link href="/#how-it-works" className="btn btn-primary">
                  Explore the Platform
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M3 7h8m0 0L7.5 3.5M11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <Link href="/resources" className="btn btn-ghost">View Research</Link>
                <Link href="/contact" className="btn btn-outline hidden sm:inline-flex">Partner With Us</Link>
              </motion.div>
            </div>
          </div>

          {/* Bottom KPIs */}
          <div className="pb-6 lg:pb-10 px-5 sm:px-6 lg:px-10 max-w-7xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 lg:gap-5"
            >
              {[
                { v: "100 nm", l: "Native vesicle scale" },
                { v: "AI-driven", l: "Targeting optimization" },
                { v: "GMP-ready", l: "Scalable manufacturing" },
                { v: "Multi-cargo", l: "Proteins · RNA · sm" },
              ].map((k) => (
                <div key={k.l} className="border-l-2 border-gold-500/40 pl-3">
                  <div className="display text-sm lg:text-base text-ink-50">{k.v}</div>
                  <div className="text-[10px] uppercase tracking-[0.18em] text-ink-400 mt-1">{k.l}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </FrameSequence>
    </section>
  );
}
