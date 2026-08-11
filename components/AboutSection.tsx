import { about, site } from "@/lib/content";

export default function AboutSection() {
  return (
    <section id="ueber-mich" className="bg-blue-light py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-navy text-xl font-bold text-white">
          AH
        </div>
        <h2 className="text-3xl font-bold text-navy sm:text-4xl">{about.title}</h2>
        <div className="mt-6 space-y-4 text-left text-navy/80 sm:text-lg">
          {about.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <p className="mt-6 text-sm font-medium text-navy/60">— {site.repoOwnerName}</p>
      </div>
    </section>
  );
}
