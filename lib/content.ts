import { withBasePath } from "./paths";

export const site = {
  name: "FABapp",
  tagline: "Deine Lern-App für den Beruf: Fachangestellte für Bäderbetriebe.",
  contactEmail: "baederapp@gmail.com",
  appStoreUrl: "https://apps.apple.com/us/app/fabapp/id6759299495",
  playStoreUrl:
    "https://play.google.com/store/apps/details?id=tech.hookin.fabapp",
  repoOwnerName: "Anna Höök",
};

export const heroParagraphs = [
  "Begleitend zur Ausbildung kannst du dich ideal mit der App auf die Abschlussprüfung vorbereiten.",
];

export const examSubjects = [
  "Retten, Erstversorgen, Schwimmen",
  "Badebetrieb",
  "Bädertechnik",
  "Wirtschafts- und Sozialkunde",
];

export const heroClosing =
  "Zudem lassen sich auch eigene Kataloge erstellen und mit anderen teilen.";

export const about = {
  title: "Über die Entwicklerin",
  paragraphs: [
    "Ich habe meine Ausbildung zur Fachangestellten für Bäderbetriebe 2021 erfolgreich abgeschlossen. Im Laufe meiner Ausbildung befasste ich mich immer wieder damit, wie es am einfachsten wäre, die Bandbreite des Wissens am einfachsten zu vermitteln und vor allem auch selbstständig zu lernen.",
    "Häufig ist es jedoch schwer, ohne Hilfe an Dinge heranzugehen, deshalb erschuf ich diese App, um anderen und auch mir selbst das Lernen zu erleichtern. Nach 3 Jahren Informatik Studium bin ich nun teilzeit zurück im Job und gebe nebenbei mein Bestes, meine Fähigkeiten in der App-Gestaltung zu verbessern – über Tipps, Wünsche und Ratschläge bin ich immer dankbar.",
  ],
};

export const feedback = {
  title: "Feedback",
  body: "Um die FABapp für dich stets weiterentwickeln zu können, freue ich mich stets über Rückmeldungen, Verbesserungsvorschläge und konstruktive Kritik. Denn nur so können die besten Ergebnisse erzielt werden.",
};

export const appInfo = {
  title: "App Info",
  intro:
    "Wie ist der Inhalt der App entstanden? Die App richtet sich nach einem Pool von Prüfungsfragen der Ausbildung Fachangestellte für Bäderbetriebe:",
  examCatalogSource: {
    citation:
      'Bezirksregierung Düsseldorf [BZD]. (2006, April). Katalog von Prüfungsfragen für die Zwischenprüfungen und Abschlussprüfungen im Ausbildungsberuf „Fachangestellte für Bäderbetriebe" / „Fachangestellter für Bäderbetriebe" (FAB) in Nordrhein-Westfalen.',
    url: "http://bzduesseldorf.schulsport-nrw.de/cms/upload/images/FAB_Material/fragenkatalog.pdf",
  },
  booksIntro: "Zusätzlich wurden mehrere Lehrbücher verwendet, in denen sämtliches Wissen über die Ausbildung zu finden ist:",
  books: [
    {
      citation:
        "Heyartz, T., & Rohjans, H. (2006). Gesundheits-, Erste Hilfe-, Schwimm- und Rettungslehre (3. Auflage). Wolfhagen: Litho-Verlag e.K.",
      url: "https://www.badeliteratur.de/Fachbuecher/Gesundheits-Erste-Hilfe-Schwimm-und-Rettungslehre::27.html",
    },
    {
      citation:
        "Holzinger, R. (2019). Bäderbetriebslehre: Bäderbetriebe rechtssicher und kundenorientiert führen. Norderstedt: BoD – Books on Demand.",
      url: "https://www.badeliteratur.de/Fachbuecher/Baederbetriebslehre::882.html",
    },
    {
      citation:
        "Lindemann, D. (2016). Bädertechnik für Betrieb und Ausbildung (9., überarbeitete Auflage). Wolfhagen: Litho-Verlag e.K.",
      url: "https://www.badeliteratur.de/Fachbuecher/Baedertechnik-fuer-Betrieb-und-Ausbildung::879.html",
    },
    {
      citation: "Nuding, H., & Haller, J. (2008). Wirtschaftskunde (2. Auflage). Stuttgart: Ernst Klett Verlag.",
      url: "https://www.amazon.de/gp/product/3128827419/",
    },
    {
      citation:
        "Ruß, H. (2015). Chemie für den Badebetrieb (6., durchgesehene und überarbeitete Auflage). Wolfhagen: Litho-Verlag e.K.",
      url: "https://www.badeliteratur.de/Fachbuecher/Chemie-fuer-den-Badebetrieb::880.html",
    },
  ],
};

export const flyer = {
  title: "Flyer herunterladen",
  body: "Du arbeitest in einem Bad oder bildest Fachangestellte für Bäderbetriebe aus? Lade den Flyer herunter und leg ihn bei euch im Betrieb aus – damit alle Azubis von der FABapp profitieren.",
  fileName: "FlyerFABapp2026_final.pdf",
  href: withBasePath("/flyer/FlyerFABapp2026_final.pdf"),
  heroHint: "Ausdrucken und im Bad aushängen.",
};
