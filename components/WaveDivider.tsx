type WaveDividerProps = {
  className?: string;
  backFill?: string;
  frontFill?: string;
  height?: string;
};

/**
 * Two layered wave shapes that scroll horizontally in a seamless loop
 * (each layer is the same path drawn twice side by side, translated -50%).
 * Purely CSS-driven, no JS — animation.animate-wave-* is disabled under
 * prefers-reduced-motion via globals.css.
 */
export default function WaveDivider({
  className = "",
  backFill = "fill-blue-mid/60",
  frontFill = "fill-navy-dark",
  height = "h-20 md:h-28",
}: WaveDividerProps) {
  return (
    <div
      className={`relative w-full overflow-hidden leading-none ${height} ${className}`}
      aria-hidden="true"
    >
      <div className="animate-wave-slow absolute inset-0 flex w-[200%]">
        <WaveShape className={backFill} />
        <WaveShape className={backFill} />
      </div>
      <div className="animate-wave-fast absolute inset-0 flex w-[200%] translate-y-2">
        <WaveShape className={frontFill} />
        <WaveShape className={frontFill} />
      </div>
    </div>
  );
}

function WaveShape({ className }: { className: string }) {
  return (
    <svg
      className={`h-full w-1/2 shrink-0 ${className}`}
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
    >
      <path d="M0,50 C150,110 350,-10 600,50 C850,110 1050,-10 1200,50 L1200,120 L0,120 Z" />
    </svg>
  );
}
