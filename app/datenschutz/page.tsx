import type { Metadata } from "next";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | FABapp",
};

export default function DatenschutzPage() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-20">
      <h1 className="text-3xl font-bold text-navy sm:text-4xl">Datenschutzerklärung</h1>

      <div className="mt-8 space-y-8 text-navy/85">
        <div>
          <h2 className="text-xl font-semibold text-navy">Verantwortlicher</h2>
          <p className="mt-2">
            Verantwortlich für die Datenverarbeitung auf dieser Website ist {site.repoOwnerName},
            erreichbar unter{" "}
            <a href={`mailto:${site.contactEmail}`} className="underline hover:text-navy">
              {site.contactEmail}
            </a>
            .
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-navy">Hosting über GitHub Pages</h2>
          <p className="mt-2">
            Diese Website wird über GitHub Pages gehostet, einen Dienst von GitHub, Inc.
            (respektive GitHub B.V. für Nutzer in der EU). Beim Aufruf dieser Website verarbeitet
            GitHub automatisch technische Zugriffsdaten (u. a. IP-Adresse, Datum und Uhrzeit des
            Zugriffs, aufgerufene Seite, verwendeter Browser) in Server-Logfiles. Diese
            Verarbeitung ist zum technischen Betrieb und zur Auslieferung der Website erforderlich
            (Art. 6 Abs. 1 lit. f DSGVO). Weitere Informationen findest du in der{" "}
            <a
              href="https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-navy"
            >
              Datenschutzerklärung von GitHub
            </a>
            .
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-navy">Google Analytics</h2>
          <p className="mt-2">
            Diese Website nutzt Google Analytics, einen Webanalysedienst der Google Ireland
            Limited (bzw. Google LLC für Verantwortliche außerhalb des Europäischen
            Wirtschaftsraums und der Schweiz), im Folgenden „Google“. Google Analytics verwendet
            Cookies bzw. vergleichbare Technologien, die eine Analyse der Website-Nutzung
            ermöglichen. Die dabei erzeugten Informationen werden in der Regel an einen Server von
            Google übertragen und dort gespeichert, IP-Adressen werden dabei standardmäßig
            gekürzt/anonymisiert.
          </p>
          <p className="mt-3">
            <strong>Google Analytics wird ausschließlich mit deiner vorherigen Einwilligung
            geladen</strong> – über das Cookie-Banner beim ersten Seitenaufruf. Ohne Zustimmung
            werden keine Analytics-Skripte oder -Cookies gesetzt. Rechtsgrundlage ist damit deine
            Einwilligung (Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1 TTDSG). Du kannst deine
            Zustimmung jederzeit mit Wirkung für die Zukunft über den Link „Cookie-Einstellungen“
            im Footer dieser Website widerrufen.
          </p>
          <p className="mt-3">
            Die Speicherdauer der bei Google gespeicherten Ereignisdaten richtet sich nach den in
            Google Analytics hinterlegten Aufbewahrungseinstellungen. Nähere Informationen zu den
            Nutzungsbedingungen und zum Datenschutz bei Google findest du unter{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-navy"
            >
              policies.google.com/privacy
            </a>
            .
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-navy">Deine Rechte</h2>
          <p className="mt-2">
            Du hast im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf
            unentgeltliche Auskunft über deine gespeicherten personenbezogenen Daten, deren
            Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf
            Berichtigung, Sperrung oder Löschung dieser Daten. Bei Fragen zur Verarbeitung
            personenbezogener Daten und zur Wahrnehmung dieser Rechte kannst du dich jederzeit
            unter der oben genannten E-Mail-Adresse an mich wenden. Dir steht zudem ein
            Beschwerderecht bei der zuständigen Datenschutzaufsichtsbehörde zu.
          </p>
        </div>
      </div>
    </section>
  );
}
