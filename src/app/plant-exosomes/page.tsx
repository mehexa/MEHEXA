import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { StatCounter } from "@/components/ui/StatCounter";
import { PLANT_STATS } from "@/lib/content";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Plant Exosomes | Skincare & Regeneration | MEHEXA",
  description: "Plant-derived exosomes for skin repair, collagen synthesis, hydration, and inflammation reduction — science-backed beauty innovation.",
};

const SOURCES = [
  { name: "Cabbage", note: "Antioxidants, anti-inflammatory polyphenols" },
  { name: "Goji Berry", note: "Polysaccharides, carotenoids" },
  { name: "Dendrobium", note: "Specialized bioactive compounds" },
  { name: "Ginseng", note: "Adaptogenic, rejuvenating ginsenosides" },
];

const MECHANISMS = [
  { t: "Cellular communication", b: "Plant microRNAs signal fibroblasts to produce collagen and elastin — actively reprogramming skin cell behavior, not just feeding it." },
  { t: "Anti-inflammatory response", b: "Modulate IL-6 and TNF-α pathways. Less redness, less chronic inflammation, slower skin aging." },
  { t: "Antioxidant protection", b: "Flavonoids and phenolic compounds neutralize free radicals that damage collagen and elastin." },
  { t: "Barrier function", b: "Support ceramide production and tight-junction proteins. Stronger barrier means better hydration." },
  { t: "Senescence reduction", b: "Inhibit accumulation of aged cells that drive skin aging — addressing cause, not symptom." },
];

const PATHWAYS = [
  { abv: "TGF-β", t: "Fibroblast activation, collagen synthesis" },
  { abv: "Wnt/β-Catenin", t: "Skin renewal, cell proliferation" },
  { abv: "MAPK", t: "Cell survival, stress response" },
  { abv: "Nrf2", t: "Antioxidant defense, oxidative-stress reduction" },
];

export default function PlantExosomesPage() {
  return (
    <>
      <PageHero
        eyebrow="Plant Exosomes · Skincare"
        title={<>Skincare that <span className="gradient-text-gold">talks to your cells.</span></>}
        subtitle="Plant-derived exosomes don&apos;t just moisturize — they tell your skin to repair itself. Backed by clinical studies with measurable, double-digit improvements in elasticity, hydration, and wrinkle reduction."
        tone="warm"
      />

      {/* Stats */}
      <Section
        eyebrow="Clinical Results"
        title={<>Visible improvements, <span className="gradient-text-gold">measured in the lab.</span></>}
        intro="Plant exosome serums compared head-to-head against placebo controls in 8-week clinical studies."
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {PLANT_STATS.map((s) => (
            <StatCounter key={s.label} value={s.value} suffix={s.suffix} label={s.label} sub={s.sub} />
          ))}
        </div>
      </Section>

      {/* What & Why */}
      <Section
        eyebrow="What Are Plant Exosomes?"
        title={<>Microscopic messengers from <span className="gradient-text-gold">plant stem cells.</span></>}
      >
        <div className="grid lg:grid-cols-2 gap-10">
          <Reveal>
            <div className="space-y-5 text-ink-200 leading-relaxed">
              <p>
                Plants, like animals, use exosomes for intercellular communication and stress response.
                Plant-derived exosomes are extracted from cultured plant stem cells using proprietary
                isolation technologies.
              </p>
              <p>
                Their lipid-membrane structure (30–150 nm) lets them penetrate the stratum corneum and
                reach the epidermal and dermal layers where collagen and elastin reside — depth that
                conventional skincare ingredients can&apos;t achieve.
              </p>
              <p className="text-gold-400 text-sm uppercase tracking-[0.2em]">
                Penetration depth · Active signaling · Biocompatible
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="grid grid-cols-2 gap-3">
              {SOURCES.map((s) => (
                <div key={s.name} className="glass rounded-2xl p-5 ring-soft">
                  <div className="text-2xl">🌿</div>
                  <div className="display text-lg text-ink-50 mt-3">{s.name}</div>
                  <div className="text-ink-400 text-xs mt-1">{s.note}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Mechanisms */}
      <Section
        eyebrow="Mechanisms of Action"
        title={<>Five ways plant exosomes <span className="gradient-text-gold">change your skin.</span></>}
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
          {MECHANISMS.map((m, i) => (
            <Reveal key={m.t} delay={i * 0.08}>
              <div className="glass rounded-2xl p-5 h-full">
                <div className="w-10 h-10 rounded-full bg-gold-500/15 flex items-center justify-center text-gold-400 text-xs font-medium mb-4">
                  0{i + 1}
                </div>
                <h4 className="text-ink-50 font-medium text-sm">{m.t}</h4>
                <p className="text-ink-300 text-xs mt-2 leading-relaxed">{m.b}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Molecular pathways */}
      <Section
        eyebrow="Molecular Pathways"
        title={<>The signaling cascade <span className="gradient-text-gold">behind the result.</span></>}
        intro="Plant exosomes activate four primary skin-regenerative pathways. This is why they deliver multi-axis benefit instead of single-axis effect."
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PATHWAYS.map((p) => (
            <div key={p.abv} className="glass rounded-2xl p-6 text-center">
              <div className="display text-4xl gradient-text-gold">{p.abv}</div>
              <div className="text-ink-300 text-xs mt-3 leading-relaxed">{p.t}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Before/after */}
      <Section
        eyebrow="Before & After Biology"
        title={<>What changes <span className="gradient-text-gold">at the cellular level.</span></>}
      >
        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass rounded-3xl p-8 ring-soft">
            <div className="eyebrow !text-ink-400 mb-4">Before · Aging skin</div>
            <div className="space-y-4">
              {["Reduced fibroblast activity", "Collagen breakdown > synthesis", "Compromised barrier function", "Chronic low-grade inflammation", "Senescent-cell accumulation"].map((p) => (
                <div key={p} className="flex items-center gap-3 text-ink-300 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-ink-400" />
                  {p}
                </div>
              ))}
            </div>
          </div>
          <div className="glass rounded-3xl p-8 ring-soft relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-gold-500/15 blur-3xl pointer-events-none" />
            <div className="eyebrow mb-4">After · 8 weeks of exosomes</div>
            <div className="space-y-4">
              {[
                "45% increase in collagen type I synthesis",
                "38% increase in collagen type III synthesis",
                "Strengthened tight-junction barrier",
                "60% reduction in inflammatory infiltrate",
                "Inhibited senescent-cell burden",
              ].map((p) => (
                <div key={p} className="flex items-center gap-3 text-ink-100 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-400 shadow-[0_0_10px_rgba(228,192,104,0.8)]" />
                  {p}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Practical use */}
      <Section
        eyebrow="Use & Storage"
        title={<>What to know <span className="gradient-text-gold">before you buy.</span></>}
      >
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { t: "Application", b: "Apply to clean, dry skin in the evening. Results in 2–4 weeks, optimal at 8–12 weeks." },
            { t: "Storage", b: "Refrigerate when possible. Room-temperature storage gradually reduces bioactivity." },
            { t: "What to look for", b: "Specific exosome concentration. Plant source disclosed. Third-party testing. Cold-chain delivery." },
          ].map((c) => (
            <div key={c.t} className="glass rounded-2xl p-6">
              <h4 className="display text-lg text-ink-50">{c.t}</h4>
              <p className="text-ink-300 text-sm mt-3 leading-relaxed">{c.b}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="!py-12">
        <div className="glass-strong rounded-3xl p-10 lg:p-14 ring-soft flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div>
            <h3 className="display text-2xl lg:text-3xl text-ink-50">Want the deeper science?</h3>
            <p className="text-ink-300 mt-2 max-w-md">Read the full plant exosome white paper, including molecular pathway analysis and storage considerations.</p>
          </div>
          <div className="flex gap-3">
            <Link href="/resources" className="btn btn-primary">Read white paper</Link>
            <Link href="/contact" className="btn btn-ghost">Partner with us</Link>
          </div>
        </div>
      </Section>
    </>
  );
}
