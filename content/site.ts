export type SocialLink = {
  label: string;
  href: string;
};

export type SiteContent = {
  name: string;
  shortName: string;
  tagline: string;
  phase: string;
  description: string;
  discordCta: {
    headline: string;
    body: string;
    href: string;
    label: string;
  };
  socials: SocialLink[];
  nav: { label: string; href: string }[];
  footerLegal: { label: string; href: string }[];
};

export const site: SiteContent = {
  name: "Legion Org",
  shortName: "LEGION",
  tagline: "Emerging Esports Organization.",
  phase: "PHASE IV",
  description:
    "LEGION is a Brawlhalla-only organization. Players represent the brand as a collective — not a fixed roster.",
  discordCta: {
    headline: "Join the Discord",
    body: "Join the evergrowing Legion Community.",
    href: "https://discordapp.com/invite/LegionOrg",
    label: "Enter Discord",
  },
  socials: [
    {
      label: "YouTube",
      href: "https://youtube.com/channel/UCXpa5acJViDXN7v5TS8k--A",
    },
    {
      label: "Discord",
      href: "https://discordapp.com/invite/LegionOrg",
    },
    {
      label: "X",
      href: "https://x.com/TheLegionOrg",
    },
    {
      label: "TikTok",
      href: "https://tiktok.com/@legion_org",
    },
    {
      label: "Twitch",
      href: "https://www.twitch.tv/legion_org",
    },
  ],
  nav: [
    { label: "Home", href: "/" },
    { label: "Who we are", href: "/who-we-are" },
    { label: "Players", href: "/players" },
    { label: "News", href: "/news" },
    { label: "Shop", href: "/shop" },
    { label: "Partners", href: "/partners" },
  ],
  footerLegal: [
    { label: "Contact", href: "/contact" },
    { label: "Terms", href: "/terms" },
    { label: "Privacy", href: "/privacy" },
  ],
};
