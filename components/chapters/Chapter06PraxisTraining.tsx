import Image from "next/image";
import { withBasePath } from "@/lib/paths";

const IMAGES = [
  { src: "15-praxis-1.png", caption: "Prüfungsleistungen dokumentieren" },
  { src: "16-praxis-eintrag.png", caption: "Ergebnis eintragen, Note automatisch" },
  { src: "17-trainingstagebuch.png", caption: "Trainingsfortschritt festhalten" },
];

export default function Chapter06PraxisTraining() {
  return (
    <section data-tone="mid" className="relative py-16 text-navy xl:py-20">
      <div
        className="absolute inset-0 z-0 bg-white/35 backdrop-blur-sm"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-navy/60">
            06 — Für die praktische Prüfung
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Praxis &amp; Training
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-navy/80">
            Trag Prüfungsleistungen ein und lass dir Note und Punktzahl automatisch
            berechnen, oder halte dein Schwimmtraining im Trainingstagebuch fest.
          </p>
        </div>

        <div className="mt-7 flex items-center justify-between xl:hidden">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-navy/55">
            Schritt für Schritt
          </p>
          <p className="text-sm text-navy/60">Wischen →</p>
        </div>

        <div className="relative mt-5 xl:mt-10">
          <div
            className="
              no-scrollbar grid grid-flow-col auto-cols-[42vw] gap-4
              overflow-x-auto pb-2 pr-6
              snap-x snap-mandatory touch-pan-x overscroll-x-contain
              sm:auto-cols-[10rem]
              xl:grid-flow-row xl:grid-cols-3 xl:gap-4
              xl:overflow-visible xl:pb-0 xl:pr-0
            "
          >
            {IMAGES.map((image) => (
              <figure
                key={image.src}
                className="min-w-0 snap-center xl:snap-none"
              >
                <div className="relative flex justify-center">
                  <Image
                    src={withBasePath(`/images/screenshotsApp/${image.src}`)}
                    alt={image.caption}
                    width={1440}
                    height={3120}
                    className="
                      h-auto max-h-[48svh] w-auto max-w-full
                      rounded-[1.5rem] shadow-lg ring-1 ring-white/50
                      xl:max-h-[38vh] xl:rounded-[1.25rem]
                    "
                  />

                
                </div>

                <figcaption className="mt-2 text-center text-xs font-medium leading-snug text-navy/70 xl:text-[11px]">
                  {image.caption}
                </figcaption>
              </figure>
            ))}
          </div>

          <div
            className="
              pointer-events-none absolute inset-y-0 right-0 w-16
              bg-gradient-to-l from-white/35 via-white/15 to-transparent
              xl:hidden
            "
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
