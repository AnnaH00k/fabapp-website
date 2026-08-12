import Image from "next/image";
import { withBasePath } from "@/lib/paths";

const IMAGES = [
  {
    src: "18-einstellungen-ausschnitt.png",
    caption: "Lernintervalle individuell einstellen",
    width: 1440,
    height: 1521,
  },
  {
    src: "19-geraetewechsel-ausschnitt.png",
    caption: "Backup & Gerätewechsel",
    width: 1440,
    height: 897,
  },
];

export default function Chapter07AllesImGriff() {
  return (
    <section data-tone="dark" className="relative py-16 text-blue-light lg:py-24">
      <div
        className="absolute inset-0 z-0 bg-navy-dark/60 backdrop-blur-sm"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-20">
        {/* Mobil oben · Desktop links */}
        <div className="max-w-xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-blue-light/70">
            07 — Individuell einstellbar
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Intervalle & Backup
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-blue-light/85">
            Stelle die Lernintervalle individuell ein und nimm deinen kompletten
            Fortschritt beim Gerätewechsel per Backup einfach mit.
          </p>

          <div className="mt-7 hidden h-px w-24 bg-blue-light/20 lg:block" />
        </div>

        {/* Mobil unter Text · Desktop rechts */}
        <div className="grid grid-cols-2 items-center gap-4 sm:gap-6">
          {IMAGES.map((image, index) => (
            <figure
              key={image.src}
              className={index === 1 ? "mt-8 sm:mt-12" : ""}
            >
              <div className="relative overflow-hidden rounded-[1.75rem] shadow-2xl ring-1 ring-white/25">
                <Image
                  src={withBasePath(`/images/screenshotsApp/${image.src}`)}
                  alt={image.caption}
                  width={image.width}
                  height={image.height}
                  className="h-auto w-full"
                />

             
              </div>

              <figcaption className="mt-3 text-center text-sm font-medium leading-snug text-blue-light/75">
                {image.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}