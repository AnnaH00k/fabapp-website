export type StoryTone = "light" | "mid" | "dark";

export type StoryImage = {
  src: string;
  caption: string;
};

export type StoryChapterData = {
  number: string;
  kicker: string;
  title: string;
  description: string;
  tone: StoryTone;
  images: StoryImage[];
};

export const storyChapters: StoryChapterData[] = [
  {
    number: "01",
    kicker: "Erste Schritte in der App",
    title: "Ankommen",
    description:
      "Nach dem Start siehst du sofort deinen Lernfortschritt und findest über das Menü jeden Bereich der App in Sekunden.",
    tone: "light",
    images: [
      { src: "02-home.png", caption: "Dein Fortschritt auf einen Blick" },
      { src: "03-menue.png", caption: "Alles griffbereit im Menü" },
    ],
  },
  {
    number: "02",
    kicker: "Vier Prüfungsfächer abgedeckt",
    title: "Fragenkataloge verwalten",
    description:
      "Nutze die vorgefertigten Kataloge zu allen 4 Prüfungsfächern oder leg dir eigene an — inklusive eigener Fragen und der Möglichkeit, Kataloge mit anderen zu teilen.",
    tone: "mid",
    images: [
      { src: "04-kataloge.png", caption: "Fragenkataloge im Überblick" },
      { src: "20-katalog-erstellen.png", caption: "Eigenen Katalog anlegen" },
      { src: "21-frage-erstellen.png", caption: "Eigene Fragen ergänzen" },
      { src: "22-export-import.png", caption: "Kataloge exportieren & teilen" },
    ],
  },
  {
    number: "03",
    kicker: "Der Freitext-Modus",
    title: "Frei antworten & verstehen",
    description:
      "Beantworte Fragen in eigenen Worten, vergleiche mit der Musterlösung und schätze selbst ein, ob du richtig lagst. Quellen sind direkt verlinkt, und passt eine Frage mal nicht, meldest du sie mit einem Tipp.",
    tone: "light",
    images: [
      { src: "05-quiz-frage.png", caption: "Frage stellen" },
      { src: "06-quiz-eingabe.png", caption: "Frei antworten" },
      { src: "07-quiz-loesung.png", caption: "Musterlösung vergleichen" },
      { src: "08-quellen.png", caption: "Quellen nachlesen" },
      { src: "09-quiz-feedback.png", caption: "Spaced-Repetition-Feedback" },
      { src: "10-melden.png", caption: "Fehler melden, App verbessern" },
    ],
  },
  {
    number: "04",
    kicker: "Schnell und kompakt üben",
    title: "Multiple-Choice-Modus",
    description:
      "Wer es kompakter mag, übt im Multiple-Choice-Modus — mit sofortiger Auswertung und Erklärung zu jeder Antwortoption.",
    tone: "mid",
    images: [
      { src: "11-quiz-mc.png", caption: "Antwort auswählen" },
      { src: "12-quiz-mc-ausgewertet.png", caption: "Ergebnis mit Erklärung" },
    ],
  },
  {
    number: "05",
    kicker: "Deine Lernstatistik",
    title: "Fortschritt im Blick",
    description:
      "Lernzeit, Erfolgsquote und Fortschritt je Fragenkatalog — alles übersichtlich nach Tag, Woche, Monat oder Jahr auswertbar.",
    tone: "light",
    images: [
      { src: "13-statistik-1.png", caption: "Lernzeit und Erfolgsquote" },
      { src: "14-statistik-2.png", caption: "Fortschritt je Fragenkatalog" },
    ],
  },
  {
    number: "06",
    kicker: "Für die praktische Prüfung",
    title: "Praxis & Training",
    description:
      "Trag Prüfungsleistungen ein und lass dir Note und Punktzahl automatisch berechnen, oder halte dein Schwimmtraining im Trainingstagebuch fest.",
    tone: "mid",
    images: [
      { src: "15-praxis-1.png", caption: "Prüfungsleistungen dokumentieren" },
      { src: "16-praxis-eintrag.png", caption: "Ergebnis eintragen, Note automatisch" },
      { src: "17-trainingstagebuch.png", caption: "Trainingsfortschritt festhalten" },
    ],
  },
  {
    number: "07",
    kicker: "Individuell einstellbar",
    title: "Alles im Griff",
    description:
      "Stelle die Lernintervalle individuell ein und nimm deinen kompletten Fortschritt beim Gerätewechsel per Backup einfach mit.",
    tone: "dark",
    images: [
      { src: "18-einstellungen.png", caption: "Lernintervalle individuell einstellen" },
      { src: "19-geraetewechsel.png", caption: "Backup & Gerätewechsel" },
    ],
  },
];
