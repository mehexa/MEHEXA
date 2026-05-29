"use client";
import dynamic from "next/dynamic";
import { useState } from "react";
import PageHero from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/utils";

const Globe = dynamic(() => import("@/components/contact/Globe"), { ssr: false });

const INQUIRIES = [
  { id: "investor", label: "Investor inquiry", note: "Pipeline, market, business model" },
  { id: "partner", label: "Partnership", note: "Pharma, biotech, licensing" },
  { id: "research", label: "Research collaboration", note: "Academic, clinical, institutional" },
  { id: "general", label: "General inquiry", note: "Media, careers, other" },
];

export default function ContactPage() {
  const [inquiry, setInquiry] = useState("partner");
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", org: "", msg: "" });

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Build the next generation of <span className="gradient-text-gold">medicine with us.</span></>}
        subtitle="Investor introductions, partnership inquiries, research collaborations — we read every message. Tell us what you&apos;re working on."
      />

      <Section className="!pt-8 lg:!pt-12">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-7">
            {sent ? (
              <div className="surface-card p-10 lg:p-12 text-center">
                <div className="w-16 h-16 rounded-full bg-gold-400/15 flex items-center justify-center mx-auto mb-6">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="text-gold-600">
                    <path d="M6 14l5 5L22 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="display text-2xl lg:text-3xl text-ink-50">Message received.</h3>
                <p className="text-ink-300 mt-3 max-w-md mx-auto text-sm">
                  Thank you. Someone from the MEHEXA team will be in touch within two business days.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="surface-card p-6 sm:p-8 lg:p-10 space-y-6">
                <div>
                  <div className="eyebrow mb-3">Inquiry type</div>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {INQUIRIES.map((i) => (
                      <button
                        key={i.id}
                        type="button"
                        onClick={() => setInquiry(i.id)}
                        className={cn(
                          "text-left p-4 rounded-xl border transition",
                          inquiry === i.id
                            ? "bg-gold-400/10 border-gold-500 text-ink-50"
                            : "bg-surface-50 border-ink-50/[0.08] text-ink-300 hover:border-ink-50/20 hover:bg-white"
                        )}
                      >
                        <div className="text-sm font-medium">{i.label}</div>
                        <div className="text-[11px] mt-0.5 text-ink-400">{i.note}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} required />
                  <Field label="Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} required />
                </div>
                <Field label="Organization" value={form.org} onChange={(v) => setForm({ ...form, org: v })} />

                <div>
                  <label className="eyebrow mb-2 block">Message</label>
                  <textarea
                    value={form.msg}
                    onChange={(e) => setForm({ ...form, msg: e.target.value })}
                    rows={5}
                    required
                    className="w-full bg-surface-50 border border-ink-50/[0.10] rounded-xl px-4 py-3 text-sm text-ink-50 placeholder-ink-400 outline-none focus:border-gold-500 focus:bg-white transition resize-none"
                    placeholder="Tell us about what you're working on..."
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
                  <p className="text-ink-400 text-xs">
                    We respond to all serious inquiries within two business days.
                  </p>
                  <button type="submit" className="btn btn-primary w-full sm:w-auto">
                    Send message
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M3 7h8m0 0L7.5 3.5M11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </form>
            )}
          </div>

          <div className="lg:col-span-5 space-y-6">
            <Globe />
            <div className="space-y-3">
              {[
                { l: "Business development", v: "partners@mehexa.bio" },
                { l: "Investor relations", v: "ir@mehexa.bio" },
                { l: "Research collaboration", v: "research@mehexa.bio" },
                { l: "Media", v: "press@mehexa.bio" },
              ].map((c) => (
                <a
                  key={c.l}
                  href={`mailto:${c.v}`}
                  className="surface-card p-4 flex items-center justify-between gap-4 hover:border-gold-500/40 transition group"
                >
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-ink-400">{c.l}</div>
                    <div className="text-ink-100 text-sm mt-0.5">{c.v}</div>
                  </div>
                  <span className="text-gold-600 text-xs group-hover:translate-x-0.5 transition">→</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required = false,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="eyebrow mb-2 block">{label}{required && <span className="text-gold-600">*</span>}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="w-full bg-surface-50 border border-ink-50/[0.10] rounded-xl px-4 py-3 text-sm text-ink-50 placeholder-ink-400 outline-none focus:border-gold-500 focus:bg-white transition"
      />
    </div>
  );
}
