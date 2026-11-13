import { EmailLink } from "./cta";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--mh-rule)]">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-12 text-sm text-[var(--mh-muted)] md:flex-row md:items-center md:justify-between">
        <span className="font-serif text-lg text-[var(--mh-teal)]" style={{ fontWeight: 500 }}>
          MoonHouse
        </span>
        <div className="font-mono text-xs">
          <EmailLink location="footer" address="kyle@moonhouse.ai">
            kyle@moonhouse.ai
          </EmailLink>
          {" · "}
          <EmailLink location="footer" address="kassra@moonhouse.ai">
            kassra@moonhouse.ai
          </EmailLink>
          {" · (818) 399-5833"}
        </div>
        <div className="font-mono text-xs">&copy; 2026 MoonHouse Ventures, LLC</div>
      </div>
    </footer>
  );
}
