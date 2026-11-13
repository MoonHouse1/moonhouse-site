# DESIGN.md — MoonHouse Ventures

The design language for `moonhouse.ai`, in AI-readable form. Read this before generating any UI for this project.

---

## DIRECTION — "FIELD NOTES"

Product-documentary. The site reads like a technical spec sheet for a working tool, not a pitch deck: real artifacts, figure captions, specific statements, no decoration for its own sake.

**This is explicitly NOT:**
- A sci-fi SaaS hero (starfield, aurora gradient, glass cards) — that was the previous build and it is being removed
- A stock "AI company" page: abstract network illustrations, generic robot/brain iconography, gradient blobs
- A claims page. Every number on the page must trace to a real file or a real code path (see Content Rules)

**Why this direction:** the product's only real differentiator is that it shows its work — every line item cites a source, every estimate's arithmetic is re-derived in code, not just asserted by the model. The site should do the same thing: show the actual mechanism, captioned like a figure in a spec sheet, instead of describing it in marketing adjectives.

---

## COLOR — BINDING, NOT A SUGGESTION

Governed by `Gringotts/Memory/reference_moonhouse_brand_assets.md`. Primary brand color is **`#2D4C52`** (MoonHouse Teal). **Never use the Schneider red/black palette, and never reintroduce the previous build's blue/purple accent (`#6b8eff` / `#c9a3ff`) — it was never a documented MoonHouse brand color.**

| Token | Value | Use |
|---|---|---|
| `--mh-teal` | `#2D4C52` | Primary brand. Headings, primary CTA, links, the one accent color |
| `--mh-ink` | `#14201F` | Body text (a near-black tint of teal, not pure black — ties text to the brand hue) |
| `--mh-paper` | `#FFFFFF` | Canvas |
| `--mh-paper-dim` | `#F6F7F6` | Elevated surface (cards, code blocks) — a faint teal-grey, not pure grey |

### Derived tints — documented, not invented

| Token | Value | Contrast on white | Use |
|---|---|---|---|
| `--mh-rule` | `#2D4C52` at 14% opacity | hairlines only | Structural grid lines, table borders |
| `--mh-muted` | `#2D4C52` at 64% opacity on white ≈ `#5B7278` | ~4.6:1 — passes AA for body at 16px+ | Captions, metadata, secondary text |

### Semantic signal colors — reused from the product itself, not invented for the site

The estimator's own output uses a traffic-light vocabulary (✅ clean / ☑️ caveat / ⚠️ unverified / 🚫 do-not-send). The site reuses exactly that vocabulary on the sample estimate — same words, same symbols — rather than inventing a separate marketing color system.

| Token | Value | Use |
|---|---|---|
| `--mh-ok` | `#1F6F4A` | A line item or check that ties / passes |
| `--mh-caution` | `#8A5A00` | A caveat: unpriced line, unstated markup — correct behavior, flagged for visibility |
| `--mh-flag` | `#A3321C` | Arithmetic that does not foot ("DO NOT SEND") |

**Rule:** these three colors appear only inside the rendered sample estimate on `/how-it-works`, reproducing the product's real banner states. They are never used decoratively elsewhere on the site (no colored buttons, no colored icons for unrelated UI).

Do not add new colors. If a new tint is genuinely needed, define it as a documented tint of `--mh-teal` or `--mh-ink` here first.

---

## TYPOGRAPHY

Two families, both already wired in `app/layout.tsx`:

- **Fraunces** (serif) — headings only. A spec sheet still needs a voice; Fraunces at a disciplined weight (500) reads as considered rather than decorative.
- **Inter** (sans) — body, UI, captions.
- **System monospace** — data: dollar figures, code-reference citations (`CSLB C-10`, `CEC Art. 210`), the `eyebrow` label style, and every cell in the rendered sample estimate table. The mechanism is literally code output; let it look like it.

No third typeface. No display face beyond Fraunces.

---

## LAYOUT

- **Figure captions, used literally.** Any real artifact on the page (the sample estimate, the trade registry table) gets a caption in the style `Fig. 1 — Sample HVAC estimate, anonymized real output, three lines flagged.` This is the single most load-bearing device in the register — it is what turns a claim into an artifact.
- **Visible structural rule lines** at major section boundaries (`--mh-rule`), not implied whitespace.
- **Tables over cards** wherever the content is actually tabular (the 25-trade registry, the sample estimate's line items, the pricing worked example). Cards are for the three "how we build" principles only.
- **No centered-stack-of-equal-cards hero.** The homepage hero is left-aligned, with the sample-estimate teaser or the trade count as the adjacent "figure," not a floating illustration.

---

## MOTION

Compositor-only: `transform`, `opacity`. No scroll-jacking, no looping animation.

- Every animated element ships inside a `@media (prefers-reduced-motion: no-preference)` block; the reduced-motion state is the default, unanimated layout — not a stripped-down version of the animation.
- Nothing loops indefinitely. A hover or entrance transition runs once, under ~250ms.

---

## CONTENT RULES — ZERO FABRICATION

This project's hard rule, restated for this file so it travels with the design system:

- **No customer names, logos, customer counts, testimonials, accuracy rates, or "trusted by N contractors."** Customer consent to be named has not been obtained and paying status is unverified for every deployment on record. This applies to copy, alt text, and structured data equally.
- **No invented line items, prices, or trades.** The 25 trades on this site are the literal contents of `lib/trades.ts` in `moonhouse-trade-estimator`. The sample estimate on `/how-it-works` is a real code fixture (`scripts/footing-check.ts`, the `zeroUnpriced` case, documented in that file as modeling an actual live production run) with the customer name and deploy ID stripped — never a hand-written example.
- **No AI chat widget.** Decided in the program plan (§5.2(b)): an AI intake surface that states a price or a code requirement is a liability MoonHouse owns, and there is no credible evidence it outperforms a good form.
- **No stock photography.** There is no real MoonHouse job-site photography yet; the site uses typography, tables, and the real sample estimate as its only "visuals." Do not substitute stock imagery to fill the gap.
- **Every dollar figure on `/pricing` traces to a vault file + line, cited in a code comment next to where it renders.**

## BANNED PATTERNS

- Starfield / aurora-gradient / glassmorphism hero (the previous build)
- Generic "AI network" or neural-net illustration
- A stat strip of numbers that are not independently checkable from a linked source
- Testimonial carousels
- Any color outside the token table above
