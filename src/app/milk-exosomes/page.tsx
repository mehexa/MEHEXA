import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { StatCounter } from "@/components/ui/StatCounter";
import { MILK_STATS } from "@/lib/content";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Milk Exosomes | Wellness & Inflammation | MEHEXA",
  description: "Milk-derived exosomes for IBD, type-2 diabetes, immune modulation, gut health, and metabolic disease.",
};

const APPLICATIONS = [
  {
    t: "Inflammatory Bowel Disease",
    metric: "70% inflammation reduction",
    b: "Preclinical IBD models: dramatic reductions in TNF-α/IL-6, restored intestinal barrier integrity, accelerated epithelial repair. Phase 2 trials in Crohn's and ulcerative colitis enrolling 2026–2027.",
  },
  {
    t: "Type 2 Diabetes",
    metric: "25–30% glucose improvement",
    b: "Fasting glucose reduced 25–30%. Insulin sensitivity improved 40–50%. Pancreatic beta-cell function preserved. Hepatic steatosis reduced 35–45%.",
  },
  {
    t: "Immune Dysregulation",
    metric: "50–60% autoimmune marker reduction",
    b: "Expansion of regulatory T cells, reduction of pro-inflammatory Th17 differentiation, restoration of immune tolerance — potential applications in celiac, T1D, RA, SLE.",
  },
  {
    t: "General Wellness",
    metric: "Well-tolerated, repeat-dose safe",
    b: "Derived from a food source consumed for millennia. No dose-limiting toxicity. No immunogenicity. Suitable for long-term complementary use.",
  },
];

const MECHANISMS = [
  { t: "Direct immune modulation", b: "Reduce pro-inflammatory T cells, promote regulatory T cells." },
  { t: "Barrier strengthening", b: "Enhance tight-junction proteins, reduce bacterial translocation." },
  { t: "Microbiota restoration", b: "Promote Faecalibacterium prausnitzii — short-chain fatty acid producers." },
  { t: "Epithelial repair", b: "Growth factors accelerate intestinal cell proliferation." },
  { t: "Mitochondrial support", b: "Enhance mitochondrial function in metabolic tissues." },
  { t: "Pancreatic protection", b: "Preserve beta-cell function via anti-inflammatory and growth signals." },
];

export default function MilkExosomesPage() {
  return (
    <>
      <PageHero
        eyebrow="Milk Exosomes · Wellness"
        title={<>From breastfeeding to <span className="gradient-text-gold">clinical medicine.</span></>}
        subtitle="For millennia, breast milk has provided more than nutrition. Modern science is revealing the molecular basis: exosomes that educate the immune system, reduce inflammation, and protect organs. Now available to adults."
        tone="cool"
      />

      {/* Stats */}
      <Section
        eyebrow="Preclinical Evidence"
        title={<>The numbers behind <span className="gradient-text-gold">a new therapeutic class.</span></>}
        intro="Outcomes from validated preclinical models in inflammatory and metabolic disease."
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {MILK_STATS.map((s) => (
            <StatCounter
              key={s.label}
              value={s.value}
              suffix={s.suffix}
              label={s.label}
              sub={s.note ?? "Preclinical model"}
            />
          ))}
        </div>
      </Section>

      {/* Concentration comparison */}
      <Section
        eyebrow="Why Milk?"
        title={<>The richest natural source of <span className="gradient-text-gold">therapeutic exosomes.</span></>}
        intro="Breast milk contains exosomes at concentrations 100–1000× higher than other biological fluids. This isn't an accident — it reflects their central role in infant immune education."
      >
        <div className="space-y-3">
          {[
            { src: "Breast milk", val: "10⁹–10¹⁰ / mL", pct: 100, hl: true },
            { src: "Cow's milk", val: "10⁸–10⁹ / mL", pct: 35 },
            { src: "Blood plasma", val: "10⁶–10⁷ / mL", pct: 8 },
            { src: "Urine", val: "10⁶–10⁷ / mL", pct: 8 },
          ].map((b, i) => (
            <Reveal key={b.src} delay={i * 0.08}>
              <div className="glass rounded-xl p-5">
                <div className="flex items-baseline justify-between gap-4 mb-2">
                  <span className={b.hl ? "text-gold-400 font-medium" : "text-ink-200"}>{b.src}</span>
                  <span className="display text-lg text-ink-50 tabular-nums">{b.val}</span>
                </div>
                <div className="h-1.5 rounded-full bg-ink-50/[0.06] overflow-hidden">
                  <div
                    className={`h-full rounded-full ${b.hl ? "bg-gradient-to-r from-gold-600 via-gold-500 to-gold-400 shadow-[0_0_18px_rgba(212,168,67,0.5)]" : "bg-ink-50/20"}`}
                    style={{ width: `${b.pct}%` }}
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Applications */}
      <Section
        eyebrow="Therapeutic Applications"
        title={<>Where milk exosomes <span className="gradient-text-gold">change outcomes.</span></>}
      >
        <div className="grid md:grid-cols-2 gap-5">
          {APPLICATIONS.map((a, i) => (
            <Reveal key={a.t} delay={i * 0.1}>
              <div className="glass rounded-3xl p-8 ring-soft h-full group">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h4 className="display text-2xl text-ink-50">{a.t}</h4>
                  <span className="text-xs uppercase tracking-[0.18em] text-gold-400 text-right flex-shrink-0">{a.metric}</span>
                </div>
                <p className="text-ink-300 text-sm leading-relaxed">{a.b}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Mechanisms */}
      <Section
        eyebrow="Mechanisms of Action"
        title={<>Six pathways. <span className="gradient-text-gold">One natural carrier.</span></>}
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {MECHANISMS.map((m, i) => (
            <Reveal key={m.t} delay={i * 0.06}>
              <div className="glass rounded-2xl p-6 h-full">
                <div className="w-9 h-9 rounded-full bg-gold-400/15 ring-1 ring-gold-500/30 flex items-center justify-center text-gold-700 text-xs font-semibold mb-4">
                  0{i + 1}
                </div>
                <h4 className="text-ink-50 font-medium">{m.t}</h4>
                <p className="text-ink-300 text-xs mt-2 leading-relaxed">{m.b}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Trial timeline */}
      <Section
        eyebrow="Clinical Translation"
        title={<>From bench to bedside, <span className="gradient-text-gold">on the record.</span></>}
        intro="Active and planned clinical programs leveraging milk-derived exosomes."
      >
        <div className="space-y-3">
          {[
            { p: "Phase 2", t: "Crohn's disease", y: "2026–2027", note: "EXOSOMM-led" },
            { p: "Phase 2", t: "Ulcerative colitis", y: "2026–2027", note: "EXOSOMM-led" },
            { p: "Phase 2", t: "Type 2 diabetes", y: "Planned 2027", note: "Investigational" },
            { p: "Preclinical", t: "Rheumatoid arthritis", y: "Active", note: "Autoimmune program" },
            { p: "Preclinical", t: "Metabolic syndrome", y: "Active", note: "Combination strategy" },
          ].map((row, i) => (
            <Reveal key={row.t} delay={i * 0.06}>
              <div className="glass rounded-xl p-5 grid grid-cols-12 gap-4 items-center">
                <div className="col-span-3 lg:col-span-2">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-gold-400 px-2.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/30">
                    {row.p}
                  </span>
                </div>
                <div className="col-span-5 lg:col-span-5 text-ink-50 font-medium text-sm">{row.t}</div>
                <div className="col-span-2 lg:col-span-3 text-ink-300 text-xs">{row.note}</div>
                <div className="col-span-2 text-ink-400 text-xs text-right">{row.y}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Safety */}
      <Section
        eyebrow="Safety Profile"
        title={<>Why repeat dosing <span className="gradient-text-gold">is finally on the table.</span></>}
      >
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { t: "No toxicity", b: "No dose-limiting toxicity at doses far exceeding therapeutic levels." },
            { t: "No immunogenicity", b: "Recognized as self — no immune response even with repeated dosing." },
            { t: "No off-target effects", b: "No adverse effects observed on non-target tissues." },
            { t: "Natural composition", b: "Derived from a food source with a millennia-long consumption history." },
          ].map((s) => (
            <div key={s.t} className="glass rounded-2xl p-5">
              <h4 className="text-ink-50 font-medium text-sm">{s.t}</h4>
              <p className="text-ink-300 text-xs mt-2 leading-relaxed">{s.b}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="!py-12">
        <div className="glass-strong rounded-3xl p-10 lg:p-14 ring-soft flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div>
            <h3 className="display text-2xl lg:text-3xl text-ink-50">For healthcare providers.</h3>
            <p className="text-ink-300 mt-2 max-w-md">Clinical summaries, dosing protocols, and integration with conventional therapies for IBD and metabolic disease.</p>
          </div>
          <div className="flex gap-3">
            <Link href="/resources" className="btn btn-primary">Provider resources</Link>
            <Link href="/contact" className="btn btn-ghost">Get in touch</Link>
          </div>
        </div>
      </Section>
    </>
  );
}
