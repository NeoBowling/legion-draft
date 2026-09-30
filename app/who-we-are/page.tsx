import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Who we are | LEGION",
  },
};

const paragraphs = [
  "Legion is an established and rising force in the competitive gaming scene. With over a year of experience and momentum carrying us into our second year, we’ve been relentlessly working to carve our name into the Brawlhalla pro scene—turning it into our proving ground and, soon, our stomping grounds.",
  "Our focus is stronger than ever. Legion is more dedicated, more driven, and firmly on a path toward greatness.",
  "While Brawlhalla remains our foundation, we’ve officially expanded into Rematch, with clear plans to continue growing into additional titles. This expansion reflects our long-term vision: building a multi-title organization that consistently competes at a high level.",
  "At our core, Legion exists to empower players. We create an environment where talented competitors evolve from good to great—refining their skills, pushing limits, and achieving new levels of success both individually and as a team.",
  "We also place immense value on collaboration. Our partnerships with respected clans such as Division 9, WSE AND Vicinity play a crucial role in our growth. These alliances strengthen our community, open new opportunities, and help push everyone involved to higher standards.",
  "Through dedication, unity, and an unwavering pursuit of excellence, Legion is building more than just a team—we’re building a legacy. A place where players exceed expectations, set new standards, and redefine what success looks like in competitive gaming.",
  "Welcome to Legion.",
];

export default function WhoWeArePage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6">
      <h1 className="font-display text-3xl tracking-wide text-ink sm:text-4xl">
        Who we are
      </h1>
      <div className="mt-8 space-y-5">
        {paragraphs.map((paragraph) => (
          <p
            key={paragraph}
            className="font-sans text-base leading-relaxed text-ink/75"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}
