import Link from "next/link";
import type { Player } from "@/content/players";

export function HomePlayerStrip({ players }: { players: Player[] }) {
  return (
    <section className="border-b border-gold/25 bg-marble-deep/25">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-poster text-4xl font-bold tracking-wide text-gold uppercase sm:text-6xl">
            Players
          </h2>
          <Link
            href="/players"
            className="inline-flex rounded-lg border-2 border-gold bg-marble px-5 py-3 font-rationale text-lg font-bold tracking-wide text-gold transition hover:bg-white"
          >
            All players →
          </Link>
        </div>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {players.map((player) => (
            <li key={player.slug}>
              <Link
                href={`/players/${player.slug}`}
                className="group block h-full rounded-3xl border border-gold/45 bg-white/75 px-5 py-6 shadow-[0_18px_40px_rgba(138,106,47,0.08)] transition hover:border-gold"
              >
                <p className="font-display text-xl tracking-wide text-ink group-hover:text-gold-deep">
                  {player.name}
                </p>
                <p className="mt-2 font-sans text-sm text-ink/60">
                  {player.region}
                  <span className="mx-2 text-gold/50" aria-hidden="true">
                    ·
                  </span>
                  {player.legend}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
