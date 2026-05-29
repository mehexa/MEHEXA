import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  className,
  align = "left",
}: {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  intro?: ReactNode;
  children: ReactNode;
  className?: string;
  align?: "left" | "center";
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 py-16 sm:py-20 lg:py-28",
        className
      )}
    >
      {(eyebrow || title || intro) && (
        <header
          className={cn(
            "max-w-3xl mb-10 lg:mb-16",
            align === "center" && "mx-auto text-center"
          )}
        >
          {eyebrow && <div className="eyebrow mb-3">{eyebrow}</div>}
          {title && (
            <h2 className="display text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] gradient-text leading-[1.05]">
              {title}
            </h2>
          )}
          {intro && (
            <p className="text-ink-300 text-base md:text-[17px] mt-5 leading-relaxed max-w-2xl">
              {intro}
            </p>
          )}
        </header>
      )}
      {children}
    </section>
  );
}
