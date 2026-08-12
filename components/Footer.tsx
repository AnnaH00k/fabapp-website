import Link from "next/link";
import { site } from "@/lib/content";
import CookieSettingsButton from "./CookieSettingsButton";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark text-blue-light z-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-bold text-white">FABapp</p>
          <p className="mt-1 text-sm text-blue-light/70">
            {site.tagline}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
          <a
            href={`mailto:${site.contactEmail}`}
            className="text-blue-light/80 transition hover:text-white"
          >
            {site.contactEmail}
          </a>
          <Link href="/impressum" className="text-blue-light/80 transition hover:text-white">
            Impressum
          </Link>
          <Link href="/datenschutz" className="text-blue-light/80 transition hover:text-white">
            Datenschutz
          </Link>
          <CookieSettingsButton />
        </div>
      </div>

      <div className="border-t border-blue-light/10 px-6 py-4 text-center text-xs text-blue-light/50">
        © {year} {site.repoOwnerName} · FABapp
      </div>
    </footer>
  );
}
