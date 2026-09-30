/**
 * Sample / placeholder partner slots only — not real sponsors.
 * Names are clearly marked as sample placeholders.
 */

export type PartnerTier = "title" | "partner" | "supplier";

export type Partner = {
  slug: string;
  name: string;
  tier: PartnerTier;
  blurb: string;
  href?: string;
};

export const partners: Partner[] = [
  {
    slug: "sample-title-aegis",
    name: "Sample Title — Aegis Labs",
    tier: "title",
    blurb: "Placeholder title sponsor for the draft site. Replace with a real partner.",
    href: "#",
  },
  {
    slug: "sample-partner-helix",
    name: "Sample Partner — Helix Peripherals",
    tier: "partner",
    blurb: "Placeholder partner slot for gear and event support.",
    href: "#",
  },
  {
    slug: "sample-partner-nova",
    name: "Sample Partner — Nova Stream Tools",
    tier: "partner",
    blurb: "Placeholder partner slot for broadcast and creator tooling.",
    href: "#",
  },
  {
    slug: "sample-supplier-marble",
    name: "Sample Supplier — Marble Print Co.",
    tier: "supplier",
    blurb: "Placeholder supplier for merch fulfillment references.",
    href: "#",
  },
  {
    slug: "sample-supplier-laurel",
    name: "Sample Supplier — Laurel Pack Co.",
    tier: "supplier",
    blurb: "Placeholder supplier for packaging and fulfillment notes.",
    href: "#",
  },
];

export function getPartners(): Partner[] {
  return partners;
}

export function getPartnersByTier(tier: PartnerTier): Partner[] {
  return partners.filter((partner) => partner.tier === tier);
}
