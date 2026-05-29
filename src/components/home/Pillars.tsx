"use client";
import { motion } from "framer-motion";
import { PILLARS } from "@/lib/content";
import { Section } from "@/components/ui/Section";

const icons = [
  <svg key="i1" viewBox="0 0 48 48" fill="none">
    <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="1.2" />
    <circle cx="24" cy="24" r="8" stroke="currentColor" strokeWidth="1.2" />
    <circle cx="24" cy="24" r="2.5" fill="currentColor" />
    {[0, 1, 2, 3, 4, 5].map((i) => {
      const a = (i * Math.PI) / 3;
      const r = (n: number) => Math.round(n * 100) / 100;
      const x1 = r(24 + Math.cos(a) * 14);
      const y1 = r(24 + Math.sin(a) * 14);
      const x2 = r(24 + Math.cos(a) * 17);
      const y2 = r(24 + Math.sin(a) * 17);
      return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />;
    })}
  </svg>,
  <svg key="i2" viewBox="0 0 48 48" fill="none">
    <rect x="10" y="14" width="28" height="20" rx="4" stroke="currentColor" strokeWidth="1.2" />
    <path d="M10 22h28M18 14v20M30 14v20" stroke="currentColor" strokeWidth="1.2" />
    <circle cx="22" cy="28" r="1.6" fill="currentColor" />
    <circle cx="26" cy="28" r="1.6" fill="currentColor" />
  </svg>,
  <svg key="i3" viewBox="0 0 48 48" fill="none">
    <path d="M24 6v8m0 20v8M6 24h8m20 0h8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    <circle cx="24" cy="24" r="10" stroke="currentColor" strokeWidth="1.2" />
    <path d="M19 24l4 4 7-9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
];

export default function Pillars() {
  return (
    <Section
      id="pillars"
      eyebrow="Three Core Pillars"
      title={<>Built on what nature <span className="gradient-text-gold">already perfected</span>.</>}
      intro="The ExoTech platform combines breakthrough biology, modular engineering, and AI-driven optimization into a single therapeutic delivery system."
    >
      <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
        {PILLARS.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6 }}
            className="group relative surface-card p-7 lg:p-8 overflow-hidden"
          >
            <div className="absolute -top-24 -right-24 w-56 h-56 rounded-full bg-gold-400/15 blur-3xl group-hover:bg-gold-400/30 transition" />
            <div className="flex items-start justify-between relative">
              <div className="w-12 h-12 text-gold-600 group-hover:text-gold-500 transition">{icons[i]}</div>
              <span className="text-[11px] text-ink-400 tracking-[0.2em]">{p.n}</span>
            </div>
            <h3 className="display text-2xl text-ink-50 mt-7 relative">{p.title}</h3>
            <p className="text-ink-300 text-[14px] leading-relaxed mt-3 relative">{p.body}</p>

            <div className="mt-7 flex items-center gap-2 text-gold-600 text-[11px] uppercase tracking-[0.2em] opacity-70 group-hover:opacity-100 transition relative">
              <span>Learn more</span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 7h8m0 0L7.5 3.5M11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
