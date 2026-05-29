import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import FrameSequence from "@/components/hero/FrameSequence";
import ExosomeViewerClient from "@/components/home/ExosomeViewerClient";

export const metadata: Metadata = {
  title: "Exosome Science | MEHEXA",
  description: "Exosomes 101, cellular communication, biological barriers, AI optimization, and the science behind ExoTech.",
};

const PRINCIPLES = [
  {
    n: "01",
    t: "Cellular communication",
    b: "Every cell in your body releases exosomes. They carry RNA, proteins, and lipids that reprogram recipient cells — the body's native signaling channel.",
  },
  {
    n: "02",
    t: "Biological barriers",
    b: "Exosomes evolved to cross the most challenging biological barriers — including the blood-brain barrier and the placental barrier — using membrane fusion and receptor-mediated transport.",
  },
  {
    n: "03",
    t: "AI optimization",
    b: "Our ML models traverse millions of variants — source cell, surface ligand, payload composition — to predict tropism, half-life, and therapeutic effect before a single batch is made.",
  },
  {
    n: "04",
    t: "Surface modification",
    b: "Click-chemistry and genetic engineering attach targeting moieties — peptides, antibody fragments, aptamers — to exosome membranes with single-molecule precision.",
  },
  {
    n: "05",
    t: "Payload delivery",
    b: "Active loading (electroporation, sonication) and passive loading (co-incubation, transfection of producer cells) enable cargo flexibility that synthetic carriers cannot match.",
  },
  {
    n: "06",
    t: "Manufacturing scalability",
    b: "Bioreactor-grown producer cells generate clinical-grade exosomes in GMP-compatible processes that scale linearly with reactor volume.",
  },
];

const GLOSSARY = [
  { term: "Extracellular vesicles (EVs)", def: "Membrane-bound nanoparticles released by cells; exosomes are a subset (30–150 nm, endosomal origin)." },
  { term: "MicroRNA (miRNA)", def: "Short non-coding RNA (~22 nt) that regulates gene expression — a major cargo class in exosomes." },
  { term: "Endosomal biogenesis", def: "The cellular pathway that produces exosomes via multivesicular bodies (MVBs)." },
  { term: "Tetraspanins (CD9, CD63, CD81)", def: "Surface proteins enriched on exosomes; serve as identity markers and targeting handles." },
  { term: "Tropism", def: "The tendency of a delivery vehicle to localize to a specific tissue or cell type." },
  { term: "Blood-brain barrier (BBB)", def: "A highly selective endothelial barrier — historically the largest obstacle in CNS therapeutics." },
];

export default function SciencePage() {
  return (
    <>
      <PageHero
        eyebrow="Exosome Science"
        title={<>The biology behind <span className="gradient-text-gold">programmable medicine.</span></>}
        subtitle="An interactive walkthrough of exosome biology, ExoTech&apos;s engineering platform, and the AI optimization that makes precision delivery possible."
        tone="cool"
      />

      {/* 3D interactive viewer */}
      <Section
        eyebrow="Exosomes 101"
        title={<>Inside a <span className="gradient-text-gold">100-nanometer machine.</span></>}
        intro="Exosomes are lipid-bilayer vesicles released by all cells. Inside: a curated package of RNAs, proteins, and lipids. Outside: surface tetraspanins and targeting ligands that select the destination cell."
      >
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <ExosomeViewerClient />
          </div>
          <div className="lg:col-span-5 space-y-5">
            {[
              { l: "30–150 nm", t: "Exosome diameter range" },
              { l: "10⁹–10¹⁰ / mL", t: "Concentration in breast milk" },
              { l: "10⁶–10⁷ / mL", t: "Concentration in blood plasma" },
              { l: "GMP-compatible", t: "Scalable manufacturing pathway" },
            ].map((s) => (
              <div key={s.t} className="glass rounded-2xl p-5 flex items-baseline justify-between gap-4">
                <span className="display text-2xl gradient-text-gold">{s.l}</span>
                <span className="text-ink-300 text-sm text-right">{s.t}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Principles grid */}
      <Section
        eyebrow="The Engineering Stack"
        title={<>Six layers of <span className="gradient-text-gold">scientific control.</span></>}
        intro="From source biology to surface chemistry to AI-driven targeting — every layer of the ExoTech platform is independently engineered and validated."
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PRINCIPLES.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.06}>
              <div className="surface-card p-6 h-full group hover:-translate-y-0.5 transition">
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[10px] tracking-[0.25em] text-gold-400">{p.n}</span>
                  <div className="w-8 h-px bg-gold-500/40" />
                </div>
                <h4 className="display text-lg text-ink-50">{p.t}</h4>
                <p className="text-ink-300 text-sm leading-relaxed mt-3">{p.b}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Cinematic scientific visualization — seq2 at full fidelity on dark stage */}
      <div className="relative max-w-[1440px] mx-auto px-0 sm:px-6 lg:px-10 my-12 lg:my-20">
        <div className="relative overflow-hidden sm:rounded-[2rem] shadow-[0_30px_80px_-30px_rgba(10,18,48,0.25)] ring-1 ring-ink-50/[0.06]">
          <FrameSequence seq="seq2" tone="dark" blend="normal" mode="autoplay" fps={18} loop>
            <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none px-6">
              <div className="max-w-3xl text-center">
                <div className="text-[10px] tracking-[0.28em] uppercase text-gold-400 font-semibold mb-3">
                  Scientific visualization
                </div>
                <h3 className="display text-3xl md:text-5xl text-white leading-[1.05]">
                  From single vesicle to systemic effect.
                </h3>
              </div>
            </div>
          </FrameSequence>
        </div>
      </div>

      {/* Diagram: barriers crossed */}
      <Section
        eyebrow="Biological Barriers"
        title={<>Why exosomes <span className="gradient-text-gold">go where drugs can&apos;t.</span></>}
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { t: "Blood-Brain Barrier", n: "BBB", b: "Receptor-mediated transcytosis enables CNS access for Alzheimer's, Parkinson's, stroke." },
            { t: "Tumor Microenvironment", n: "TME", b: "Penetrate dense extracellular matrix and reach hypoxic tumor cores inaccessible to free drug." },
            { t: "Intestinal Epithelium", n: "GI", b: "Oral-route stability and transcytosis make GI delivery uniquely tractable with milk-derived exosomes." },
            { t: "Placental Barrier", n: "PL", b: "Maternal-fetal communication channel; foundational biology for pregnancy-safe therapeutics." },
          ].map((b, i) => (
            <Reveal key={b.t} delay={i * 0.08}>
              <div className="glass rounded-2xl p-6 h-full">
                <div className="display text-4xl gradient-text-gold">{b.n}</div>
                <h4 className="text-ink-50 font-medium mt-4">{b.t}</h4>
                <p className="text-ink-300 text-xs mt-2 leading-relaxed">{b.b}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Glossary */}
      <Section
        eyebrow="Glossary"
        title={<>Key terms <span className="gradient-text-gold">for the field.</span></>}
        intro="A working reference for the language of extracellular vesicle science."
      >
        <div className="grid md:grid-cols-2 gap-4">
          {GLOSSARY.map((g, i) => (
            <Reveal key={g.term} delay={i * 0.05}>
              <div className="glass rounded-xl p-5 flex flex-col sm:flex-row gap-3 sm:gap-6">
                <div className="text-gold-400 font-medium text-sm flex-shrink-0 sm:w-48">{g.term}</div>
                <div className="text-ink-300 text-sm leading-relaxed">{g.def}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
