"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NAV } from "@/lib/content";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openMobile, setOpenMobile] = useState(false);
  const [openSolutions, setOpenSolutions] = useState(false);

  // Scroll state
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    if (openMobile) document.body.classList.add("menu-open");
    else document.body.classList.remove("menu-open");
    return () => document.body.classList.remove("menu-open");
  }, [openMobile]);

  // Close on ESC + on resize past lg
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenMobile(false);
    const onResize = () => window.innerWidth >= 1024 && setOpenMobile(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-500",
          scrolled || openMobile
            ? "py-3 bg-white/85 backdrop-blur-xl border-b border-ink-50/[0.06] shadow-[0_1px_0_rgba(10,18,48,0.04)]"
            : "py-5 bg-transparent"
        )}
      >
        <nav className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 flex items-center justify-between gap-8">
          <Link href="/" onClick={() => setOpenMobile(false)} className="flex items-center gap-2.5 group relative z-[60]">
            <div className="relative w-9 h-9 rounded-full overflow-hidden ring-1 ring-ink-50/10 group-hover:ring-gold-500/60 transition shadow-sm">
              <Image src="/MEHEXA/brand/logo.jpeg" alt="MEHEXA" fill sizes="36px" className="object-cover" priority />
            </div>
            <span className="display text-lg tracking-tight text-ink-50">
              ME<span className="text-gold-600">HEXA</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1 text-[13px] text-ink-200">
            {NAV.map((item) =>
              item.children ? (
                <li
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenSolutions(true)}
                  onMouseLeave={() => setOpenSolutions(false)}
                >
                  <button className="px-3 py-2 rounded-full hover:text-ink-50 transition flex items-center gap-1.5">
                    {item.label}
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <div
                    className={cn(
                      "absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-300",
                      openSolutions ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-1"
                    )}
                  >
                    <div className="w-80 glass-strong rounded-2xl p-2 shadow-lg">
                      {item.children.map((c) => (
                        <Link
                          key={c.label}
                          href={c.href}
                          className="flex flex-col gap-0.5 px-4 py-3 rounded-xl hover:bg-ink-50/[0.04] transition"
                        >
                          <span className="text-ink-50 text-sm font-medium">{c.label}</span>
                          <span className="text-ink-400 text-xs">{c.note}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </li>
              ) : (
                <li key={item.label}>
                  <Link href={item.href} className="px-3 py-2 rounded-full hover:text-ink-50 transition">
                    {item.label}
                  </Link>
                </li>
              )
            )}
          </ul>

          <div className="hidden lg:flex items-center gap-3">
            <Link href="/investors" className="text-[13px] text-ink-200 hover:text-ink-50 transition">
              Investors
            </Link>
            <Link href="/contact" className="btn btn-primary !py-2 !px-5 text-[13px]">
              Partner With Us
            </Link>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setOpenMobile((v) => !v)}
            className="lg:hidden relative z-[60] w-11 h-11 rounded-full glass-strong flex items-center justify-center"
            aria-label={openMobile ? "Close menu" : "Open menu"}
            aria-expanded={openMobile}
          >
            <div className="relative w-5 h-4">
              <span
                className={cn(
                  "absolute left-0 right-0 h-[1.5px] bg-ink-50 rounded transition-all duration-400",
                  openMobile ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
                )}
              />
              <span
                className={cn(
                  "absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[1.5px] bg-ink-50 rounded transition-all duration-200",
                  openMobile ? "opacity-0" : "opacity-100"
                )}
              />
              <span
                className={cn(
                  "absolute left-0 right-0 h-[1.5px] bg-ink-50 rounded transition-all duration-400",
                  openMobile ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0"
                )}
              />
            </div>
          </button>
        </nav>
      </header>

      {/* Mobile fullscreen overlay */}
      <AnimatePresence>
        {openMobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden fixed inset-0 z-40 bg-white/95 backdrop-blur-2xl"
          >
            {/* Decorative ambient */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute -top-32 -right-20 w-[28rem] h-[28rem] rounded-full bg-gold-400/10 blur-[100px]" />
              <div className="absolute -bottom-32 -left-20 w-[24rem] h-[24rem] rounded-full bg-navy-400/12 blur-[120px]" />
            </div>

            <div className="relative h-full pt-24 pb-10 px-6 flex flex-col overflow-y-auto">
              <ul className="space-y-1">
                {NAV.map((item, i) =>
                  item.children ? (
                    <motion.li
                      key={item.label}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.05 + i * 0.05 }}
                      className="py-3"
                    >
                      <div className="eyebrow mb-3">{item.label}</div>
                      <div className="space-y-2">
                        {item.children.map((c) => (
                          <Link
                            key={c.label}
                            href={c.href}
                            onClick={() => setOpenMobile(false)}
                            className="flex flex-col py-2.5 px-3 rounded-xl hover:bg-ink-50/[0.04] active:bg-ink-50/[0.06] transition"
                          >
                            <span className="text-ink-50 text-base font-medium">{c.label}</span>
                            <span className="text-ink-400 text-xs mt-0.5">{c.note}</span>
                          </Link>
                        ))}
                      </div>
                    </motion.li>
                  ) : (
                    <motion.li
                      key={item.label}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.05 + i * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setOpenMobile(false)}
                        className="display block px-3 py-3.5 text-2xl text-ink-50 hover:text-gold-600 transition"
                      >
                        {item.label}
                      </Link>
                    </motion.li>
                  )
                )}
              </ul>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className="mt-auto pt-8 space-y-3"
              >
                <Link
                  href="/investors"
                  onClick={() => setOpenMobile(false)}
                  className="btn btn-outline w-full"
                >
                  For Investors
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setOpenMobile(false)}
                  className="btn btn-primary w-full"
                >
                  Partner With Us
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
