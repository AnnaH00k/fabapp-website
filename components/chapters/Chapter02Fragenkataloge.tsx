import Image from "next/image";
import { withBasePath } from "@/lib/paths";

export default function Chapter02Fragenkataloge() {
  return (
    <section data-tone="mid" className="relative py-24 text-navy">
      <div
        className="absolute inset-0 z-0 bg-white/35 backdrop-blur-sm"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:gap-20">
        <div className="max-w-xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-navy/60">
            02 — Vier Prüfungsfächer abgedeckt
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Fragenkataloge verwalten
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-navy/80">
            Nutze die vorgefertigten Kataloge zu allen 4 Prüfungsfächern oder
            leg dir eigene an — inklusive eigener Fragen und der Möglichkeit,
            Kataloge mit anderen zu teilen.
          </p>
        </div>

        <div className="flex justify-center lg:justify-end">
          <Image
            src={withBasePath("/images/illustrations/fragenkataloge.svg")}
            alt="Abstrakte Illustration von Fragenkatalogen"
            width={520}
            height={520}
            className="h-auto w-full max-w-[22rem] sm:max-w-[28rem]"
          />
        </div>
      </div>
    </section>
  );
}