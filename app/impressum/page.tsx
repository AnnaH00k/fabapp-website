import type { Metadata } from "next";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Impressum | FABapp",
};

export default function ImpressumPage() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-20">
      <h1 className="text-3xl font-bold text-navy sm:text-4xl">Impressum</h1>

      <div className="mt-8 space-y-1 text-navy/85">
        <p className="font-semibold text-navy">Kontakt:</p>
        <p>{site.repoOwnerName}</p>
        <p>
          E-Mail:{" "}
          <a href={`mailto:${site.contactEmail}`} className="underline hover:text-navy">
            {site.contactEmail}
          </a>
        </p>
      </div>
    </section>
  );
}
