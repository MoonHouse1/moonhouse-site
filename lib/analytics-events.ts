"use client";

import { track } from "@vercel/analytics";

// Named conversion events, one vocabulary shared across the site. Mirrors the
// portfolio-wide convention in the 2026-11-13 website program plan (§6.1,
// "Analytics + conversion events"): a named event per conversion action, not
// just a pageview. Every call site below is the only place that fires this
// event — add new actions here, not inline at the call site.
export function trackCalendlyClick(location: string): void {
  track("calendly_click", { location });
}

export function trackEmailClick(location: string, address: string): void {
  track("email_click", { location, address });
}

export function trackNavClick(destination: string): void {
  track("nav_click", { destination });
}
