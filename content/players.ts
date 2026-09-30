/**
 * Sample / placeholder representatives only — not a real LEGION roster.
 * Names are prefixed with "Sample" so they are obviously fictional placeholders.
 */

export type PlayerSocials = {
  twitter?: string;
  twitch?: string;
  youtube?: string;
};

export type Player = {
  slug: string;
  name: string;
  region: string;
  legend: string;
  socials: PlayerSocials;
  bio: string;
};

const players: Player[] = [
  {
    slug: "sample-aurelia",
    name: "Sample Aurelia",
    region: "NA-East",
    legend: "Val",
    socials: {
      twitter: "https://x.com/",
      twitch: "https://twitch.tv/",
    },
    bio: "Placeholder representative focused on mid-ladder queues and community night hosts.",
  },
  {
    slug: "sample-kairo",
    name: "Sample Kairo",
    region: "EU",
    legend: "Orion",
    socials: {
      twitter: "https://x.com/",
      youtube: "https://youtube.com/",
    },
    bio: "Placeholder spear specialist who documents VODs for the collective archive.",
  },
  {
    slug: "sample-mira",
    name: "Sample Mira",
    region: "SA",
    legend: "Mirage",
    socials: {
      twitch: "https://twitch.tv/",
    },
    bio: "Placeholder scythe player representing LEGION in open online brackets.",
  },
  {
    slug: "sample-rex",
    name: "Sample Rex",
    region: "NA-West",
    legend: "Bodvar",
    socials: {
      twitter: "https://x.com/",
      twitch: "https://twitch.tv/",
      youtube: "https://youtube.com/",
    },
    bio: "Placeholder hammer main and co-op coach for newer representatives.",
  },
  {
    slug: "sample-nyx",
    name: "Sample Nyx",
    region: "SEA",
    legend: "Mordex",
    socials: {
      twitter: "https://x.com/",
    },
    bio: "Placeholder gauntlets/scythe flex who streams late-night ranked blocks.",
  },
  {
    slug: "sample-cassian",
    name: "Sample Cassian",
    region: "OCE",
    legend: "Ada",
    socials: {
      twitch: "https://twitch.tv/",
      youtube: "https://youtube.com/",
    },
    bio: "Placeholder blasters representative covering OCE community cups.",
  },
];

export function getPlayers(): Player[] {
  return players;
}

export function getPlayer(slug: string): Player | undefined {
  return players.find((player) => player.slug === slug);
}
