"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

// A soft, muted blue close to the page's own blue-light/blue-mid tones —
// deliberately low-contrast (a few shades off, not a distinct color) so the
// effect reads as a subtle water shimmer instead of a bright, attention-
// grabbing blob.
const SPLAT_COLOR = { r: 0.52, g: 0.6, b: 0.8 };

/**
 * Full-viewport WebGL fluid simulation (via the `webgl-fluid` package, a
 * dependency-free ESM port of PavelDoGreat's classic sim) reacting to the
 * pointer, tinted to the brand palette for a "water" feel instead of the
 * usual multicolor smoke. Disabled for touch/coarse pointers, missing WebGL
 * support, and prefers-reduced-motion (component renders nothing in those
 * cases).
 *
 * The canvas has to stay `pointer-events-none` so it never blocks clicks on
 * real content underneath it (it's a full-page overlay). webgl-fluid binds
 * its own `mousemove` listener directly to the canvas element though, so we
 * forward real pointer movement onto it via a synthetic MouseEvent — that
 * still works with pointer-events: none since it bypasses hit-testing.
 */
export default function WaterFluidCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const probe = document.createElement("canvas");
    const hasWebGL = !!(
      probe.getContext("webgl2") ||
      probe.getContext("webgl") ||
      probe.getContext("experimental-webgl")
    );
    if (!hasWebGL) return;

    setEnabled(true);
  }, [prefersReducedMotion]);

  const initializedRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!enabled || !canvas || initializedRef.current) return;
    initializedRef.current = true;

    let cancelled = false;
    import("webgl-fluid").then(({ default: WebGLFluid }) => {
      if (cancelled) return;
      WebGLFluid(canvas, {
        TRIGGER: "hover",
        IMMEDIATE: false,
        TRANSPARENT: true,
        COLORFUL: false,
        SPLAT_COLOR,
        CURL: 1,
        VELOCITY_DISSIPATION: 0.01,
        DENSITY_DISSIPATION: 0.5,
        SPLAT_RADIUS: 0.1,
        SPLAT_FORCE: 800,
        SHADING: false,
        BLOOM: false,
        SUNRAYS: false,
      });
    });

    const forwardPointer = (event: PointerEvent) => {
      canvas.dispatchEvent(
        new MouseEvent("mousemove", { clientX: event.clientX, clientY: event.clientY }),
      );
    };
    window.addEventListener("pointermove", forwardPointer);

    return () => {
      cancelled = true;
      window.removeEventListener("pointermove", forwardPointer);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 h-full w-full opacity-70"
    />
  );
}
