import type { Metadata } from "next";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { CalendlyCta } from "@/components/cta";

export const metadata: Metadata = {
  title: "Example build: the estimating agent — MoonHouse",
  description:
    "How the MoonHouse trade estimator builds a planning estimate, cites its sources, and re-checks its own arithmetic in code before anything reaches a client.",
};

const STEPS: { title: string; body: string }[] = [
  {
    title: "1. Scope in",
    body: "A contractor describes the scope in plain text, or uploads a scanned plan set. The estimator reads either — text directly, or page images through a vision pass when the plans are a scan rather than a text PDF.",
  },
  {
    title: "2. Trade-specific prompt + cost reference load",
    body: "The deployment's trade (one of the 25 on the homepage) selects a system prompt and a unit-cost reference for that trade, plus a shared regional cost baseline. A deployment for an electrical contractor never reads the plumbing cost data, and vice versa.",
  },
  {
    title: "3. Estimate drafted, every line cited",
    body: "The model produces a line-item estimate, citing the unit-cost reference or the baseline for each line. It also emits a parallel structured data block — the same numbers, in a strict schema — for the next step to check mechanically.",
  },
  {
    title: "4. Arithmetic re-derived in code, not just asserted",
    body: "A separate, deterministic check re-sums the structured block: do the line items add up to the subtotals, and do the subtotals plus markups add up to the grand total? This runs in code after the model responds — it does not trust the model's own stated total.",
  },
  {
    title: "5. The estimate says so, on its own face",
    body: "The result of that check — clean, clean-with-caveats, or “do not send, it doesn't foot” — is printed as a banner at the top of the estimate itself, before a human reads a single line item. Every estimate is also labeled PLANNING ESTIMATE — NOT BID.",
  },
];

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-white">
      <SiteNav />

      <section className="border-b border-[var(--mh-rule)]">
        <div className="mx-auto max-w-3xl px-6 pb-14 pt-20">
          <div className="eyebrow">Example build · the estimating agent</div>
          <h1 className="mt-6 font-serif">
            The estimate checks its own math before you do.
          </h1>
          <p className="mt-6 text-lg text-[var(--mh-muted)]">
            One thing MoonHouse has built: a planning-estimate agent for
            construction trades. Below is how it works, followed by a sample
            flagged-line output modelled on a production estimate, with the
            contractor&apos;s details removed.
          </p>
        </div>
      </section>

      <section className="border-b border-[var(--mh-rule)]">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <ol className="space-y-10">
            {STEPS.map((s) => (
              <li key={s.title} className="border-t border-[var(--mh-teal)] pt-5">
                <h2 className="text-xl">{s.title}</h2>
                <p className="mt-3 text-[var(--mh-muted)]">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <SampleEstimate />

      <section className="border-b border-[var(--mh-rule)]">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <h2>When the arithmetic doesn&apos;t foot</h2>
          <p className="mt-4 text-[var(--mh-muted)]">
            The sample above shows the clean-with-caveats state. When line
            items and subtotals disagree, or the grand total doesn&apos;t tie
            to subtotals plus markups, the same check prints this instead —
            verbatim from the code that generates it:
          </p>
          <blockquote className="mt-6 border-l-2 border-[var(--mh-flag)] pl-5 font-mono text-sm text-[var(--mh-flag)]">
            # DO NOT SEND — THE ARITHMETIC DOES NOT FOOT
          </blockquote>
          <p className="mt-4 text-sm text-[var(--mh-muted)]">
            It then names the exact gap in dollars and which lines don&apos;t
            extend, and tells the contractor to re-run or hand-correct before
            anything goes to a client.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <h2>Want to see this on your own numbers?</h2>
          <p className="mx-auto mt-4 max-w-lg text-[var(--mh-muted)]">
            30 minutes. Bring a real scope and we&apos;ll run it.
          </p>
          <div className="mt-8">
            <CalendlyCta location="how-it-works-cta">Book a 30-minute call</CalendlyCta>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

// Real flagged-line output from the estimator's own test fixture
// (moonhouse-trade-estimator/scripts/footing-check.ts, the `zeroUnpriced`
// case). That fixture is explicitly documented in its source comment as
// modeling an actual live production estimate for an HVAC deployment, with
// three scope lines returned as $0 (a duct run marked NOT PRICED, and an
// electrical and a structural line marked SUB-PLACEHOLDER). The customer
// name and deploy ID from that comment are intentionally not reproduced
// here. Line items, labels and dollar figures below are copied as-is; the
// banner text is the exact output of lib/footing.ts's checkFooting() for
// this fixture, computed by hand against that function's logic.
const SAMPLE_LINES: { division: string; description: string; total: number | null; flag?: boolean }[] = [
  { division: "D1", description: "RTU replacement", total: 18000 },
  { division: "D1", description: "Adder stack", total: 6000 },
  { division: "D1", description: "Crane", total: 3000 },
  { division: "D2", description: "Flex duct — NOT PRICED", total: 0, flag: true },
  { division: "D2", description: "Diffusers", total: 4900 },
  { division: "D2", description: "Return grilles", total: 1400 },
  { division: "D3", description: "Thermostats", total: 700 },
  { division: "D3", description: "Control wiring", total: 760 },
  { division: "D5", description: "HERS package", total: 1500 },
  { division: "D6", description: "Permit", total: 650 },
  { division: "D6", description: "Electrical — SUB-PLACEHOLDER", total: 0, flag: true },
  { division: "D6", description: "Structural — SUB-PLACEHOLDER", total: 0, flag: true },
];

function usd(n: number): string {
  return `$${n.toLocaleString("en-US")}`;
}

function SampleEstimate() {
  return (
    <section className="border-b border-[var(--mh-rule)] bg-[var(--mh-paper-dim)]">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <div className="eyebrow">Sample — real system output, anonymized</div>
        <h2 className="mt-4">PLANNING ESTIMATE — NOT BID</h2>
        <p className="mt-3 text-sm text-[var(--mh-muted)]">
          Trade: Mechanical / HVAC. Not a quote for any specific project —
          the dollar figures below are copied unedited from a real system
          output; all client-identifying detail has been removed.
        </p>

        <table className="estimate-table mt-8 border border-[var(--mh-rule)] bg-white">
          <thead>
            <tr>
              <th>Div.</th>
              <th>Line item</th>
              <th className="text-right">Total</th>
            </tr>
          </thead>
          <tbody>
            {SAMPLE_LINES.map((l, i) => (
              <tr key={i} className={l.flag ? "flag-line" : undefined}>
                <td>{l.division}</td>
                <td>{l.description}</td>
                <td className="num">{l.total === 0 ? "—" : usd(l.total as number)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="mt-2 figure-caption">
          Fig. 3 — 3 of 12 lines returned with no price: a duct run marked
          NOT PRICED, and an electrical and a structural scope line marked
          SUB-PLACEHOLDER, pending a real sub-quote.
        </p>

        <div className="mt-8 border border-[var(--mh-caution)] bg-white p-5 font-mono text-sm">
          <p className="text-[var(--mh-caution)]">
            ⚠️ <strong>Priced portion only.</strong> 3 of 12 line items
            carry no price ($0 or unstated) and are EXCLUDED from every
            figure below. The totals reconcile the priced work — they are
            not a complete job total. Price or explicitly exclude the
            remaining scope before this goes to a client.
          </p>
          <p className="mt-4 text-[var(--mh-ok)]">
            ☑️ <strong>Arithmetic check.</strong> 9 priced line items =
            $36,910 = subtotals $36,910; + markups $289 = <strong>$37,199</strong>{" "}
            ✓
          </p>
          <p className="mt-2 text-[var(--mh-muted)]">
            Re-derived in code, independently of the model.
          </p>
        </div>
      </div>
    </section>
  );
}
