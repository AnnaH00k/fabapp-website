import Image from "next/image";
import { withBasePath } from "@/lib/paths";

export default function Chapter04MultipleChoice() {
  return (
    <section data-tone="mid" className="relative py-24 text-navy">
      <div
        className="absolute inset-0 z-0 bg-white/35 backdrop-blur-sm"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:gap-20">
        <div className="max-w-xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-navy/60">
            04 — Schnell und kompakt üben
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Multiple-Choice-Modus
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-navy/80">
            Wer es kompakter mag, übt im Multiple-Choice-Modus — mit sofortiger
            Auswertung und Erklärung zu jeder Antwortoption.
          </p>
        </div>

        <div className="flex justify-center lg:justify-end">
          <Image
            src={withBasePath("/images/illustrations/multiple-choice.svg")}
            alt="Abstrakte Illustration des Multiple-Choice-Modus"
            width={520}
            height={520}
            className="h-auto w-full max-w-[22rem] sm:max-w-[28rem]"
          />
        </div>
      </div>
    </section>
  );
}
