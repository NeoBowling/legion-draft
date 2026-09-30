import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { getPlayers } from "@/content/players";

export const metadata: Metadata = {
  title: {
    absolute: "Players | LEGION",
  },
};

type SearchParams = Promise<{
  region?: string | string[];
  legend?: string | string[];
}>;

function firstParam(value: string | string[] | undefined): string | undefined {
  if (Array.isArray(value)) return value[0];
  return value;
}

function playersHref(filters: { region?: string; legend?: string }): string {
  const params = new URLSearchParams();
  if (filters.region) params.set("region", filters.region);
  if (filters.legend) params.set("legend", filters.legend);
  const query = params.toString();
  return query ? `/players?${query}` : "/players";
}

function FilterLink({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className={
        active
          ? "inline-flex min-h-10 items-center border border-gold bg-gold/15 px-3 py-2 font-sans text-sm tracking-wide text-ink"
          : "inline-flex min-h-10 items-center border border-gold/35 px-3 py-2 font-sans text-sm tracking-wide text-ink/70 transition hover:border-gold hover:text-gold-deep"
      }
      aria-current={active ? "page" : undefined}
    >
      {children}
    </Link>
  );
}

export default async function PlayersPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;
  const region = firstParam(params.region);
  const legend = firstParam(params.legend);

  const allPlayers = getPlayers();
  const regions = [...new Set(allPlayers.map((p) => p.region))].sort();
  const legends = [...new Set(allPlayers.map((p) => p.legend))].sort();

  const players = allPlayers.filter((player) => {
    if (region && player.region !== region) return false;
    if (legend && player.legend !== legend) return false;
    return true;
  });

  const hasFilters = Boolean(region || legend);

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <p className="font-sans text-xs tracking-[0.3em] text-gold-deep uppercase">
        Collective
      </p>
      <h1 className="mt-3 font-display text-3xl tracking-wide text-ink sm:text-4xl">
        Players
      </h1>
      <p className="mt-4 max-w-2xl font-sans text-base leading-relaxed text-ink/75">
        Representatives of the Brawlhalla collective. Filter by region or
        legend — sample names until the live roster is published.
      </p>

      <div className="mt-10 space-y-6">
        <div>
          <p className="font-sans text-xs tracking-[0.25em] text-gold-deep uppercase">
            Region
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <FilterLink href={playersHref({ legend })} active={!region}>
              All
            </FilterLink>
            {regions.map((value) => (
              <FilterLink
                key={value}
                href={playersHref({
                  region: region === value ? undefined : value,
                  legend,
                })}
                active={region === value}
              >
                {value}
              </FilterLink>
            ))}
          </div>
        </div>

        <div>
          <p className="font-sans text-xs tracking-[0.25em] text-gold-deep uppercase">
            Legend
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <FilterLink href={playersHref({ region })} active={!legend}>
              All
            </FilterLink>
            {legends.map((value) => (
              <FilterLink
                key={value}
                href={playersHref({
                  region,
                  legend: legend === value ? undefined : value,
                })}
                active={legend === value}
              >
                {value}
              </FilterLink>
            ))}
          </div>
        </div>

        {hasFilters ? (
          <Link
            href="/players"
            className="inline-block font-sans text-sm tracking-wide text-gold-deep underline-offset-2 hover:underline"
          >
            Clear filters
          </Link>
        ) : null}
      </div>

      {players.length === 0 ? (
        <p className="mt-12 font-sans text-base text-ink/70">
          No representatives match.
        </p>
      ) : (
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {players.map((player) => (
            <li key={player.slug}>
              <Link
                href={`/players/${player.slug}`}
                className="block border border-gold/40 bg-marble-deep/40 px-5 py-6 transition hover:border-gold hover:bg-gold/10"
              >
                <h2 className="font-display text-xl tracking-wide text-ink">
                  {player.name}
                </h2>
                <p className="mt-2 font-sans text-sm tracking-wide text-ink/65">
                  {player.region}
                  <span className="mx-2 text-gold/60" aria-hidden>
                    ·
                  </span>
                  {player.legend}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
