"use client";

import Link from "next/link";
import { trackNavClick } from "@/lib/analytics-events";
import { CalendlyCta } from "./cta";

function Wordmark() {
  return (
    <Link
      href="/"
      className="font-serif text-xl tracking-tight"
      style={{ fontWeight: 500, letterSpacing: "-0.01em" }}
      onClick={() => trackNavClick("/")}
    >
      MoonHouse
    </Link>
  );
}

const LINKS = [
  { href: "/how-it-works", label: "How it works" },
  { href: "/pricing", label: "Pricing" },
];

export function SiteNav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-[var(--mh-rule)] bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Wordmark />
        <div className="flex items-center gap-6">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="hidden text-sm text-[var(--mh-muted)] hover:text-[var(--mh-teal)] sm:inline"
              onClick={() => trackNavClick(l.href)}
            >
              {l.label}
            </Link>
          ))}
          <CalendlyCta location="nav">Book a call</CalendlyCta>
        </div>
      </div>
    </nav>
  );
}
