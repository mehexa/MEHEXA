"use client";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import PageHero from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Section";
import { RESOURCES } from "@/lib/content";
import { cn } from "@/lib/utils";

const TAGS = ["All", "Platform", "Therapeutics", "Skincare", "Neurology", "Education"];

export default function ResourcesPage() {
  const [tag, setTag] = useState("All");
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    return RESOURCES.filter((r) => {
      const tagOk = tag === "All" || r.tag === tag;
      const qOk = !q || (r.title + r.desc + r.type).toLowerCase().includes(q.toLowerCase());
      return tagOk && qOk;
    });
  }, [tag, q]);

  return (
    <>
      <PageHero
        eyebrow="Resource Library"
        title={<>White papers, articles, and <span className="gradient-text-gold">primary research.</span></>}
        subtitle="Everything we&apos;ve written and published — organized for quick access by topic. New papers, clinical summaries, and reference material are added as our programs progress."
      />

      <Section className="!pt-12">
        {/* Filter bar */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-10">
          <div className="flex flex-wrap gap-2">
            {TAGS.map((t) => (
              <button
                key={t}
                onClick={() => setTag(t)}
                className={cn(
                  "px-4 py-2 rounded-full text-xs uppercase tracking-[0.18em] transition",
                  tag === t
                    ? "bg-gold-500/20 text-gold-300 border border-gold-500/40"
                    : "glass text-ink-300 hover:text-ink-100"
                )}
              >
                {t}
              </button>
            ))}
          </div>
          <div className="flex-1 lg:max-w-xs lg:ml-auto">
            <div className="glass rounded-full px-4 py-2 flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-ink-400">
                <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.2" />
                <path d="M11 11l3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search resources..."
                className="bg-transparent outline-none text-sm text-ink-100 placeholder-ink-400 flex-1"
              />
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((r, i) => (
            <motion.a
              key={r.title}
              href="#"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              className="group glass rounded-2xl p-7 ring-soft block h-full"
            >
              <div className="flex items-center justify-between mb-5">
                <span className="text-[10px] uppercase tracking-[0.2em] text-gold-400">{r.type}</span>
                <span className="text-[10px] uppercase tracking-[0.18em] text-ink-400 px-2 py-0.5 rounded-full bg-surface-100 border border-ink-50/[0.06]">
                  {r.tag}
                </span>
              </div>
              <h4 className="display text-lg text-ink-50 leading-tight">{r.title}</h4>
              <p className="text-ink-300 text-sm mt-3 leading-relaxed">{r.desc}</p>
              <div className="mt-6 flex items-center gap-2 text-gold-400 text-xs uppercase tracking-[0.2em] opacity-70 group-hover:opacity-100 transition">
                <span>Read</span>
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                  <path d="M3 7h8m0 0L7.5 3.5M11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </motion.a>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-ink-400 text-center py-20">No resources match those filters yet.</div>
        )}
      </Section>
    </>
  );
}
