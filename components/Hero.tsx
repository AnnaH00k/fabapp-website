import Image from "next/image";
import { site, heroParagraphs, examSubjects, heroClosing } from "@/lib/content";
import { withBasePath } from "@/lib/paths";
import StoreButtons from "./StoreButtons";

export default function Hero() {
  return (
    <section
      id="download"
      data-tone="light"
      className="relative overflow-hidden pt-20 pb-32 md:pt-28"
    >
      <DecorativeBubbles />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
        <div>
          <p className="font-mono text-xs tracking-[0.2em] text-navy/60 uppercase">
            00 — Lern-App für Fachangestellte für Bäderbetriebe
          </p>
          <h1 className="mt-4 text-6xl font-extrabold tracking-tight text-navy sm:text-7xl">
            {site.name}
          </h1>
          <p className="mt-5 text-lg font-medium text-navy/90">{site.tagline}</p>

          <div className="mt-6 space-y-3 text-navy/80">
            <p>{heroParagraphs[0]}</p>
            <p>{heroParagraphs[1]}</p>
            <p>{heroParagraphs[2]}</p>
          </div>

          <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {examSubjects.map((subject, i) => (
              <li
                key={subject}
                className="flex items-center gap-2 rounded-lg bg-white/50 px-3 py-2 text-sm font-medium text-navy ring-1 ring-navy/10"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-navy text-[11px] font-bold text-white">
                  {i + 1}
                </span>
                {subject}
              </li>
            ))}
          </ul>

          <p className="mt-4 text-sm text-navy/70">{heroClosing}</p>

          <StoreButtons className="mt-8" />
        </div>

        <div className="relative mx-auto w-full max-w-xs md:max-w-sm">
          <div className="absolute -inset-8 -z-10 rounded-full bg-blue-mid/40 blur-3xl" />
          <Image
            src={withBasePath("/images/screenshotsApp/01-willkommen.png")}
            alt="Willkommensbildschirm der FABapp"
            width={1440}
            height={3120}
            priority
            className="mx-auto w-full rotate-2 rounded-[2.5rem] drop-shadow-2xl transition duration-500 hover:rotate-0"
          />
        </div>
      </div>
    </section>
  );
}

function DecorativeBubbles() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute top-10 left-[8%] h-16 w-16 rounded-full bg-white/40 blur-sm" />
      <div className="absolute top-1/3 right-[6%] h-24 w-24 rounded-full bg-navy/5" />
      <div className="absolute bottom-10 left-1/4 h-10 w-10 rounded-full bg-white/30" />
    </div>
  );
}
