"use client";
import { motion } from "framer-motion";
import { THERAPEUTIC_AREAS } from "@/lib/content";
import { Section } from "@/components/ui/Section";

export default function TherapeuticAreas() {
  return (
    <Section
      id="therapeutic-areas"
      eyebrow="Therapeutic Areas"
      title={<>One platform. <span className="gradient-text-gold">Many medicines.</span></>}
      intro="Exosomes are a horizontal technology: the same engineering principles enable applications across oncology, neurodegeneration, regenerative medicine, and metabolic disease."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
        {THERAPEUTIC_AREAS.map((a, i) => (
          <motion.div
            key={a.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: i * 0.06 }}
            whileHover={{ y: -4 }}
            className="relative surface-card p-7 group overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-gold-400/0 group-hover:bg-gold-400/20 blur-3xl transition pointer-events-none" />
            <h4 className="display text-xl text-ink-50">{a.title}</h4>
            <p className="text-ink-300 text-sm mt-3 leading-relaxed">{a.body}</p>
            <div className="mt-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
              <span className="text-[11px] uppercase tracking-[0.2em] text-gold-600 font-semibold">{a.metric}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
