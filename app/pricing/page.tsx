import type { Metadata } from "next";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { CalendlyCta } from "@/components/cta";

export const metadata: Metadata = {
  title: "Pricing — MoonHouse",
  description:
    "MoonHouse pilot pricing: $2,000 setup plus $1,000 per month, per trade deployment.",
};

// Pricing basis — cited, not invented (Hard Rule: zero fabrication):
//   SETUP = $2,000, RECURRING = $1,000/mo
//     Source: Gringotts/Memory/decision_moonhouse_acquisition_motion_2026_08_25.md,
//     line 84 — "standard offer is $2,000 setup + $1,000/mo via Mercury."
//   PILOT_DAYS = 60 (default for new engagements)
//     Source: ~/.claude/skills/moonhouse-sow-builder/SKILL.md, line 42.
//     Exit-ramp structure confirmed real (terms vary per signed SOW) at line 130 of
//     the same file and in Gringotts/Memory/project_kev_msa_sow_v2_2026_05_20.md:54.
const SETUP = 2000;
const MONTHLY = 1000;
const PILOT_DAYS = 60;

export default function PricingPage() {
  const firstYear = SETUP + MONTHLY * 12;
  return (
    <main className="min-h-screen bg-white">
      <SiteNav />

      <section className="border-b border-[var(--mh-rule)]">
        <div className="mx-auto max-w-3xl px-6 pb-14 pt-20">
          <div className="eyebrow">Pricing</div>
          <h1 className="mt-6 font-serif">One structure, per trade deployment.</h1>
          <p className="mt-6 text-lg text-[var(--mh-muted)]">
            This is the standard pilot structure MoonHouse offers trade
            contractors. It is the same number for every deployment — no
            tiers, no hidden setup fee.
          </p>
        </div>
      </section>

      <section className="border-b border-[var(--mh-rule)]">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <table className="estimate-table border border-[var(--mh-rule)]">
            <thead>
              <tr>
                <th>Item</th>
                <th className="text-right">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Setup (one time)</td>
                <td className="num">${SETUP.toLocaleString("en-US")}</td>
              </tr>
              <tr>
                <td>Recurring, per month</td>
                <td className="num">${MONTHLY.toLocaleString("en-US")}/mo</td>
              </tr>
              <tr>
                <td>Default pilot length</td>
                <td className="num">{PILOT_DAYS} days</td>
              </tr>
            </tbody>
          </table>
          <p className="mt-4 figure-caption">
            Fig. 1 — the pilot runs on a fixed term with an exit ramp if it
            doesn&apos;t meet the agreed success criteria — terms are set in
            the signed SOW for each engagement.
          </p>

          <div className="mt-12 border-t border-[var(--mh-teal)] pt-6">
            <h2 className="text-xl">Worked example</h2>
            <p className="mt-3 text-[var(--mh-muted)]">
              Setup plus twelve months of the recurring fee, at the figures
              above:
            </p>
            <p className="mt-4 font-mono text-sm">
              ${SETUP.toLocaleString("en-US")} + (${MONTHLY.toLocaleString("en-US")} &times; 12) = ${firstYear.toLocaleString("en-US")} in the first year
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <h2>Talk through your trade&apos;s numbers</h2>
          <p className="mx-auto mt-4 max-w-lg text-[var(--mh-muted)]">
            30 minutes. We&apos;ll walk through the pilot terms against your
            real scope.
          </p>
          <div className="mt-8">
            <CalendlyCta location="pricing-cta">Book a 30-minute call</CalendlyCta>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
