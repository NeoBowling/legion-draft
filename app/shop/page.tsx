import type { Metadata } from "next";
import { getProducts } from "@/content/products";

export const metadata: Metadata = {
  title: {
    absolute: "Shop | LEGION",
  },
};

function phaseLabel(phase: "III" | "IV" | "Core"): string {
  if (phase === "Core") return "Core";
  return `Phase ${phase}`;
}

export default function ShopPage() {
  const products = getProducts();

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <p className="font-sans text-xs tracking-[0.3em] text-gold-deep uppercase">
        Shop
      </p>
      <h1 className="mt-3 font-display text-3xl tracking-wide text-ink sm:text-4xl">
        Merch
      </h1>
      <p className="mt-4 max-w-xl font-sans text-base leading-relaxed text-ink/75">
        Purchases happen on the LEGION store. Each item opens the matching
        product page on legionorg.com.
      </p>

      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <li key={product.slug}>
            <a
              href={product.href}
              target="_blank"
              rel="noreferrer"
              className="group flex h-full flex-col border border-gold/40 bg-gradient-to-br from-marble via-marble to-marble-deep/80 px-5 py-6 transition hover:border-gold hover:bg-gold/5"
            >
              <div
                className="mb-6 flex aspect-[4/3] items-center justify-center border border-gold/25 bg-marble-deep/30"
                aria-hidden
              >
                <span className="font-display text-2xl tracking-[0.2em] text-gold-deep/80 transition group-hover:text-gold-deep">
                  LEGION
                </span>
              </div>
              <p className="font-sans text-[0.65rem] tracking-[0.25em] text-gold-deep uppercase">
                {phaseLabel(product.phase)} · {product.category}
              </p>
              <h2 className="mt-2 font-display text-lg leading-snug tracking-wide text-ink">
                {product.name}
              </h2>
              <p className="mt-auto pt-4 font-sans text-sm tracking-wide text-ink/80">
                {product.price}
              </p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
