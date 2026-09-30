import type { Metadata } from "next";
import { getPlayers } from "@/content/players";
import { getProducts } from "@/content/products";
import { getPartners } from "@/content/partners";
import { getPosts } from "@/lib/news";
import { HomeHero } from "@/components/HomeHero";
import { HomeLatestStory } from "@/components/HomeLatestStory";
import { HomeUpcomingEvents } from "@/components/HomeUpcomingEvents";
import { HomePlayerStrip } from "@/components/HomePlayerStrip";
import { HomeShopSpotlight } from "@/components/HomeShopSpotlight";
import { HomePartnerRow } from "@/components/HomePartnerRow";
import { HomeSocialClose } from "@/components/HomeSocialClose";

export const metadata: Metadata = {
  title: {
    absolute: "LEGION",
  },
};

export default function HomePage() {
  const latestPost = getPosts()[0];
  const players = getPlayers().slice(0, 4);
  const products = getProducts().slice(0, 3);
  const partners = getPartners().slice(0, 4);

  return (
    <div className="bg-[#f7f3ec]">
      <HomeHero />
      {latestPost ? <HomeLatestStory post={latestPost} /> : null}
      <HomeUpcomingEvents />
      <HomePlayerStrip players={players} />
      <HomeShopSpotlight products={products} />
      <HomePartnerRow partners={partners} />
      <HomeSocialClose />
    </div>
  );
}
