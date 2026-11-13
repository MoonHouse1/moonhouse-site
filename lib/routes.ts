// Every real route on the site. Used by the nav, the sitemap, and the e2e
// suite (tests/e2e/nav.spec.ts asserts every entry here returns 200) so the
// three can never silently drift apart.
export const ROUTES = ["/", "/how-it-works", "/pricing"] as const;
