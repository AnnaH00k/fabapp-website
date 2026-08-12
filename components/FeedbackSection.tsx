import { feedback, site } from "@/lib/content";

export default function FeedbackSection() {
  return (
    <section id="feedback" data-tone="mid" className="relative py-32">
      <div className="absolute inset-0 z-5 bg-white/90 backdrop-blur-sm" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">
        <p className="font-mono text-xs tracking-[0.2em] text-navy/60 uppercase">
          10 — Kontakt
        </p>
        <h2 className="mt-3 text-4xl font-bold tracking-tight text-navy sm:text-5xl">
          {feedback.title}
        </h2>
        <p className="mt-4 text-navy/80 sm:text-lg">
          {feedback.body}
        </p>
        <a
          href={`mailto:${site.contactEmail}`}
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-navy px-6 py-3 font-semibold text-white shadow-lg shadow-navy/20 transition hover:bg-navy-dark"
        >
          <MailIcon className="h-5 w-5" />
          {site.contactEmail}
        </a>
      </div>
    </section>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={2}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}
