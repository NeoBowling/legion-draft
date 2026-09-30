import Link from "next/link";
import { site } from "@/content/site";
import { Laurel } from "@/components/Laurel";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-gold/35 bg-[#f1ebe1]">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-start gap-3">
            <Laurel className="mt-0.5 h-11 w-11 shrink-0" />
            <div>
              <p className="font-display text-xl tracking-[0.18em] text-ink">
                {site.shortName}
              </p>
              <p className="mt-2 max-w-sm font-sans text-sm text-ink/70">
                {site.tagline}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-6">
            <div>
              <p className="font-sans text-xs tracking-[0.25em] text-gold-deep uppercase">
                Social
              </p>
              <ul className="mt-3 flex flex-col gap-2">
                {site.socials.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="font-sans text-sm text-ink/80 hover:text-gold-deep"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-sans text-xs tracking-[0.25em] text-gold-deep uppercase">
                Legal
              </p>
              <ul className="mt-3 flex flex-col gap-2">
                {site.footerLegal.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="font-sans text-sm text-ink/80 hover:text-gold-deep"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <p className="border-t border-gold/25 pt-6 font-sans text-xs tracking-wide text-ink/55">
          © {year} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
