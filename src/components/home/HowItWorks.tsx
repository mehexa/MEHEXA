"use client";
import { motion } from "framer-motion";
import { HOW_IT_WORKS } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import FrameSequence from "@/components/hero/FrameSequence";

export default function HowItWorks() {
  return (
    <div id="how-it-works" className="relative">
      <Section
        eyebrow="The Process"
        title={<>From engineering to <span className="gradient-text-gold">therapeutic response</span>.</>}
        intro="A five-step pipeline turning a raw biological vesicle into a programmable medicine — built end-to-end inside the ExoTech platform."
        className="!pb-12"
      >
        <div className="relative">
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-gold-500/35 to-transparent hidden lg:block" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {HOW_IT_WORKS.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="relative surface-card p-6 group hover:-translate-y-1"
              >
                <div className="absolute -top-3 left-6 px-3 py-1 rounded-full bg-white border border-gold-500/40 shadow-sm">
                  <span className="text-[10px] tracking-[0.2em] text-gold-700 font-semibold">{s.step}</span>
                </div>
                <h4 className="display text-lg text-ink-50 mt-4">{s.title}</h4>
                <p className="text-ink-300 text-[13px] leading-relaxed mt-2">{s.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Cinematic moment — seq2 plays at full fidelity on dark stage */}
      <div className="relative max-w-[1440px] mx-auto px-0 sm:px-6 lg:px-10 my-12 lg:my-20">
        <div className="relative overflow-hidden sm:rounded-[2rem] shadow-[0_30px_80px_-30px_rgba(10,18,48,0.25)] ring-1 ring-ink-50/[0.06]">
          <FrameSequence seq="seq2" tone="dark" blend="normal" mode="autoplay" fps={18} loop>
            <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none px-6">
              <div className="max-w-3xl text-center">
                <div className="text-[10px] tracking-[0.28em] uppercase text-gold-400 font-semibold mb-3">
                  Inside the process
                </div>
                <h3 className="display text-3xl md:text-5xl text-white leading-[1.05]">
                  Biology, made programmable —<br className="hidden sm:inline" /> frame by frame.
                </h3>
                <p className="text-white/65 mt-4 text-sm md:text-base max-w-xl mx-auto">
                  Scroll through a visualization of exosome biogenesis, payload loading, and targeted delivery.
                </p>
              </div>
            </div>
          </FrameSequence>
        </div>
      </div>
    </div>
  );
}
