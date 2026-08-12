import Image from "next/image";
import { withBasePath } from "@/lib/paths";

const IMAGES = [
  { src: "05-quiz-frage.png", caption: "Frage stellen" },
  { src: "06-quiz-eingabe.png", caption: "Frei antworten" },
  { src: "07-quiz-loesung.png", caption: "Musterlösung vergleichen" },
  { src: "08-quellen.png", caption: "Quellen nachlesen" },
  { src: "09-quiz-feedback.png", caption: "Spaced-Repetition-Feedback" },
  { src: "10-melden.png", caption: "Fehler melden, App verbessern" },
];

export default function Chapter03FreiAntworten() {
  return (
    <section data-tone="light" className="relative py-16 text-navy xl:py-20">
      <div
        className="absolute inset-0 z-0 bg-white/90 backdrop-blur-md"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-navy/60">
            03 — Der Freitext-Modus
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Frei antworten &amp; verstehen
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-navy/80">
            Beantworte Fragen in eigenen Worten, vergleiche mit der Musterlösung
            und schätze selbst ein, ob du richtig lagst. Quellen sind direkt
            verlinkt, und passt eine Frage mal nicht, meldest du sie mit einem
            Tipp.
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
              xl:grid-flow-row xl:grid-cols-6 xl:gap-4
              xl:overflow-visible xl:pb-0 xl:pr-0
            "
          >
            {IMAGES.map((image, index) => (
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
              bg-gradient-to-l from-white/70 via-white/35 to-transparent
              xl:hidden
            "
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}