"use client";

import { trackCalendlyClick, trackEmailClick } from "@/lib/analytics-events";

export const CALENDLY_URL = "https://calendly.com/moonhouse";

type CtaProps = {
  location: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
};

export function CalendlyCta({
  location,
  children,
  variant = "primary",
  className = "",
}: CtaProps) {
  const base =
    "inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium transition-colors duration-200";
  const style =
    variant === "primary"
      ? "bg-[var(--mh-teal)] text-white hover:bg-[#1f3539]"
      : "border border-[var(--mh-teal)] text-[var(--mh-teal)] hover:bg-[var(--mh-paper-dim)]";
  return (
    <a
      href={CALENDLY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${style} ${className}`}
      onClick={() => trackCalendlyClick(location)}
    >
      {children} <span aria-hidden>&rarr;</span>
    </a>
  );
}

export function EmailLink({
  location,
  address,
  children,
  className = "",
}: {
  location: string;
  address: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={`mailto:${address}`}
      className={className}
      onClick={() => trackEmailClick(location, address)}
    >
      {children}
    </a>
  );
}
