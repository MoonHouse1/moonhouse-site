// Trade list for the public site. Copied verbatim (slug, name, CSLB class)
// from lib/trades.ts in the moonhouse-trade-estimator repo — the real trade
// registry the deployed estimator reads at runtime. Do not add a trade here
// that is not in that registry; do not invent a CSLB class.
//
// Source: C:\Users\kylem\repos\moonhouse-trade-estimator\lib\trades.ts (read 2026-11-13).

export interface SiteTrade {
  slug: string;
  name: string;
  cslbClass: string;
}

export const TRADES: SiteTrade[] = [
  { slug: "electrical", name: "Electrical", cslbClass: "C-10" },
  { slug: "plumbing", name: "Plumbing", cslbClass: "C-36" },
  { slug: "hvac", name: "Mechanical / HVAC", cslbClass: "C-20" },
  { slug: "refrigeration", name: "Commercial Refrigeration", cslbClass: "C-38" },
  { slug: "roofing", name: "Roofing", cslbClass: "C-39" },
  { slug: "concrete", name: "Concrete", cslbClass: "C-8" },
  { slug: "framing", name: "Framing / Rough Carpentry", cslbClass: "C-5" },
  { slug: "masonry", name: "Masonry", cslbClass: "C-29" },
  { slug: "drywall", name: "Drywall", cslbClass: "C-9" },
  { slug: "painting", name: "Painting", cslbClass: "C-33" },
  { slug: "stucco", name: "Stucco / Plaster / Lath", cslbClass: "C-35" },
  { slug: "flooring", name: "Flooring", cslbClass: "C-15" },
  { slug: "tile_stone", name: "Tile / Stone", cslbClass: "C-54" },
  { slug: "countertop_fab", name: "Stone Countertop Fabrication", cslbClass: "C-54" },
  { slug: "finish_carpentry", name: "Finish Carpentry / Cabinetry / Millwork", cslbClass: "C-6" },
  { slug: "glazing", name: "Windows & Glazing", cslbClass: "C-17" },
  { slug: "insulation", name: "Insulation", cslbClass: "C-2" },
  { slug: "fire_protection", name: "Fire Protection / Sprinklers", cslbClass: "C-16" },
  { slug: "garage_doors", name: "Garage Doors & Operators", cslbClass: "C-61 / D-28" },
  { slug: "landscaping", name: "Landscaping", cslbClass: "C-27" },
  { slug: "pools", name: "Swimming Pools", cslbClass: "C-53" },
  { slug: "demolition", name: "Demolition", cslbClass: "C-21" },
  { slug: "salvage", name: "Deconstruction & Lumber Salvage", cslbClass: "C-21" },
  { slug: "general_contractor_residential", name: "Residential General Contractor", cslbClass: "B" },
  { slug: "general_contractor_commercial", name: "Commercial General Contractor", cslbClass: "B" },
];
