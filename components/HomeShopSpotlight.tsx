import Link from "next/link";
import type { Product } from "@/content/products";

const actionClass =
  "inline-flex rounded-lg border-2 border-gold bg-marble px-5 py-3 font-rationale text-lg font-bold tracking-wide text-gold transition hover:bg-white";

const cardClass =
  "group block h-full rounded-3xl border border-gold/45 bg-white/75 px-5 py-6 shadow-[0_18px_40px_rgba(138,106,47,0.08)] transition hover:border-gold";

export function HomeShopSpotlight({ products }: { products: Product[] }) {
  return (
    <section className="border-b border-gold/25 bg-[#f7f3ec]">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-poster text-4xl font-bold tracking-wide text-gold uppercase sm:text-6xl">
            Shop
          </h2>
          <Link href="/shop" className={actionClass}>
            Browse shop →
          </Link>
        </div>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <li key={product.slug}>
              <a
                href={product.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cardClass}
              >
                <p className="font-sans text-xs tracking-[0.22em] text-gold-deep uppercase">
                  Phase {product.phase}
                </p>
                <p className="mt-3 font-display text-xl tracking-wide text-ink group-hover:text-gold-deep">
                  {product.name}
                </p>
                <p className="mt-2 font-sans text-sm text-ink/65">{product.price}</p>
                <p className="mt-4 font-sans text-xs tracking-wide text-ink/50">
                  legionorg.com ↗
                </p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
