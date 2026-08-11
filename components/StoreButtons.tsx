import { site } from "@/lib/content";

export default function StoreButtons({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <a
        href={site.appStoreUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 rounded-xl bg-navy px-5 py-3 text-white shadow-lg shadow-navy/20 transition hover:bg-navy-dark"
      >
        <AppleIcon className="h-6 w-6" />
        <span className="text-left leading-tight">
          <span className="block text-[11px] text-blue-light/80">Laden im</span>
          <span className="block text-sm font-semibold">App Store</span>
        </span>
      </a>
      <a
        href={site.playStoreUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 rounded-xl bg-navy px-5 py-3 text-white shadow-lg shadow-navy/20 transition hover:bg-navy-dark"
      >
        <PlayIcon className="h-6 w-6" />
        <span className="text-left leading-tight">
          <span className="block text-[11px] text-blue-light/80">Jetzt bei</span>
          <span className="block text-sm font-semibold">Google Play</span>
        </span>
      </a>
    </div>
  );
}

function AppleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M16.365 1.43c0 1.14-.417 2.06-1.25 2.86-.86.83-1.9 1.31-2.99 1.22-.11-1.12.41-2.24 1.24-3.02.84-.79 2.03-1.34 3-1.06zM20.5 17.16c-.5 1.16-.74 1.68-1.39 2.7-.9 1.42-2.17 3.19-3.75 3.2-1.4.02-1.76-.92-3.66-.91-1.9.01-2.3.93-3.71.92-1.58-.02-2.78-1.61-3.68-3.03-2.52-3.95-2.78-8.58-1.23-11.05.99-1.58 2.55-2.5 4.02-2.5 1.47 0 2.4.94 3.6.94 1.19 0 1.92-.94 3.63-.94 1.28 0 2.65.7 3.62 1.9-3.18 1.75-2.66 6.28.55 7.77z" />
    </svg>
  );
}

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M3.6 2.3c-.36.35-.6.9-.6 1.6v16.2c0 .7.24 1.25.6 1.6l.1.08L13 12.5v-.2L3.7 2.22z" opacity="0.85" />
      <path d="M13 12.3l3.4-3.4-9.8-5.6a1.6 1.6 0 0 0-1-.3z" />
      <path d="M13 12.7l3.4 3.4-9.8 5.6c-.35.2-.7.24-1 .12z" opacity="0.7" />
      <path d="M16.4 15.9 20 13.8c.9-.5.9-1.8 0-2.3l-3.6-2.1L13 13z" opacity="0.9" />
    </svg>
  );
}
