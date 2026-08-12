import Image from "next/image";
import { withBasePath } from "@/lib/paths";

const IMAGES = [
  { src: "13-statistik-1.png", caption: "Lernzeit und Erfolgsquote" },
  { src: "14-statistik-2.png", caption: "Fortschritt je Fragenkatalog" },
];

export default function Chapter05Fortschritt() {
  return (
    <section data-tone="light" className="relative py-24 text-navy">
      <div className="absolute inset-0 z-5 bg-white/90 backdrop-blur-sm" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        <p className="font-mono text-xs tracking-[0.2em] text-navy/60 uppercase">
          05 — Deine Lernstatistik
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Fortschritt im Blick</h2>
        <p className="mx-auto mt-4 max-w-2xl text-left text-lg text-navy/80">
          Lernzeit, Erfolgsquote und Fortschritt je Fragenkatalog — alles übersichtlich nach Tag,
          Woche, Monat oder Jahr auswertbar.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-8">
          {IMAGES.map((image) => (
            <figure key={image.src} className="w-48 sm:w-56 md:w-64">
              <div className="overflow-hidden rounded-[2rem] ring-1 ring-white/40 shadow-xl">
                <Image
                  src={withBasePath(`/images/screenshotsApp/${image.src}`)}
                  alt={image.caption}
                  width={1440}
                  height={3120}
                  className="h-auto w-full"
                />
              </div>
              <figcaption className="mt-3 text-center text-sm font-medium text-navy/70">
                {image.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
