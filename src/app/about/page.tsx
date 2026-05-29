import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SAB } from "@/lib/content";

export const metadata: Metadata = {
  title: "About | MEHEXA / ExoTech",
  description: "The team and philosophy behind MEHEXA — entrepreneurship, AI, and biotechnology converging into a new operating system for medicine.",
};

const TIMELINE = [
  { year: "2024", title: "Founding thesis", body: "Recognition that drug delivery — not discovery — is the largest unmet need in modern therapeutics." },
  { year: "2025", title: "Platform v0", body: "Initial exosome engineering pipeline, AI targeting model, and first preclinical IBD data." },
  { year: "2026", title: "ExoTech v1 + first Phase 1/2", body: "First-in-human study in Alzheimer's disease initiates; SAB formalized." },
  { year: "2027", title: "Pipeline expansion", body: "Type-2 diabetes Phase 2; Crohn's & UC Phase 2 readouts; pharma partnerships." },
  { year: "2028+", title: "Commercial therapeutics", body: "First MEHEXA exosome therapeutic toward Phase 3 / regulatory submission." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About MEHEXA"
        title={<>We&apos;re not just building a company — we&apos;re building <span className="gradient-text-gold">the operating system for medicine.</span></>}
        subtitle="MEHEXA brings together entrepreneurship, artificial intelligence, and cutting-edge biotechnology to transform how therapies reach the human body. We exist because millions of patients receive treatments that fail to reach their target tissues."
        aside={
          <div className="grid grid-cols-2 gap-4">
            {[
              { v: "3", l: "Global SAB members" },
              { v: "$285B", l: "2030 market" },
              { v: "18%", l: "Industry CAGR" },
              { v: "100 nm", l: "Engineering scale" },
            ].map((k) => (
              <div key={k.l} className="glass rounded-2xl p-5">
                <div className="display text-3xl gradient-text-gold">{k.v}</div>
                <div className="text-[11px] uppercase tracking-[0.2em] text-ink-400 mt-2">{k.l}</div>
              </div>
            ))}
          </div>
        }
      />

      {/* Mission */}
      <Section
        eyebrow="Mission & Vision"
        title={<>Therapy that reaches <span className="gradient-text-gold">exactly where it&apos;s needed.</span></>}
      >
        <div className="grid lg:grid-cols-2 gap-6">
          <Reveal>
            <div className="glass rounded-3xl p-8 ring-soft h-full">
              <div className="eyebrow mb-3">Mission</div>
              <p className="text-ink-100 text-lg leading-relaxed">
                Solve precision drug delivery — the rate-limiting step that determines whether the
                next decade of medical breakthroughs reaches patients.
              </p>
              <p className="text-ink-300 text-sm mt-4 leading-relaxed">
                We engineer exosomes — nature&apos;s perfect delivery vehicles — into programmable
                therapeutic carriers using AI-driven optimization across surface ligands, source cells,
                payload, and tropism.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="glass rounded-3xl p-8 ring-soft h-full">
              <div className="eyebrow mb-3">Vision</div>
              <p className="text-ink-100 text-lg leading-relaxed">
                To become the global infrastructure for precision drug delivery — enabling any
                therapy to reach the right target with maximum efficiency and minimal side effects.
              </p>
              <p className="text-ink-300 text-sm mt-4 leading-relaxed">
                A world where treatments are inherently targeted, where side effects are the exception
                not the norm, and where failed drug candidates get a second life through better delivery.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Timeline */}
      <Section
        eyebrow="Trajectory"
        title={<>A short history of a <span className="gradient-text-gold">long-term company.</span></>}
        intro="MEHEXA is built to operate on the timeline of medicine — decades, not quarters."
      >
        <div className="relative">
          <div className="absolute left-4 lg:left-1/2 lg:-translate-x-px top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-gold-500/40 to-transparent" />
          <div className="space-y-12">
            {TIMELINE.map((t, i) => (
              <Reveal key={t.year} delay={i * 0.08}>
                <div className={`relative grid lg:grid-cols-2 gap-6 lg:gap-12 ${i % 2 ? "lg:[&>div:first-child]:order-2" : ""}`}>
                  <div className="lg:text-right pl-12 lg:pl-0 lg:pr-12">
                    <div className="display text-3xl gradient-text-gold">{t.year}</div>
                  </div>
                  <div className="pl-12 lg:pl-12">
                    <div className="absolute left-2.5 lg:left-1/2 lg:-translate-x-1/2 top-2.5 w-3 h-3 rounded-full bg-gold-400 shadow-[0_0_0_4px_rgba(228,192,104,0.18),0_0_25px_rgba(228,192,104,0.7)]" />
                    <div className="glass rounded-2xl p-6">
                      <h4 className="display text-xl text-ink-50">{t.title}</h4>
                      <p className="text-ink-300 text-sm mt-2 leading-relaxed">{t.body}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* SAB */}
      <Section
        eyebrow="Scientific Advisory Board"
        title={<>The scientists <span className="gradient-text-gold">defining the field.</span></>}
        intro="The world&apos;s leading EV researchers — including a co-discoverer of exosomal RNA — guide MEHEXA&apos;s scientific strategy."
      >
        <div className="grid md:grid-cols-3 gap-6">
          {SAB.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.1}>
              <div className="glass rounded-3xl p-7 ring-soft h-full group">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold-400/25 to-navy-400/25 flex items-center justify-center mb-6 ring-1 ring-ink-50/[0.08]">
                  <span className="display text-2xl text-gold-700">
                    {p.name.split(" ").slice(-2, -1)[0]?.[0]}{p.name.split(" ").slice(-1)[0]?.[0]}
                  </span>
                </div>
                <h4 className="display text-xl text-ink-50">{p.name}</h4>
                <div className="text-gold-400 text-xs uppercase tracking-[0.18em] mt-2">{p.title}</div>
                <div className="text-ink-400 text-xs mt-1">{p.org}</div>
                <p className="text-ink-300 text-sm mt-5 leading-relaxed">{p.bio}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Philosophy */}
      <Section
        eyebrow="Operating Philosophy"
        title={<>How we work — <span className="gradient-text-gold">what we believe.</span></>}
      >
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { t: "Biology first, engineering second", b: "We let nature define the problem space. Synthetic shortcuts produce synthetic failure modes." },
            { t: "AI as a microscope, not an oracle", b: "Machine learning narrows the design space — wet-lab validation closes the loop." },
            { t: "Patient timelines, not press cycles", b: "We optimize for the trial that reads out in 2028, not the headline that prints next quarter." },
          ].map((v) => (
            <div key={v.t} className="glass rounded-2xl p-7">
              <h4 className="display text-lg text-ink-50">{v.t}</h4>
              <p className="text-ink-300 text-sm mt-3 leading-relaxed">{v.b}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="!py-12">
        <div className="glass-strong rounded-3xl p-10 lg:p-14 ring-soft flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div>
            <h3 className="display text-2xl lg:text-3xl text-ink-50">Build with us.</h3>
            <p className="text-ink-300 mt-2 max-w-md">
              We&apos;re hiring for biology, ML, manufacturing, and clinical roles across our programs.
            </p>
          </div>
          <div className="flex gap-3">
            <Link href="/contact" className="btn btn-primary">Talk to us</Link>
            <Link href="/resources" className="btn btn-ghost">Read research</Link>
          </div>
        </div>
      </Section>
    </>
  );
}
