import Link from "next/link";
import { CalendlyCta } from "@/components/cta";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { TRADES } from "@/lib/trades";

const SERVICES: { title: string; body: string }[] = [
  {
    title: "Audit — where an agent pays",
    body: "One workflow at a time — estimating, intake, collections, document drafting. You get a plain answer on which work an agent should do, which it should assist, and which it should stay out of.",
  },
  {
    title: "Build — agents for one job each",
    body: "Purpose-built agents wired to the tools and documents you already use. Each one is scoped to a single job with a defined input and output, not a general chatbot.",
  },
  {
    title: "Govern — review before anything leaves",
    body: "Outputs carry their sources and pass checks written in code. A person approves anything that goes to a client, a counterparty or a bank.",
  },
];

const PRINCIPLES: { title: string; body: string }[] = [
  {
    title: "No invented numbers",
    body: "If a figure is not in a source, the output says so. An unsupported number is marked as a gap instead of being filled with something plausible.",
  },
  {
    title: "Checks in code, not in prose",
    body: "Where an output can be verified mechanically — totals, counts, required fields — a separate, deterministic pass verifies it after the model responds.",
  },
  {
    title: "The result says what it is",
    body: "Drafts are labeled as drafts. The estimating agent prints \"PLANNING ESTIMATE — NOT BID\" and its own arithmetic verdict on the face of every estimate. See /how-it-works for a worked example.",
  },
];

export default function Page() {
  return (
    <main className="relative min-h-screen bg-white">
      <SiteNav />

      {/* Hero */}
      <section className="border-b border-[var(--mh-rule)]">
        <div className="mx-auto max-w-5xl px-6 pb-20 pt-20 md:pb-28 md:pt-28">
          <div className="eyebrow">MoonHouse · AI consultancy for owner-operated businesses</div>
          <h1 className="mt-6 font-serif max-w-3xl">
            AI that does real work in your business.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-[var(--mh-muted)]">
            MoonHouse is an AI consultancy run by an operator. Kyle Schneider
            runs construction, real estate and service companies, and builds
            the AI agents that work inside them. MoonHouse does the same for
            your business: find where agents pay, build them, and put review
            gates around what they produce.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <CalendlyCta location="hero">Book a 30-minute call</CalendlyCta>
            <Link
              href="/how-it-works"
              className="text-sm text-[var(--mh-teal)] underline underline-offset-4 hover:no-underline"
            >
              See an example build &darr;
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="border-b border-[var(--mh-rule)]">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="eyebrow">What MoonHouse does</div>
          <h2 className="mt-4 max-w-2xl">Audit, build, govern.</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {SERVICES.map((p) => (
              <div key={p.title} className="border-t border-[var(--mh-teal)] pt-6">
                <h3>{p.title}</h3>
                <p className="mt-3 text-sm text-[var(--mh-muted)]">{p.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 max-w-2xl text-sm text-[var(--mh-muted)]">
            Engagements are scoped and priced per project after the first call.
          </p>
        </div>
      </section>

      {/* How the work is governed */}
      <section className="border-b border-[var(--mh-rule)]" data-reveal>
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="eyebrow">How the work is governed</div>
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
            Fig. 1 — a worked example, with a sample flagged-line output, is on{" "}
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
          <div className="eyebrow">Example build · 25 trades, one deploy each</div>
          <h2 className="mt-4 max-w-2xl">
            A planning-estimate agent for construction trades. One codebase;
            each deployment is locked to one trade and branded to one
            contractor.
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
          <h2>What would you hand off first?</h2>
          <p className="mx-auto mt-6 max-w-xl text-[var(--mh-muted)]">
            30 minutes. Bring one workflow that eats your week. You&apos;ll
            leave knowing whether an agent belongs in it.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4">
            <CalendlyCta location="cta-band">Book a 30-minute call</CalendlyCta>
            <Link href="/how-it-works" className="text-sm text-[var(--mh-teal)] underline underline-offset-4">
              See an example build
            </Link>
          </div>
        </div>
      </section>

      {/* About / founders */}
      <section id="about" className="border-b border-[var(--mh-rule)]">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="eyebrow">Who&apos;s behind it</div>
          <h2 className="mt-4 max-w-2xl">Direct contact with the founder.</h2>
          <div className="mt-10 grid gap-6 sm:max-w-md">
            <FounderCard
              initials="KS"
              name="Kyle Schneider"
              role="Founder"
              email="kyle@moonhouse.ai"
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
