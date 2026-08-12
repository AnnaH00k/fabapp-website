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

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!enabled || !canvas) return;

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

    const lastPointerActivity = { current: Date.now() };
    const auto = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let target = { x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight };

    const forwardPointer = (event: PointerEvent) => {
      lastPointerActivity.current = Date.now();
      auto.x = event.clientX;
      auto.y = event.clientY;
      canvas.dispatchEvent(
        new MouseEvent("mousemove", { clientX: event.clientX, clientY: event.clientY }),
      );
    };
    window.addEventListener("pointermove", forwardPointer);

    // px/s — deliberately slow so the auto-wander reads as a gentle, ambient
    // drift rather than something visibly "driving" the cursor around.
    const IDLE_THRESHOLD_MS = 2000;
    const AUTO_SPEED = 100;
    let autoFrame: number;
    let lastFrameTime = performance.now();

    const autoWander = (time: number) => {
      autoFrame = requestAnimationFrame(autoWander);
      const dt = (time - lastFrameTime) / 1000;
      lastFrameTime = time;

      if (Date.now() - lastPointerActivity.current < IDLE_THRESHOLD_MS) return;

      const dx = target.x - auto.x;
      const dy = target.y - auto.y;
      const dist = Math.hypot(dx, dy);
      if (dist < 4) {
        target = { x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight };
        return;
      }

      const step = Math.min(dist, AUTO_SPEED * dt);
      auto.x += (dx / dist) * step;
      auto.y += (dy / dist) * step;
      canvas.dispatchEvent(
        new MouseEvent("mousemove", { clientX: auto.x, clientY: auto.y }),
      );
    };
    autoFrame = requestAnimationFrame(autoWander);

    return () => {
      cancelled = true;
      window.removeEventListener("pointermove", forwardPointer);
      cancelAnimationFrame(autoFrame);
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
