import Image from "next/image";
import { flyer } from "@/lib/content";
import { withBasePath } from "@/lib/paths";

export default function FlyerSection() {
  return (
    <section id="flyer" data-tone="dark" className="relative py-32 text-blue-light">
      <div className="absolute inset-0 z-5 bg-navy-dark/70 backdrop-blur-md" aria-hidden="true" />

      <div className="relative z-10 mx-auto grid max-w-5xl items-center gap-10 px-6 md:grid-cols-[1fr_auto]">
        <div>
          <p className="font-mono text-xs tracking-[0.2em] text-blue-light/70 uppercase">
            09 — Zum Aushängen und Teilen
          </p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {flyer.title}
          </h2>
          <p className="mt-4 max-w-xl text-blue-light/85 sm:text-lg">
            {flyer.body}
          </p>
          <a
            href={flyer.href}
            download
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-light px-6 py-3 font-semibold text-navy shadow-lg transition hover:bg-white"
          >
            <DownloadIcon className="h-5 w-5" />
            Flyer als PDF herunterladen
          </a>
        </div>

        <div className="mx-auto flex flex-col items-center gap-3 rounded-2xl bg-blue-light/10 p-5 ring-1 ring-blue-light/20">
          <Image
            src={withBasePath("/images/QRFABApp_NEW.png")}
            alt="QR-Code zur FABapp-Webseite"
            width={160}
            height={160}
            className="rounded-lg bg-white p-2"
          />
          <p className="text-center text-xs text-blue-light/70">
            QR-Code 
            <br />
            zur Webseite
          </p>
        </div>
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
