import Link from "next/link";
import { CalendlyCta } from "@/components/cta";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { TRADES } from "@/lib/trades";

const PRINCIPLES: { title: string; body: string }[] = [
  {
    title: "Planning estimate, never a bid",
    body: "Every estimate the system produces is labeled \"PLANNING ESTIMATE — NOT BID\" on the cover block. It is a starting point for a contractor's own review, not a number to send to a client unchecked.",
  },
  {
    title: "Every line cites a source",
    body: "Line items cite the trade's unit-cost reference or the regional cost baseline they came from. An unsupported number does not ship — it is marked as a gap instead.",
  },
  {
    title: "Arithmetic re-derived in code",
    body: "The model's totals are re-checked by a separate, deterministic pass after generation — line items against subtotals, subtotals against the grand total. If it doesn't foot, the estimate is marked “do not send” before a human ever reads it. See /how-it-works for a real example.",
  },
];

export default function Page() {
  return (
    <main className="relative min-h-screen bg-white">
      <SiteNav />

      {/* Hero */}
      <section className="border-b border-[var(--mh-rule)]">
        <div className="mx-auto max-w-5xl px-6 pb-20 pt-20 md:pb-28 md:pt-28">
          <div className="eyebrow">MoonHouse · AI estimating agents for trade contractors</div>
          <h1 className="mt-6 font-serif max-w-3xl">
            Planning estimates that show their work.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-[var(--mh-muted)]">
            MoonHouse builds and deploys a planning-estimate agent for a single
            construction trade at a time — one brand, one trade, one deployment.
            Every estimate cites its sources and gets its arithmetic re-checked
            in code before it reaches anyone.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <CalendlyCta location="hero">Book a 30-minute call</CalendlyCta>
            <Link
              href="/how-it-works"
              className="text-sm text-[var(--mh-teal)] underline underline-offset-4 hover:no-underline"
            >
              See a real sample estimate &darr;
            </Link>
          </div>
        </div>
      </section>

      {/* How we build — 3 real governance principles */}
      <section className="border-b border-[var(--mh-rule)]" data-reveal>
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="eyebrow">How the estimator is governed</div>
          <h2 className="mt-4 max-w-2xl">
            The mechanism, not the marketing.
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {PRINCIPLES.map((p) => (
              <div key={p.title} className="border-t border-[var(--mh-teal)] pt-6">
                <h3>{p.title}</h3>
                <p className="mt-3 text-sm text-[var(--mh-muted)]">{p.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 figure-caption">
            Fig. 1 — the full mechanism, with a real flagged-line output, is on{" "}
            <Link href="/how-it-works" className="underline">
              /how-it-works
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Trades */}
      <section id="trades" className="border-b border-[var(--mh-rule)]">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="eyebrow">25 trades, one deploy each</div>
          <h2 className="mt-4 max-w-2xl">
            One codebase. Each deployment is locked to one trade and branded
            to one contractor.
          </h2>
          <p className="mt-6 max-w-2xl text-[var(--mh-muted)]">
            A deployment&apos;s trade sets which cost database and system
            prompt it reads at runtime — it is not a generic estimator
            guessing across every trade at once.
          </p>
          <div className="mt-10 overflow-hidden border border-[var(--mh-rule)]">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[var(--mh-rule)] bg-[var(--mh-paper-dim)] text-left">
                  <th className="px-4 py-3 font-mono text-xs uppercase tracking-wider text-[var(--mh-muted)]">
                    Trade
                  </th>
                  <th className="px-4 py-3 font-mono text-xs uppercase tracking-wider text-[var(--mh-muted)]">
                    CSLB class
                  </th>
                </tr>
              </thead>
              <tbody>
                {TRADES.map((t) => (
                  <tr key={t.slug} className="border-b border-[var(--mh-rule)] last:border-0">
                    <td className="px-4 py-2.5">{t.name}</td>
                    <td className="px-4 py-2.5 font-mono text-xs text-[var(--mh-muted)]">
                      {t.cslbClass}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 figure-caption">
            Fig. 2 — the full trade registry, as configured in the estimator codebase.
          </p>
        </div>
      </section>

      {/* CTA band */}
      <section className="border-b border-[var(--mh-rule)]">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center">
          <h2>Which trade do you run?</h2>
          <p className="mx-auto mt-6 max-w-xl text-[var(--mh-muted)]">
            30 minutes. We&apos;ll look at your real pricing and show you what
            a planning estimate for your trade actually looks like.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4">
            <CalendlyCta location="cta-band">Book a 30-minute call</CalendlyCta>
            <Link href="/pricing" className="text-sm text-[var(--mh-teal)] underline underline-offset-4">
              See pricing
            </Link>
          </div>
        </div>
      </section>

      {/* About / founders */}
      <section id="about" className="border-b border-[var(--mh-rule)]">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="eyebrow">Who&apos;s behind it</div>
          <h2 className="mt-4 max-w-2xl">Two co-founders, direct contact.</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <FounderCard
              initials="KS"
              name="Kyle Schneider"
              role="Co-Founder"
              email="kyle@moonhouse.ai"
            />
            <FounderCard
              initials="KD"
              name="Kassra Daneshmir"
              role="Co-Founder"
              email="kassra@moonhouse.ai"
            />
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

function FounderCard({
  initials,
  name,
  role,
  email,
}: {
  initials: string;
  name: string;
  role: string;
  email: string;
}) {
  return (
    <div className="flex items-start gap-4 border border-[var(--mh-rule)] p-5">
      <div
        className="flex h-14 w-14 flex-shrink-0 items-center justify-center font-serif text-lg"
        style={{
          fontWeight: 500,
          background: "var(--mh-paper-dim)",
          color: "var(--mh-teal)",
          border: "1px solid var(--mh-rule)",
        }}
      >
        {initials}
      </div>
      <div className="flex flex-col">
        <div className="font-serif text-lg" style={{ fontWeight: 500, color: "var(--mh-ink)" }}>
          {name}
        </div>
        <div className="mt-0.5 font-mono text-[11px] uppercase tracking-widest text-[var(--mh-muted)]">
          {role}
        </div>
        <a
          href={`mailto:${email}`}
          className="mt-2 text-sm text-[var(--mh-muted)] hover:text-[var(--mh-teal)]"
        >
          {email}
        </a>
      </div>
    </div>
  );
}
