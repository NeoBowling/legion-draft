import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import { MobileNav } from "@/components/MobileNav";

export function Header() {
  return (
    <header className="relative z-50 border-b border-gold/35 bg-marble/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:gap-4 sm:px-6 sm:py-4">
        <Link href="/" className="group flex min-w-0 items-center gap-2 text-ink sm:gap-3">
          <Image
            src="/legion-helmet.png"
            alt=""
            width={56}
            height={56}
            priority
            className="h-12 w-12 shrink-0 sm:h-14 sm:w-14"
          />
          <span className="font-medieval text-3xl tracking-tight text-gold sm:text-4xl">
            {site.shortName}
          </span>
        </Link>

        <nav className="hidden md:block" aria-label="Primary">
          <ul className="flex items-center gap-5 lg:gap-7">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="font-sans text-lg font-bold tracking-wide text-ink transition hover:text-gold-deep"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <MobileNav />
      </div>
    </header>
  );
}
