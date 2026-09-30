/**
 * Curated catalog pointing at live legionorg.com product pages.
 * Prices and Shopify handles confirmed from the storefront (Sep 2026).
 */

export type Product = {
  slug: string;
  name: string;
  price: string;
  phase: "III" | "IV" | "Core";
  category: string;
  href: string;
};

const STORE = "https://legionorg.com/products";

export const products: Product[] = [
  {
    slug: "legion-phase-iv-clear-phone-case",
    name: "Legion Phase IV Clear Phone Case",
    price: "$15.00",
    phase: "IV",
    category: "Accessories",
    href: `${STORE}/legion-phase-iv-clear-phone-case`,
  },
  {
    slug: "legion-t-shirt-white-gold",
    name: "Legion T-Shirt (White/Gold)",
    price: "$25.00",
    phase: "IV",
    category: "Apparel",
    href: `${STORE}/legion-t-shirt-white-gold`,
  },
  {
    slug: "legion-coffee-mug-white-gold",
    name: "Legion Coffee Mug (White/Gold)",
    price: "$15.00",
    phase: "IV",
    category: "Drinkware",
    href: `${STORE}/legion-coffee-mug-white-gold`,
  },
  {
    slug: "legion-tee-red",
    name: "Legion Tee (Red)",
    price: "$29.99",
    phase: "Core",
    category: "Apparel",
    href: `${STORE}/legion-tee-red`,
  },
  {
    slug: "legion-tie-dye-oversized-tee-blue-black",
    name: "Legion Tie-dye Oversized Tee (Blue/Black)",
    price: "$29.99",
    phase: "Core",
    category: "Apparel",
    href: `${STORE}/legion-tie-dye-oversized-tee-blue-black`,
  },
  {
    slug: "legion-oversized-sweatshirt-black",
    name: "Legion Oversized Sweatshirt (Black)",
    price: "$45.99",
    phase: "Core",
    category: "Apparel",
    href: `${STORE}/legion-oversized-sweatshirt-black`,
  },
  {
    slug: "legion-hoodie-forest-green",
    name: "Legion Hoodie (Forest Green)",
    price: "$42.99",
    phase: "Core",
    category: "Apparel",
    href: `${STORE}/legion-hoodie-forest-green`,
  },
  {
    slug: "legion-hoodie-white",
    name: "Legion Hoodie (White)",
    price: "$42.99",
    phase: "Core",
    category: "Apparel",
    href: `${STORE}/legion-hoodie-white`,
  },
  {
    slug: "legion-beanie-phase-iii",
    name: "Legion Beanie (Phase III)",
    price: "$20.00",
    phase: "III",
    category: "Apparel",
    href: `${STORE}/legion-beanie-phase-iii`,
  },
  {
    slug: "legion-hat-phase-iii",
    name: "Legion Hat (Phase III)",
    price: "$25.00",
    phase: "III",
    category: "Apparel",
    href: `${STORE}/legion-hat-phase-iii`,
  },
  {
    slug: "legion-hoodie-phase-iii",
    name: "Legion Hoodie (Phase III)",
    price: "$50.00",
    phase: "III",
    category: "Apparel",
    href: `${STORE}/legion-hoodie-phase-iii`,
  },
  {
    slug: "legion-sticker",
    name: "Legion Sticker",
    price: "$5.50",
    phase: "Core",
    category: "Accessories",
    href: `${STORE}/legion-sticker`,
  },
  {
    slug: "legion-mouse-pad-small",
    name: "Legion Mouse Pad (Small)",
    price: "$15.00",
    phase: "Core",
    category: "Accessories",
    href: `${STORE}/legion-mouse-pad-small`,
  },
  {
    slug: "legion-rocks-glass-phase-iii",
    name: "Legion Rocks Glass (Phase III)",
    price: "$15.00",
    phase: "III",
    category: "Drinkware",
    href: `${STORE}/legion-rocks-glass-phase-iii`,
  },
  {
    slug: "legion-tumbler-phase-iii",
    name: "Legion Tumbler (Phase III)",
    price: "$25.00",
    phase: "III",
    category: "Drinkware",
    href: `${STORE}/legion-tumbler-phase-iii`,
  },
  {
    slug: "legion-airpod-case",
    name: "Legion Airpod Case",
    price: "$15.00",
    phase: "Core",
    category: "Accessories",
    href: `${STORE}/legion-airpod-case`,
  },
  {
    slug: "legion-notebook-phase-iii",
    name: "Legion Notebook (Phase III)",
    price: "$20.00",
    phase: "III",
    category: "Accessories",
    href: `${STORE}/legion-notebook-phase-iii`,
  },
];

export function getProducts(): Product[] {
  return products;
}

export function getProduct(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}
