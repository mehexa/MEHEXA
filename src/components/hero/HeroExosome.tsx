"use client";
import { motion } from "framer-motion";
import { useMemo } from "react";

// Light, elegant molecular hero visual.
// Pure SVG + Framer Motion — fast, scales, looks expensive.
export default function HeroExosome() {
  const orbits = useMemo(
    () => [
      { r: 110, count: 6, dur: 28, size: 6, color: "#d4a843", phase: 0 },
      { r: 150, count: 8, dur: 40, size: 4, color: "#406edc", phase: 0.15 },
      { r: 190, count: 12, dur: 56, size: 3, color: "#2a4a99", phase: 0.3 },
    ],
    []
  );

  return (
    <div className="relative w-full max-w-[560px] aspect-square mx-auto">
      {/* Outer glow */}
      <div className="absolute inset-0 rounded-full bg-gold-400/15 blur-3xl pointer-events-none" />
      <div className="absolute inset-12 rounded-full bg-navy-400/15 blur-3xl pointer-events-none" />

      <svg viewBox="-220 -220 440 440" className="absolute inset-0 w-full h-full">
        <defs>
          {/* Center sphere */}
          <radialGradient id="core" cx="35%" cy="30%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="30%" stopColor="#e7c068" stopOpacity="0.95" />
            <stop offset="70%" stopColor="#b58a2a" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#0a1230" stopOpacity="0.85" />
          </radialGradient>
          <radialGradient id="halo">
            <stop offset="0%" stopColor="#e7c068" stopOpacity="0.18" />
            <stop offset="80%" stopColor="#e7c068" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="halo2">
            <stop offset="0%" stopColor="#406edc" stopOpacity="0.2" />
            <stop offset="80%" stopColor="#406edc" stopOpacity="0" />
          </radialGradient>
          <filter id="soft" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" />
          </filter>
        </defs>

        {/* Halos */}
        <circle cx="0" cy="0" r="200" fill="url(#halo)" />
        <circle cx="0" cy="0" r="160" fill="url(#halo2)" />

        {/* Orbital rings */}
        {orbits.map((o, i) => (
          <circle
            key={`ring-${i}`}
            cx="0"
            cy="0"
            r={o.r}
            fill="none"
            stroke="#0a1230"
            strokeOpacity={0.07}
            strokeWidth="0.6"
            strokeDasharray="2 4"
          />
        ))}

        {/* Core */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "0 0" }}
        >
          <circle cx="0" cy="0" r="72" fill="url(#core)" />
          {/* Internal cargo dots */}
          {Array.from({ length: 9 }).map((_, k) => {
            const a = (k / 9) * Math.PI * 2;
            const rr = 30 + (k % 3) * 8;
            const x = Math.cos(a) * rr;
            const y = Math.sin(a) * rr;
            return (
              <circle
                key={k}
                cx={x.toFixed(2)}
                cy={y.toFixed(2)}
                r={1.6 + (k % 2) * 0.6}
                fill={k % 2 ? "#ffffff" : "#0a1230"}
                opacity={0.7}
              />
            );
          })}
        </motion.g>

        {/* Orbiting particles */}
        {orbits.map((o, ringIdx) =>
          Array.from({ length: o.count }).map((_, i) => {
            const angleStart = (i / o.count) * 360;
            return (
              <motion.g
                key={`p-${ringIdx}-${i}`}
                animate={{ rotate: 360 }}
                transition={{
                  duration: o.dur,
                  repeat: Infinity,
                  ease: "linear",
                  delay: -o.dur * (angleStart / 360),
                }}
                style={{ transformOrigin: "0 0" }}
              >
                <circle cx={o.r} cy="0" r={o.size} fill={o.color} filter="url(#soft)" />
                <circle cx={o.r} cy="0" r={o.size * 0.55} fill={o.color} />
              </motion.g>
            );
          })
        )}
      </svg>

      {/* Annotation badges */}
      <div className="hidden sm:block absolute top-4 left-2 glass rounded-full px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-ink-300">
        ~100 nm
      </div>
      <div className="hidden sm:block absolute bottom-4 right-2 glass rounded-full px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-gold-700">
        AI-optimized
      </div>
    </div>
  );
}
