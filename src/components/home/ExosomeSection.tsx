"use client";
import dynamic from "next/dynamic";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

const ExosomeViewer3D = dynamic(() => import("./ExosomeViewer3D"), {
  ssr: false,
  loading: () => (
    <div className="w-full aspect-square max-w-[560px] mx-auto rounded-full surface-tint" />
  ),
});

const annotations = [
  { t: "Lipid bilayer", body: "Natural membrane (~100 nm) recognized as self by the immune system." },
  { t: "RNA & protein cargo", body: "MicroRNAs, immunomodulators, growth factors, small molecules." },
  { t: "Surface ligands", body: "AI-engineered targeting moieties for tissue-specific tropism." },
  { t: "Membrane fusion", body: "Direct intracellular delivery — bypasses endosomal degradation." },
];

export default function ExosomeSection() {
  return (
    <Section
      id="anatomy"
      eyebrow="Exosome Anatomy"
      title={<>Engineered with the <span className="gradient-text-gold">precision</span> of biology.</>}
      intro="Every component of an ExoTech exosome — from membrane composition to surface ligands and internal cargo — is selected, optimized, and tested for a specific therapeutic role."
    >
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        <div className="lg:col-span-7 relative order-2 lg:order-1">
          <ExosomeViewer3D />
        </div>
        <div className="lg:col-span-5 space-y-5 order-1 lg:order-2">
          {annotations.map((a, i) => (
            <Reveal key={a.t} delay={i * 0.1}>
              <div className="flex gap-4 group">
                <div className="w-10 h-10 flex-shrink-0 rounded-full bg-white border border-ink-50/10 shadow-sm flex items-center justify-center text-gold-600 text-xs font-semibold group-hover:border-gold-500/50 transition">
                  0{i + 1}
                </div>
                <div>
                  <h4 className="text-ink-50 font-semibold text-lg">{a.t}</h4>
                  <p className="text-ink-300 text-sm mt-1.5 leading-relaxed">{a.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
