"use client";

import { clearStoredConsent } from "@/lib/consent";

export default function CookieSettingsButton() {
  return (
    <button
      type="button"
      onClick={() => clearStoredConsent()}
      className="text-blue-light/80 transition hover:text-white"
    >
      Cookie-Einstellungen
    </button>
  );
}
