import Image from "next/image";
import { about, site } from "@/lib/content";
import { withBasePath } from "@/lib/paths";

export default function AboutSection() {
  return (
    <section id="ueber-mich" data-tone="light" className="relative py-32">
      <div className="absolute inset-0 z-5 bg-white/70 backdrop-blur-md" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <Image
          src={withBasePath("/images/entwicklerin.jpg")}
          alt={site.repoOwnerName}
          width={96}
          height={96}
          className="mx-auto mb-6 h-16 w-16 rounded-full object-cover ring-2 ring-navy/20"
        />
        <h2 className="mt-3 text-4xl font-bold tracking-tight text-navy sm:text-5xl">
          {about.title}
        </h2>
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
