import Image from "next/image";
import { withBasePath } from "@/lib/paths";

export default function Chapter01Ankommen() {
  return (
    <section data-tone="light" className="relative py-24 text-navy">
      <div
        className="absolute inset-0 z-0 bg-white/90 backdrop-blur-sm"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] lg:gap-20">
        {/* Mobil: oben | Desktop: rechts */}
        <div className="order-1 max-w-xl lg:order-2">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-navy/60">
            01 — Erste Schritte in der App
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Dashboard & Menü
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-navy/80">
            Nach dem Start siehst du sofort deinen Lernfortschritt und findest
            über das Menü jeden Bereich der App in Sekunden.
          </p>
        </div>

        {/* Mobil: unter dem Text | Desktop: links */}
        <div className="order-2 grid grid-cols-2 items-start gap-4 sm:gap-6 lg:order-1">
          <figure>
            <div className="overflow-hidden rounded-[2rem] shadow-xl ring-1 ring-white/40">
              <Image
                src={withBasePath("/images/screenshotsApp/02-home-ausschnitt.png")}
                alt="Dein Fortschritt auf einen Blick"
                width={1440}
                height={2500}
                className="h-auto w-full"
              />
            </div>

            <figcaption className="mt-3 text-center text-sm font-medium text-navy/70">
              Dein Fortschritt auf einen Blick
            </figcaption>
          </figure>

          <figure className="mt-8 sm:mt-12">
            <div className="overflow-hidden rounded-[2rem] shadow-xl ring-1 ring-white/40">
              <Image
                src={withBasePath("/images/screenshotsApp/03-menue-ausschnitt.png")}
                alt="Alles griffbereit im Menü"
                width={1440}
                height={1934}
                className="h-auto w-full"
              />
            </div>

            <figcaption className="mt-3 text-center text-sm font-medium text-navy/70">
              Alles griffbereit im Menü
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}