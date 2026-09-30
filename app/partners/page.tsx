import type { Metadata } from "next";
import {
  getPartnersByTier,
  type PartnerTier,
} from "@/content/partners";

export const metadata: Metadata = {
  title: {
    absolute: "Partners | LEGION",
  },
};

const tierOrder: PartnerTier[] = ["title", "partner", "supplier"];

const tierCopy: Record<
  PartnerTier,
  { label: string; headline: string; intro: string }
> = {
  title: {
    label: "Title",
    headline: "Title sponsors",
    intro: "Lead partners for the draft site. Sample names only.",
  },
  partner: {
    label: "Partner",
    headline: "Partners",
    intro: "Supporting partners for gear, events, and tooling.",
  },
  supplier: {
    label: "Supplier",
    headline: "Suppliers",
    intro: "Fulfillment and production references for merch.",
  },
};

export default function PartnersPage() {
  const sections = tierOrder
    .map((tier) => ({
      tier,
      ...tierCopy[tier],
      partners: getPartnersByTier(tier),
    }))
    .filter((section) => section.partners.length > 0);

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <p className="font-sans text-xs tracking-[0.3em] text-gold-deep uppercase">
        Partners
      </p>
      <h1 className="mt-3 font-display text-3xl tracking-wide text-ink sm:text-4xl">
        Alongside LEGION
      </h1>
      <p className="mt-4 max-w-xl font-sans text-base leading-relaxed text-ink/75">
        Sponsor tiers for the draft site. Every name below is a sample
        placeholder until real partners and logos are supplied.
      </p>

      <div className="mt-14 space-y-16">
        {sections.map((section) => (
          <section key={section.tier} aria-labelledby={`tier-${section.tier}`}>
            <p className="font-sans text-xs tracking-[0.3em] text-gold-deep uppercase">
              {section.label}
            </p>
            <h2
              id={`tier-${section.tier}`}
              className="mt-2 font-display text-2xl tracking-wide text-ink sm:text-3xl"
            >
              {section.headline}
            </h2>
            <p className="mt-3 max-w-lg font-sans text-sm leading-relaxed text-ink/65">
              {section.intro}
            </p>

            <ul
              className={
                section.tier === "title"
                  ? "mt-8 grid gap-4"
                  : "mt-8 grid gap-4 sm:grid-cols-2"
              }
            >
              {section.partners.map((partner) => {
                const inner = (
                  <>
                    <p className="font-sans text-[0.65rem] tracking-[0.25em] text-gold-deep uppercase">
                      Sample · {section.label}
                    </p>
                    <h3 className="mt-3 font-display text-xl tracking-wide text-ink sm:text-2xl">
                      {partner.name}
                    </h3>
                    <p className="mt-3 font-sans text-sm leading-relaxed text-ink/70">
                      {partner.blurb}
                    </p>
                  </>
                );

                const className =
                  "block border border-gold/40 bg-gradient-to-br from-marble via-marble to-marble-deep/80 px-5 py-6 transition hover:border-gold hover:bg-gold/5";

                return (
                  <li key={partner.slug}>
                    {partner.href && partner.href !== "#" ? (
                      <a
                        href={partner.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={className}
                      >
                        {inner}
                      </a>
                    ) : (
                      <div className={className}>{inner}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
