"use client";
import { motion } from "framer-motion";
import { COMPARISON } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/utils";

export default function Comparison() {
  return (
    <Section
      eyebrow="Platform Comparison"
      title={<>Why exosomes <span className="gradient-text-gold">change the game.</span></>}
      intro="A head-to-head against the dominant nanocarrier and viral-vector approaches that have defined delivery science for two decades."
    >
      {/* Desktop / tablet table */}
      <div className="hidden md:block overflow-hidden surface-card p-0">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px] text-sm">
            <thead>
              <tr className="border-b border-ink-50/[0.06] bg-surface-100">
                {COMPARISON.headers.map((h, i) => (
                  <th
                    key={i}
                    className={cn(
                      "text-left px-6 py-4 font-semibold text-xs uppercase tracking-[0.18em]",
                      i === 1 ? "text-gold-700" : "text-ink-300"
                    )}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {COMPARISON.rows.map((r, i) => (
                <motion.tr
                  key={i}
                  initial={{ opacity: 0, y: 6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className="border-b border-ink-50/[0.04] last:border-0 hover:bg-surface-50"
                >
                  {r.map((cell, ci) => (
                    <td
                      key={ci}
                      className={cn(
                        "px-6 py-4",
                        ci === 0 && "text-ink-300 font-medium",
                        ci === 1 && "text-ink-50 font-semibold relative",
                        ci > 1 && "text-ink-400"
                      )}
                    >
                      {ci === 1 && (
                        <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-7 rounded-r bg-gradient-to-b from-gold-500 to-gold-600" />
                      )}
                      {cell}
                    </td>
                  ))}
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile: stacked cards */}
      <div className="md:hidden space-y-3">
        {COMPARISON.rows.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.4, delay: i * 0.04 }}
            className="surface-card p-4"
          >
            <div className="text-[10px] uppercase tracking-[0.2em] text-ink-400 mb-3">{r[0]}</div>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-5 rounded-r bg-gradient-to-b from-gold-500 to-gold-600 flex-shrink-0" />
                <div className="flex-1">
                  <div className="text-[10px] uppercase tracking-[0.18em] text-gold-700 font-semibold">{COMPARISON.headers[1]}</div>
                  <div className="text-ink-50 text-sm font-semibold">{r[1]}</div>
                </div>
              </div>
              <div className="pl-4 flex flex-col gap-1.5 text-xs">
                <div className="flex justify-between gap-2">
                  <span className="text-ink-400">{COMPARISON.headers[2]}</span>
                  <span className="text-ink-300 text-right">{r[2]}</span>
                </div>
                <div className="flex justify-between gap-2">
                  <span className="text-ink-400">{COMPARISON.headers[3]}</span>
                  <span className="text-ink-300 text-right">{r[3]}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
