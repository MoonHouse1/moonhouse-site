import { test, expect } from "@playwright/test";
import { ROUTES } from "../../lib/routes";

/**
 * Every route the nav or sitemap can send a visitor to must actually resolve.
 * This is the regression test for the exact defect found in the 2026-11-13
 * site audit: /demo, /verticals, /agents, /about and /pricing all 404ed
 * while the nav only linked to in-page anchors.
 */
for (const route of ROUTES) {
  test(`${route} returns 200`, async ({ page }) => {
    const response = await page.goto(route);
    expect(response?.status()).toBe(200);
  });
}

test("internal nav links on the homepage point only at real routes", async ({ page }) => {
  await page.goto("/");
  // getAttribute, not the resolved .href property: the nav also carries an
  // external Calendly link, which this assertion is not about.
  const hrefs = await page.locator("nav a[href]").evaluateAll((els) =>
    els.map((el) => el.getAttribute("href"))
  );
  const internal = hrefs.filter((h): h is string => !!h && h.startsWith("/"));
  expect(internal.length).toBeGreaterThan(0);
  for (const href of internal) {
    expect(ROUTES as readonly string[]).toContain(href);
  }
});
