"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { EVIDENCE } from "@/lib/content";
import { Section } from "@/components/ui/Section";

function Bar({ label, value, suffix, idx }: { label: string; value: number; suffix: string; idx: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min((t - start) / 1500, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(value * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 14 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: idx * 0.07 }}
      className="space-y-2"
    >
      <div className="flex items-baseline justify-between gap-4">
        <span className="text-ink-200 text-sm">{label}</span>
        <span className="display text-2xl gradient-text-gold tabular-nums">{n}{suffix}</span>
      </div>
      <div className="h-1.5 rounded-full bg-ink-50/[0.06] overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${value}%` } : {}}
          transition={{ duration: 1.3, delay: idx * 0.07, ease: [0.22, 1, 0.36, 1] }}
          className="h-full bg-gradient-to-r from-gold-600 via-gold-500 to-gold-400 rounded-full shadow-[0_0_18px_rgba(212,168,67,0.4)]"
        />
      </div>
    </motion.div>
  );
}

export default function DataEvidence() {
  return (
    <Section
      id="evidence"
      eyebrow="Data & Evidence"
      title={<>Preclinical results <span className="gradient-text-gold">that move medicine.</span></>}
      intro="Selected outcomes from peer-reviewed and proprietary research across our therapeutic programs. All figures are preclinical and from published or ongoing studies."
    >
      <div className="grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7 space-y-6">
          {EVIDENCE.map((e, i) => (
            <Bar key={e.label} {...e} idx={i} />
          ))}
        </div>
        <div className="lg:col-span-5 space-y-4">
          <div className="surface-card p-6">
            <div className="eyebrow mb-3">Mechanism</div>
            <p className="text-ink-200 text-sm leading-relaxed">
              Exosomes reduce inflammation via downregulation of TNF-α and IL-6, expand regulatory T-cell
              populations, and restore intestinal-barrier tight junctions — addressing multiple disease
              pathways with a single carrier.
            </p>
          </div>
          <div className="surface-card p-6">
            <div className="eyebrow mb-3">Translation</div>
            <p className="text-ink-200 text-sm leading-relaxed">
              Active programs in Crohn&apos;s, ulcerative colitis, type-2 diabetes, and Alzheimer&apos;s disease.
              First Phase 1/2 trial initiating in 2026.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
