import { test, expect } from "@playwright/test";

/**
 * prefers-reduced-motion: reduce must fully suppress the entrance animation.
 * The CSS is written so the no-animation state is the default (the animation
 * rule only exists inside a `prefers-reduced-motion: no-preference` media
 * block) — this test is the regression guard on that invariant.
 */
test("the homepage reveal animation does not run under prefers-reduced-motion: reduce", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  const el = page.locator("[data-reveal]").first();
  await expect(el).toBeVisible();
  const animationName = await el.evaluate(
    (node) => getComputedStyle(node).animationName
  );
  expect(animationName).toBe("none");
  const opacity = await el.evaluate((node) => getComputedStyle(node).opacity);
  expect(opacity).toBe("1");
});

test("the homepage reveal animation is defined under prefers-reduced-motion: no-preference", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.goto("/");
  const el = page.locator("[data-reveal]").first();
  const animationName = await el.evaluate(
    (node) => getComputedStyle(node).animationName
  );
  expect(animationName).toBe("reveal");
});
