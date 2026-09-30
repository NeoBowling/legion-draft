import Link from "next/link";
import type { Partner } from "@/content/partners";

const actionClass =
  "inline-flex rounded-lg border-2 border-gold bg-marble px-5 py-3 font-rationale text-lg font-bold tracking-wide text-gold transition hover:bg-white";

export function HomePartnerRow({ partners }: { partners: Partner[] }) {
  return (
    <section className="border-b border-gold/25 bg-[#f7f3ec]">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-poster text-4xl font-bold tracking-wide text-gold uppercase sm:text-6xl">
            Partners
          </h2>
          <Link href="/partners" className={actionClass}>
            All partners →
          </Link>
        </div>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {partners.map((partner) => (
            <li
              key={partner.slug}
              className="rounded-3xl border border-gold/45 bg-white/75 px-5 py-6 shadow-[0_18px_40px_rgba(138,106,47,0.08)]"
            >
              <p className="font-sans text-xs tracking-[0.22em] text-gold-deep uppercase">
                Sample · {partner.tier}
              </p>
              <p className="mt-3 font-display text-xl tracking-wide text-ink">
                {partner.name}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
