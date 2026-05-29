"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export function StatCounter({
  value,
  suffix = "",
  prefix = "",
  duration = 1.6,
  label,
  sub,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  label: string;
  sub?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    let raf = 0;
    const step = (t: number) => {
      const elapsed = (t - start) / 1000;
      const p = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(value * eased));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="surface-card p-6 lg:p-7 relative overflow-hidden"
    >
      <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gold-400/12 blur-3xl pointer-events-none" />
      <div className="display text-3xl lg:text-4xl gradient-text-gold tabular-nums">
        {prefix}{n}{suffix}
      </div>
      <div className="mt-3 text-ink-100 text-sm font-medium">{label}</div>
      {sub && <div className="mt-1 text-ink-400 text-xs">{sub}</div>}
    </motion.div>
  );
}
