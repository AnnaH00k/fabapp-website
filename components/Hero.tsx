import Image from "next/image";
import { site, heroParagraphs, examSubjects, heroClosing, flyer } from "@/lib/content";
import { withBasePath } from "@/lib/paths";
import StoreButtons from "./StoreButtons";

export default function Hero() {
  return (
    <section
      id="download"
      data-tone="light"
      className="relative overflow-hidden pt-20 pb-32 md:pt-28"
    >
      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
        <div>
          <p className="font-mono text-xs tracking-[0.2em] text-navy/60 uppercase">
            00 — Lern-App für Fachangestellte für Bäderbetriebe
          </p>
          <h1 className="mt-4 text-6xl font-extrabold tracking-tight text-navy sm:text-7xl">
            {site.name}
          </h1>
          <StoreButtons className="mt-8" />


          <div className="mt-6 space-y-3 text-navy/80">
            <p>{heroParagraphs[0]}</p>
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


        </div>

        <a
          href={flyer.href}
          download
          className="relative mx-auto block w-full max-w-xs md:max-w-sm"
        >
          <div className="absolute -inset-8 -z-10 rounded-full bg-blue-mid/40 blur-3xl" />
          <div className="relative  aspect-210/297 w-full rotate-2 drop-shadow-2xl transition duration-500 hover:rotate-0">
            <Image
              src={withBasePath("/images/flyerVorschau.svg")}
              alt="Vorschau des FABapp-Flyers"
              fill
              priority
              className="object-contain rounded-2xl"
            />
          </div>
          <p className="mt-3 flex items-center justify-center gap-1.5 text-sm text-navy/70">
            <DownloadIcon className="h-4 w-4" />
            {flyer.heroHint}
          </p>
        </a>
      </div>
    </section>
  );
}

function DownloadIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={2}>
      <path d="M12 3v12" />
      <path d="m7 10 5 5 5-5" />
      <path d="M5 21h14" />
    </svg>
  );
}
