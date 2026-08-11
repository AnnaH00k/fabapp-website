"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  CONSENT_EVENT,
  getStoredConsent,
  setStoredConsent,
  type ConsentValue,
} from "@/lib/consent";

export default function CookieConsentBanner() {
  const [consent, setConsent] = useState<ConsentValue | null | undefined>(undefined);

  useEffect(() => {
    setConsent(getStoredConsent());
    const onChange = () => setConsent(getStoredConsent());
    window.addEventListener(CONSENT_EVENT, onChange);
    return () => window.removeEventListener(CONSENT_EVENT, onChange);
  }, []);

  // undefined = not mounted yet (avoid hydration mismatch); skip render.
  if (consent === undefined || consent !== null) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] border-t border-navy/10 bg-blue-light p-4 shadow-[0_-4px_20px_rgba(20,28,60,0.15)] sm:p-6">
      <div className="mx-auto flex max-w-4xl flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-navy/80">
          Wir nutzen Google Analytics, um zu verstehen, wie die Website genutzt wird. Das
          passiert nur, wenn du zustimmst. Details in unserer{" "}
          <Link href="/datenschutz" className="underline hover:text-navy">
            Datenschutzerklärung
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => setStoredConsent("declined")}
            className="rounded-lg px-4 py-2 text-sm font-medium text-navy/70 ring-1 ring-navy/20 transition hover:bg-navy/5"
          >
            Nur notwendige
          </button>
          <button
            type="button"
            onClick={() => setStoredConsent("accepted")}
            className="rounded-lg bg-navy px-4 py-2 text-sm font-medium text-white transition hover:bg-navy-dark"
          >
            Alle akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}
