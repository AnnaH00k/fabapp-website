import type { Metadata } from "next";
import { appInfo } from "@/lib/content";

export const metadata: Metadata = {
  title: "App Info – Quellen | FABapp",
  description:
    "Woher die Fragenkataloge der FABapp stammen: Prüfungskatalog und Fachliteratur zur Ausbildung Fachangestellte für Bäderbetriebe.",
};

export default function AppInfoPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-3xl font-bold text-navy sm:text-4xl">{appInfo.title}</h1>
      <p className="mt-6 text-navy/80">{appInfo.intro}</p>

      <a
        href={appInfo.examCatalogSource.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 block rounded-xl bg-blue-mid/30 p-4 text-sm text-navy/90 ring-1 ring-navy/10 transition hover:bg-blue-mid/50"
      >
        {appInfo.examCatalogSource.citation}
      </a>

      <p className="mt-10 text-navy/80">{appInfo.booksIntro}</p>

      <ul className="mt-4 space-y-3">
        {appInfo.books.map((book) => (
          <li key={book.url}>
            <a
              href={book.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-xl bg-blue-mid/30 p-4 text-sm text-navy/90 ring-1 ring-navy/10 transition hover:bg-blue-mid/50"
            >
              {book.citation}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
