import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getPlayer,
  getPlayers,
  type PlayerSocials,
} from "@/content/players";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return getPlayers().map((player) => ({ slug: player.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const player = getPlayer(slug);
  if (!player) {
    return { title: { absolute: "Player | LEGION" } };
  }
  return {
    title: {
      absolute: `${player.name} | LEGION`,
    },
  };
}

const socialLabels: Record<keyof PlayerSocials, string> = {
  twitter: "X",
  twitch: "Twitch",
  youtube: "YouTube",
};

export default async function PlayerPage({ params }: { params: Params }) {
  const { slug } = await params;
  const player = getPlayer(slug);
  if (!player) notFound();

  const socialEntries = (
    Object.entries(player.socials) as [keyof typeof player.socials, string][]
  ).filter(([, href]) => Boolean(href));

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <Link
        href="/players"
        className="font-sans text-sm tracking-wide text-gold-deep underline-offset-2 hover:underline"
      >
        ← All players
      </Link>

      <p className="mt-8 font-sans text-xs tracking-[0.3em] text-gold-deep uppercase">
        Representative
      </p>
      <h1 className="mt-3 font-display text-3xl tracking-wide text-ink sm:text-4xl">
        {player.name}
      </h1>

      <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-3 font-sans text-sm tracking-wide">
        <div>
          <dt className="text-xs tracking-[0.25em] text-gold-deep uppercase">
            Region
          </dt>
          <dd className="mt-1 text-ink/80">{player.region}</dd>
        </div>
        <div>
          <dt className="text-xs tracking-[0.25em] text-gold-deep uppercase">
            Legend
          </dt>
          <dd className="mt-1 text-ink/80">{player.legend}</dd>
        </div>
      </dl>

      <p className="mt-8 font-sans text-base leading-relaxed text-ink/75">
        {player.bio}
      </p>

      {socialEntries.length > 0 ? (
        <div className="mt-10">
          <p className="font-sans text-xs tracking-[0.25em] text-gold-deep uppercase">
            Socials
          </p>
          <ul className="mt-3 flex flex-wrap gap-3">
            {socialEntries.map(([key, href]) => (
              <li key={key}>
                <a
                  href={href}
                  className="inline-flex border border-gold/50 px-4 py-2 font-sans text-sm tracking-wide text-ink transition hover:bg-gold/10"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {socialLabels[key]}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
