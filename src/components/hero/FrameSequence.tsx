"use client";
import { useEffect, useRef, useState } from "react";
import { framePath, FRAME_SEQUENCES } from "@/lib/content";
import { cn } from "@/lib/utils";

type Seq = keyof typeof FRAME_SEQUENCES;
type Tone = "light" | "soft" | "dark";
type Blend = "normal" | "screen" | "lighten" | "multiply" | "darken";

/**
 * Frame-sequence canvas player. Two playback modes:
 *  - scroll  : ties frame index to scroll progress over `scrollHeight` vh. (default)
 *  - autoplay: plays once at a fixed FPS when the element enters view.
 *              No scroll buffer needed — wrapper is exactly 100vh.
 *
 * Tones:
 *  - "light" / "soft" : white surface; pair with blend="normal" for full-fidelity
 *                       light-themed frames, or blend="screen" to lift bright pixels
 *                       out of dark-themed frames.
 *  - "dark"           : navy stage for full-fidelity playback of dark-themed frames.
 */
export default function FrameSequence({
  seq = "seq1",
  scrollHeight = 250,
  tone = "light",
  blend = "normal",
  mode = "scroll",
  fps = 30,
  loop = false,
  children,
  rounded = false,
  veil = true,
}: {
  seq?: Seq;
  scrollHeight?: number;
  tone?: Tone;
  blend?: Blend;
  mode?: "scroll" | "autoplay";
  fps?: number;
  loop?: boolean;
  children?: React.ReactNode;
  rounded?: boolean;
  veil?: boolean;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const framesRef = useRef<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(0);
  const total = FRAME_SEQUENCES[seq].count;

  // Preload all frames
  useEffect(() => {
    let cancelled = false;
    const imgs: HTMLImageElement[] = [];
    let loadedN = 0;
    for (let i = 0; i < total; i++) {
      const img = new Image();
      img.src = framePath(seq, i);
      img.decoding = "async";
      img.onload = () => {
        if (cancelled) return;
        loadedN++;
        setLoaded(loadedN);
        if (loadedN === total) draw(0);
      };
      imgs.push(img);
    }
    framesRef.current = imgs;
    return () => { cancelled = true; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seq, total]);

  // Hi-DPI canvas sizing (up to 3x DPR)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 3);
      const rect = canvas.getBoundingClientRect();
      canvas.width = Math.round(rect.width * dpr);
      canvas.height = Math.round(rect.height * dpr);
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high";
      }
      drawCurrent();
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const draw = (frameIndex: number) => {
    const canvas = canvasRef.current;
    const img = framesRef.current[frameIndex];
    if (!canvas || !img || !img.complete) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const cw = canvas.clientWidth, ch = canvas.clientHeight;
    ctx.clearRect(0, 0, cw, ch);
    const ar = img.width / img.height;
    const car = cw / ch;
    let dw = cw, dh = ch, dx = 0, dy = 0;
    if (ar > car) { dh = ch; dw = ch * ar; dx = (cw - dw) / 2; }
    else          { dw = cw; dh = cw / ar; dy = (ch - dh) / 2; }
    ctx.drawImage(img, dx, dy, dw, dh);
  };

  const drawCurrent = () => {
    if (mode === "autoplay") { draw(0); return; }
    const wrap = wrapRef.current;
    if (!wrap) return;
    const rect = wrap.getBoundingClientRect();
    const vh = window.innerHeight;
    const scrolled = -rect.top;
    const total_h = Math.max(rect.height - vh, 1);
    const p = Math.min(Math.max(scrolled / total_h, 0), 1);
    const idx = Math.min(total - 1, Math.floor(p * (total - 1)));
    draw(idx);
  };

  // SCROLL MODE: tie frame index to scroll progress
  useEffect(() => {
    if (mode !== "scroll") return;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        drawCurrent();
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [total, mode]);

  // AUTOPLAY MODE: play frames at fixed fps when in view
  useEffect(() => {
    if (mode !== "autoplay") return;
    const wrap = wrapRef.current;
    if (!wrap) return;
    let raf = 0;
    let last = 0;
    let i = 0;
    let playing = false;
    const interval = 1000 / fps;

    const tick = (t: number) => {
      if (!playing) return;
      if (t - last >= interval) {
        draw(i);
        i++;
        last = t;
        if (i >= total) {
          if (loop) i = 0;
          else { playing = false; draw(total - 1); return; }
        }
      }
      raf = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting && !playing && loaded === total) {
            playing = true;
            i = 0;
            last = 0;
            raf = requestAnimationFrame(tick);
          } else if (!e.isIntersecting) {
            playing = false;
            cancelAnimationFrame(raf);
          }
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(wrap);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
      playing = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode, fps, loop, total, loaded]);

  const loadingPct = Math.round((loaded / total) * 100);
  const isLight = tone === "light" || tone === "soft";
  const isDark = tone === "dark";
  const isAutoplay = mode === "autoplay";

  return (
    <div
      ref={wrapRef}
      className={cn("relative w-full", isAutoplay && "h-screen")}
      style={isAutoplay ? undefined : { height: `${scrollHeight}vh` }}
    >
      <div
        className={cn(
          "w-full overflow-hidden",
          isAutoplay ? "h-full relative" : "sticky top-0 h-screen",
          isDark && "bg-[#03060f]",
          isLight && "bg-surface-50",
          rounded && "sm:rounded-[2rem]"
        )}
      >
        {/* Bright base only when using a blend mode on light */}
        {isLight && blend !== "normal" && (
          <div className="absolute inset-0 bg-gradient-to-br from-white via-surface-50 to-surface-100" />
        )}

        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          style={{
            mixBlendMode: isLight ? blend : "normal",
            imageRendering: "auto",
          }}
        />

        {/* Veils */}
        {veil && isLight && blend !== "normal" && (
          <>
            <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white via-white/40 to-transparent pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white via-white/40 to-transparent pointer-events-none" />
            <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white/80 to-transparent pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-1/5 bg-gradient-to-l from-white/60 to-transparent pointer-events-none" />
          </>
        )}
        {veil && isLight && blend === "normal" && (
          <>
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white to-transparent pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
          </>
        )}
        {veil && isDark && (
          <>
            <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#03060f] to-transparent pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#03060f] to-transparent pointer-events-none" />
          </>
        )}

        {loaded < total && (
          <div
            className={cn(
              "absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.3em] uppercase",
              isLight ? "text-ink-400" : "text-white/60"
            )}
          >
            Loading {loadingPct}%
          </div>
        )}

        {children}
      </div>
    </div>
  );
}
