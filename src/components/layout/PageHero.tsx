import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  aside,
  tone = "default",
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: ReactNode;
  aside?: ReactNode;
  tone?: "default" | "warm" | "cool";
}) {
  return (
    <section className="relative pt-28 sm:pt-32 lg:pt-44 pb-14 lg:pb-24 overflow-hidden">
      <div
        className={cn(
          "absolute inset-0 -z-10",
          tone === "warm" && "bg-[radial-gradient(ellipse_at_top,rgba(228,192,104,0.18),transparent_60%)]",
          tone === "cool" && "bg-[radial-gradient(ellipse_at_top,rgba(64,110,220,0.16),transparent_60%)]",
          tone === "default" && "bg-[radial-gradient(ellipse_at_top,rgba(64,110,220,0.12),transparent_60%)]"
        )}
      />
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 grid lg:grid-cols-12 gap-8 lg:gap-10 items-end">
        <div className="lg:col-span-7">
          <div className="eyebrow mb-4">{eyebrow}</div>
          <h1 className="display text-[clamp(2rem,5.5vw,4.6rem)] gradient-text leading-[1.02]">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 lg:mt-6 text-ink-300 text-base lg:text-lg max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
        {aside && <div className="lg:col-span-5">{aside}</div>}
      </div>
    </section>
  );
}
