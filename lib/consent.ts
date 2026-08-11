export type ConsentValue = "accepted" | "declined";

const STORAGE_KEY = "fabapp-cookie-consent";
export const CONSENT_EVENT = "fabapp-consent-changed";

export function getStoredConsent(): ConsentValue | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(STORAGE_KEY) as ConsentValue | null;
}

export function setStoredConsent(value: ConsentValue) {
  localStorage.setItem(STORAGE_KEY, value);
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT));
}

export function clearStoredConsent() {
  localStorage.removeItem(STORAGE_KEY);
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT));
}
