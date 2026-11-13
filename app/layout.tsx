import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const description =
  "MoonHouse builds planning-estimate AI agents for trade contractors — one deployment per trade, every line cited, arithmetic re-checked in code before it reaches a client.";

export const metadata: Metadata = {
  title: "MoonHouse — AI estimating agents for trade contractors",
  description,
  metadataBase: new URL("https://moonhouse.ai"),
  openGraph: {
    title: "MoonHouse — AI estimating agents for trade contractors",
    description,
    url: "https://moonhouse.ai",
    siteName: "MoonHouse",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MoonHouse — AI estimating agents for trade contractors",
    description,
  },
  robots: { index: true, follow: true },
};

// Structured data for search and AI answer engines. Every value mirrors copy
// already published on the page (footer, founder cards, meta description).
// No logo: app/icon.tsx is 32px, below Google's 112px minimum for a logo.
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  "@id": "https://moonhouse.ai/#organization",
  name: "MoonHouse",
  legalName: "MoonHouse Ventures, LLC",
  url: "https://moonhouse.ai",
  description,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Los Angeles",
    addressRegion: "CA",
    addressCountry: "US",
  },
  founder: [
    { "@type": "Person", name: "Kyle Schneider", jobTitle: "Co-Founder" },
    { "@type": "Person", name: "Kassra Daneshmir", jobTitle: "Co-Founder" },
  ],
};

// Static, developer-controlled object — no user input. "<" is escaped so the
// payload can never close the script tag.
const organizationJsonLdHtml = JSON.stringify(organizationJsonLd).replace(
  /</g,
  "\\u003c",
);

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: organizationJsonLdHtml }}
        />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
