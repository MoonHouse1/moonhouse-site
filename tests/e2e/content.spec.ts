import { test, expect } from "@playwright/test";

/**
 * Key content must be in the server-rendered HTML, not injected by
 * client-side JavaScript after hydration. JavaScript is disabled for every
 * test in this file on purpose — a crawler, a text browser, or a reader-mode
 * user gets exactly what these assertions check.
 */
test.use({ javaScriptEnabled: false });

test("homepage states the consultancy offer and the example build, no JS required", async ({ page }) => {
  await page.goto("/");
  // Lowercased: the eyebrow labels render through a CSS text-transform:
  // uppercase, and innerText reflects that rendering, not the source casing.
  const body = (await page.locator("body").innerText()).toLowerCase();
  expect(body).toContain("ai consultancy for owner-operated businesses");
  expect(body).toContain("audit, build, govern");
  expect(body).toContain("25 trades");
  // The fabricated claims the previous build shipped must never come back.
  expect(body).not.toContain("160 agents");
  expect(body).not.toContain("160 production-ready agents");
});

test("how-it-works page renders the sample estimate and its banner as text", async ({ page }) => {
  await page.goto("/how-it-works");
  const body = await page.locator("body").innerText();
  expect(body).toContain("PLANNING ESTIMATE");
  expect(body).toContain("Priced portion only");
  expect(body).toContain("Arithmetic check");
  expect(body).toContain("$37,199");
  expect(body).toContain("DO NOT SEND");
});

test("no invented customer counts or testimonials ship anywhere", async ({ page }) => {
  for (const route of ["/", "/how-it-works"]) {
    await page.goto(route);
    const body = (await page.locator("body").innerText()).toLowerCase();
    for (const banned of ["trusted by", "customers love", "clients satisfied", "kassra", "co-founder"]) {
      expect(body, `banned phrase "${banned}" found on ${route}`).not.toContain(banned);
    }
  }
});
