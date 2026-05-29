import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { StatCounter } from "@/components/ui/StatCounter";
import { PIPELINE, MARKET } from "@/lib/content";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Investors & Partners | MEHEXA",
  description: "Market opportunity, pipeline, competitive advantage, and commercialization strategy for the MEHEXA / ExoTech platform.",
};

const ADVANTAGES = [
  { t: "Platform horizontality", b: "One engineering stack — many indications. Each successful program de-risks the next." },
  { t: "AI compounding", b: "Every batch trains the targeting model. The platform gets cheaper, faster, and more precise over time." },
  { t: "Regulatory leverage", b: "Multiple regulatory pathways: biologic drug, medical food, supplement — letting parallel programs reach market on different timelines." },
  { t: "Pharma optionality", b: "Engineered to slot into existing pharma pipelines via licensing, co-development, or full delivery-platform deals." },
];

const REVENUE = [
  { t: "Platform licensing", note: "Annual + milestone-based with pharma partners" },
  { t: "Co-development", note: "Shared economics on jointly developed therapeutics" },
  { t: "Direct therapeutics", note: "Wholly-owned programs in inflammatory and metabolic disease" },
  { t: "Consumer products", note: "Plant exosome skincare and milk exosome wellness lines" },
];

export default function InvestorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Investors & Partners"
        title={<>The platform behind the <span className="gradient-text-gold">next decade of medicine.</span></>}
        subtitle="A $285B precision-medicine market growing at 18% CAGR, with the exosome subset growing 25%+. MEHEXA is building the operating system that the rest of pharma will rent."
        tone="cool"
        aside={
          <div className="grid grid-cols-2 gap-3">
            <div className="glass-strong rounded-2xl p-5">
              <div className="eyebrow mb-2">2024</div>
              <div className="display text-3xl gradient-text-gold">{MARKET.current.size}</div>
              <div className="text-ink-400 text-[11px] mt-1">{MARKET.current.segment}</div>
            </div>
            <div className="glass-strong rounded-2xl p-5">
              <div className="eyebrow mb-2">2030</div>
              <div className="display text-3xl gradient-text-gold">{MARKET.projected.size}</div>
              <div className="text-ink-400 text-[11px] mt-1">{MARKET.projected.cagr} CAGR · {MARKET.subsetCagr} for exosomes</div>
            </div>
          </div>
        }
      />

      {/* Market */}
      <Section
        eyebrow="Market Opportunity"
        title={<>A market that <span className="gradient-text-gold">triples in six years.</span></>}
      >
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 glass rounded-3xl p-8 ring-soft">
            <div className="space-y-6">
              {[
                { y: "2024", v: 105, w: 37 },
                { y: "2026", v: 145, w: 51 },
                { y: "2028", v: 200, w: 70 },
                { y: "2030", v: 285, w: 100 },
              ].map((b, i) => (
                <Reveal key={b.y} delay={i * 0.1}>
                  <div className="space-y-2">
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="text-ink-300 text-sm tabular-nums">{b.y}</span>
                      <span className="display text-2xl gradient-text-gold tabular-nums">${b.v}B</span>
                    </div>
                    <div className="h-2 rounded-full bg-ink-50/[0.06] overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-navy-500 via-gold-500 to-gold-300 rounded-full shadow-[0_0_20px_rgba(228,192,104,0.45)]"
                        style={{ width: `${b.w}%` }}
                      />
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5 space-y-4">
            <StatCounter value={18} suffix="%" label="Industry CAGR" sub="Precision medicine + regenerative + diagnostics" />
            <StatCounter value={25} suffix="%+" label="Exosome therapeutics CAGR" sub="Fastest-growing subset" />
          </div>
        </div>
      </Section>

      {/* Pipeline */}
      <Section
        eyebrow="Pipeline"
        title={<>Programs across <span className="gradient-text-gold">five therapeutic areas.</span></>}
      >
        <div className="overflow-hidden surface-card p-0">
          <div className="grid grid-cols-12 px-6 py-4 text-[10px] uppercase tracking-[0.2em] text-ink-400 border-b border-ink-50/[0.06] bg-surface-100">
            <div className="col-span-3">Phase</div>
            <div className="col-span-6">Indication</div>
            <div className="col-span-3 text-right">Timeline</div>
          </div>
          {PIPELINE.map((p, i) => (
            <Reveal key={`${p.phase}-${p.indication}`} delay={i * 0.05}>
              <div className="grid grid-cols-12 px-6 py-5 border-b border-ink-50/[0.04] last:border-0 items-center hover:bg-surface-50">
                <div className="col-span-3">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-gold-400 px-2.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/30">
                    {p.phase}
                  </span>
                </div>
                <div className="col-span-6 text-ink-100 text-sm font-medium">{p.indication}</div>
                <div className="col-span-3 text-ink-400 text-xs text-right tabular-nums">{p.year}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Competitive advantage */}
      <Section
        eyebrow="Competitive Advantage"
        title={<>What makes us <span className="gradient-text-gold">structurally hard to copy.</span></>}
      >
        <div className="grid md:grid-cols-2 gap-5">
          {ADVANTAGES.map((a, i) => (
            <Reveal key={a.t} delay={i * 0.08}>
              <div className="glass rounded-2xl p-7 h-full">
                <h4 className="display text-xl text-ink-50">{a.t}</h4>
                <p className="text-ink-300 text-sm mt-3 leading-relaxed">{a.b}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Revenue model */}
      <Section
        eyebrow="Commercialization"
        title={<>Four revenue streams. <span className="gradient-text-gold">One platform.</span></>}
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {REVENUE.map((r, i) => (
            <Reveal key={r.t} delay={i * 0.08}>
              <div className="glass rounded-2xl p-6">
                <div className="display text-4xl gradient-text-gold">0{i + 1}</div>
                <h4 className="text-ink-50 font-medium mt-4">{r.t}</h4>
                <p className="text-ink-400 text-xs mt-2 leading-relaxed">{r.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* For partners */}
      <Section
        eyebrow="Partnership Models"
        title={<>How we work with <span className="gradient-text-gold">pharma & biotech.</span></>}
      >
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { t: "De-risk drug development", b: "Improve efficacy and safety profiles of existing compounds." },
            { t: "Revive failed drugs", b: "Re-engineer delivery for promising molecules that failed in conventional formulations." },
            { t: "Accelerate approval", b: "Exosome-based modifications may enable accelerated regulatory pathways for orphan indications." },
          ].map((p, i) => (
            <Reveal key={p.t} delay={i * 0.08}>
              <div className="glass rounded-2xl p-6 h-full">
                <h4 className="display text-lg text-ink-50">{p.t}</h4>
                <p className="text-ink-300 text-sm mt-3 leading-relaxed">{p.b}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="!py-12">
        <div className="glass-strong rounded-3xl p-10 lg:p-14 ring-soft">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <h3 className="display text-2xl lg:text-3xl text-ink-50">Get the full deck.</h3>
              <p className="text-ink-300 mt-2 max-w-md">Investor presentation including detailed pipeline, financials, and commercialization roadmap.</p>
            </div>
            <div className="flex gap-3">
              <Link href="/contact" className="btn btn-primary">Download investor deck</Link>
              <Link href="/contact" className="btn btn-ghost">Talk to BD</Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
