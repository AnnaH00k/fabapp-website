"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "Funktionen", href: "/#funktionen" },
  { label: "Über mich", href: "/#ueber-mich" },
  { label: "App Info", href: "/app-info" },
  { label: "Flyer", href: "/#flyer" },
  { label: "Kontakt", href: "/#feedback" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-blue-mid/40 bg-blue-light/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-extrabold tracking-tight text-navy">
          FABapp
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium tracking-wide text-navy/80 uppercase transition hover:text-navy"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Menü öffnen"
          className="flex h-10 w-10 items-center justify-center rounded-full text-navy md:hidden"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-blue-mid/40 bg-blue-light px-6 pb-4 md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-2 py-3 text-sm font-medium text-navy/80 hover:bg-blue-mid/20 hover:text-navy"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
