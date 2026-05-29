import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

export default function CtaBanner() {
  return (
    <section className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 my-20 lg:my-32">
      <Reveal>
        <div className="relative overflow-hidden rounded-[1.5rem] lg:rounded-[2rem] bg-white border border-ink-50/[0.06] shadow-[0_30px_80px_-30px_rgba(10,18,48,0.18)] p-8 sm:p-10 lg:p-16">
          {/* Soft ambient blooms */}
          <div className="absolute -top-32 -left-20 w-[28rem] h-[28rem] rounded-full bg-gold-400/12 blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-24 -right-20 w-[24rem] h-[24rem] rounded-full bg-navy-400/12 blur-[120px] pointer-events-none" />

          {/* Subtle grid texture */}
          <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />

          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="eyebrow mb-4">Join the Movement</div>
              <h2 className="display text-3xl sm:text-4xl lg:text-[3.4rem] gradient-text leading-[1.05]">
                Join the precision <span className="gradient-text-gold">medicine revolution.</span>
              </h2>
              <p className="text-ink-300 mt-5 max-w-md leading-relaxed text-sm sm:text-base">
                Whether you&apos;re a pharmaceutical innovator, leading researcher, or healthcare
                provider committed to better outcomes — MEHEXA offers a partnership that turns
                possibilities into reality.
              </p>
            </div>

            <div className="space-y-2.5">
              {[
                { label: "Pharma & biotech", href: "/contact", note: "De-risk delivery, expand pipeline" },
                { label: "Researchers", href: "/contact", note: "Access platform + collaboration" },
                { label: "Investors", href: "/investors", note: "Pipeline · market · business model" },
                { label: "Healthcare providers", href: "/milk-exosomes", note: "Clinical data, treatment protocols" },
              ].map((c) => (
                <Link
                  key={c.label}
                  href={c.href}
                  className="flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-surface-50 border border-ink-50/[0.06] hover:bg-white hover:border-gold-500/40 hover:shadow-sm transition group"
                >
                  <div>
                    <div className="text-ink-50 font-semibold text-sm sm:text-base">{c.label}</div>
                    <div className="text-ink-400 text-xs mt-0.5">{c.note}</div>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-gold-400/15 flex items-center justify-center text-gold-700 group-hover:bg-gold-500 group-hover:text-white transition flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M3 7h8m0 0L7.5 3.5M11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
