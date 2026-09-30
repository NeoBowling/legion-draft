import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden border-b border-gold/30">
      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 py-10 text-center sm:px-6 sm:py-14">
        <h1 className="sr-only">
          {site.shortName} {site.phase}
        </h1>
        <div className="relative w-full max-w-4xl">
          <Image
            src="/phase-iv-banner.jpg"
            alt="LEGION Phase IV"
            width={1024}
            height={508}
            priority
            className="h-auto w-full"
          />
          <div className="absolute inset-x-0 bottom-3 flex items-center justify-between px-4 sm:bottom-6 sm:px-8">
            <Link
              href="/who-we-are"
              className="border-2 border-gold bg-marble px-4 py-2 font-rationale text-lg font-bold tracking-wide text-gold transition hover:bg-white sm:px-7 sm:py-3 sm:text-2xl"
            >
              Who We Are
            </Link>
            <Link
              href="/players"
              className="border-2 border-gold bg-marble px-4 py-2 font-rationale text-lg font-bold tracking-wide text-gold transition hover:bg-white sm:px-7 sm:py-3 sm:text-2xl"
            >
              Players
            </Link>
          </div>
        </div>
        <p className="mt-6 max-w-md font-sans text-base text-ink/75 sm:text-lg">
          {site.tagline}
        </p>
      </div>
    </section>
  );
}
