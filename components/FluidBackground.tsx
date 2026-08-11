"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

type Tone = "light" | "mid" | "dark";

const TONE_COLOR: Record<Tone, string> = {
  light: "var(--color-blue-light)",
  mid: "var(--color-blue-mid)",
  dark: "var(--color-navy)",
};

const FALLBACK_GRADIENT = `linear-gradient(180deg, ${TONE_COLOR.light}, ${TONE_COLOR.light})`;

// Small pixel margin (not percentage) so the color change between two
// adjacent sections blends over a short distance instead of cutting hard
// exactly at the shared edge — kept in real pixels so it stays proportionally
// tiny regardless of how tall/short a section is.
const BLEND_PX = 32;

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

/**
 * Single continuous gradient that fills its relatively-positioned parent
 * (the `relative isolate` wrapper in app/page.tsx). Unlike a hand-tuned set
 * of fixed percentage stops (which drift out of sync the moment the page's
 * total height changes — exactly what kept happening as sections were
 * added/resized), the color stops here are computed from each section's
 * *real* rendered position (`data-tone="light" | "mid" | "dark"` on the
 * section element), re-measured via ResizeObserver whenever layout changes.
 * The gradient can therefore never drift out of alignment with the content
 * it sits behind, no matter how the page's length changes in the future.
 */
export default function FluidBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [gradient, setGradient] = useState(FALLBACK_GRADIENT);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const container = containerRef.current;
    const wrapper = container?.parentElement;
    if (!container || !wrapper) return;

    function recompute() {
      if (!wrapper) return;
      const totalHeight = wrapper.offsetHeight;
      const sections = Array.from(
        wrapper.querySelectorAll<HTMLElement>("[data-tone]"),
      );
      if (totalHeight <= 0 || sections.length === 0) {
        setGradient(FALLBACK_GRADIENT);
        return;
      }

      const stops: string[] = [];
      sections.forEach((el, i) => {
        const tone = (el.dataset.tone as Tone) ?? "light";
        const color = TONE_COLOR[tone];
        const startPx = i === 0 ? 0 : el.offsetTop + BLEND_PX;
        const endPx =
          i === sections.length - 1
            ? totalHeight
            : el.offsetTop + el.offsetHeight - BLEND_PX;
        const startPct = clamp((startPx / totalHeight) * 100, 0, 100);
        const endPct = clamp((endPx / totalHeight) * 100, 0, 100);
        stops.push(`${color} ${startPct.toFixed(2)}%`);
        stops.push(`${color} ${Math.max(startPct, endPct).toFixed(2)}%`);
      });

      setGradient(`linear-gradient(180deg, ${stops.join(", ")})`);
    }

    recompute();
    const resizeObserver = new ResizeObserver(recompute);
    resizeObserver.observe(wrapper);
    window.addEventListener("resize", recompute);
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", recompute);
    };
  }, []);

  const blobOneY = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? ["0%", "0%"] : ["-15%", "25%"],
  );
  const blobTwoY = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? ["0%", "0%"] : ["15%", "-30%"],
  );

  return (
    <div ref={containerRef} className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0" style={{ background: gradient }} />
      <motion.div
        style={{ y: blobOneY }}
        className="absolute top-[8%] -left-24 h-72 w-72 rounded-full bg-blue-mid/30 blur-[90px]"
      />
      <motion.div
        style={{ y: blobTwoY }}
        className="absolute top-[55%] -right-16 h-80 w-80 rounded-full bg-navy/15 blur-[110px]"
      />
    </div>
  );
}
